import Head from 'next/head';
import { useRouter } from 'next/router';
import Image from 'next/future/image';

import usePerson from '@/hooks/use-person.hook';

import SocialMedia from '@/components/SocialMedia';
import Profiles from '@/components/Profiles';
import KnownFor from '@/components/KnownFor';

interface IPerson {
  id: number;
  name: string;
  birthday: string;
  biography: string;
  place_of_birth: string;
  profile_path: string;
  gender: number;
  known_for_department: string;
  also_known_as: string[];
}

export default function Person() {
  const router = useRouter();
  const id: number | any = router.query.id;

  const { data } = usePerson({ id });
  const { data: externalIdsData } = usePerson({ id, category: 'external_ids' });
  const { data: photoData } = usePerson({ id, category: 'images?language=en' });
  const { data: movieCreditsData } = usePerson({ id, category: 'movie_credits' });

  const personData: IPerson = data;

  if (!personData) return null;

  const name = personData?.name;
  const profilePath = personData?.profile_path;
  const knownForDepartment = personData?.known_for_department;
  const gender = personData?.gender;
  const birthday = personData?.birthday;
  const calculateAge = new Date().getFullYear() - new Date(birthday).getFullYear();
  const placeOfBirth = personData?.place_of_birth;
  const alsoKnownAs = personData?.also_known_as;
  const biography = personData?.biography;

  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>

      <div className="flex justify-center gap-10 p-10">
        <div className="flex w-[300px] min-w-[300px] flex-col gap-4">
          <Image
            className="rounded-md"
            alt={name}
            src={`https://www.themoviedb.org/t/p/h632/${profilePath}`}
            width={300}
            height={450}
          />
          <SocialMedia data={externalIdsData} />

          <div className="flex flex-col">
            <span className="font-bold">Known For</span>
            <span>{knownForDepartment}</span>
          </div>

          <div className="flex flex-col">
            <span className="font-bold">Gender</span>
            <span>{gender}</span>
          </div>

          <div className="flex flex-col">
            <span className="font-bold">Birthday</span>
            <span>
              {birthday} (age {calculateAge})
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-bold">Place of Birth</span>
            <span>{placeOfBirth}</span>
          </div>

          <div className="flex flex-col">
            <span className="font-bold">Also Known As</span>
            <div className="flex flex-col gap-2">
              {alsoKnownAs.map((name) => (
                <span key={name}>{name}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex w-[calc(100vw-400px)] max-w-3xl flex-col gap-6">
          <h1 className="text-4xl">{personData.name}</h1>

          <div className="flex flex-col gap-4">
            <span className="border-l-4 border-amber-600 pl-2 text-2xl">Biography</span>
            <p>{biography}</p>
          </div>

          <Profiles data={photoData?.profiles} />
          <KnownFor data={movieCreditsData?.cast} />
        </div>
      </div>
    </>
  );
}

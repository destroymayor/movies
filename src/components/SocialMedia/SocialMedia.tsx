import { Fragment } from 'react';
import Link from 'next/link';

const facebookUrl = `https://facebook.com`;
const instagramUrl = `https://www.instagram.com`;
const twitterUrl = `https://twitter.com`;

interface ISocialMediaProps {
  data: {
    facebook_id: string;
    instagram_id: string;
    twitter_id: string;
    idmb_id: string;
  };
}

export default function SocialMedia(props: ISocialMediaProps) {
  const { data } = props;

  const links = [
    {
      id: data?.facebook_id,
      url: facebookUrl,
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      ),
    },
    {
      id: data?.instagram_id,
      url: instagramUrl,
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
    },
    {
      id: data?.twitter_id,
      url: twitterUrl,
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
        </svg>
      ),
    },
  ];

  if (!data) return null;

  return (
    <div className="flex items-center gap-4">
      {links.map((link) => (
        <Fragment key={`${link.url}/${link.id}`}>
          {link.id && (
            <Link href={`${link.url}/${link.id}`} passHref>
              <a target="_blank" rel="noopener noreferrer" className="h-6 w-6">
                {link.icon}
              </a>
            </Link>
          )}
        </Fragment>
      ))}
    </div>
  );
}

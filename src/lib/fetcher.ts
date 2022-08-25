import getConfig from 'next/config';

const TMDB_API_TOKEN = getConfig()?.publicRuntimeConfig?.TMDB_API_TOKEN;

export default async function fetcher<JSON>(input: RequestInfo, init?: RequestInit): Promise<JSON> {
  const res = await fetch(input, {
    headers: {
      Authorization: `Bearer ${TMDB_API_TOKEN}`,
      'Content-Type': 'application/json;charset=utf-8',
    },
    ...init,
  });
  return res.json();
}

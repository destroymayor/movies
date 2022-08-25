import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-10 mx-auto flex h-16 items-center justify-center bg-zinc-800">
      <div className="flex w-full max-w-4xl items-center justify-between px-4">
        <Link href="/">Home</Link>

        <Link href="https://github.com/destroymayor/movies" passHref>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 hover:bg-zinc-700"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
        </Link>
      </div>
    </header>
  );
}

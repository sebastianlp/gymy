import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b pl-1">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 md:flex">
          <Link
            href={{ pathname: '/' }}
            className="mr-6 flex items-center space-x-2"
          >
            <span className="font-bold sm:inline-block">Gymy</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

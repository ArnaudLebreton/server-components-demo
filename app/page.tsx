import Link from "next/link";

export default async function Home() {
  return (
    <div>
      <h1>React Server Components Demo</h1>

      <ul className="pt-16">
        <li>
          <Link href="/usequery">Client Side loading</Link>
        </li>
        <li>
          <Link href="/ssr">SSR only Page</Link>
        </li>
        <li>
          <Link href="/suspense">SSR Page with suspense components</Link>
        </li>
        <li>
          <Link href="/find/client">Interaction client Side</Link>
        </li>
        <li>
          <Link href="/find/server">Server side action</Link>
        </li>
      </ul>
    </div>
  );
}

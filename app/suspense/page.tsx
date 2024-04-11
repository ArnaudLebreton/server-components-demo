import { Suspense } from "react";
import CharactersList from "./components/CharactersList";

export default async function Home() {
  return (
    <div>
      <h1 className="text-center m-4 text-4xl">
        Rick & Morty&apos;s character with Suspense
      </h1>
      <Suspense fallback={<div>Loading ...</div>}>
        <CharactersList />
      </Suspense>
      <div className="bg-slate-300 p-4 text-center h-36 text-black">
        Some content
      </div>
    </div>
  );
}

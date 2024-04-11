import { CharactersList } from "./components/CharactersList";

export default function Page() {
  return (
    <div>
      <h1 className="text-center m-4 text-4xl">
        Find Rick & Morty&apos;s character by name Client Side
      </h1>
      <CharactersList />
    </div>
  );
}

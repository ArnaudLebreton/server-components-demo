import Image from "next/image";
import axios from "axios";
import fs from "fs";
import { TIMEOUT } from "@/constants";

export default async function Home() {
  console.log("server files : ", fs.readdirSync("./"));

  const res: any = await new Promise((resolve) => {
    setTimeout(
      () => resolve(axios.get("https://rickandmortyapi.com/api/character")),
      TIMEOUT,
    );
  });
  const results = res.data.results;

  return (
    <div>
      <h1 className="text-center m-4 text-4xl">
        Rick & Morty&apos;s character
      </h1>

      {results.map((character: any) => (
        <ul key={character.id}>
          <li>{character.name}</li>
          <li>{character.gender}</li>
          <li>{character.species}</li>
          <li>{character.origin.name}</li>
          <Image
            alt={character.name}
            src={character.image}
            width={300}
            height={300}
          />
        </ul>
      ))}
    </div>
  );
}

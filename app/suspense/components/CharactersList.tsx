import Image from "next/image";
import axios from "axios";
import { TIMEOUT } from "@/constants";

export default async function Home() {
  const res: any = await new Promise((resolve) => {
    setTimeout(
      () => resolve(axios.get("https://rickandmortyapi.com/api/character")),
      TIMEOUT,
    );
  });
  const results = res.data.results;

  return (
    <>
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
    </>
  );
}

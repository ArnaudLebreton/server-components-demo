"use client";
import Image from "next/image";
import axios from "axios";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { TIMEOUT } from "@/constants";

export default function Home() {
  console.log("Ce message s'exécute côté server");
  const { data: results, isLoading }: any = useQuery({
    queryKey: ["charactersList"],
    queryFn: async () =>
      new Promise((resolve) =>
        setTimeout(async () => {
          const res = await axios.get(
            "https://rickandmortyapi.com/api/character",
          );
          resolve(res.data.results);
        }, TIMEOUT),
      ),
  });

  useEffect(() => {
    console.log("Ce message ne s'affiche que côté client");
  }, []);

  return (
    <div>
      <h1 className="text-center m-4 text-4xl">
        Rick & Morty&apos;s character with useQuery
      </h1>

      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        results.map((character: any) => (
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
        ))
      )}
    </div>
  );
}

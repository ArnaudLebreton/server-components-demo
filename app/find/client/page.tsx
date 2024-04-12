"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import debounce from "lodash/debounce";
import { TIMEOUT } from "@/constants";

export default function FindClient() {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const debouncedSetSearch = debounce(setSearch, 300);

  useEffect(() => {
    debouncedSetSearch(input);
    return debouncedSetSearch.cancel;
  }, [input, debouncedSetSearch]);

  const { data: results, isLoading }: any = useQuery({
    queryKey: ["find", search],
    queryFn: async () =>
      new Promise((resolve) =>
        setTimeout(async () => {
          const res = await axios.get(
            `https://rickandmortyapi.com/api/character?name=${search}`,
          );
          resolve(res.data.results);
        }, TIMEOUT),
      ),
    enabled: !!search,
    initialData: [],
  });
  
  console.log('component render')

  return (
    <div>
      <h1 className="text-center m-4 text-4xl">
        Find Rick & Morty&apos;s character by name Client Side
      </h1>

      <div>Character Name : </div>
      <input
        className="text-black"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter character name"
      />

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

"use client";
import { useFormState, useFormStatus } from "react-dom";
import { searchCharacters } from "./actions";
import Image from "next/image";
import { useEffect } from "react";

const initialState = {
  characters: [],
};

const Pending = () => {
  const { pending } = useFormStatus();
  return pending ? <div>Loading ...</div> : <></>;
};

export function CharactersList() {
  const [state, formAction] = useFormState<{ characters: any[] }, FormData>(
    searchCharacters,
    initialState,
  );

  useEffect(() => console.log("Component rerender"), []);

  return (
    <div>
      <form action={formAction}>
        <div>Character Name : </div>
        <input
          className="text-black"
          type="text"
          placeholder="Enter character name"
          name="characterName"
        />
        <button className="ml-4" type="submit">
          Search
        </button>
        <Pending />
      </form>
      {state.characters.map((character: any) => (
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

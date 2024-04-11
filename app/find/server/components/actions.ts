"use server";
import { TIMEOUT } from "@/constants";
import axios from "axios";

export async function searchCharacters(prevState: any, formData: FormData) {
  console.log("ce message est server only");
  const { data: res }: any = await new Promise((resolve) => {
    setTimeout(
      () =>
        resolve(
          axios.get(
            `https://rickandmortyapi.com/api/character?name=${formData.get(
              "characterName",
            )}`,
          ),
        ),
      TIMEOUT,
    );
  });
  return {
    characters: res.results,
  };
  // return {
  //   characters: [...prevState.characters, res.results[0]]
  // }
}

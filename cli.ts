import { parse } from "https://deno.land/std@0.67.0/flags/mod.ts";

import "https://deno.land/x/dotenv/load.ts";

import { uniqueString } from "./mod.ts";

const parsedArgs = parse(Deno.args);

const { cwd, writeTextFile, readTextFile } = Deno;

const uniqueStr = uniqueString(parsedArgs.length);
console.log(uniqueStr);
async function toEnvVariable(newKey: string, newValue: string) {
  // update the environment variable if it exist
  if (Deno.env.get(newKey)) {
    const dotEnvContent = await readTextFile(`${Deno.cwd()}/.env`);

    const dotEnvFileLines = dotEnvContent.split(/\n/);

    const newDotEnvFileLines = dotEnvFileLines.map((line) => {
      const [key, value] = line.replace(" ", "").split("=");

      if (key == newKey) {
        return `${key} = ${newValue}`;
      }
      return line;
    });

    const newDotEnvFileContent = newDotEnvFileLines.join("\n").toString();

    return (await writeTextFile(
      `${cwd()}/.env`,
      newDotEnvFileContent,
      { create: true },
    ));
  }

  // write new environment variable
  return await writeTextFile(
    `${cwd()}/.env`,
    `\n${newKey} = ${newValue}`,
    { append: true, create: true },
  );
}

if (parsedArgs["to-dotenv"]) {
  // Chechy if Has dotenv variable key
  if (typeof parsedArgs["to-dotenv"] === "string") {
    // set environment variable with custom key
    await toEnvVariable(parsedArgs["to-dotenv"], uniqueStr);
  } else {
    // set environment variable with default key 'SECRET_KEY'
    await toEnvVariable("SECRET_KEY", uniqueStr);
  }
}

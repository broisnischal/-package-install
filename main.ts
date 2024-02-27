import { parse } from "https://deno.land/std@0.200.0/flags/mod.ts";
import type { Args } from "https://deno.land/std@0.200.0/flags/mod.ts";
import { printHelp } from "./help.ts";

function parseArguments(args: string[]): Args {
  // All boolean arguments
  const booleanArgs = ["help", "save"];

  // All string arguments
  const stringArgs = ["name", "color"];

  // And a list of aliases
  const alias = {
    help: "h",
    save: "s",
    name: "n",
    color: "c",
  };

  return parse(args, {
    alias,
    boolean: booleanArgs,
    string: stringArgs,
    stopEarly: false,
    "--": true,
  });
}

// function main(inputArgs: string[]): void {
//   const args = parseArguments(inputArgs);

//   // If help flag enabled, print help.
//   if (args.help) {
//     printHelp();
//     Deno.exit(0);
//   }

//   let name: string | null = args.name;
//   let color: string | null = args.color;
//   let save: boolean = args.save;

//   console.log(
//     `%c${
//       greetings[Math.floor(Math.random() * greetings.length) - 1]
//     }, ${name}!`,
//     `color: ${color}; font-weight: bold`
//   );
// }

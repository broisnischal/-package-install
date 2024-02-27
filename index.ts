#!/usr/bin/env node

import greetings from "./greetings.json" with { type: "json" };

/**
 * Main logic of CLI.
 */

function main(): void {
  console.log(
    `${greetings[Math.floor(Math.random() * greetings.length)]}!`
  );
}

/**
 * Run CLI.
 */

main();

#!/usr/bin/env node
/**
 * CLI utility to fetch and display a quirky animal fact
 */
import { getRandomFact } from './facts.js';

/**
 * Print a random fact to the console
 */
function printFact() {
  const fact = getRandomFact();
  console.log('\n🦊 Random Animal Fact 🦊');
  console.log('------------------------');
  console.log(fact);
  console.log('------------------------\n');
}

// Run if executed directly
printFact();

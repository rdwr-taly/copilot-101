/**
 * Collection of quirky animal facts
 */
const facts = [
  'Otters hold hands while sleeping to avoid drifting apart.',
  'A group of flamingos is called a "flamboyance".',
  'Cows have best friends and get stressed when separated.',
  'Cats can\'t taste sweetness.',
  'Octopuses have three hearts and blue blood.',
  'Sloths can hold their breath underwater for up to 40 minutes.',
  'Goats have rectangular pupils that allow them to see 320-340 degrees around them.',
  'Mantis shrimp can punch with the force of a .22 caliber bullet.',
  'Dolphins give each other names and respond when called.',
  'Elephants can recognize themselves in a mirror, showing self-awareness.',
  'Crows can remember human faces and hold grudges against people who wronged them.',
  'Wombats have cube-shaped poop, which helps prevent it from rolling away.',
  'Koalas have fingerprints so similar to humans that they\'ve been confused at crime scenes.',
  'A snail can sleep for three years at a time.'
];

/**
 * Get a random quirky animal fact
 * @returns {string} A random animal fact
 */
export function getRandomFact() {
  const randomIndex = Math.floor(Math.random() * facts.length);
  return facts[randomIndex];
}

/**
 * Get all available animal facts
 * @returns {string[]} Array of all animal facts
 */
export function getAllFacts() {
  return [...facts];
}

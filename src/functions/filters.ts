"use strict";


/**
 * @description - Returns a string with escaped markdown characters.
 * @param {string} text - The text to escape.
 * @function markdownEscaper
 * @returns {string} - Returns a string with escaped markdown characters.
 */
function markdownEscaper(text: string): string {
  var newText: string = text.replace(/_/g, "\\_").replace(/\*/g, "\\*");
  return newText;
}

/**
 * @description - Returns a string array of eighteen plus words.
 * @function eighteenPlusFilter
 * @returns {string[]} - Returns a string array of eighteen plus words.
 */

function eighteenPlusFilter(): string[] {
  return [
    "nsfw",
    "pussy",
    "ass",
    "18+",
    "+18",
    "porn",
    "porno",
    "sex",
    "naked",
    "dick",
    "s3x",
    "p0rn",
    "boob",
    "suck",
    "saks",
    "sexy",
    "p0rn",
    "nake",
    "bare",
    "nude",
    "bleak",
    "eighteenplus",
    "lesbian",
    "lick",
    "xmas",
    "xnxx",
    "gay",
    "bdsm",
    "boobs",
    "boob",
    "sixtynine",
    "69",
    "missionary",
    "doggy"
  ];
}

export { markdownEscaper, eighteenPlusFilter };

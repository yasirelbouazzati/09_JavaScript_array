/**
 * Given 'MONKEYS' array, define function 'feedMonkeys' to return an array where each monkey has one fruit
 * use for() instruction
 *
 * expected: with 🍌 => ['🐒 🍌', '🦍 🍌', '🦧 🍌']
 * expected: with 🍎 => ['🐒 🍎', '🦍 🍎', '🦧 🍎']
 */

import { features } from "caniuse-lite";
import feedMonkeys from "../00-imperative/js/feedMonkeys";

const MONKEYS = ["🐒", "🦍", "🦧"];



function extractVipsNames(fruit) {
  const extractedNames = MONKEYS.map((monkey) => {
    return `${monkey}  ${fruit}`;
  });

  return extractedNames;
}


export default feedMonkeys;


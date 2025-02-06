import { countNumbers } from "./task-2/count-numbers";
import { reverseArray } from "./task-2/reverse-array";

function testReverseArray(): void {
  const items = [1, 2, 3];
  const reversedItems = reverseArray(items);
  console.log(reversedItems);
}

function testCounterNumber(): void {
  const items = [1, "asma", 3, "abbasi"];
  const count = countNumbers(items);
  console.log(count);
}

function main(): void {
  testReverseArray();
  testCounterNumber();
}
main();

import { reverseArray } from "./task-2/reverse-array";

function testReverseArray() {
  const items = [1, 2, 3];
  const reversedItems = reverseArray(items);
  console.log(reversedItems);
}

function main() {
  testReverseArray();
}
main();

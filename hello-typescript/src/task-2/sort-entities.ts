import { Entity } from "./entities";

export function sortEntities(items: Entity[]): Entity[] {
  const result: Entity[] = [...items];

  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result.length - 1; j++) {
      const firstDate = new Date(result[j].modifiedAt ?? result[j].createAt);
      const secondDate = new Date(
        result[j + 1].modifiedAt ?? result[j + 1].createAt,
      );

      if (firstDate > secondDate) {
        const temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }

  return result;
}

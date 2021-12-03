import { readFile } from "./util.ts";

const size = 3;

readFile("input/day1.txt")
  .then((data: string[]) => data.map((v) => parseInt(v)))
  .then((lines: number[]) => {
    return lines.slice(0, lines.length - (size - 1))
      .map((_, index) =>
        lines.slice(index, index + size).reduce((prev, curr) => prev + curr, 0)
      );
  })
  .then((lines: number[]) =>
    lines.reduce((count, currentValue, currentIndex, array) => {
      if (currentIndex === 0) {
        return count;
      }
      if (currentValue > array[currentIndex - 1]) {
        return count + 1;
      } else {
        return count;
      }
    }, 0)
  )
  .then(console.log);

import { readFile } from "./util.ts";

type CommandType = "up" | "forward" | "down";

interface Command {
  command: CommandType;
  value: number;
}

readFile("input/day2.txt")
  .then((lines) => lines.filter((line) => line !== ""))
  .then((lines) =>
    lines.map((line): Command => {
      const values = line.split(" ");
      return {
        command: values[0] as CommandType,
        value: parseInt(values[1]),
      };
    })
  )
  .then(part1)
  .then(part2);

function part1(commands: Command[]): Command[] {
  interface Part1Output {
    horizontal: number;
    depth: number;
  }

  const finalCommand = commands.reduce((total, current): Part1Output => {
    switch (current.command) {
      case "up":
        return {
          horizontal: total.horizontal,
          depth: total.depth - current.value,
        };
      case "forward":
        return {
          horizontal: total.horizontal + current.value,
          depth: total.depth,
        };
      case "down":
        return {
          horizontal: total.horizontal,
          depth: total.depth + current.value,
        };
    }
  }, {
    horizontal: 0,
    depth: 0,
  });

  console.log(`Part 1: ${finalCommand.horizontal * finalCommand.depth}`);
  return commands;
}

function part2(commands: Command[]): Command[] {
  interface Part2Output {
    aim: number;
    depth: number;
    horizontal: number;
  }

  const finalCommand = commands.reduce((total, current): Part2Output => {
    switch (current.command) {
      case "up":
        return {
          horizontal: total.horizontal,
          aim: total.aim - current.value,
          depth: total.depth,
        };
      case "forward":
        return {
          horizontal: total.horizontal + current.value,
          aim: total.aim,
          depth: total.depth + total.aim * current.value,
        };
      case "down":
        return {
          horizontal: total.horizontal,
          aim: total.aim + current.value,
          depth: total.depth,
        };
    }
  }, {
    aim: 0,
    depth: 0,
    horizontal: 0,
  });

  console.log(`Part 2: ${finalCommand.horizontal * finalCommand.depth}`);

  return commands;
}

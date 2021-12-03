export function readFile(text: string) {
  return Deno.readTextFile(text)
    .then((data: string) => data.split("\n"));
}

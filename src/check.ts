export function checkExit(input: string) {
  if (input.toLowerCase() === "exit" || input.toLowerCase() === "quit") {
    process.exit();
  }
}

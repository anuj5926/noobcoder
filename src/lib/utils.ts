export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function pad(n: number) {
  return n.toString().padStart(2, "0");
}

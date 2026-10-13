export function formatDate(dateString: string): string {
  const match = /^(\d{4})-(\d{2})/.exec(dateString);
  if (!match) return dateString;
  const date = new Date(Number(match[1]), Number(match[2]) - 1, 1);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });
}

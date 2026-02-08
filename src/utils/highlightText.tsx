export function highlightQuery(
  text: string,
  query: string,
  highlightClass = "text-primary",
) {
  if (!query) return text;

  const regex = new RegExp(`(${query})`, "gi");
  const parts = text.split(regex);

  return parts.map((part, index) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <span key={index} className={highlightClass}>
        {part}
      </span>
    ) : (
      part
    ),
  );
}

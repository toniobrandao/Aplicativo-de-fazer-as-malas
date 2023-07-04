export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Comece a adicionar items na sua lista! 🚀</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numPacked / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "Você tem tudo! Pronto para ir ✈️"
          : ` 💼 Você tem ${numItems} items na sua lista, e você já empacotou ${numPacked} (${percentage}%)`}
      </em>
    </footer>
  );
}

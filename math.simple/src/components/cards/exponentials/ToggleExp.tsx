import "../../../styles/Intermediates.css";

export function ToggleExponential({
  handleSelectedCard,
  selectedCard,
  handleToggleExponent,
  userExponents,
}: {
  handleSelectedCard: (selected: string) => void;
  selectedCard: string | null;
  handleToggleExponent: (exponent: number) => void;
  userExponents: number[];
}) {
  const exponents = [1, 2, 3, 4, 5];
  const selected = "toggle";

  return (
    <div
      className={`${selectedCard === "toggle" ? "card-selected" : ""} card`}
      onClick={() => {
        handleSelectedCard(selected);
      }}
    >
      <article className="text-container">
        <h4 className="no-margin">Practice</h4>
        <h3 className="subtitle no-margin">Multiple exponents</h3>
      </article>
      <article className="buttons-container">
        {exponents.map((exponent) => (
          <button
            key={exponent}
            className={`${
              userExponents.includes(exponent) ? "isSelected" : ""
            }`}
            onClick={() => handleToggleExponent(exponent)}
          >
            x<sup>{exponent}</sup>
          </button>
        ))}
      </article>
      <span>(select 2 or more)</span>
    </div>
  );
}

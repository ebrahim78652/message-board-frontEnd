import { Card } from "./Card";

export function ContainerCards({ arrCards }) {
  return (
    <div className="container">
      {arrCards.map((element, index) => (
        <Card key={index} text={element.text} />
      ))}
    </div>
  );
}

import { useRef } from "react";

import "./style.css";

export interface CardProps {
  cardNumber: string;
  cardBank: string;
  isActive: boolean;
  onActive: void
}

const Card = ({ cardNumber, cardBank, isActive, onActive }: CardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={cardRef} className="slider-card">
      {cardNumber}
      <br />
      {cardBank}
    </div>
  );
};

export default Card;

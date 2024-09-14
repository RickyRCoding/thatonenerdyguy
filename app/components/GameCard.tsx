import React from "react";

type GameCardProps = {
  title: string;
  description: string;
  color: string;
  acolor: string;
  gameLink: string;
};

const GameCard = ({
  title,
  description,
  color,
  acolor,
  gameLink,
}: GameCardProps) => {
  return (
    <a href={gameLink}>
      <div
        className="card-content"
        style={{
          border: `1rem solid ${color}`,
          background: acolor,
        }}
      >
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </a>
  );
};

export default GameCard;

import React from "react";

type GameCardProps = {
  title: string;
  description: string;
  color: string;
  bordercolor: string;
  gameLink: string;
};

const GameCard = ({
  title,
  description,
  color,
  bordercolor,
  gameLink,
}: GameCardProps) => {
  return (
    <a href={gameLink}>
      <div
        className="card-content"
        style={{
          border: `1rem solid ${bordercolor}`,
          background: color,
        }}
      >
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </a>
  );
};

export default GameCard;

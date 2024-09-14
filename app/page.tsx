import GameCard from "./components/GameCard";
export default function Home() {
  return (
    <>
      <h1 className="title">That One Nerdy Kid</h1>
      <p className="explenation">
        So, you think that your smart. You think that your him; that one nerdy
        kid.
        <br />I think I&apos;ll be the one to decide that ...
      </p>
      {/* add cards for each game (so far only two games; periodic table, Capitals of the world and pi) */}
      {/* if you want to add a game, just add a game Card. */}
      <div className="game-cards">
        <GameCard
          title="Pi game"
          description="How many digits of pi do you know?"
          color="#fcbd1c"
          acolor="#fcca4c"
          gameLink="https://www.google.com/"
        />
      </div>
    </>
  );
}

import GameCard from "./components/GameCard";
export default function Home() {
  return (
    <>
      <h1 className="title">That One Nerdy Guy</h1>
      <p className="explenation">
        So, you think that you&apos;re smart. You think that you&apos;re him;
        that one nerdy guy.
        <br />I think I&apos;ll be the one to decide that ...
      </p>
      {/* add cards for each game (so far only two games; periodic table, Capitals of the world and pi) */}
      {/* if you want to add a game, just add a game Card. */}
      <div className="game-cards">
        <GameCard
          title="Pi Game"
          description="How many digits of pi do you know?"
          color="#fcbd1c"
          acolor="#fcca4c"
          gameLink="https://rickyrcoding.github.io/pigame/"
        />
        <GameCard
          title="More to come..."
          description="It's pretty hard to code these game."
          color="#7f7f7f"
          acolor="#a9a9a9"
          gameLink="https://rickyrcoding.github.io/thatonenerdyguy/"
        />
        {/* <GameCard
          title="Periodic table Game"
          description="There are 118 of them. You think you know all?"
          color="#9d40ee"
          acolor="#cc92ff"
          gameLink="https://www.google.com/"
        />
        <GameCard
          title="Capitals of the World"
          description="You should always know where you&apos;re going."
          color="#418dec"
          acolor="#60c0ff"
          gameLink="https://www.google.com/"
        /> */}
      </div>
    </>
  );
}

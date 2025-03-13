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
      {/* add cards for each game */}
      {/* if you want to add a game, just add a game Card. */}
      <div className="game-cards">
        <GameCard
          title="Pi Game"
          description="How many digits of pi do you know?"
          bordercolor="#fcbd1c"
          color="#fcca4c"
          gameLink="https://rickyrcoding.github.io/pigame/"
        />
        <GameCard
          title="Capitals of the World Game"
          description="Always good to know where your going."
          bordercolor="#54b5ff"
          color="#83c3ff"
          gameLink="https://rickyrcoding.github.io/capitalsoftheworldgame/"
        />
        <GameCard
          title="Math Game"
          description="Do you know your math basics?"
          bordercolor="#6f9e7b"
          color="#8ebc99"
          gameLink="https://rickyrcoding.github.io/mathquiz/"
        />
        <GameCard
          title="More to come..."
          description="It's pretty hard to code these game."
          bordercolor="#7f7f7f"
          color="#a9a9a9"
          gameLink="https://rickyrcoding.github.io/thatonenerdyguy/"
        />
      </div>
    </>
  );
}

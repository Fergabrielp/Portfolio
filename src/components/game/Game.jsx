import React from "react";
import Cards from "./Cards";

const Game = () => {
  return (
    <>
      <h1 className=" font-bold text-center">Resumes are boring? 🥱</h1>
      <h2 className=" font-bold text-center mb-5">
        Yes, I know. So let's play a Memory Game 😁{" "}
      </h2>

      <div className="container bg-pink-500/50">
        <Cards />
      </div>
    </>
  );
};

export default Game;

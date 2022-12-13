import { useState } from "react";
import cat from "../Img/cat.png";
import room from "../Img/room.jpg";
import styled, { keyframes } from "styled-components";

const playing = keyframes`
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(-10deg);
  }

  50% {
    transform: rotate(10deg);
  }

  75% {
    transform: rotate(-10deg);
  }

  100% {
    transform: rotate(0deg);
  }
`;

const endOfPlay = keyframes`
   0% {
    transform: rotate(0deg);
  }

  50% {
    transform: rotate(5deg);
  }

  100% {
    transform: rotate(0deg);
  }
`;
const Room = styled.section`
  border-radius: 3%;
  background-image: url(${room});
  background-size: cover;
  text-align: center;

  img {
    margin-top: 420px;
    width: 180px;
    height: 180px;
  }

  .clickedCat {
    animation: ${playing} 2s linear infinite;
  }

  .playingCat {
    animation-name: ${endOfPlay};
    animation-duration: 0.6s;
  }
`;

const PlayWithCat = () => {
  const [clicked, isCilcked] = useState(false);
  const clickedCatHandler = () => {
    isCilcked(!clicked);
  };
  return (
    <Room>
      <img
        className={clicked ? "clickedCat" : "playingCat"}
        src={cat}
        alt="playingcat"
        onClick={clickedCatHandler}
      />
    </Room>
  );
};

export default PlayWithCat;

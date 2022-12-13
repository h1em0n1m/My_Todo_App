import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
100% {
    transform: rotate(360deg);
  }
`;

const StartView = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 2%;
  background: linear-gradient(#fff 90%, #000 10%);

  > .circle {
    margin-top: 110px;
    margin-left: 0px;
    position: absolute;
    animation: ${rotate} 30s linear infinite;
  }

  & .cat {
    font-size: 150px;
    color: black;
    transition: 0.3s;
  }

  & .cat:hover {
    color: #b3b3b3;
    transition: 0.3s;
  }
`;

const TitleBox = styled.div`
  margin-top: 120px;
  margin-bottom: 115px;
  width: 250px;
  height: 250px;
  display: flex;
  align-items: center;
  > h1 {
    font-size: 50px;
  }
`;

const Start = () => {
  return (
    <StartView>
      <div className="circle"></div>
      <TitleBox>
        <h1>오늘 하루 고양이와</h1>
      </TitleBox>
      <div className="notice">고양이를 클릭하세요!</div>
      <Link to="/today">
        <Icon className="cat" icon="fluent-emoji-high-contrast:black-cat" />
      </Link>
    </StartView>
  );
};

export default Start;

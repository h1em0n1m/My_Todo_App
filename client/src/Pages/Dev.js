import { Icon } from "@iconify/react";
import profile from "../Img/profile.jpeg";
import styled from "styled-components";

const DevView = styled.section`
  .dev_profile {
    width: 250px;
    height: 250px;
    border-radius: 50%;
  }

  .mail {
    font-size: 60px;
    color: black;
    transition: 0.3s;
  }

  .mail:hover {
    color: #b3b3b3;
    transition: 0.3s;
  }
`;

const Dev = () => {
  return (
    <DevView>
      <h1>만든 사람</h1>
      <div className="circle">
        <img className="dev_profile" alt="profile" src={profile} />
      </div>
      <div className="notice">
        기타 문의 사항은 <strong>h1em0n1m@gmail.com</strong>로 보내 주세요!
        <p></p>
        지금 보내고 싶다면 클릭!
      </div>
      <a
        href="https://mail.google.com/mail/u/0/?ogbl#inbox?compose=new"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon className="mail" icon="ion:mail-outline" />
      </a>
    </DevView>
  );
};

export default Dev;

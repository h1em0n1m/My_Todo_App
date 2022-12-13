import { useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import styled from "styled-components";

const NavBar = styled.section`
  height: 85px;
  display: flex;
  justify-content: space-around;
  border-top: 6px dashed black;

  * {
    text-decoration: none;
    text-align: center;
  }

  .menuIcon {
    font-size: 50px;
  }

  .menuName {
    font-size: 15px;
    font-weight: bold;
  }

  .focused {
    color: #b3b3b3;
    transition: 0.3s;
  }

  .sub {
    color: black;
    transition: 0.3s;
  }
`;

const Nav = () => {
  const [currentMenu, setCurrentMenu] = useState(0);
  const menues = [
    { name: "오늘 하루", link: "/today", catIcon: "cat-face" },
    { name: "오늘 할 일", link: "/todolist", catIcon: "cat-with-wry-smile" },
    { name: "고양이 시간", link: "/playwithcat", catIcon: "kissing-cat" },
    {
      name: "만든 사람",
      link: "/dev",
      catIcon: "grinning-cat-with-smiling-eyes",
    },
  ];

  const selectMenuHandler = (idx) => {
    setCurrentMenu(idx);
  };
  return (
    <NavBar>
      {menues.map((menu, idx) => {
        return (
          <Link
            key={idx}
            to={menu.link}
            className={currentMenu === idx ? "focused" : "sub"}
            onClick={() => selectMenuHandler(idx)}
          >
            <Icon
              className="menuIcon"
              icon={`fluent-emoji-high-contrast:${menu.catIcon}`}
            />
            <div className="menuName">{menu.name}</div>
          </Link>
        );
      })}
    </NavBar>
  );
};

export default Nav;

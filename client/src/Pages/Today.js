import { useState } from "react";
import Modal from "../Components/Modal";
import { Icon } from "@iconify/react";
import styled from "styled-components";
import dayjs from "dayjs";
import "dayjs/locale/ko";

dayjs.locale("ko");

const TodayView = styled.section`
  position: relative;
  h2 {
    width: 180px;
    text-align: center;
    font-size: 38px;
  }

  .window {
    width: 170px;
    height: 170px;
  }
`;

let days = dayjs().format("MM월 DD일 ddd요일");
let timer = dayjs().format("HH시 mm분!");

const Today = () => {
  const [day, setDay] = useState(days);
  const [time, setTime] = useState(timer);
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  const updateTime = () => {
    let days = dayjs().format("MM월 DD일 ddd요일");
    let timer = dayjs().format("HH시 mm분!");
    setDay(days);
    setTime(timer);
  };

  setInterval(updateTime, 1000);

  return (
    <TodayView>
      <h1>오늘은...</h1>
      <div className="circle">
        <h2>
          {day}
          <br />
          {time}
        </h2>
      </div>
      <div>날씨는 어떨까?</div>
      <Icon
        className="window"
        icon="mdi:window-closed-variant"
        onClick={openModal}
      />
      <Modal open={modal} close={closeModal}></Modal>
    </TodayView>
  );
};

export default Today;

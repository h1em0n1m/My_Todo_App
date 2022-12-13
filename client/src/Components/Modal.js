import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const WeatherModal = styled.section`
  .opening {
    top: 0;
    width: 100%;
    height: 740px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 99;
    border-radius: 6px;
    background-color: rgba(0, 0, 0, 0.7);
  }

  .modal_weather {
    width: 250px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 6px dashed black;
    border-radius: 5%;
    background-color: white;
  }

  .weather_icon {
    width: 130px;
    height: 130px;
    filter: grayscale(100%);
  }

  .weahter_temp {
    margin-bottom: 20px;
    font-size: 25px;
    font-weight: 700;
  }
`;

const Modal = ({ open, close }) => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${process.env.REACT_APP_API_ENV}`
      )
      .then((res) => {
        const data = res.data;
        setWeather({
          temp: data.main.temp,
          main: data.weather[0].main,
          icon: data.weather[0].icon,
          loading: false,
        });
      });
  }, []);

  let url = `http://openweathermap.org/img/w/${weather.icon}.png`;

  return (
    <WeatherModal>
      <div className={open ? "opening" : "closing"} onClick={close}>
        {open ? (
          <div className="modal_weather">
            <img className="weather_icon" src={url} alt="weatehr" />
            <div className="weather_name">{weather.main}</div>
            <div className="weather_temp">
              {(weather.temp - 273.15).toFixed(1)}도
            </div>
          </div>
        ) : null}
      </div>
    </WeatherModal>
  );
};

export default Modal;

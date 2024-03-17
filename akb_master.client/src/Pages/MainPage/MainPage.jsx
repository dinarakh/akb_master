import React, { useState } from "react";

//Styles
import {
  MainPageStyled,
  СarouselBrandsCont,
  SelectionAkb, ContCall, ButtonCall, SelectionAkbContText,
  BannersCont, BannerFirst, BannerSecond, BannerThird, BannerFourth,
} from "./Main.styled";

// Global stlyes
import { GlobalStyled } from "../Global.styled";

//npm 
import ReactInputMask from "react-input-mask";

//Copmonents
import Carousel from "../../Components/Carousel/Carousel";

//Image
import ImageBanner1 from "../../Images/BannerImage/ImageBanner1.jpg";
import ImageBanner2 from "../../Images/BannerImage/ImageBanner2.png";
import ImageBanner3 from "../../Images/BannerImage/ImageBanner3.png";
import ImageBanner4 from "../../Images/BannerImage/ImageBanner4.jpg";

const CallSvg = (
  <svg
    stroke="currentColor"
    fill="currentColor"
    stroke-width="0"
    viewBox="0 0 512 512"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M426.666 330.667a250.385 250.385 0 0 1-75.729-11.729c-7.469-2.136-16-1.073-21.332 5.333l-46.939 46.928c-60.802-30.928-109.864-80-140.802-140.803l46.939-46.927c5.332-5.333 7.462-13.864 5.332-21.333-8.537-24.531-12.802-50.136-12.802-76.803C181.333 73.604 171.734 64 160 64H85.333C73.599 64 64 73.604 64 85.333 64 285.864 226.136 448 426.666 448c11.73 0 21.334-9.604 21.334-21.333V352c0-11.729-9.604-21.333-21.334-21.333z"></path>
  </svg>
);

const MainPage = () => {
  return (
    <GlobalStyled>
      <MainPageStyled>
        <СarouselBrandsCont>
          {/* не сделаено */}
          <Carousel/>
        </СarouselBrandsCont>

        <SelectionAkb>
          <SelectionAkbContText>
            <p>Подбор аккумулятора специалистом</p>
            <p>В будни с 9:00 до 19:00, выходные с 10:00 до 18:00</p>
          </SelectionAkbContText>
          <ContCall>
            <ReactInputMask mask="+7(999) 999-9999">
            {() => <input type="tel" id="phone" placeholder="+7(___) ___-____" />}
            </ReactInputMask>
            <ButtonCall>{CallSvg} Оставить номер</ButtonCall>
          </ContCall>
          <p>И мы перезвоним в течении дня</p>
        </SelectionAkb>

        <BannersCont>
          <BannerFirst>
            {/* <img src={ImageBanner1}/> */}
            <p>При сдаче АКБ (от 60Ah) скидка - от 1000</p>
          </BannerFirst>

          <BannerSecond>
          {/* <img src={ImageBanner2}/> */}
          <p>Доставка АКБ пр городу 24/7</p>
          <p>Доставим и установим по Уфе аккумулятор</p>
          </BannerSecond>

          <BannerThird>
          {/* <img src={ImageBanner3}/> */}
          <p>Диагностика состояния АКБ</p>
          </BannerThird>

          <BannerFourth>
          {/* <img src={ImageBanner4}/> */}
          <p>Обслуживание аккумулятора</p>
          </BannerFourth>

        </BannersCont>
      </MainPageStyled>
    </GlobalStyled>
  );
};

export default MainPage;
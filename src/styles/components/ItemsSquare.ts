import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  position: relative;

  width: 376px;
  height: 496px;

  background: #ffffff;
  box-shadow: 0px 6px 40px rgba(57, 132, 187, 0.05);

  border-radius: 38px;

  :hover {
    background-color: ${darken(0.2, '#ffffff')};
  }

  span {
    position: absolute;

    top: 297px;
    left: 32px;
    right: 51px;
    bottom: 163px;

    font-family: Visby Round CF;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 36px;

    text-align: justify;

    color: #000000;
  }

  h3 {
    position: absolute;

    font-family: Visby Round CF;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 22px;

    color: #c8c8c8;

    top: 342px;
    left: 32px;
    right: 29px;
    bottom: 58px;
  }

  h2 {
    position: absolute;

    top: 415px;
    left: 32px;
    right: 189px;
    bottom: 39px;

    font-family: Visby Round CF;
    font-style: normal;
    font-weight: bold;
    font-size: 35px;
    line-height: 42px;

    text-align: justify;

    color: #612999;
  }
`

export const CircleIcon = styled.div`
  position: absolute;

  top: 404px;
  left: 262px;
  right: 51px;
  bottom: 29px;

  width: 63px;
  height: 63px;

  border-radius: 50%;

  background-color: #612999;

  :hover {
    background-color: ${darken(0.2, '#612999')};
  }

  img {
    position: absolute;

    width: 31px;
    height: 31px;
    left: 411px;
    top: 14px;
    right: 16px;
    left: 16px;
    bottom: 18px;
  }
`

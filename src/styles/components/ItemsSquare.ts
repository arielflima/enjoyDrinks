import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  position: relative;

  max-width: 100%;
  max-height: 100%;

  width: 376px;
  height: 496px;

  background: #ffffff;
  box-shadow: 0px 6px 40px rgba(57, 132, 187, 0.05);

  border-radius: 38px;

  :hover {
    background-color: ${darken(0.2, '#ffffff')};
  }

  overflow: hidden;

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

    color: #a8a8a8;

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
  left: 222px;

  width: 63px;
  height: 63px;

  border-radius: 50%;

  background-color: #612999;

  display: flex;

  align-items: center;
  justify-content: center;
  :hover {
    background-color: ${darken(0.2, '#612999')};
  }
`

export const ImageDiv = styled.div`
  display: flex;
  flex: 1;

  max-height: 282px;

  border-radius: 25px;

  overflow: hidden;
`

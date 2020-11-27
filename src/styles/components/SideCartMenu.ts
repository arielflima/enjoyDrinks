import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  z-index: 500;

  position: absolute;
  width: 651px;
  height: 1179px;
  left: 1302px;
  top: -4px;

  background: #ffffff;

  .titleBar {
    position: absolute;

    top: 59px;
    left: 100px;

    tr {
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;

      .basketIcon {
        padding-right: 66px;
      }

      .titleMyOrder {
        white-space: nowrap;
        padding-right: 68px;
      }

      td {
        h1 {
          font-family: Visby Round CF;
          font-style: normal;
          font-weight: bold;
          font-size: 45px;
          line-height: 54px;

          text-align: justify;

          color: #461874;
        }
      }
    }
  }
`

export const CartItem = styled.table`
  position: absolute;

  top: 180px;
  left: 26px;

  display: flex;

  tr {
    display: flex;
    display: 1;

    align-items: center;

    width: 537.58px;
    height: 109px;

    overflow: hidden;

    #tdPicture {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 195px;
      height: 109px;

      overflow: hidden;

      border-radius: 15px;
    }

    #tdDescription {
      display: flex;

      padding-left: 32px;
      flex-direction: column;
    }
  }

  img {
    width: 212px;
    height: 141px;
  }

  h2 {
    font-family: Visby Round CF;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 105.7%;

    color: #461874;

    position: absolute;

    top: 0px;
  }

  h3 {
    font-family: Visby Round CF;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 105.7%;

    color: #ae8dd0;

    position: absolute;

    bottom: 45px;
  }

  h4 {
    font-family: Visby Round CF;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 105.7%;

    color: #612999;

    padding-left: 11px;
    padding-right: 11px;
  }

  span {
    display: flex;
    align-items: center;

    position: absolute;

    bottom: 10px;

    .button {
      width: 24px;
      height: 20px;
      border-radius: 4px;
      border: none;
    }

    .buttonLess {
      background-color: rgba(97, 41, 153, 0.2);
      color: #000;

      &:hover {
        background-color: ${darken(0.2, 'rgba(97, 41, 153, 0.2)')};
      }
    }

    .buttonMore {
      background-color: #612999;
      color: #fff;

      &:hover {
        background-color: ${darken(0.2, '#612999')};
      }
    }
  }
`

export const FooterCheckout = styled.span`
  position: absolute;

  display: flex;
  flex-direction: column;

  bottom: 10px;
  left: 0px;

  width: 100%;
  height: 305px;

  padding-left: 35px;
  padding-top: 16px;

  border-top: 2px solid #d9d9d9;

  td {
    padding: 15px;
  }

  .leftSide {
    font-family: Visby Round CF;
    font-size: 25px;
    line-height: 105.7%;
    font-weight: 500;

    color: #bbbbbb;
    width: 67%;
  }

  .rightSide {
    font-family: Visby Round CF;
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 105.7%;

    color: #612999;
    width: 40%;
  }

  button {
    width: 559px;
    height: 112px;

    background: #612999;
    border-radius: 19px;
    border: none;

    font-family: Visby Round CF;
    font-style: normal;
    font-weight: bold;
    font-size: 35px;
    line-height: 42px;

    text-align: justify;
    letter-spacing: 0.2em;

    color: #ffffff;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 10px;

    &:hover {
      background-color: ${darken(0.2, '#612999')};
    }
  }
`

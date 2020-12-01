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

    top: 80px;
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

  .cart {
    position: absolute;

    left: 4px;
    top: 170px;
  }
`

export const CartItem = styled.div`
  display: flex;

  width: 538px;
  height: 110px;

  margin: 46px;

  .imgSpan {
    display: flex;

    width: 195px;
    height: 109px;

    overflow: hidden;

    align-items: center;

    border-radius: 15px;
  }

  .contentSpan {
    padding-left: 32px;

    display: flex;
    flex-direction: column;

    border: 1px solid red;
  }

  .drinkImg {
    width: 212px;
    height: 141px;
  }

  .counterSpan {
    display: flex;
    justify-content: space-between;
    width: 40%;

    .buttonLess {
      color: #000;
      background: rgba(97, 41, 153, 0.2);

      &:hover {
        background: ${darken(0.2, 'rgba(97, 41, 153, 0.2)')};
      }
    }

    .buttonMore {
      color: #fff;
      background: #612999;

      &:hover {
        background: ${darken(0.2, '#612999')};
      }
    }

    button {
      width: 24px;
      height: 20px;

      border-radius: 4px;

      border: none;

      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 18px;
    }
  }

  h3 {
    font-family: Visby Round CF;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 105.7%;

    color: #461874;
  }

  h4 {
    font-family: Visby Round CF;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 105.7%;

    color: #ae8dd0;
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

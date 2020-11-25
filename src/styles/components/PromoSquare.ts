import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  display: flex;
  position: relative;

  width: 351px;
  height: 162px;

  padding: 0;
  margin: 0;

  border-radius: 19px;

  backdrop-filter: blur(5px);

  overflow: hidden;

  table:hover {
    background-color: ${props => darken(0.2, props.color)};
  }

  table {
    display: flex;
    align-items: center;
    flex: 1;

    td {
      display: flex;
      flex-direction: column;
    }

    tr {
      display: flex;
      flex-direction: row;
    }
  }

  h2 {
    position: absolute;

    font-family: Visby Round CF;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 105.7%;

    color: #ffffff;

    margin-top: 35px;
    right: 41px;
  }

  span {
    padding-top: 19px;
    padding-left: 33px;
    font-family: Visby Round CF;
    font-style: normal;
    font-size: 25px;
    line-height: 100%;
    margin-bottom: 18px;

    color: #ffffff;
  }

  h4 {
    padding-bottom: 31px;
    padding-left: 33px;
    font-family: Visby Round CF;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 105.7%;

    color: #ffffff;
  }

  h5 {
    position: absolute;

    font-family: Visby Round CF;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 48px;

    text-align: justify;

    color: #ffffff;

    margin-left: 35px;
    bottom: 18px;
  }
`

export const PromoOff = styled.div`
  background: #3e752a;
  height: 67px;
  width: 67px;

  margin-top: 14px;
  margin-right: 32px;
  margin-left: 32px;

  border-radius: 50%;
`

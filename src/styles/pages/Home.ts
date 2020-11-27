import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  overflow-x: hidden;
  overflow-y: scroll;

  max-width: 100vw;
  max-height: 100vh;

  position: relative;

  display: flex;

  h1 {
    font-family: Visby Round CF;
    font-style: normal;
    font-weight: bold;
    font-size: 130px;
    line-height: 156px;

    color: #612999;

    /* color: ${props => props.theme.colors.primary}; */
  }

  h3 {
    font-family: Visby Round CF;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 36px;

    color: #ffffff;
  }

  p {
    font-family: Visby Round CF;
    font-weight: 500;
    font-size: 25px;
    text-align: justify;

    color: #ffffff;
  }
`

export const BackgroundImg = styled.img`
  width: 110vw;
  height: 120vh;

  position: relative;

  z-index: 0;
`

export const AsideMenu = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;

  position: absolute;

  left: 102px;
  top: 319px;

  h1 {
    width: 432px;
    height: 191px;
  }

  p {
    width: 501px;
    height: 96px;

    position: absolute;
    left: 0px;
    top: 192px;
  }

  .searchBarPosition {
    position: absolute;
    left: 0px;
    top: 350px;
  }

  .searchButtonPosition {
    position: absolute;
    left: 450px;
    top: 340px;
  }
`
export const DropMenuIcon = styled.img`
  position: absolute;
  width: 34px;
  height: 33px;
  left: 102px;
  top: 78px;

  :hover {
    opacity: 0.7;
  }
`

export const TopBar = styled.div`
  position: absolute;
  top: 70px;
  left: 700px;

  justify-content: center;
  align-items: center;

  justify-content: space-between;

  width: 900px;
  height: 49px;

  display: flex;

  h3 {
    :hover {
      opacity: 0.7;
    }
  }
`

export const FacebookIcon = styled.img`
  position: absolute;

  left: 1840px;
  bottom: 850px;

  width: 15px;
  height: 30px;

  :hover {
    opacity: 0.4;
  }
`

export const TwitterIcon = styled.img`
  position: absolute;

  left: 1840px;
  bottom: 800px;

  width: 26px;
  height: 21px;

  :hover {
    opacity: 0.4;
  }
`

export const InstagramIcon = styled.img`
  position: absolute;

  left: 1840px;
  bottom: 745px;

  width: 28px;
  height: 28px;

  :hover {
    opacity: 0.4;
  }
`

export const PromoWideMenu = styled.div`
  position: absolute;

  left: 690px;
  top: 780px;

  display: flex;
  flex: 1;

  div ~ div {
    margin-left: 49px;
  }
`

export const SearchBox = styled.input`
  outline: none;

  width: 432px;
  height: 65px;

  border: none;

  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);

  border-radius: 46px;

  font-family: Visby Round CF;
  font-weight: 300;
  font-size: 25px;
  line-height: 30px;

  padding-left: 45px;

  text-align: justify;

  color: rgba(97, 41, 153, 0.7);

  ::placeholder {
    color: rgba(97, 41, 153, 0.7);
  }
`

export const SearchButton = styled.button`
  outline: none;

  position: absolute;
  width: 82px;
  height: 82px;
  left: 544px;
  top: 653px;

  background: #612999;
  backdrop-filter: blur(20px);

  border-radius: 46px;

  border: none;

  background-repeat: no-repeat;
  background-position: 50%;

  :hover {
    background-color: ${darken(0.2, '#612999')};
  }
`

export const LinearTransitional = styled.div`
  position: absolute;
  width: 1928px;
  height: 168px;
  /* left: 1924px; */
  top: 1003px;

  z-index: 1;

  background: linear-gradient(180deg, #f5f1ff 0%, rgba(245, 241, 255, 0) 100%);
  transform: rotate(-180deg);
`

export const WideMenu = styled.table`
  display: flex;

  align-items: center;
  text-align: center;
  position: absolute;

  justify-content: space-between;

  width: 1089px;
  height: 90px;

  left: 263px;
  top: 1169px;

  background-color: rgba(0, 0, 0, 0);

  td {
    overflow: hidden;

    padding: 28px;

    white-space: nowrap;
    align-items: center;
    justify-content: start;

    height: 100%;
    display: flex;
    font-family: Visby Round CF;

    font-weight: 700;
    font-size: 35px;
    line-height: 42px;

    color: #461874;

    :hover {
      background-color: #612999;
      color: #ffffff;
    }
  }
`

export const Title = styled.div`
  font-family: Visby Round CF;
  font-style: normal;
  font-weight: bold;
  font-size: 65px;
  line-height: 78px;
  text-align: justify;

  color: #47137c;

  position: absolute;

  left: 147px;
  top: 1348px;
`

export const ContainerItems = styled.div`
  position: absolute;

  left: 133px;
  top: 1482px;

  display: flex;
  flex: 1;

  align-items: center;
  justify-content: space-between;

  background-color: rgba(0, 0, 0, 0);

  div ~ div {
    margin-left: 58px;
  }
`

import styled from 'styled-components'
import searchIconImg from '../../assets/searchIcon.png'

export const Container = styled.div`
  position: relative;
  align-items: center;

  display: flex;
  flex-direction: column;

  h1 {
    position: absolute;
    width: 432px;
    height: 191px;
    left: 102px;
    top: 319px;

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
    position: absolute;
    width: 501px;
    height: 96px;
    left: 108px;
    top: 510px;

    font-family: Visby Round CF;
    font-style: normal;
    font-weight: 300;
    font-size: 25px;
    line-height: 30px;
    text-align: justify;

    color: #ffffff;
  }
`

export const BackgroundImg = styled.img`
  width: 100vw;
  height: 100vh;

  position: relative;
`

export const DropMenuIcon = styled.img`
  position: absolute;
  width: 34px;
  height: 33px;
  left: 102px;
  top: 78px;
`

export const HomeLink = styled.h3`
  position: absolute;
  width: 87px;
  height: 36px;
  left: 693px;
  top: 75px;
`
export const SmoothiesLink = styled.h3`
  position: absolute;
  width: 152px;
  height: 36px;
  left: 841px;
  top: 75px;
`

export const AboutLink = styled.h3`
  position: absolute;
  width: 89px;
  height: 36px;
  left: 1054px;
  top: 75px;
`

export const ContactLink = styled.h3`
  position: absolute;
  width: 114px;
  height: 36px;
  left: 1204px;
  top: 75px;
`

export const FacebookIcon = styled.img`
  position: absolute;

  left: 1840px;
  bottom: 850px;

  width: 15px;
  height: 30px;
`

export const TwitterIcon = styled.img`
  position: absolute;

  left: 1840px;
  bottom: 800px;

  width: 26px;
  height: 21px;
`

export const InstagramIcon = styled.img`
  position: absolute;

  left: 1840px;
  bottom: 745px;

  width: 28px;
  height: 28px;
`

export const SearchBox = styled.input`
  position: absolute;
  width: 432px;
  height: 65px;
  left: 102px;
  top: 661px;

  border: none;

  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);

  border-radius: 46px;
`

export const SearchButton = styled.button`
  position: absolute;
  width: 82px;
  height: 82px;
  left: 544px;
  top: 653px;

  background: #612999;
  backdrop-filter: blur(20px);

  border-radius: 46px;

  border: none;

  background-image: url(${searchIconImg});
  background-repeat: no-repeat;
  background-position: 50%;
`

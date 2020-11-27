import React from 'react'
import Head from 'next/head'

import {
  Container,
  BackgroundImg,
  DropMenuIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  PromoWideMenu,
  SearchBox,
  SearchButton,
  AsideMenu,
  LinearTransitional,
  WideMenu,
  Title,
  TopBar,
  ContainerItems
} from '../styles/pages/Home'

import { BiSearchAlt } from 'react-icons/bi'

import SideCartMenu from '../components/SideCartMenu'

import imgBackground from '../assets/background.png'
import menuIcon from '../assets/menuIcon.png'
import facebookIconImg from '../assets/facebook.png'
import twitterIconImg from '../assets/twitter.png'
import instagramIconImg from '../assets/instagram.png'

import PromoSquare from '../components/PromoSquare'

import ItemsSquare from '../components/ItemsSquare'
import drink1 from '../assets/drink1.png'
import drink2 from '../assets/drink2.png'
import drink3 from '../assets/drink3.png'
import drink4 from '../assets/drink4.png'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Enjoy Drinks</title>
      </Head>
      <BackgroundImg src={imgBackground} />
      <AsideMenu>
        <h1>Enjoy!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi mauris
          arcu aenean in mauris elementum sed non. In sapien enim
        </p>
        <SearchBox
          className="searchBarPosition"
          type="search"
          placeholder="Search your drink"
        />
        <SearchButton className="searchButtonPosition">
          <BiSearchAlt size={40} color="#fff" />
        </SearchButton>
      </AsideMenu>
      <DropMenuIcon src={menuIcon} />
      <TopBar>
        <h3>Home</h3>
        <h3>Smoothies</h3>
        <h3>About</h3>
        <h3>Contact</h3>
      </TopBar>

      <FacebookIcon src={facebookIconImg} />
      <TwitterIcon src={twitterIconImg} />
      <InstagramIcon src={instagramIconImg} />

      <PromoWideMenu>
        <PromoSquare
          backgroundColor="rgba(111, 149, 81, 0.5)"
          promoPinColor="#3e752a"
        />
        <PromoSquare
          backgroundColor="rgba(228, 170, 20, 0.5)"
          promoPinColor="#fbc400"
        />
        <PromoSquare
          backgroundColor="rgba(106, 86, 125, 0.5)"
          promoPinColor="#612999"
        />
      </PromoWideMenu>
      <SideCartMenu>
        <h1>teste</h1>
      </SideCartMenu>

      <LinearTransitional />

      <WideMenu>
        <td>All</td>
        <td>Popular Drinks</td>
        <td>Natural Smoothie</td>
        <td>Juices</td>
        <td>Yogurt</td>
      </WideMenu>

      <Title>Popular Drinks</Title>

      <ContainerItems>
        <ItemsSquare drinkImage={drink1} />
        <ItemsSquare drinkImage={drink2} />
        <ItemsSquare drinkImage={drink3} />
        <ItemsSquare drinkImage={drink4} />
      </ContainerItems>
    </Container>
  )
}

export default Home

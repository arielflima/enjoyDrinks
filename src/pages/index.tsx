import React from 'react'
import Head from 'next/head'

import {
  Container,
  BackgroundImg,
  DropMenuIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  SearchBox,
  SearchButton,
  AsideMenu,
  LinearTransitional,
  WideMenu,
  Title,
  TopBar,
  ContainerItems
} from '../styles/pages/Home'

import imgBackground from '../assets/background.png'
import menuIcon from '../assets/menuIcon.png'
import facebookIconImg from '../assets/facebook.png'
import twitterIconImg from '../assets/twitter.png'
import instagramIconImg from '../assets/instagram.png'

import PromoSquareGreen from '../components/PromoSquareGreen'
import PromoSquareYellow from '../components/PromoSquareYellow'
import PromoSquarePurple from '../components/PromoSquarePurple'

import ItemsSquare from '../components/ItemsSquare'

import searchIconImg from '../assets/searchIcon.png'

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
        <SearchBox type="search" placeholder="Search your drink" />
        <SearchButton>
          <img src={searchIconImg} />
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

      <PromoSquareGreen />
      <PromoSquareYellow />
      <PromoSquarePurple />

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
        <ItemsSquare />
        <ItemsSquare />
        <ItemsSquare />
        <ItemsSquare />
      </ContainerItems>
    </Container>
  )
}

export default Home

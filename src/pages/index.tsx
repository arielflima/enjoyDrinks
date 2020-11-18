import React from 'react'
import Head from 'next/head'

import {
  Container,
  BackgroundImg,
  DropMenuIcon,
  HomeLink,
  SmoothiesLink,
  AboutLink,
  ContactLink,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  SearchBox,
  SearchButton
} from '../styles/pages/Home'

import imgBackground from '../assets/background.png'
import menuIcon from '../assets/menuIcon.png'
import facebookIconImg from '../assets/facebook.png'
import twitterIconImg from '../assets/twitter.png'
import instagramIconImg from '../assets/instagram.png'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Enjoy Drinks</title>
      </Head>
      <BackgroundImg src={imgBackground} />
      <DropMenuIcon src={menuIcon} />
      <HomeLink>Home</HomeLink>
      <SmoothiesLink>Smoothies</SmoothiesLink>
      <AboutLink>About</AboutLink>
      <ContactLink>Contact</ContactLink>

      <FacebookIcon src={facebookIconImg} />
      <TwitterIcon src={twitterIconImg} />
      <InstagramIcon src={instagramIconImg} />

      <h1>Enjoy!</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi mauris arcu
        aenean in mauris elementum sed non. In sapien enim
      </p>
      <SearchBox type="search" />
      <SearchButton />
    </Container>
  )
}

export default Home

import React from 'react'

import {
  Container,
  ImageDiv,
  CircleIcon
} from '../styles/components/ItemsSquare'

import { BiBasket } from 'react-icons/bi'

interface drinkProps {
  drinkImage: string
}

const ItemsSquare: React.FC<drinkProps> = ({ drinkImage }) => {
  return (
    <Container>
      <ImageDiv>
        <img src={drinkImage} />
      </ImageDiv>
      <span>Stranberry and blue</span>
      <h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi mauris.
      </h3>

      <h2>$15.00 us</h2>
      <CircleIcon>
        <BiBasket size={40} color="#fff" />
      </CircleIcon>
    </Container>
  )
}

export default ItemsSquare

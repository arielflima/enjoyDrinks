import React from 'react'

import { Container, CircleIcon } from '../styles/components/ItemsSquare'

import shoppingBasketIcon from '../assets/shoppingBasket.png'

const components: React.FC = () => {
  return (
    <Container>
      <span>Stranberry and blue</span>
      <h3>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi mauris.
      </h3>

      <h2>$15.00 us</h2>
      <CircleIcon>
        <img src={shoppingBasketIcon} />
      </CircleIcon>
    </Container>
  )
}

export default components

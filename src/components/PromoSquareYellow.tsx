import React, { ReactPropTypes } from 'react'

import {
  Container,
  Collum1,
  Collum2,
  PromoOff
} from '../styles/components/PromoSquareYellow'

const PromoSquare: React.FC = () => {
  return (
    <Container>
      <Collum1>
        <span>Blueberry Special</span>
        <h4>Calories: 20 kcal Size: 10 oz</h4>
      </Collum1>
      <Collum2>
        <PromoOff />
        <h2>20%</h2>
        <h5>$12</h5>
      </Collum2>
    </Container>
  )
}

export default PromoSquare

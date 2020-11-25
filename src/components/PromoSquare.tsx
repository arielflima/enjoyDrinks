import React from 'react'

import { Container, PromoOff } from '../styles/components/PromoSquare'

import { darken } from 'polished'

interface PromoSquareProps {
  backgroundColor: string
  promoPinColor: string
}

const PromoSquare: React.FC<PromoSquareProps> = ({
  backgroundColor,
  promoPinColor
}) => {
  return (
    <Container
      color={backgroundColor}
      style={{ backgroundColor: backgroundColor }}
    >
      <table>
        <tr>
          <td>
            <span>Blueberry Special</span>
            <h4>
              Calories: 20 kcal <br /> Size: 10 oz
            </h4>
          </td>
          <td>
            <PromoOff style={{ background: promoPinColor }} />
            <h2>20%</h2>
            <h5>$12</h5>
          </td>
        </tr>
      </table>
    </Container>
  )
}

export default PromoSquare

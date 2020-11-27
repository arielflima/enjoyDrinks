import React from 'react'

import {
  Container,
  CartItem,
  FooterCheckout
} from '../styles/components/SideCartMenu'

import { BiBasket } from 'react-icons/bi'

import drink1 from '../assets/drink1.png'
import avatarSample from '../assets/avatarSample.png'

const SideCartMenu: React.FC = () => {
  return (
    <Container>
      <table className="titleBar">
        <tr>
          <td className="basketIcon">
            <BiBasket size={60} />
          </td>
          <td className="titleMyOrder">
            <h1>My Order</h1>
          </td>
          <td>
            <img src={avatarSample} />
          </td>
        </tr>
      </table>
      <CartItem>
        <tr>
          <td id="tdPicture">
            <img src={drink1} />
          </td>
          <td id="tdDescription">
            <h2>Blueberry Special</h2>
            <br />
            <h3>$12.00</h3>
            <br />
            <span>
              <button type="button" className="button buttonLess">
                -
              </button>
              <h4>2</h4>
              <button type="button" className="button buttonMore">
                +
              </button>
            </span>
          </td>
        </tr>
      </CartItem>
      <FooterCheckout>
        <table>
          <tr>
            <td className="leftSide">Delivery</td>
            <td className="rightSide">Free</td>
          </tr>
          <tr>
            <td className="leftSide">Total</td>
            <td className="rightSide">45.00 usd</td>
          </tr>
        </table>
        <button type="button">CHECKOUT</button>
      </FooterCheckout>
    </Container>
  )
}

export default SideCartMenu

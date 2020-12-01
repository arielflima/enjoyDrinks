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
      <div className="cart">
        <CartItem>
          <span className="imgSpan">
            <img src={drink1} className="drinkImg" />
          </span>
          <span className="contentSpan">
            <h3>Blueberry Special</h3> <br />
            <h4>$12.00</h4> <br />
            <span className="counterSpan">
              <button type="button" className="buttonLess">
                -
              </button>
              2
              <button type="button" className="buttonMore">
                +
              </button>
            </span>
          </span>
        </CartItem>
        <CartItem />
        <CartItem />
      </div>

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

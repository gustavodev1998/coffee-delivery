import { HeaderCart, HeaderContainer } from "./styles";
import { MapPin, ShoppingCart } from "phosphor-react";
import coffeeLogo from "../../assets/coffeeLogo.svg";

import { useCart } from "../../hooks/useCart";

import { NavLink } from "react-router-dom";

export function Header() {
  const { cartQuantity } = useCart();

  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={coffeeLogo} alt="Logo" />
      </NavLink>

      <nav>
        <NavLink to="/" title="Location">
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </NavLink>

        <NavLink to="/checkout" title="Cart">
          <HeaderCart>
            {cartQuantity >= 1 && <span>{cartQuantity}</span>}
            <ShoppingCart size={22} weight="fill" />
          </HeaderCart>
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}

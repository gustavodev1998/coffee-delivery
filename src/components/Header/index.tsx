import { HeaderContainer } from "./styles";
import coffeeLogo from "../../assets/coffeeLogo.svg";
import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {
  return (
    <HeaderContainer>
      <img src={coffeeLogo} alt="Logo" />

      <nav>
        <NavLink to="/" title="Location">
          <MapPin size={22} weight="fill" />
          <span>Porto Alegre, RS</span>
        </NavLink>
        <NavLink to="/checkout" title="Cart">
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}

import { NavLink } from "react-router-dom";
import "./Menu.css";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: white;
  height: 60px;
`;

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
`;

const Img = styled.img`
  width: 200px;
`;

function Menu() {
  return (
    <Container>
      <Img src="/logo.svg" alt="logo" />

      <Navigation>
        <NavLink
          className={({ isActive }) => (isActive ? "active-block" : "link")}
          to="/transactions"
        >
          Transactions
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-block" : "link")}
          to="/summary"
        >
          Récapitulatif
        </NavLink>
      </Navigation>
    </Container>
  );
}

export default Menu;

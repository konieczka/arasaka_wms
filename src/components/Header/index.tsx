import React from "react";
import { useNavigate } from "react-router";
import {
  HeaderContainer,
  LogoSection,
  LogoImg,
  LogoLabel,
  LocationBox,
} from "./styles";

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <LogoSection onClick={() => navigate("/")}>
        <LogoImg />
        <LogoLabel>Warehouse Management System</LogoLabel>
      </LogoSection>
      <LocationBox>
        <small>Location</small>
        <p>Arroyo, Santo Domingo, NC</p>
      </LocationBox>
    </HeaderContainer>
  );
};

export default Header;

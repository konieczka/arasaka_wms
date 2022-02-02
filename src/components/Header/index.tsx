import React from "react";
import { HeaderContainer, LogoSection, LogoImg, LogoLabel, LocationBox } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <LogoSection>
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

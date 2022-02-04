import React from "react";
import Header from "components/Header";
import { Container } from "./styles";

interface Props {
  children: React.ReactNode;
}

const GenericLayout: React.FC<Props> = ({ children }) => (
  <Container>
    <Header />
    {children}
  </Container>
);

export default GenericLayout;

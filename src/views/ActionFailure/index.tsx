import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import Header from "components/Header";
import FullScreenMessage from "components/FullScreenMessage";
import { Container } from "./styles";

const ActionFailure = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectingTimeout = setTimeout(() => navigate("/"), 1500);

    return () => clearTimeout(redirectingTimeout);
  }, [navigate]);

  return (
    <Container>
      <Header />
      <FullScreenMessage
        message="An unexpected error occurred. Please try again. Redirecting to item list shortly..."
        isError
      />
    </Container>
  );
};

export default ActionFailure;

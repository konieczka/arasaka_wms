import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import FullScreenMessage from "components/FullScreenMessage";
import GenericLayout from "components/GenericLayout";

const ActionFailure = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectingTimeout = setTimeout(() => navigate("/"), 1500);

    return () => clearTimeout(redirectingTimeout);
  }, [navigate]);

  return (
    <GenericLayout>
      <FullScreenMessage
        message="An unexpected error occurred. Please try again. Redirecting to item list shortly..."
        isError
      />
    </GenericLayout>
  );
};

export default ActionFailure;

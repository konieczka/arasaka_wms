import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import FullScreenMessage from "components/FullScreenMessage";
import GenericLayout from "components/GenericLayout";

const ActionSuccess = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const redirectingTimeout = setTimeout(() => navigate("/"), 1500);

    return () => clearTimeout(redirectingTimeout);
  }, [navigate]);

  return (
    <GenericLayout>
      <FullScreenMessage message="Action successful! Redirecting to item list shortly..." />
    </GenericLayout>
  );
};

export default ActionSuccess;

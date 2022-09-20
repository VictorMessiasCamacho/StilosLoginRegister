import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <C.Container>
      <C.Title>Home</C.Title>

      
      
      <Button Text="Salir" onClick={() => [signout(), navigate("/")]}>
        Salir
      </Button>
    </C.Container>
  );
};

export default Home;

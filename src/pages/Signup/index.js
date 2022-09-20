import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [ date, setDate] = useState(new Date());
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!email | !emailConf | !senha) {
      setError("Rellene todos los campos");
      return;
    } else if (email !== emailConf) {
      setError("Los e-mails no coinciden");
      return;
    }
    
    const res = signup(email, senha, );

    if (res) {
      setError(res);
      return;
    }

    alert("Usuario registrado con Éxito!");
    navigate("/");
  };

  return (
    <C.Container>
      <C.Label>Login</C.Label>
      <C.Content>
        Nombre
        <Input
          type="text"
          placeholder="Escriba su nombre"
          
        />
        Email
        <Input
          type="email"
          placeholder="Escriba su E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError("")]}
        />
        <Input
          type="email"
          placeholder="Confirme su E-mail"
          value={emailConf}
          onChange={(e) => [setEmailConf(e.target.value), setError("")]}
        />
        Fecha de Nacimiento
        <Input
          type="date"
          placeholder='Escriba su fecha de nacimiento'
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        Contraseña
        <Input
          type='password'
          placeholder='Escriba su password'
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        
        <Input
          type='passwor'
          placeholder='Confirme su password'
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError("")]}
        />
        <label>Que tipo de coche tienes?</label>
        <select>
            <option value ='No'> No tengo</option>
            <option value ='Die'> Diesel</option>
            <option value ='Gas'> Gasolina</option>
            <option value ='Ele'> Eléctrico</option>
        </select>
        <input type='checkbox' id='vehicle1' name='vehicle1' value='Bike' required='required'/>
  <label for='vehicle1'> Terms and conditions</label><br></br>


        <C.labelError>{error}</C.labelError>
        <Button Text='Subscribite' onClick={handleSignup} />
        <C.LabelSignin>
          Ya tienes una cuenta?
          <C.Strong>
            <Link to="/">&nbsp;Login</Link>
          </C.Strong>
        </C.LabelSignin>
      </C.Content>
    </C.Container>
  );
};

export default Signup;

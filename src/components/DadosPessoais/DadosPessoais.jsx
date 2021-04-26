import React, { useState } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";

function DadosPessoais({ aoEnviar, validarCPF,}) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } });

  return (
    
    <form onSubmit={(event) => {
      event.preventDefault();
      aoEnviar();
  }}>
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        id="nome"
        label="Nome"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        id="sobrenome"
        label="Sobrenome"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={(event) => {
          const ehValido = validarCPF(event.target.value);
          setErros({ cpf: ehValido });
        }}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="cpf"
        label="Cpf"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <FormControlLabel
        control={
          <Switch
            checked={promocoes}
            name="Promoções"
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
            color="primary"
          />
        }
        label="Promoções"
      />

      <FormControlLabel
        control={
          <Switch
            checked={novidades}
            name="Novidades"
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
            color="primary"
          />
        }
        label="Novidades"
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosPessoais;

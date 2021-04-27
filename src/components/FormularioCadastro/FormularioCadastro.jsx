import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import DadosEntrega from "../DadosEntrega/DadosEntrega";
import DadosPessoais from "../DadosPessoais/DadosPessoais";
import DadosUsuario from "../DadosUsuario/DadosUsuario";

function FormularioCadastro({ aoEnviar }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDadosColetados] = useState({});

  useEffect(() => {
    if (etapaAtual === formulario.length - 1) {
      aoEnviar(dadosColetados);
    }
  });

  const formulario = [
    <DadosUsuario aoEnviar={coletarDados} />,
    <DadosPessoais aoEnviar={coletarDados} />,
    <DadosEntrega aoEnviar={coletarDados} />,
    <Typography variant="h5">Obrigado pelo Cadastro! </Typography>,
  ];

  function proximo() {
    setEtapaAtual(etapaAtual + 1);
  }

  function coletarDados(dados) {
    setDadosColetados({ ...dadosColetados, ...dados });
    proximo();
  }

  return (
    <>
      <Stepper activeStep={etapaAtual}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pessoal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Entrega</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {formulario[etapaAtual]}
    </>
  );
}

export default FormularioCadastro;

import React, { useState } from 'react';
import DadosEntrega from '../DadosEntrega/DadosEntrega';
import DadosPessoais from '../DadosPessoais/DadosPessoais';
import DadosUsuario from '../DadosUsuario/DadosUsuario'

function FormularioCadastro({aoEnviar, validarCPF}){
  const [etapaAtual, setEtapaAtual]= useState(0);

  const formulario=[
  <DadosUsuario aoEnviar={proximo}/>, 
  <DadosPessoais aoEnviar={proximo} validarCPF={validarCPF} />,
  <DadosEntrega aoEnviar={aoEnviar}/> 
]

  function proximo(){
    setEtapaAtual(etapaAtual+ 1);
  }

  return(
    <>
    { formulario[etapaAtual]}
    </>
  )
}

export default FormularioCadastro;

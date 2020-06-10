import Head from 'next/head'

import Cabecalho from '../components/Cabecalho'
import Principal from '../components/Principal'
import Rodape from '../components/Rodape'
import FormLogin from '../components/FormLogin'

export default function Home() {
  return (
    <>
      <Cabecalho nomeEmpresa="Lojas Americanas" endereco="Rua fulano de Tal, Recife" />
      <Principal />
      <FormLogin />
      <Rodape />
    </>
  )
}


// function somar(valor1, valor2, valor3) {
//   let resultado = valor1 + valor2 + valor3
//   return `Seu resultado é  ${resultado} ok?`
// }

const somar = (valor1, valor2, valor3) => `Seu resultado é ${valor1 + valor2 + valor3} ok?`

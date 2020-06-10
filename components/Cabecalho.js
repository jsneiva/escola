
import Link from 'next/link'

import styles from "./Cabecalho.module.css"

export default function Cabecalho(props) {
  return (
    <div>
      <h1>Cabeçalho do site</h1>
      <h4>Sua empresa é {props.nomeEmpresa}</h4>
      <h2>{props.endereco}</h2>
      <ul className={styles.menu}>
        <li><Link href="/"><a>Home</a></Link></li>
        <li><Link href="/contatos"><a>Contatos</a></Link></li>
        <li><Link href="/sobre"><a>Sobre</a></Link></li>
      </ul>
    </div>
  )
}
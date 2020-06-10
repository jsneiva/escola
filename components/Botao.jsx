
export default function Botao(props) {
  return (
    <button onClick={() => alert(props.msgAlerta)}>{props.titulo}</button>
  )
}

import Botao from './Botao'

export default function FormLogin() {
  return (
    <form>
      <p>
        <input type="email" name="email" id=""/>
      </p>
      <p>
        <input type="password" name="" id=""/>
      </p>
      <hr/>
      <Botao titulo="Salvar" />
    </form>
  )
}
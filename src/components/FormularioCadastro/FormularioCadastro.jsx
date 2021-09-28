import Button from "@material-ui/core/Button";

function FormularioCadastro() {

  return (
    <form>
      <label>Nome</label>
      <input type="text" />

      <label>Sobreome</label>
      <input type="text" />

      <label>CPF</label>
      <input type="text" />

      <label>Promoções</label>
      <input type="checkbox" />

      <label>Novidades</label>
      <input type="checkbox" />

      <Button type="submit" variant="contained" color="primary">
        Hello World
      </Button>
    </form>
  )
}

export default FormularioCadastro;
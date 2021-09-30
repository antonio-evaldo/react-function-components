import { Switch, Button, TextField, FormControlLabel } from "@mui/material";
import { Box } from "@mui/system";

function FormularioCadastro() {

  return (
    <form>
      <TextField
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        id="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <Box mt={2}>
        <FormControlLabel
          label="Promoções"
          control={<Switch name="promocoes" defaultChecked />}
        />

        <FormControlLabel
          label="Novidades"
          control={<Switch name="novidades" defaultChecked />}
        />

        <Button type="submit" variant="contained" color="primary">
          Cadastrar
        </Button>
      </Box>


    </form>
  )
}

export default FormularioCadastro;
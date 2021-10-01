import { Switch, Button, TextField, FormControlLabel } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

function FormularioCadastro() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(nome, sobrenome);
      }}
    >
      <TextField
        value={nome}
        onChange={e => {
          const novoNome = e.target.value.substr(0, 3);          
          setNome(novoNome);
        }}
        id="nome"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        value={sobrenome}
        onChange={e => { setSobrenome(e.target.value) }}
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
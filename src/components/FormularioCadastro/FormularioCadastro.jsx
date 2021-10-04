import { Switch, Button, TextField, FormControlLabel } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";

function FormularioCadastro({aoEnviar}) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(false);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({nome, sobrenome, cpf, promocoes, novidades})
      }}
    >
      <TextField
        value={nome}
        onChange={e => { setNome(e.target.value) }}
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
        value={cpf}
        onChange={e => { setCpf(e.target.value) }}
        id="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <Box mt={2}>
        <FormControlLabel
          label="Promoções"
          onChange={e => {
            setPromocoes(e.target.checked);
          }}
          control={
            <Switch name="promocoes" checked={promocoes} />
          }
        />

        <FormControlLabel
          label="Novidades"
          onChange={e => {
            setNovidades(e.target.checked);
          }}
          control={
            <Switch name="novidades" checked={novidades} />
          }
        />

        <Button type="submit" variant="contained" color="primary">
          Cadastrar
        </Button>
      </Box>


    </form>
  )
}

export default FormularioCadastro;
import React from 'react';
import {Button, TextField} from '@material-ui/core'

function DadosEntrega({aoEnviar}){
    return(
        <form>
            <TextField
            id="cep"
            label="CEP"
            type="number"
            variant="outlined"
            margin="normal"
            
            />
            <TextField
            id="endereço"
            label="Endereço"
            type="string"
            variant="outlined"
            margin="normal"
            fullWidth
            />
            <TextField
            id="numero"
            label="Número"
            type="number"
            variant="outlined"
            margin="normal"
            
            />
            <TextField
            id="estado"
            label="Estado"
            type="string"
            variant="outlined"
            margin="normal"
            
            />
            <TextField
            id="cidade"
            label="Cidade"
            type="string"
            variant="outlined"
            margin="normal"
    
            />

    <Button 
    type="submit" 
    variant="contained" 
    color="primary" 
    fullWidth  
    >
        Finalizar cadastro
      </Button>
            

           
        </form>

    )
}

export default DadosEntrega;
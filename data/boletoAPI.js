import axios from "axios";

const URL = 'https://api.kobana.com.br/v1/'
const boleto = async() => {
    try{
        const retorno = await axios.get(URL);
        return retorno
    }catch(erro){
       throw erro
    }
}

export default boleto
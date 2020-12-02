const axios = require('axios');

exports.parseAddress = async (cep, numero) => {
    try {
        const endereco = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        return `${endereco.data.logradouro}, ${numero} - ${endereco.data.localidade}/${endereco.data.uf}`
    } catch (error) {
        throw new Exception(error)
    }
}
const Crypto = require("../model/crypto");

const create = async (crypto) => {
    await Crypto.create(crypto)
    return crypto
}

const list = async () => {
    const cryptos = await Crypto.findAll()
    return cryptos
}

const listFiltro = async () => {
    const cryptos = await Crypto.findAll({
        where:{
            valor:{$gte:100}
        }
    })
    return cryptos
}

module.exports = {create, list, listFiltro}
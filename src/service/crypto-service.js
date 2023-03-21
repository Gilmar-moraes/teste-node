const Crypto = require("../model/crypto");

const create = async (crypto) => {
    try {
        await Crypto.create(crypto)
        return crypto
    } catch(err) {
        console.error(err)
    }
}

const list = async () => {
    try {
        const cryptos = await Crypto.findAll()
        return cryptos
    } catch(err) {
        console.error(err)
    }
}

const listFiltro = async () => {
    try {
        const cryptos = await Crypto.findAll({
            where:{
                valor:{$gte:100}
            }
        })
        return cryptos
    } catch(err) {
        console.error(err)
    }
}

module.exports = {create, list, listFiltro}
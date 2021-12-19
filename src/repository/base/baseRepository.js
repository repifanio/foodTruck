const { readFile } = require('fs/promises')

class BaseReposity {
    constructor({file}){
        this.file = file
    }

    async find(itemId) {
        const content = JSON.parse(await readFile(this.file))

        if (!itemId) return content 

        return content.find(({ id }) => itemId === id)
    }

    async findByQrCode(link) {
        const content = JSON.parse(await readFile(this.file))

        if (!link) return 

        return content.find(({ linkQrCode }) => link === linkQrCode)
    }
}

module.exports = BaseReposity
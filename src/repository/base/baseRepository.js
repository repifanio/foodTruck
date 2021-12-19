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
}

module.exports = BaseReposity
const Base = require('./base/base')

class Catalog extends Base{
    constructor({id, name, image, linkQrCode, idItems}){
        super({id, name, image, linkQrCode})

        this.idItems = idItems;
    }
}

module.exports = Catalog
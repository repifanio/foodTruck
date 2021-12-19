const Base = require('./base/base')

class PointOfSale extends Base {
    constructor({id, name, image, linkQrCode, isOpen, idCatalog}){
        super({id, name, image, linkQrCode})

        this.isOpen = isOpen
        this.idCatalog = idCatalog
    }
}

module.exports = PointOfSale
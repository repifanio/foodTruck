const BaseReposity = require('./../repository/base/baseRepository')

class CatalogService {
    constructor({ catalog }){
        this.catalogRepository = new BaseReposity({ file: catalog })
    }

    async loadCatalogByQrCode(link){
        const item = await this.catalogRepository.findByQrCode(link)

        if (!item) return 'Invalid link to search this item'

        return item
    }
}

module.exports = CatalogService
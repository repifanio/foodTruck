const {it, describe, before, beforeEach, afterEach} = require('mocha')
const CatalogService = require('../../src/services/catalogService')

const { join } = require('path')
const { expect } = require('chai')
const sinon = require('sinon')

const catalogDatabase = join(__dirname, '..', '..', 'database', 'catalog.json')


const mocks = {
    validCatalog: require('./../mocks/validCatalog.json')
}

describe('Suit of tests catalog', () => {
    let sandbox = {}
    let catalogService2 = {}
    before(() => {
        catalogService2 = new CatalogService({
            catalog: catalogDatabase
        })
    })

    beforeEach(() => {
        sandbox = sinon.createSandbox()
    })

    afterEach(() => {
        sandbox.restore()
    })


    it('load a catalog of a point of sale by a valid link of qrcode', async () => {
        const catalogValid = mocks.validCatalog
        const link = catalogValid.linkQrCode

        sandbox.stub(
            catalogService2.catalogRepository,
            catalogService2.catalogRepository.findByQrCode.name
        ).resolves(catalogValid)

        const catalog = await catalogService2.loadCatalogByQrCode(link)

        expect(catalogService2.catalogRepository.findByQrCode.calledWithExactly(link)).to.be.ok
        expect(catalog.catalog).to.be.equals(mocks.validCatalog.validCatalog)
    })

    it('Fail on load catalog with a invalid link of qrcode', async () => {
        const MESSAGE_RETURN = 'Invalid link to search this item'
       
        sandbox.stub(
            catalogService2.catalogRepository,
            catalogService2.catalogRepository.findByQrCode.name
        ).resolves(MESSAGE_RETURN)
        
        const catalog = await catalogService2.loadCatalogByQrCode('http://invalidLink.com')
        const messagReturn = MESSAGE_RETURN

        expect(messagReturn).to.be.equals(catalog)
    })
})

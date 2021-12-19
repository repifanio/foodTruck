const {describe, it, before, beforeEach} = require('mocha')
const pointOfSaleService = require('../../src/services/pointOfSalesService')
const { join } = require('path')
const { expect } = require('chai')

const pointOfSaleDatabase = join(__dirname, '..', '..', 'database', 'pointsOfSale.json')

const mocks = {
    validPointOfSales: require('./../mocks/validPointOfSale.json')
}

describe('Suit of tests pointOfSales', () => {
    let pointOfSaleServiceInstance = {}
    before(() => {
        pointOfSaleServiceInstance = new pointOfSaleService({
            pointsOfSale: pointOfSaleDatabase
        })
    })
    it('test', () => {
        
    })
})
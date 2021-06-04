const mocha = require('mocha');
const chai = require('chai');
const {calculateFare} = require('../utils/fareUtils');

let expect = chai.expect;

describe('fareUtils',()=>{

    // writing different tests for calculation of fare
    it('fare should be 100 Rs for 10Km,0min',()=>{
        let fare = calculateFare(10,0);
        expect(fare).to.equal(100);
    })

    it('fare should be 100 Rs for 5Km,20min',()=>{
        let fare = calculateFare(5,20);
        expect(fare).to.equal(55);
    })

    it('fare should be 100 Rs for 20Km,20min',()=>{
        let fare = calculateFare(20,20);
        expect(fare).to.equal(205);
    })


})
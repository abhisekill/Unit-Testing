const request = require('request');
const mocha = require('mocha');
const chai = require('chai');
const server = require('../server');

let app;
const expect = chai.expect;

describe('server',()=>{

    // start the server before running the tests
    before(()=>{
        app = server.listen(8080);
    })
    // tests 
    it('show fixed price as Rs50',(done)=>{
        request('http://localhost:8080/rates', function (error, response, body) {
            const rates = JSON.parse(body);
            expect(rates.fixedPrice).to.equal(50);
            done();
        });
    })
    // stop the server after all the tests done
    after(()=>{
        app.close();
    })
})
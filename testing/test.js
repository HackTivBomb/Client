var chai = require('chai')
  , chaiHttp = require('chai-http')
  , expect = chai.expect
  , should = chai.should

chai.use(chaiHttp);
var database = firebase.database();


describe('check connetion with firebase',function(done){
    it('show 200 status when connected',done => {
        chai.request('http://google.com')
        .get('/')
        .end((err,res) => {
            expect(res).to.have.status(200)
            done()
        })
    })
})
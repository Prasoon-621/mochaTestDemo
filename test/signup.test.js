const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = chai;
const server = require('../server');

chai.use(chaiHttp);

describe('API TESTING', () => {

    it('API 1: /api/signup', async () => {
        const userData = {
            "name": 'Manu',
            "password": '12345',
            "email": 'dfsdf@gmail',
        };
        const res = await chai.request(server).post('/api/signup').send(userData);
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('_id');
    });
});










      // expect(response).to.have.status(201);
      // expect(response.body).to.have.property('user');
      // expect(response.body.user).to.have.property('id');
      // expect(response.body.user.username).to.equal(userData.username);
      // expect(response.body.user.email).to.equal(userData.email);

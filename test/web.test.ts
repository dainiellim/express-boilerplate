import { expect } from 'chai';
import request from 'supertest';
import app from "../src/app";


describe('Express App', () => {
    it('should respond with a string', async () => {
        const response = await request(app).get('/');
        expect(response.status).to.equal(200);
        expect(response.text).to.equal('Hello, this is a simple Express.js server!');
    });
});
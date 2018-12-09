import {FleetController} from '../controllers/fleet.controller';
import {FleetService} from '../services/fleet.services';
const httpMocks = require('node-mocks-http');

const response = httpMocks.createResponse();

describe('FleetController', () => {
    let fleetController: FleetController;
    let fleetService: FleetService;

    beforeEach(() => {
        fleetService = new FleetService();
        fleetController = new FleetController(fleetService);
    });
    describe('post', () => {
        it('should create a new fleet', async () => {
            const result = ['test'];
            jest.spyOn(fleetService, 'create').mockImplementation(() => result);

            expect(await fleetController.post(response)).toBe(result);
        });
    });
    describe('get', () => {
        it('should get all fleets', async () => {
            const result = ['test'];
            jest.spyOn(fleetService, 'findAll').mockImplementation(() => result);

            expect(await fleetController.findAll(response)).toBe(result);
        });
    });
    describe('update', () => {
        it('should get all fleets', async () => {
            const result = ['test'];
            jest.spyOn(fleetService, 'update').mockImplementation(() => result);

            expect(await fleetController.update(response)).toBe(result);
        });
    });
    describe('get fleet by id', () => {
        it('should get fleet by id', async () => {
            const result = ['test'];
            jest.spyOn(fleetService, 'getfleetById').mockImplementation(() => result);

            expect(await fleetController.findFleetById(response)).toBe(result);
        });
    });
});

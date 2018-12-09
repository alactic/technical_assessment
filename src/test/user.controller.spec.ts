import {UserController} from '../controllers/user.controller';
import {UserService} from '../services/user.service';
const httpMocks = require('node-mocks-http');

const response = httpMocks.createResponse();

describe('UserController', () => {
    let userController: UserController;
    let userService: UserService;

    beforeEach(() => {
        userService = new UserService();
        userController = new UserController(userService);
    });
    describe('post', () => {
        it('should create a new user', async () => {
            const result = ['test'];
            jest.spyOn(userService, 'create').mockImplementation(() => result);

            expect(await userController.post(response)).toBe(result);
        });
    });
    describe('get', () => {
        it('should get all users', async () => {
            const result = ['test'];
            jest.spyOn(userService, 'findAll').mockImplementation(() => result);

            expect(await userController.findAll(response)).toBe(result);
        });
    });
    describe('update', () => {
        it('should get all users', async () => {
            const result = ['test'];
            jest.spyOn(userService, 'update').mockImplementation(() => result);

            expect(await userController.update(response)).toBe(result);
        });
    });
    describe('get user by id', () => {
        it('should get user by id', async () => {
            const result = ['test'];
            jest.spyOn(userService, 'getUserById').mockImplementation(() => result);

            expect(await userController.findUserById(response)).toBe(result);
        });
    });
    describe('remove user by id', () => {
        it('should remove user by id', async () => {
            const result = ['test'];
            jest.spyOn(userService, 'remove').mockImplementation(() => result);

            expect(await userController.removeUser(response)).toBe(result);
        });
    });
});

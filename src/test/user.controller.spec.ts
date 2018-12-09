import {UserController} from "../controllers/user.controller";
import {UserService} from "../services/user.service";
const httpMocks = require('node-mocks-http');


const request = httpMocks.createRequest({
    method: 'POST',
    url: '/users',
});
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
});

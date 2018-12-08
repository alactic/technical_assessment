import {UserController} from "../src/controllers/user.controller";
import {UserService} from "../src/services/user.service";

describe('UserController', () => {
    let userController: UserController;
    let userService: UserService;

    beforeEach(() => {
        userService = new UserService();
        userController = new UserController(userService);
    });

    describe('findAll', () => {
        it('should return an array of cats', async () => {
            const result = ['test'];
            jest.spyOn(userService, 'findAll').mockImplementation(() => result);

            expect(await userController.findAll()).toBe(result);
        });
    });
});
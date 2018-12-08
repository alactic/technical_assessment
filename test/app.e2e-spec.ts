import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { CatsModule } from '../../src/cats/cats.module';
import { CatsService } from '../../src/cats/cats.service';
import { INestApplication } from '@nestjs/common';
import {AppModule} from "../src/app.module";
import {UserModule} from "../src/modules/user.module";
import {UserService} from "../src/services/user.service";

describe('Users', () => {
  let app: INestApplication;
  let userService = { findAll: () => ['test'] };

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [UserModule],
    })
        .overrideProvider(UserService)
        .useValue(userService)
        .compile();

    app = module.createNestApplication();
    await app.init();
  });

  it(`/GET users`, () => {
    return request(app.getHttpServer())
        .get('/users')
        .expect(200)
        .expect({
          data: userService.findAll(),
        });
  });

  afterAll(async () => {
    await app.close();
  });
});
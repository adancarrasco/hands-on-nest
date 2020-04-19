import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let usersController: UsersController;

  beforeEach(async () => {
    const users: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();
    usersController = users.get<UsersController>(UsersController);
  });

  describe('root', () => {
    it('should return "Hello World 2!"', () => {
      expect(JSON.stringify(usersController.getHello())).toBe(
        '[{"id": 1,"name": "Adan","lastName": "Carrasco","email": "adan.carrasco@hotmail.com","test": "test"}]',
      );
    });
  });
});

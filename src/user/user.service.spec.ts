import {Test, TestingModule} from "@nestjs/testing";
import {UserService} from "./user.service";
import {UserEntity} from "./user.entity";
import {TypeOrmModule} from "@nestjs/typeorm";
import ormconfig from "../ormconfig";


describe("userService", () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forRoot(ormconfig), TypeOrmModule.forFeature([UserEntity])],
      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});

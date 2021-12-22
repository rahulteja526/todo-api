import { Injectable } from '@nestjs/common';

// import { User } from './user.entity';
import { CreateUserDto } from './create-user.dto';

export type User = any;

@Injectable()
export class UsersService {

    private readonly users = [
        {
          userId: 1,
          username: 'john',
          password: 'changeme',
        },
        {
          userId: 2,
          username: 'maria',
          password: 'guess',
        },
      ];

      async findOne(username: string): Promise<User | undefined> {
        return this.users.find(user => user.username === username);
      }

//   async create(createUserDto: CreateUserDto) {
//     const user = User.create(createUserDto);
//     await user.save();

//     delete user.password;
//     return user;
//   }

//   async showById(id: number): Promise<User> {
//     const user = await this.findById(id);

//     delete user.password;
//     return user;
//   }

//   async findById(id: number) {
//     return await User.findOne(id);
//   }

//   async findByEmail(email: string) {
//     return await User.findOne({
//       where: {
//         email: email,
//       },
//     });
//   }

}
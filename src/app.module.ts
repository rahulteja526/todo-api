import { Module, DynamicModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Todos } from './todos/todos.entity';
import { TodosModule } from './todos/todos.module';
import { UsersModule } from './users/users.module';
import { User } from './users/user.entity';
import { AuthModule } from './auth/auth.module';
import { ConnectionOptions } from 'typeorm';

const entities = [User,Todos];

@Module({})
export class AppModule {
  static forRoot(connOptions: ConnectionOptions): DynamicModule {
    return {
      module: AppModule,
      controllers: [AppController],
      imports: [
        AuthModule,
        TodosModule,
        UsersModule,
        TypeOrmModule.forRoot(connOptions),
      ],
      providers: [AppService],
    };
  }
}

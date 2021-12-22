import { PrimaryColumn, BaseEntity, BeforeInsert, Column, CreateDateColumn, Entity, UpdateDateColumn, OneToMany } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { Todos } from '@todos/todos.entity';
  
  @Entity()
  export class User extends BaseEntity {
    @PrimaryColumn()
    id: string;
  
    @Column({ unique: true })
    username: string;
  
    @Column()
    password: string;
  
    @Column()
    @CreateDateColumn()
    createdAt: Date;
  
    @Column()
    @UpdateDateColumn()
    updatedAt: Date;
  
    @BeforeInsert()
    async hashPassword() {
      this.password = await bcrypt.hash(this.password, 8);
    }
  
    async validatePassword(password: string): Promise<boolean> {
      return bcrypt.compare(password, this.password);
    }

    @OneToMany(type => Todos, todos => todos.user) todos: Todos[];
  }
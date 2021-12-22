import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from '@user/user.entity';

@Entity()
export class Todos {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  todo: string;
  @Column()
  description: string;
  @Column({ default: false })
  isCompleted: boolean;
  @Column()
  user_id: string;
  @ManyToOne(type => User, user => user.todos) user: User;
}

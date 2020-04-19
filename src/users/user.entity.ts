import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 255 })
  lastName: string;

  @Column({ length: 255 })
  email: string;

  @Column({ length: 40 })
  test: string;
}

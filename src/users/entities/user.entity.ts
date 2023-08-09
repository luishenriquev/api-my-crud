import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 15 })
  cpf: string;

  @Column({ length: 110 })
  email: string;

  @Column({ length: 110 })
  celular: string;
}

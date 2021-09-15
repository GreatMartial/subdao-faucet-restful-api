import * as bcrypt from 'bcrypt';
import { Exclude } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';
import { BeforeInsert, Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';


@Entity()
export class User {

    @PrimaryColumn('uuid')
    public id: string;

    @IsNotEmpty()
    @Column({ address: 'address' })
    public address: string;

    @IsNotEmpty()
    @Column({ tokens: 'tokens' })
    public tokens: string;

    public toString(): string {
      return `${this.address} ${this.tokens}`;
    }

}

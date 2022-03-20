import { Column, Table, Model } from 'sequelize-typescript';

@Table({
  tableName: 'tweets',
})
export class Tweet extends Model<Tweet> {
  @Column
  text: string;
}

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { UpdateTweetDto } from './dto/update-tweet.dto';
import { Tweet } from './entities/tweet.entity';

@Injectable()
export class TweetsService {
  constructor(
    @InjectModel(Tweet)
    private tweetModel: typeof Tweet,
  ) {}

  create(createTweetDto: CreateTweetDto) {
    return this.tweetModel.create(createTweetDto);
  }

  findAll() {
    return this.tweetModel.findAll();
  }

  findOne(id: number) {
    return this.tweetModel.findByPk(id);
  }

  update(id: number, updateTweetDto: UpdateTweetDto) {
    return this.tweetModel.update(updateTweetDto, { where: { id: id } });
  }
}

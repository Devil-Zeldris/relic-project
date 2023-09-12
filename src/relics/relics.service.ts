import { Injectable } from '@nestjs/common';
import { CreateRelicDto } from './dto/create-relic.dto';
import { UpdateRelicDto } from './dto/update-relic.dto';

@Injectable()
export class RelicsService {
  create(createRelicDto: CreateRelicDto) {
    return 'This action adds a new relic';
  }

  findAll() {
    return `This action returns all relics`;
  }

  findOne(id: number) {
    return `This action returns a #${id} relic`;
  }

  update(id: number, updateRelicDto: UpdateRelicDto) {
    return `This action updates a #${id} relic`;
  }

  remove(id: number) {
    return `This action removes a #${id} relic`;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateDemoDto } from './dto/create-demo.dto';
import { UpdateDemoDto } from './dto/update-demo.dto';
import { Demo } from './entities/demo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
@Injectable()
export class DemoService {
  constructor(
    @InjectRepository(Demo) private readonly user: Repository<Demo>,
  ) {}
  async create(createDemoDto: CreateDemoDto) {
    const obj = new Demo();
    obj.name = createDemoDto.name;
    obj.age = createDemoDto.age;
    obj.like = createDemoDto.like;
    return await this.user.save(obj);
  }

  async findAll(query: { keyword: string }) {
    return await this.user.find({
      where: {
        name: Like(`%${query.keyword}%`),
      },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} demo`;
  }

  async update(id: string, updateDemoDto: UpdateDemoDto) {
    return await this.user.update(id, updateDemoDto)
  }

  async remove(id: string) {
    return await this.user.delete(id);
  }
}

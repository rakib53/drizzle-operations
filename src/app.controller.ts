import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { usersTable } from './db/schema/user.schema';
import { db } from './db';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  async createUser() {
    const result = await db.insert(usersTable).values({
      name: 'Rakib',
      email: 'rakib@gmail.com',
      age: 24,
    });
    return result;
  }
}

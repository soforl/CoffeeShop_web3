import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Render } from '@nestjs/common';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/")
  @Render("layouts/index.hbs")
  root() {
    return { }
  }

  @Get("/menu")
  @Render("layouts/menu.hbs")
  menu() {
    return { }
  }

  @Get("/about-us")
  @Render("layouts/about-us.hbs")
  aboutUs() {
    return { }
  }
}

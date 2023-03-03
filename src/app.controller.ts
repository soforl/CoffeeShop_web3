import { Controller, Get, UseInterceptors } from "@nestjs/common";
import { AppService } from './app.service';
import { Render } from '@nestjs/common';
import { isAuthorized } from "./utils";
import { Interceptor } from "./Interceptor";

@Controller()
@UseInterceptors(Interceptor)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/")
  @Render("layouts/index.hbs")
  root(request) {
    return {
      isAuthorized: isAuthorized(request)
    }
  }

  @Get("/menu")
  @Render("layouts/menu.hbs")
  menu(request) {
    return {
      isAuthorized: isAuthorized(request)
    }
  }

  @Get("/about-us")
  @Render("layouts/about-us.hbs")
  aboutUs(request) {
    return {
      isAuthorized: isAuthorized(request)
    }
  }
}

import {Body, Controller, Get, Req, Headers, Request} from '@nestjs/common';
import { AppService } from './app.service';
import DeviceDetector from "device-detector-js";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Get()
  getHello(@Request() req ,@Headers('user-agent') browser) {

    return this.appService.getHello();
  }
}

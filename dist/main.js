"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const helmet_1 = require("helmet");
const express_rate_limit_1 = require("express-rate-limit");
const cookieParser = require("cookie-parser");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(cookieParser());
    app.disable('x-powered-by');
    app.use((0, helmet_1.default)({
        crossOriginResourcePolicy: false,
    }));
    app.use((0, express_rate_limit_1.default)({
        windowMs: 15 * 60 * 1000,
        max: 99,
    }));
    app.enableCors({
        allowedHeaders: "*",
        origin: "*",
        methods: 'GET, POST,HEAD,PATCH,',
        credentials: true,
    });
    await app.listen(3000);
}
bootstrap().then(r => console.log('start server'));
//# sourceMappingURL=main.js.map
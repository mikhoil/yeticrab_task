import { NestFactory } from '@nestjs/core';
import {
    DocumentBuilder,
    SwaggerCustomOptions,
    SwaggerModule,
} from '@nestjs/swagger';
import { SwaggerTheme, SwaggerThemeNameEnum } from 'swagger-themes';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, { cors: true });

    const config = new DocumentBuilder()
        .setTitle('YetiCrab task (requests)')
        .setDescription('api docs with YetiCrab task (requests)')
        .setVersion('1.0')
        .addTag('requests')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    const theme = new SwaggerTheme();
    const options: SwaggerCustomOptions = {
        explorer: true,
        customCss: theme.getBuffer(SwaggerThemeNameEnum.DARK),
    };
    SwaggerModule.setup('api', app, document, options);

    await app.listen(3000);
}
bootstrap();

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger/dist';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './core/filter/index';
import { createDocument } from './swagger/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

        app.useGlobalPipes(
          new ValidationPipe({
            transform : true ,
          }),
        );
        // app.useGlobalFilters(new HttpExceptionFilter());
        //app.use(Logger);
        
        // app.setGlobalPrefix('api/v1');
        // SwaggerModule.setup('api' ,app , createDocument(app));
  await app.listen(3000); 
}
bootstrap();

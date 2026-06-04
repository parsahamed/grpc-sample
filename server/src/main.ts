import 'reflect-metadata';
import { join } from 'node:path';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: 'user',
      protoPath: join(__dirname, '../../proto/user.proto'),
      url: '0.0.0.0:50051',
    },
  });

  await app.listen();
  console.log('NestJS gRPC server is running on 0.0.0.0:50051');
}

bootstrap().catch((error) => {
  console.error(error);
  process.exit(1);
});

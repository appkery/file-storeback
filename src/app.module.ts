import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { UsersModule } from './users/users.module';
import { User } from './users/entities/user.entity';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
        outputAs: 'class'
      },
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'admin',
      password: 'Qwer!234',
      database: 'file_storeback',
      // entities: [
      //   User
      // ],
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}

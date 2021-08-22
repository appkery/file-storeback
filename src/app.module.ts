import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import GraphQLJSON from 'graphql-type-json';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { UsersModule } from './users/users.module';
import { RolesModule } from './roles/roles.module';
import { OrdersModule } from './orders/orders.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'admin',
      password: 'Qwer!234',
      database: 'file_storeback',
      autoLoadEntities: true,
      synchronize: true,
      keepConnectionAlive: true,
    }),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      resolvers: { Json: GraphQLJSON },
    }),
    UsersModule,
    AuthModule,
    RolesModule,
    OrdersModule,
  ],
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}

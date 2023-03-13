import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';


// MongoDb

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/test' , { useNewUrlParser : true }),
  ],
  controllers: [],
  providers: [],
})
export class DatabaseModule {}

// MySql & TypeOrm

// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { User } from './entity/user.entity';
// import { Customer } from './entity/customer.entity';

// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'mysql',
//       host: 'localhost',
//       port: 3306,
//       username: 'root',
//       password: 'root',
//       database: 'test',
//       entities: [User , Customer],
//       synchronize: true,
//     }),
//   ],
// })
// export class DatabaseModule {}
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { DemoModule } from './demo/demo.module';
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql', //数据库类型
    username: 'root', //账号
    password: '12345678', //密码
    host: 'localhost', //host
    port: 3306, //端口
    database: 'nest_curd_demo', //库名
    entities: [__dirname + '/**/*.entity{.ts,.js}'], //实体文件
    retryDelay: 500, //充重试连接数据库的间隔时间
    retryAttempts: 10, //重试连接数据可的次数
    synchronize: true,
    autoLoadEntities: true, //如果是true将自动加载实体 forFeature()方法注册的每一个实体都将自动添加到配置对象的实体数组中
  }), DemoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Postagem } from 'src/Postagem/entities/postagem.entity';
import { Tema } from 'src/Tema/entities/tema.entity';
import { Usuario } from 'src/usuario/entities/usuario.entity';

@Injectable()
export class DevService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'rootroot',
      database: 'blogpessoal',
      entities: [Postagem, Tema, Usuario],
      synchronize: true,
    };
  }
}

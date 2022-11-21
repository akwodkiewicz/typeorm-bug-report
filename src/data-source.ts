import { join } from "path";
import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import { SnakeNamingStrategy } from "typeorm-naming-strategies";

export const dataSourceConfig: DataSourceOptions = {
  type: "sqlite",
  database: join(__dirname, "..", "example.sqlite3"),
  synchronize: true,
  dropSchema: true,
  logging: true,
  entities: [join(__dirname, "./**/*.entity.{ts,js}")],
  migrations: [join(__dirname, "./**/migrations/*.{ts,js}")],
  namingStrategy: new SnakeNamingStrategy(),
};

export const dataSource = new DataSource(dataSourceConfig);

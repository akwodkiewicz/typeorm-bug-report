# Typeorm Bug Report Reproduction Repo

This repository is a minimal, complete and verifiable example of a bug I stumbled upon when working with typeorm.

## How To Use This Repository

There are 2 branches:

- working

- not-working

The `working` branch contains a version of the project where the primary key columns of entities are typed as `string`s.

The `not-working` branch differs from the first branch only by changing the typing of the id columns to custom objects that serve as a box around a string value.

## How To Run The Example

Assuming you are using `yarn` package manager, run

```bash
yarn install
```

to install all necessary dependencies and then run

```bash
yarn start
```

Depending on what branch you're running the script, you should see in your console either a log with a stringified entity that was inserted during the program execution or an `TypeError` like the one below:

```
TypeError: Cannot read properties of undefined (reading 'value')
    at Object.to (/home/xxx/typeorm-example/src/entities/post.entity.ts:31:19)
    at Function.transformTo (/home/xxx/typeorm-example/src/util/ApplyValueTransformers.ts:28:28)
    at SqliteDriver.preparePersistentValue (/home/xxx/typeorm-example/src/driver/sqlite-abstract/AbstractSqliteDriver.ts:319:44)
    at /home/xxx/typeorm-example/src/query-builder/InsertQueryBuilder.ts:717:56
    at Array.forEach (<anonymous>)
    at /home/xxx/typeorm-example/src/query-builder/InsertQueryBuilder.ts:688:25
    at Array.forEach (<anonymous>)
    at InsertQueryBuilder.createValuesExpression (/home/xxx/typeorm-example/src/query-builder/InsertQueryBuilder.ts:687:23)
    at InsertQueryBuilder.createInsertExpression (/home/xxx/typeorm-example/src/query-builder/InsertQueryBuilder.ts:406:39)
    at InsertQueryBuilder.getQuery (/home/xxx/typeorm-example/src/query-builder/InsertQueryBuilder.ts:39:21)
```

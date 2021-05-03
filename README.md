# explore-server

egg尝试搭建博客网站

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### 开发运行

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```
### 构建
进入项目文件目录,运行以下命令，然后在output文件里找到构建好的文件，上传到服务器解压即可部署运行
注意：有自定的文件夹一定要先建好，不然报错
```bash
$ npm install --production
$ tar -zcvf ./output/release.tgz .
```
构建时如要排除某些文件请使用以下命令
```bash
$ npm install --production
$ tar -zcvf ./output/release.tgz --exclude=.idea --exclude=.git --exclude=.github --exclude=output --exclude=node_modules --exclude=database --exclude=.sequlizerc --exclude=.gitignore --exclude=.eslintrc --exclude=.eslintignore --exclude=logs  .
$ tar -xzvf release.tgz //解压tar.gz
```

### 运行

```bash
$ npm start
$ npm stop
```

### 脚本运行

- Use `npm run lint` 检查代码格式.
- Use `npm test` 运行单元测试.
- Use `npm run autod` 自动检测依赖项升级，请参阅[autod](https://www.npmjs.com/package/autod) 了解更多细节.

### 数据库管理
安装 sequelize-cli，本项目已安装,
```bash
$ npm install --save-dev sequelize-cli
```
初始化sequelize-cli
根目录增加配置文件`.sequelizerc`，并写入以下代码
```javascript 1.8
'use strict';

const path = require('path');

module.exports = {
  config: path.join(__dirname, 'database/config.json'), // 数据库配置文件
  'migrations-path': path.join(__dirname, 'database/migrations'), // 数据库建表 结构变更目录
  'seeders-path': path.join(__dirname, 'database/seeders'),
  'models-path': path.join(__dirname, 'app/model'),
};
```
初始化建表文件,migration所属文件， generate时间前缀， init-users文件名
```bash
$ npx sequelize migration:generate --name=init-users
```
数据库变更
指定运行环境需要在命令后加`--env production`
升级数据库
```bash
npx sequelize db:migrate
```
如果有问题需要回滚，可以通过 `db:migrate:undo` 回退一个变更
```bash
npx sequelize db:migrate:undo
```
可以通过 `db:migrate:undo:all` 回退到初始状态
```bash
npx sequelize db:migrate:undo:all
```
[egg]: https://eggjs.org

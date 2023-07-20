# terminal-chatbox
The terminal integrates openai to implement a chatbox
## 一：核心部分

1.pnpm init 

2.npm install -g typescript   tsc -v

3.tsc --init

4.![image-20230718215855415](/Users/Alex/Library/Application Support/typora-user-images/image-20230718215855415.png)

创建下目录结构，ts-node src/index.ts 测试一下

5.pnpm i openai 

import {Configuration,OpenAIApi} from 'openai';去引入

6.关于环境变量，导入dotenv这个库 pnpm i dotenv

process报错：npm i --save-dev @types/node

## 二：使用提问

1.pnpm i readline-sync

找不到声明文件：pnpm install --save-dev @types/readline-sync 

2.pnpm i colors

## 三：实现退出功能exit替换->ctrl c

```typescript
if (userInput === "quit") {
      process.exit();
    }
```

## 四：重构（将所有功能划分单一职责）

## 五：加载

1.pnpm i ora

2.es module不支持requeir 的，因为ts-node无法进行转换	，借助打包工具

对于库最佳选择：pnpm i rollup -D 

Type:module

pnpm i @rollup/plugin-typescript -D 

Tsconfig: "module": "NodeNext",  

3.解决换行

/r stop ,pnpm build -w 进入watch模式

## 全局调用

bin设置："bin": "./dist/bundler.js",

pnpm link --global 注册全局


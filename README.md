# terminal-chatbox
The terminal integrates openai to implement a chatbox

项目中.env文件自己创建，放入自己的key。

关于basePath，可以自己使用国内代理，项目中是我用了cloudflare做了接口转发，感兴趣的小伙伴可以自行探索一下，3美刀就可以进行搭建部署

这里都是通过	阿崔cxr ， 崔大的教学进行实现，特此感谢崔大
- chatGPT api
- 
- readlineSync
- 
- dotenv 环境变量的设置
- 
- colors 给字体来点颜色
- 
- ora 终端显示进度条动画
- 
- rollup 打包库
- 
- typescript
- 
- 重构技巧
- 
- 模块化思维
- 
- 全局 cli

延伸拓展部分：用户可以手动设置basepath或者apikey等等可以自行探索
## 一：核心部分

1.pnpm init 

2.npm install -g typescript   tsc -v

3.tsc --init


创建下目录结构，ts-node src/index.ts 测试一下

4.pnpm i openai 

import {Configuration,OpenAIApi} from 'openai';去引入

5.关于环境变量，导入dotenv这个库 pnpm i dotenv

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


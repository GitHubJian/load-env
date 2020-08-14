# 环境变量和模式

## 环境变量

你可以替换你的项目根目录中的下列文件来指定环境变量：

```
.env                # 在所有的环境中被载入
.env.local          # 在所有的环境中被载入，但会被 git 忽略
.env.[mode]         # 只在指定的模式中被载入
.env.[mode].local   # 只在指定的模式中被载入，但会被 git 忽略
```

一个环境文件只包含环境变量的“键=值”对：

```
FOO=bar
LOADENV_APP_SECRET=secret
```

> 环境加载属性  
> 为一个特定模式准备的环境文件 (例如 .env.production) 将会比一般的环境文件 (例如 .env) 拥有更高的优先级。

## 模式

你可以通过为 .env 文件增加后缀来设置某个模式下特有的环境变量。比如，如果你在项目根目录创建一个名为 .env.development 的文件，那么在这个文件里声明过的变量就只会在 development 模式下被载入。

## 示例：Staging 模式

假设我们有一个应用包含以下 .env 文件：

```
LOADENV_APP_TITLE=My App
```

和 .env.staging 文件：

```
NODE_ENV=production
VUE_APP_TITLE=My App (staging)
```

-   `loadEnv()` 会加载可能存在的 `.env`、`.env.production` 和 `.env.production.local` 文件然后构建出生产环境应用
-   `loadEnv("staging")` 会在 staging 模式下加载可能存在的 `.env`、`.env.staging` 和 `.env.staging.local` 文件然后构建出生产环境应用

## 只在本地有效的变量

有的时候你可能有一些不应该提交到代码仓库中的变量，尤其是当你的项目托管在公共仓库时。这种情况下你应该使用一个 `.env.local` 文件取而代之。本地环境文件默认会被忽略，且出现在 `.gitignore` 中。

`.local` 也可以加在指定模式的环境文件上，比如 `.env.development.local` 将会在 development 模式下被载入，且被 git 忽略。

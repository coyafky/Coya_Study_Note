

## NPM介绍

NPM，全称为Node Package Manager，是JavaScript运行时Node.js的默认包管理器。它允许JavaScript开发者轻松地共享和使用各种有用的包，如lodash和moment等。NPM是全球最大的软件仓库之一，拥有超过130万个包，每周下载量超过160亿次[freecodecamp.org](https://www.freecodecamp.org/news/what-is-npm-a-node-package-manager-tutorial-for-beginners/)。

NPM主要通过命令行界面（CLI）工具进行包的发布和下载。你可以将npmjs.com视为一个仓库，它接收包作者（npm包作者）的包并将这些包分发给用户（npm包用户）。为了便于这个过程，npmjs.com雇佣了一支工作勤奋的工作人员（npm CLI），他们会被分配为每个npmjs.com客户的个人助手[freecodecamp.org](https://www.freecodecamp.org/news/what-is-npm-a-node-package-manager-tutorial-for-beginners/)。

在每个JavaScript项目中，无论是Node.js还是浏览器应用程序，都可以作为npm包进行范围定义，并且有一个package.json文件来描述项目。当运行npm init初始化一个JavaScript/Node.js项目时，会生成package.json，其中包含了开发者提供的基本元数据，如项目的版本[freecodecamp.org](https://www.freecodecamp.org/news/what-is-npm-a-node-package-manager-tutorial-for-beginners/)。

另一个重要的文件是package-lock.json，它描述了在npm JavaScript项目中使用的确切版本的依赖项。package-lock.json通常由npm install命令生成，并由npm CLI工具读取，以确保项目的构建环境可以复制[freecodecamp.org](https://www.freecodecamp.org/news/what-is-npm-a-node-package-manager-tutorial-for-beginners/)。

在npm中，有两种类型的依赖项：dependencies和devDependencies。dependencies字段包含了项目运行所需的所有第三方包，而devDependencies属性包含了只在开发过程中需要的包。这两种类型的依赖项可以通过npm install命令和--save和--save-dev标志进行安装[hostinger.com](https://www.hostinger.com/tutorials/what-is-npm)。

在使用npm之前，确保已经安装了node.js。可以通过在终端中运行`node -v`命令来检查node.js的版本。如果尚未安装node.js，可以从官方网站下载并安装[hostinger.com](https://www.hostinger.com/tutorials/what-is-npm)。

npm的主要命令包括：

- `npm install <package-name>`：安装指定的npm包[nodesource.com](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/)。
- `npm update`：检查所有包以查找满足你的版本约束的新版本[nodejs.org](https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager)。
- `npm install -g [package name]`：全局安装npm包，使其可以从计算机的任何目录访问[kinsta.com](https://kinsta.com/knowledgebase/what-is-npm/)。

总的来说，npm是一个强大的工具，它使得JavaScript开发者可以轻松地共享和使用各种有用的包，从而大大提高了开发效率。





## npm CLI

Phind

npm CLI（命令行界面）工具是一个用于执行各种npm命令的工具。这些命令包括安装和卸载包，检查npm版本，运行包脚本，创建package.json文件等[kinsta.com](https://kinsta.com/knowledgebase/what-is-npm/)。

以下是一些常用的npm CLI命令：

- `npm init`：用于初始化一个项目。当你运行这个命令时，它会创建一个package.json文件。你会被提示提供关于你正在初始化的项目的一些信息，包括项目的名称，许可证类型，版本等[kinsta.com](https://kinsta.com/knowledgebase/what-is-npm/)。

- `npm install <package-name>`：用于安装指定的npm包。如果你想要全局安装npm包，使其可以从计算机的任何目录访问，你可以使用`npm install -g [package name]`命令[kinsta.com](https://kinsta.com/knowledgebase/what-is-npm/)。

- `npm uninstall -g [package name]`：用于卸载全局安装的npm包[kinsta.com](https://kinsta.com/knowledgebase/what-is-npm/)。

- `npm update`：用于更新npm包到其最新版本[kinsta.com](https://kinsta.com/knowledgebase/what-is-npm/)。

- `npm list -g`：用于列出全局安装的npm包[kinsta.com](https://kinsta.com/knowledgebase/what-is-npm/)。

- `npm config set prefix [new directory path]`：用于更改npm包的默认安装位置[kinsta.com](https://kinsta.com/knowledgebase/what-is-npm/)。

- `npm version`：显示你计算机上安装的npm的当前版本[kinsta.com](https://kinsta.com/knowledgebase/what-is-npm/)。

- `npm restart`：用于重启一个包。你可以在你想要停止并重启特定项目时使用这个命令[kinsta.com](https://kinsta.com/knowledgebase/what-is-npm/)。

这些命令可以在终端或命令行工具中运行，以执行各种npm操作。在Windows计算机上，我们通常将命令行界面称为命令提示符。在Mac计算机上，它被称为终端[kinsta.com](https://kinsta.com/knowledgebase/what-is-npm/)。



​      npm init 初始化项目，创建package.json文件（需要回答问题）

​        npm init -y 初始化项目，创建package.json文件（所有值都采用默认值）

​        npm install 包名 将指定包下载到当前项目中

​            install时发生了什么？

​                ① 将包下载当前项目的node_modules目录下

​                ② 会在package.json的dependencies属性中添加一个新属性

​                    "lodash": "^4.17.21"

​                ③ 会自动添加package-lock.json文件

​                    帮助加速npm下载的，不用动他

​                

​        npm install 自动安装所有依赖

​        npm install 包名 -g 全局安装

​            \- 全局安装是将包安装到计算机中

​            \- 全局安装的通常都是一些工具

​		引入从npm下载的包时，不需要书写路径，直接写包名即可





​    package.json
​        scripts:
            - 可以自定义一些命令
                        - 定义以后可以直接通过npm来执行这些命令
                        - start 和 test 可以直接通过 npm start npm test执行
                                    - 其他命令需要通过npm run xxx 执行

​    npm镜像
        - npm的仓管的服务器位于国外，有时候并不是那么的好使
                - 为了解决这个问题，可以在npm中配置一个镜像服务器
                - 镜像的配置：
                ① 在系统中安装cnpm（我自己不太推荐大家使用）
                    npm install -g cnpm --registry=https://registry.npmmirror.com
                ② 彻底修改npm仓库地址（我个人习惯的使用方式）
                    npm set registry https://registry.npmmirror.com
                    - 还原到原版仓库
                        npm config delete registry



npm仓库是一个包含所有已发布的npm包的集中存储库。它是一个数据库，包含了每个JavaScript包的软件和元数据。开源开发者和在公司工作的开发者都使用npm仓库来贡献包给整个社区，或者给他们的组织的成员，以及下载包用于他们自己的项目[docs.npmjs.com](https://docs.npmjs.com/about-the-public-npm-registry/)。

npm仓库中的每个包都有一个唯一的名称，并且包含了一个package.json文件，该文件描述了包的元数据，如包的名称、版本、描述、作者、许可证等。这个文件也定义了包的依赖关系，即它依赖于哪些其他的包[blog.skay.dev](https://blog.skay.dev/overview-of-npm-node-package-manager)。

npm仓库是开源的，任何人都可以在上面发布自己的包。你可以通过npm CLI工具来发布和管理你的包。当你发布一个包时，你需要提供一些信息，如包的名称、版本、描述等。你还需要提供一个package.json文件，该文件描述了你的包的元数据和依赖关系[blog.skay.dev](https://blog.skay.dev/overview-of-npm-node-package-manager)。

npm仓库也支持版本控制。每个包都有一个版本号，通常遵循语义版本控制（Semantic Versioning）规则。版本号由三部分组成：主版本号、次版本号和修订号。当你对包进行重大改变时，主版本号会增加；当你添加新的功能但不破坏现有的API时，次版本号会增加；当你进行了向后兼容的修复时，修订号会增加[blog.skay.dev](https://blog.skay.dev/overview-of-npm-node-package-manager)。

总的来说，npm仓库是一个强大的资源，它为JavaScript开发者提供了一个方便的方式来共享和使用各种有用的包。



Phind

在Node.js中，`package.json`文件是项目的核心文件，它是一个包含项目元数据的JSON文件。它包含了项目的名称、版本、描述、作者、许可证等信息，以及项目的依赖关系[geeksforgeeks.org](https://www.geeksforgeeks.org/node-js-package-json/)。

以下是一些常见的`package.json`文件中的属性：

- `name`：项目的名称[nodejs.org](https://nodejs.org/api/packages.html)。

- `version`：项目的版本号[nodesource.com](https://nodesource.com/blog/the-basics-of-package-json/)。

- `description`：项目的描述[nodesource.com](https://nodesource.com/blog/the-basics-of-package-json/)。

- `main`：项目的主入口文件。当模块被require时，这个文件的导出将被返回给Node.js应用[nodesource.com](https://nodesource.com/blog/the-basics-of-package-json-in-node-js-and-npm/)。

- `scripts`：定义了一些可以运行的npm脚本，例如`start`、`test`等[knowledgehut.com](https://www.knowledgehut.com/blog/web-development/package-json-scripts-node-js)。

- `dependencies`：项目的生产依赖，即项目运行所需要的包[nodesource.com](https://nodesource.com/blog/the-basics-of-package-json-in-node-js-and-npm/)。

- `devDependencies`：项目的开发依赖，即开发过程中需要的包[nodesource.com](https://nodesource.com/blog/the-basics-of-package-json-in-node-js-and-npm/)。

- `peerDependencies`：项目的同伴依赖，即项目需要的其他包的版本[nodesource.com](https://nodesource.com/blog/the-basics-of-package-json/)。

- `keywords`：项目的关键词，帮助人们在npm仓库中找到你的包[docs.npmjs.com](https://docs.npmjs.com/cli/v7/configuring-npm/package-json/)。

你可以使用`npm init`命令来创建一个`package.json`文件。这个命令会提示你输入一些信息，如项目的名称、版本、描述等，然后生成一个`package.json`文件[docs.npmjs.com](https://docs.npmjs.com/creating-a-package-json-file/)。

在`package.json`文件中，你可以使用`npm install <package-name>`命令来安装依赖，使用`npm update <package-name>`命令来更新依赖，使用`npm uninstall <package-name>`命令来卸载依赖[nodejs.org](https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager)。

总的来说，`package.json`文件是Node.js项目的重要组成部分，它描述了项目的元数据和依赖关系，使得开发者可以方便地管理和分享他们的项目。





其他包管理器


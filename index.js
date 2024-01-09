#! /usr/bin/env node

import chalk from 'chalk'

import { program } from 'commander'
import inquirer from 'inquirer'
import { exist } from './lib/exist.js'
import { myDownload } from './lib/download.js'
import ora from 'ora'
import { install } from './lib/install.js'

program.name('socket-server-cli').description('拉取SocketServer的脚手架').version('1.0.0')

program
  .command('create')
  .alias('c')
  .description('初始化SocketServer')
  .action(async () => {
    // 交互配置
    let res = await inquirer.prompt([
      {
        name: 'appName',
        type: 'input',
        message: '请输入项目名称:',
        default: 'SocketServer'
      }
    ])

    // appName是否存在
    await exist(res.appName);
    
    // 下载模板
    let spinner = ora('模板下载中...')
    spinner.start()
    let resDownload = await myDownload(res.appName)

    if (resDownload) {
      spinner.succeed(chalk.blue('模板下载成功'))
    } else {
      spinner.fail(chalk.red('模板下载失败，请重试******************'))
      return
    }

    // 安装依赖
    spinner = ora('依赖下载中...')
    spinner.start()
    let resInstall = await install(res.appName)
    if (resInstall === true) {
      spinner.succeed(chalk.blue('依赖下载成功'))
    } else {
      spinner.fail(chalk.red('依赖下载失败，请重试******************'))
      return
    }

    // 完成提示
    console.log(
      chalk.green(`socket-server-cli执行成功。\n请cd到${res.appName},执行node index.js启动服务器。`)
    )
  })

program
  .command('list')
  .alias('l')
  .description('查看SocketServer版本列表')
  .action(() => {})

program.parse(process.argv)

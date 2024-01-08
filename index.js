#! /usr/bin/env node

import chalk from 'chalk'

import { program } from 'commander'
import inquirer from 'inquirer'
import { myDownload } from './lib/download.js'

program.name('socket-server-cli').description('拉取SocketServer的脚手架').version('1.0.0')

program
  .command('create')
  .alias('c')
  .description('初始化SocketServer')
  .action(async () => {
    // 下载模板
    let res = await inquirer.prompt([
      {
        name: 'appName',
        type: 'input',
        message: '请输入项目名称:',
        default: 'SocketServer'
      }
    ])
    await myDownload(res.appName).catch((err) => {})

    console.log(chalk.green('模板下载成功！！！'))

    // 安装依赖
  })

program
  .command('list')
  .alias('l')
  .description('查看SocketServer版本列表')
  .action(() => {})

program.parse(process.argv)

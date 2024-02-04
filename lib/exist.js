import inquirer from 'inquirer'
import path from 'path'
import fs from 'fs'

/**
 * 目录是否存在
 * @param {*} folder
 */
export const exist = async function (folder) {
  let targetFolder = path.join(process.cwd(), folder)
  if (fs.existsSync(targetFolder)) {
    let res = await inquirer.prompt([
      {
        name: `ifExist`,
        message: `${folder}已存在，是否执行覆盖操作?`,
        type: 'confirm',
        default: true
      }
    ])

    if (res.ifExist === '是') {
      fs.rmdirSync(targetFolder)
      console.log('源目录已删除')
    } else {
      process.exit()
    }
  }
}

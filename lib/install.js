import { exec } from 'child_process'
import path from 'path'

/**
 * 在目录内安装依赖
 * @param {*} folder 
 * @returns 
 */
export const install = async function (folder) {
  let targetFolder = path.join(process.cwd(), folder)
  return new Promise((resolve, reject) => {
    let child_process = exec(`cd ${targetFolder} && npm install --registry=https://registry.npmmirror.com/`)
    child_process.stdout.on('data', function (data) {
      resolve(true)
    })
    child_process.stderr.on('data', function (data) {
      reject(data)
    })
  })
}

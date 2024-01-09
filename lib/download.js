import download from 'download-git-repo'
import path from 'path'

/**
 * 下载资源
 * @param {*} folder
 * @param {*} gitUrl
 */

export const myDownload = function (
  folder,
  gitUrl = 'https://github.com/tengzhang-china/socketServer.git#main'
) {
  let targetFolder = path.join(process.cwd(), folder)
  return new Promise((resolve) => {
    download(`direct:${gitUrl}`, targetFolder, { clone: true }, function (err) {
      if (err) {
        console.log(err);
        resolve(false)
      } else {
        resolve(true)
      }
    })
  })
}

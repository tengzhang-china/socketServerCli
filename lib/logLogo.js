import figlet from 'figlet'
import chalk from 'chalk'
export const logLogo = function (logo = 'SocketServerCli') {
  console.log(
    '\r\n' +
      chalk.white.bgBlueBright.bold(
        figlet.textSync(logo, {
          font: 'Standard',
          horizontalLayout: 'default',
          verticalLayout: 'default',
          width: 90,
          whitespaceBreak: false
        })
      )
  )
}

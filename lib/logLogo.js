import figlet from 'figlet'

export default function (logo = 'SocketServerCli') {
  console.log(
    '\r\n' +
      chalk.white.bgBlueBright.bold(
        figlet.textSync(logo, {
          font: 'Standard',
          horizontalLayout: 'default',
          verticalLayout: 'default',
          width: 90,
          whitespaceBreak: true
        })
      )
  )
}

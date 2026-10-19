const fs = require('fs')
const os = require('os')

const EventEmitter = require('events')
const { setInterval } = require('timers')

class Logger extends EventEmitter{
    log(message){
        this.emit('message', {message})
    }
}

const logger = new Logger()
const logFile = './eventLog.txt'

const logtoFile = (event) =>{
    const logMessage = `${new Date().toISOString()} - ${event.message}\n`
    fs.appendFileSync(logFile,logMessage)
}

logger.on('message', logtoFile)

setInterval(() => {
    const memoryusage = (os.freemem() / os.totalmem() * 100)
    logger.log(`Current Memory Usage: ${memoryusage.toFixed(2)}`)
},3000)

logger.log("Application started")
logger.log("Application event occured")
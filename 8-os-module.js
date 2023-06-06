const os=require('os')

//info about current user
const user=os.userInfo()
console.log(user)

//method tells system uptime in seconds
console.log(`the system uptime is ${os.uptime()} seconds`)

const currentOS={
    name:os.type(),
    release:os.release(),
    freeMem:os.freemem(),
    TotalMem:os.totalmem()
}
console.log(currentOS)
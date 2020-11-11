
const childProcess = require('child_process')


const command = 'cd infra/k8s && kubectl apply -f .'
childProcess.execSync(command, { cwd: command, env: process.env, stdio: 'inherit' })
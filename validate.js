var result = require('tv4').validateMultiple(require('.'), require('./schema'))

if (!result.valid) {
  process.stderr.write(JSON.stringify(result.errors, null, 2) + '\n')
  process.exit(1) }
else {
  process.stdout.write('Valid\n') }

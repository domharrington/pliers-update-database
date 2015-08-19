module.exports = task

var updateDatabase = require('pliers-update-database')

function task(pliers) {
  var databaseUrl = 'mongodb://localhost:27017/test'
    , updatePath = './database-updates'

  pliers('updateDatabase', updateDatabase(pliers, databaseUrl, updatePath))
}

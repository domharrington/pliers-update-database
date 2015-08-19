var DatabaseUpdates = require('database-updates')
  , MongoClient = require('mongodb').MongoClient

module.exports = function(pliers, databaseUrl, updatePath) {
  return updateDatabase

  function updateDatabase(done) {
    MongoClient.connect(process.env.MONGO_URL || databaseUrl, { 'native_parser': true }, function (err, db) {

      if (err) return pliers.logger.error(err)

      var updates = new DatabaseUpdates(
        { db: db
        , updatePath: updatePath
        , logger: pliers.logger
        })

      updates.on('end', function () {
        db.close(done)
      })
    })
  }
}

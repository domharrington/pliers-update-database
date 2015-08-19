# pliers-update-database

Pliers task to wrap common usage of the database-updates module

You must have a version of `mongodb` installed in the dependency tree that has a `MongoClient` class
available at `require('mongodb').MongoClient`.

[![dependency status](https://david-dm.org/domharrington/pliers-update-database.svg)](https://david-dm.org/domharrington/pliers-update-database)

## Installation

```
npm install --save pliers-update-database
```

## Usage
```js
module.exports = task

var updateDatabase = require('pliers-update-database')

function task(pliers) {
  var databaseUrl = 'mongodb://localhost:27017/test'
    , updatePath = './database-updates'

  pliers('updateDatabase', updateDatabase(pliers, databaseUrl, updatePath))
}
```

### var pliersTask = updateDatabase(pliers, databaseUrl, updatePath)
Options must include:

- `pliers` - a pliers instance
- `databaseUrl` - a mongodb uri connection string
  - This can be overridden if needed via `process.env.MONGO_URL`
- `updatePath` - the path to your [database-updates](https://github.com/domharrington/database-updates) files


## Credits
[Dom Harrington](https://github.com/domharrington/)

## License

ISC

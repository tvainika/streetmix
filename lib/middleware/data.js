'use strict'

var path = require('path')
var fs = require('fs')
var logger = require('../logger')()
var yaml = require('js-yaml')

// currently just loads the segment data in one file
// TODO: Read all of data directory and combine YAML files
var DATA_SOURCE = '/assets/data/segments/all.yml'

var compiledData

// Get document, or throw exception on error
try {
  compiledData = yaml.safeLoad(fs.readFileSync(path.join(process.cwd(), DATA_SOURCE), 'utf8'))
} catch (err) {
  logger.error(err)
}

module.exports = function (req, res, next) {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    return next()
  }

  if (req.fresh) {
    res.status(304).send()
  } else {
    // Note: Express will handle the ETag.
    res.set({
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=31536000'
    })
    res.status(200).send(compiledData)
  }
}

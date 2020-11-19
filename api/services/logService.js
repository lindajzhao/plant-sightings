'use strict'

const Log = require('../models/logModel')

exports.getAllLogs = async () => {
  try {
    const logs = await Log.find()

    return logs
  } catch (e) {
    throw e
  }
}

exports.createLog = async (newLog) => {
  const log = new Log(newLog)

  try {
    const doc = await log.save()
    return doc
  } catch (e) {
    throw e
  }
}

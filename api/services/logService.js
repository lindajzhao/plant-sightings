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

exports.deleteLog = async (logId) => {
  try {
    const doc = await Log.deleteOne({ _id: logId })

    return doc
  } catch (e) {
    throw e
  }
}

exports.updateExistingLog = async (logId, newAttrs) => {
  try {
    let log = await Log.findById(logId)

    if(!log) {
      return res.status(404).json({message: 'id not found'})
    }

    for (let key in newAttrs) {
       log[key] = newAttrs[key];
    }

    const updatedDoc = await log.save()

    return updatedDoc
  } catch (e) {
    throw e
  }
}

'use strict'

const fetch = require('node-fetch')
const { TREFLE_TOKEN } = require('../utils/constants')
const { transformTrefleObjToResponse } = require('../utils/trefleUtils')

exports.getTreflePlantsByQuery = async (query) => {
  try{
    const results = await fetch(`https://trefle.io/api/v1/plants/search?token=${TREFLE_TOKEN}&q=${query}`, {
      method: 'GET'
    })
    const { data } = await results.json()
    console.log('data from trefle', data)
    const transformedData = data.map(plant => transformTrefleObjToResponse(plant))

    return transformedData
  }
  catch(e) {
    throw e
  }
}

exports.getTreflePlantById = async (trefleId) => {
  try{
    const results = await fetch(`https://trefle.io/api/v1/plants/${trefleId}?token=${TREFLE_TOKEN}`, {
      method: 'GET'
    })
    const all = await results.json()
    console.log('gettting', all)
    // const transformedData = data.map(plant => transformTrefleObjToResponse(plant))

    // return transformedData
    return all
  }
  catch(e) {
    throw e
  }
}

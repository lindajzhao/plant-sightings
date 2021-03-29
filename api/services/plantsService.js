

const fetch = require('node-fetch')
const { TREFLE_TOKEN } = require('../utils/constants')
const { transformTrefleObjToResponse } = require('../utils/trefleUtils')

exports.getTreflePlantsByQuery = async (query) => {
  try{
    const results = await fetch(`https://trefle.io/api/v1/plants/search?token=${TREFLE_TOKEN}&q=${query}`, {
      method: 'GET'
    })
    const { data } = await results.json()
    console.log('tref', data)
    const transformedData = data.map(plant => transformTrefleObjToResponse(plant))

    return transformedData
  }
  catch(e) {
    throw e
  }
}

exports.getTreflePlant = async ({id, slug}) => {
  if (!id && !slug) {
    throw new Error('Missing ID or Slug')
  }
  console.log('slogg', id, slug)

  const endpoint = id ? `plants/${id}` : `species/${slug}`

  const results = await fetch(`https://trefle.io/api/v1/${endpoint}?token=${TREFLE_TOKEN}`, {
    method: 'GET'
  })

  return await results.json()
}

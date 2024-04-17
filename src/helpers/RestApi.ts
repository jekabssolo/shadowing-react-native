import { DOG_API_KEY } from './token'

export const API_BASE_URL = 'https://api.thedogapi.com/v1/'

function getApiRequest(path: string, headers?: object): Promise<any> {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(`${API_BASE_URL}${path}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': DOG_API_KEY,
          ...headers,
        },
      }).catch(error => {
        throw {
          path,
          error,
          headers: headers && {
            count: Object.keys(headers).length,
            size: JSON.stringify(headers).length,
          },
        }
      })

      const text = await response.text()
      const json = text && JSON.parse(text)

      const re = response.ok ? resolve : reject
      re(json)
    } catch (error) {
      reject(error)
    }
  })
}

export default { getApiRequest }

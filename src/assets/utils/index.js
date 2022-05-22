export const repeat = (data, callback) => {
  return data.map(callback).join('')
}
const data = require("../../data");

exports.handler = async function http (req) {
  return {
    statusCode: 200,
    headers: {
      'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
      'content-type': 'text/html; charset=utf8',
      'access-control-allow-origin': '*'
    },
    body: JSON.stringify(data.friends)
  }
}
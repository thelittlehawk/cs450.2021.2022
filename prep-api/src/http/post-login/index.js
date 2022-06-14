exports.handler = async function http (req) {
    const { username, password } = JSON.parse(req.body)
    let statusCode = 200
    if (username !== "user" || password !== "pass") statusCode = 401
    return {
      statusCode,
      headers: {
        'cache-control': 'no-cache, no-store, must-revalidate, max-age=0, s-maxage=0',
        'content-type': 'text/html; charset=utf8'
      },
      body: JSON.stringify({
          message: statusCode === 200 ? "OK": "UNAUTHORIZED"
      })
    }
  }
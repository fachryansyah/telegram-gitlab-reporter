require('dotenv').config()
const gitlabToken = process.env.GITLAB_TOKEN

module.exports = async (req, res, next) => {
  const token = req.headers['x-gitlab-token']
  if (token === gitlabToken) {
    return next()
  }else{
    return res.send('Token not valid')
  }
}
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 1337
const axios = require('axios')
const gitlabAuth = require('./middleware/gitlab-auth')
const template = require('./template')
const apiKey = process.env.TELEGRAM_APIKEY
const baseUrl = process.env.TELEGRAM_BASEURL
const chatId = process.env.CHAT_ID

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(gitlabAuth)

// ENDPOINT hook for receive data from gitlab
app.post('/hook', async (req, res) => {

  const owner = req.body.user_name
  const branch = req.body.project.default_branch
  const repo = req.body.project.name
  const repoUrl = req.body.project.web_url
  const commits = req.body.commits

  const message = await template.pushToRepo.generate({
    owner,
    branch,
    repo,
    repoUrl,
    commits
  })

  let uri = `${baseUrl + apiKey}/sendMessage?chat_id=${chatId}&text=${message}&parse_mode=MarkdownV2`

  axios.get(uri)
  .then((res) => {
    console.log(res.data.data)
  })
  .catch((err) => {
    console.log(err.response.data)
  })

  res.send('data received')
})

app.listen(port, () => console.log(`Bot listening at http://localhost:${port}`))
module.exports = {
  generate: async(payload) => {
    let {
      owner,
      branch,
      repo,
      repoUrl,
      commits
    } = payload

    branch = branch.replace('-', "\\-")
    repo = repo.replace('-', "\\-")

    let res = `\*PUSH TO REPO*
${owner} pushed to branch [${branch}](${repoUrl}) of [${repo}](${repoUrl})\n
Commit:\n`
    
    commits.forEach((item) => {
      res += `    \\- ${item.message} [detail](${item.url})\n`
    })

    return res
  }
}
export default async function HandleCommits(req, res) {
    let token = process.env.GITHUB_TOKEN
    let repo = req.query.repo
    let userName = "tuhinCds"
    if (!repo) {
        res.status(400).json({error: "repo missing !"})
    }

    let response = await fetch(`https://api.github.com/repos/${userName}/${repo}/commits?per_page=1`, {
        headers: {
            Authorization: `token ${token}`
        }
    })
    let data = await response.json()

    res.status(200).json(data)

}
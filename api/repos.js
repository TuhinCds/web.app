export default async function handler(req, res) {
  const username = "tuhinCds";
  const token = process.env.GITHUB_TOKEN; // Must be set in Vercel Environment Variables

  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated`,
      {
        headers: { Authorization: `token ${token}` }, // Only for private repos
      }
    );

    if (!response.ok) {
      return res.status(response.status).json({ error: "GitHub API failed" });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
}

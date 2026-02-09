export async function handler(event, context) {
  const username = "tuhinCds";
  const token = process.env.GITHUB_TOKEN;

  const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`, {
    headers: { Authorization: `token ${token}` }
  });

  const data = await res.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  };
}

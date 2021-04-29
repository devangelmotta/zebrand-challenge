import Cookies from 'cookies'
const axios = require('axios')
const CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;
const URL_TOKEN = process.env.URL_GITHUB_TOKEN;

const getGithubToken = (req, res) => {
    const cookies = new Cookies(req, res);
    const requestToken = req.query.code
    axios({
        method: 'post',
        url: `${URL_TOKEN}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=${requestToken}`,
        headers: {
             accept: 'application/json'
        }
      }).then((response) => {
        var access_token = response.data.access_token;
        if(access_token) {
            cookies.set("github_token", access_token);
            return res.status(200).redirect("/dashboard");
        }
        
        return res.status(204).redirect("/");
      })
  }

  export default getGithubToken;
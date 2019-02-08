import axios from 'axios'

function getUser(username) {
  axios.get(`https://jncnews.herokuapp.com/api/users/${username}`)
  .then(({data}) => {
  console.log('data:', data)
  }
)
}

export default getUser;
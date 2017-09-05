import axios from 'axios';

export default {
  user: {
    login: (credintials) => axios.post('/api/auth', { credintials}).then(res => res.data.user)
  }
}

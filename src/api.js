import axios from 'axios'
const BASE_URL = 'https://jncnews.herokuapp.com/api/'


export const getArticles = async () => 
  (await axios.get(`${BASE_URL}articles`)).data.articles;

export const getQueriedArticles = async (query) =>
  (await axios.get(`${BASE_URL}articles${query}`)).data.articles;

export const getArticle = async (article_id) =>
  (await axios.get(`${BASE_URL}articles/${article_id}`)).data.article;

export const getArticlesByTopic = async (topic) =>
  (await axios.get(`${BASE_URL}topics/${topic}/articles`)).data.articles;

export const getQueriedArticlesByTopic = async (topic, query) =>
  (await axios.get(`${BASE_URL}topics/${topic}/articles${query}`)).data.articles;

export const postArticle = async (title, body, topic, username) =>
  (await axios.post(`${BASE_URL}topics/${topic}/articles`, { title: title, body: body, username: username }))

export const deleteArticle = async (article_id) =>
  (await axios.delete(`${BASE_URL}articles/${article_id}`))

export const getComments = async (article_id) =>
  (await axios.get(`${BASE_URL}articles/${article_id}/comments`)).data.comments;

export const postComment = async (username, body, article_id ) =>
  (await axios.post(`${BASE_URL}articles/${article_id}/comments`, { username: username, body: body }))

export const deleteComment = async (article_id, comments_id) =>
  (await axios.delete(`${BASE_URL}articles/${article_id}/comments/${comments_id}`))

export const getTopics = async () =>
  (await axios.get(`${BASE_URL}topics`)).data.topics;

export const postTopic = async (slug, description) =>
  (await axios.post(`${BASE_URL}topics`, { slug: slug, description: description }))

export const getUsers = async () =>
  (await axios.get(`${BASE_URL}users`)).data.users;

export const voteComment = async (voteChange, endpoint, id, endPoint2, id2) =>
  (await axios.patch(`${BASE_URL}${endpoint}/${id}${endPoint2}${id2}`, { inc_votes: voteChange }))

export const voteArticle = async (voteChange, endpoint, id) =>
  (await axios.patch(`${BASE_URL}${endpoint}/${id}`, { inc_votes: voteChange }))


  
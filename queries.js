const Pool = require('pg').Pool
const pool = new Pool({
 host: 'ec2-3-251-0-202.eu-west-1.compute.amazonaws.com',
  database: 'd1rld3voo75jd2',
  user:'xbbbhpbyfxsxte',
  password: '02d74e52cbc7fcacdd7e6c83909ea8e8cc4f8d5b5873a098106dab0143501389',
  port: 5432,
  ssl:{rejectUnauthorized:false},
})
const getArticles = (request, response) => {
    response.header("Access-Control-Allow-Origin", "*");
    pool.query('SELECT * FROM public.articles ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getArticleById = (request, response) => {
  const id = parseInt(request.params.id)
    response.header("Access-Control-Allow-Origin", "*");
    pool.query('SELECT * FROM public.articles WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}







module.exports = {
  getArticles,
  getArticleById  
}
const Pool = require('pg').Pool
const pool = new Pool({
 host: 'ec2-52-212-157-46.eu-west-1.compute.amazonaws.com',
  database: 'dg5ear26knb9',
  user:'xgrshdytmzwuez',
  password: '501ab5bd4d91b4d6383aa89426863196a7cb99def4af05d6e078a2212126a6ea',
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
const router = require('express').Router()
const places = require('../models/places.js')

//POST
router.post('/', (req, res) => {
console.log(req.body)
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/250/250'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})


// GET /places
router.get('/', (req, res) => {
  let places = [{
    name: 'ratatouille',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'pasta, french',
    pic: '/images/pasta.jpeg'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/steak.jpeg'
  }]  
  res.render('places/index', { places })
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id/edit', (req, res) => {
  res.render('places/edit')
})


router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
    res.render('places/edit', { place: places[id] })
  }
})




module.exports = router

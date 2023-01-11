import { Flight } from "../models/flight.js"

function newFlight(req, res){
  const newFlight = new Flight()
  const dt = newFlight.departs
  const departsDate = dt.toISOString().slice(0, 16)
  res.render('flights/new', {
    title: 'Add Flight',
    dateOfFlight: departsDate
  })
}

function create(req, res){
  for (let key in req.body){
    if (req.body[key] === '') delete req.body[key]
  }
  Flight.create(req.body)
  .then(flight => {
    res.redirect('/flights')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/flights/new')
  })
}

function index(req, res){
  Flight.find({})
  .then(flights => {
    res.render('flights/index', {
      title: 'All Flights',
      flights,
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function show(req, res){
  Flight.findById(req.params.id)
  .then(flight => {
    console.log(flight)
    res.render('flights/show', {
      title: 'Flight Detail',
      flight,
    })
  })
}

function edit(req, res){
  // const newFlight = new Flight()
  // const dt = newFlight.departs
  // const departsDate = dt.toISOString().slice(0, 16)
  Flight.findById(req.params.id)
  .then(flight => {
    const departsDate = flight.departs.toISOString().slice(0, 16)
    res.render('flights/edit', {
      title: 'Edit Flight',
      flight,
      dateOfFlight: departsDate
    })
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

//2023-07-10T17:00

function updateFlight(req, res){
  for (let key in req.body){
    if (req.body[key] === '') delete req.body[key]
  }
  Flight.findByIdAndUpdate(req.params.id, req.body, {new:true})
  .then(flight => {
    res.redirect(`/flights/${flight._id}`)
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

function deleteFlight(req, res){
  Flight.findByIdAndDelete(req.params.id)
  .then(flight => {
    res.redirect('/flights')
  })
  .catch(error => {
    console.log(error)
    res.redirect('/')
  })
}

export {
  newFlight as new,
  create,
  index,
  show,
  edit,
  updateFlight as update,
  deleteFlight as delete
}
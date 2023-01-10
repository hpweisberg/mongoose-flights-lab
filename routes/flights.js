import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()

// GET /flights/new
router.get('/new', flightsCtrl.new)

// GET /flights/allFlights
router.get('/', flightsCtrl.index)

// GET /flights/:id
router.get('/:id', flightsCtrl.show)

// GET /flight/:id/edit
router.get('/:id/edit', flightsCtrl.edit)

// POST /flights
router.post('/', flightsCtrl.create)

// PUT /flights/:id
router.put('/:id', flightsCtrl.update)

// DELETE /flights/:id
router.delete('/:id', flightsCtrl.delete)




export {
  router
}

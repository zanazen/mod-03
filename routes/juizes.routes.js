import express from 'express'
import { v4 as uuidv4 } from 'uuid'

const router = express.Router()

let data = [
    {
        id: "AAA",
        nomeJuiz: "Marcio",
        vara: "1a.V"
    }
]

// GET
router.get('/', (request, response) => {
   return response.status(200).json(data)
})

// POST
router.post('/create', (request, response) => {
    const newData = {
        ...request.body,
        id: uuidv4()
    }
    data.push(newData)

    return response.status(201).json(data)
})

// PUT
router.put('/edit/:id', (request, response) => {
    // id como parâmetro
    const { id } = request.params

    // reconhecendo o item
    const update = data.find(
        item => item.id === id
    )

    // descobre a posição dele dentro da lista
    const index = data.indexOf(update)

    // array[posição] = item
    // atualiza o item existente
    data[index] = {
        ...update,
        ...request.body
    }

    return response.status(200).json(data[index])
})

// DELETE
router.delete('/delete/:id', (request, response) => {
    const { id } = request.params

    const deleteById = data.find(
        item => item.id === id      
    )

    const index = data.indexOf(deleteById)

    data.splice(index, 1)

    return response.status(200).json(data)
})
export default router
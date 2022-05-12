// const random = require("random-unique-id")
//
// let arr = []
//
// module.exports = {
//     add: (req, res) => {
//         const recipe = req.body
//         recipe.id = random().id
//
//         arr.push(recipe)
//
//         res.send({error: false, data: arr})
//     },
//     delete: (req, res) => {
//         const {id} = req.params
//         arr = arr.filter(x => x.id !== id)
//
//         res.send({error: false, data: arr})
//     },
//     update: (req, res) => {
//         arr = arr.filter(x => x.id !== req.body.id)
//         arr = [...arr, req.body]
//         res.send({error: false, data: arr})
//     }
//
// }

const carDb = require("../schemas/carSchema")

module.exports = {
    
    createCar: (req, res) => {
        const {
            maxSpeed,
            broken,
            fuelConsumption,
            name,
            color
        } = req.body

        const newCar = new carDb
        newCar.maxSpeed = maxSpeed
        newCar.broken = broken
        newCar.fuelConsumption = fuelConsumption
        newCar.name = name
        newCar.color = color
        newCar.save().then(() => {
            res.send({message: "Car saved"})
        }).catch(e => {
            console.log(e)
            console.log('ERROR WHILE SAVING')
        })
    },
    getCar: (req, res) => {
        const {id} = req.body

        carDb.find({id: id}).then(data => {
            console.log(data)
        })
    }
}
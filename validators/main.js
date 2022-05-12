
module.exports = (req, res, next) => {
    // const {
    //     title,
    //     images,
    //     ingredients,
    //     preparation
    // } = req.body
    //
    // if(title.length < 10 || title.length > 100) {
    //     return res.send({error: true, message: "title is bad"})
    // }
    // if(images.length < 1) {
    //     return res.send({error: true, message: "Please include image"})
    // }
    // if(ingredients.length < 1) {
    //     return res.send({error: true, message: "Please include ingredients"})
    // }
    // if(preparation.length < 3) {
    //     return res.send({error: true, message: "Please include preparation"})
    // }
    //
    // next()

    const {
            maxSpeed,
            broken,
            fuelConsumption,
            name,
            color
        } = req.body

    // console.log(req.body)

        next()
}
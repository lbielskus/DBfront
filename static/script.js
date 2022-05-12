const button = document.querySelector('#btn')

button.addEventListener('click', () => {
    const car = {
        maxSpeed: 250,
        broken: false,
        fuelConsumption: 10,
        name: "audi",
        color: "red"
    }

    const options = {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(car)
    }

    fetch('http://localhost:3000/createCar', options)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
})


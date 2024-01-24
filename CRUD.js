(async () =>{
    const Planet = require('../models/Planet')
 /*
    CREATE
     const newPlanet = await Planet.create({
        name: 'Venus',
        position: 5,
    })

    READ

    const seePlanet = await Planet.findAll()

    const seePlanet = await Planet.findByPk(2)

    const seePlanet = await Planet.findAll({
        where:{
            name: 'Terra'
        }
        
    })

    console.log(seePlanet)

    UPDADE

     const updatePlanets = await Planet.findByPk(1)
        updatePlanets.name = 'Terra616'
        await updatePlanets.save()

    console.log(updatePlanets)

    DELETe
 
 */  

const deletePlanets = await Planet.findByPk(2)

console.log(deletePlanets) 

await deletePlanets.destroy()
    
})()
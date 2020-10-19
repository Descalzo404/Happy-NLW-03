const Database = require('./db')
const saveOrphanage = require('./saveOrphanage')

Database.then(async function(db) {
    await saveOrphanage(db,{
        lat: "-25.4407138",
        lng: "-49.2607751",
        name: "Lar das crianças",
        about: "presta assitência",
        whatsapp: "numero",
        images: [
            "https://images.unsplash.com/photo-1574559854225-4349f0fda8cd?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",
            "https://images.unsplash.com/photo-1601564267830-523b71e24db0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "instruções",
        opening_hours: "Horario de visitas",
        open_on_weekends: "0"

    })

    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)
})
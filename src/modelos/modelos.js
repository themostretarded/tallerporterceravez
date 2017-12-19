'use stric'

const mongoose = requiere('mongoose')
const esquema = mongoose.Schema

const PeliculaSchema = esquema({
    title: String,
    image: String,
    release: String,
    description: String,
    genre: String
})

mongoose.model('pelicula',PeliculaSchema)
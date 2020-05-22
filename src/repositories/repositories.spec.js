const mongoose = require('mongoose')
const { filmRepository } = require('./FilmRepository');


describe('repositories', ()=> {

    let db

    beforeAll(()=>{
        mongoose.connect("mongodb://localhost:27017/demo",{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })//.then(data=>console.log(data))
        db = mongoose.connection
    })

    afterAll(()=>{
        db.connection.close()
    })

    test('insert film and defined id', async ()=>{
        const film = {'titre':'Godzilla'}
        expect((await filmRepository.save(film)).id).toBeDefined()
    })
})
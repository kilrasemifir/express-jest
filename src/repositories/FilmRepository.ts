import mongoose, { Schema } from "mongoose";

const filmScema = new Schema({
    titre:String,
    duree:Number,
    realisateur:String,
    genre:String,
    dateSortie:Date
})

const FilmModel = mongoose.model('films', filmScema)

class FilmRepository {

    public save(film:any){
        return new FilmModel(film).save()
    }

    public findAll(){
        return FilmModel.find().exec()
    }

    public update(film:any){
        return FilmModel.update({_id:film._id}, film)
    }

    public findById = (id:string) => {
        return FilmModel.findById(id).exec()
    }

    public deleteById(id:string){
        return FilmModel.deleteOne({_id:id})
    }
}

export const filmRepository = Object.freeze(new FilmRepository())
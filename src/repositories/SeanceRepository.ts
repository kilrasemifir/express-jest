import mongoose, { Schema } from "mongoose";

const seanceScema = new Schema({
    date:{
        type: Date,
        require: true
    },
    prix:{
        type: Number,
        require: true
    },
    film:{
        type:Schema.Types.ObjectId,
        ref:"films"
    }
})

const SeanceModel = mongoose.model('seances', seanceScema)

class SeanceRepository {

    public save(seance:any){
        return new SeanceModel(seance).save()
    }

    public findAll(){
        return SeanceModel.find().populate('film').exec()
    }

    public update(seance:any){
        return SeanceModel.update({_id:seance._id}, seance)
    }

    public findById = (id:string) => {
        return SeanceModel.findById(id).populate('film').exec()
    }

    public deleteById(id:string){
        return SeanceModel.deleteOne({_id:id})
    }
}

export const seanceRepository = Object.freeze(new SeanceRepository())
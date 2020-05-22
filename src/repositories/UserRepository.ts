import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: String,
    createAt: Date,
    address: {
        city:String,
        road:String
    },
    hobbies:[],
})

const UserModel = mongoose.model('users', userSchema)

class UserRepository {

    public save(user: any){
        return new UserModel(user).save()
    }

    public findAll(){
        return UserModel.find().exec()
    }

    public findById(id:string){
        return UserModel.findById(id).exec()
    }

    public findByUsername(username:string){
        return UserModel.find({username:username}).exec()
    }

    public deleteById(id:string){
        return UserModel.deleteOne({_id:id}).exec()
    }

    public deleteByUsername(username:string){
        return UserModel.deleteMany({username:username}).exec()
    }

    public deleteAll(){
        return UserModel.deleteMany({}).exec()
    }

    public update(user:any){
        return UserModel.updateOne({_id:user._id},user).exec()
    }

    public findByAddressCity(city:string){
        return UserModel.find({'address.city':city}).exec()
    }

    public findByHobbies(hobbie:string){
        return UserModel.find({hobbies:['music', 'equitation']}).exec()
    }

}

export const userRepository = Object.freeze(new UserRepository())
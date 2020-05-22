import { userRepository } from './../repositories/UserRepository';


class UserService {

    public test(user:{username:string}){
        user.username = user.username.toLowerCase()
        return user
    }

    public async findAll(){
        return userRepository.findAll()
    }

    public async save(user:any){
        user.createAt = Date.now()
        return userRepository.save(user)
    }

    public async findById(id:string){
        return userRepository.findById(id)
    }

    public findByUsername(username:string){
        return userRepository.findByUsername(username)
    }

    public deleteById(id:string){
        return userRepository.deleteById(id)
    }

    public update(user:any){
        return userRepository.update(user)
    }

    public findByAddressCity(city:string){
        return userRepository.findByAddressCity(city)
    }
}

export const userService = Object.freeze(new UserService())
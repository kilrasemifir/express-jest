import { userService } from './../services/UserService';

class UserController {

    public test(req:any, res:any){
        const user = req.body
        res.json(userService.test(user))
    }

    public findAll(req:any, res:any){
        userService.findAll().then(data=>{
            res.json(data)
        })
    }

    public save(req:any, res:any){
        userService.save(req.body).then(data=>{
            res.json(data)
        })
    }

    public findById(req:any, res:any){
        userService.findById(req.params.id).then(data=>{
            res.json(data)
        })
    }

    public findByUsername(req:any, res:any){
        userService.findByUsername(req.params.username).then(data=>{
            if (data) res.json(data)
        })
    }

    public deleteById(req:any, res:any){
        userService.deleteById(req.params.id).then(data=>{
            res.status(202).json(data)
        }).catch(err=>{
            res.status(404).send("Not found")
        })
    }

    public update(req:any, res:any){
        userService.update(req.body).then(data=>{
            res.json(data)
        })
    }

    public findByAddressCity(req:any, res:any){
        userService.findByAddressCity(req.params.city).then(data=>{
            res.json(data)
        })
    }

}

export const userController = Object.freeze(new UserController())
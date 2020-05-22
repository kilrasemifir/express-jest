import { filmService } from './../services/FilmService';
import { readdirSync } from 'fs';


class UserController {


    public findAll(req:any, res:any){
        filmService.findAll().then(data=>{
            res.json(data)
        })
    }

    public save(req:any, res:any){
        filmService.save(req.body).then(data=>{
            res.json(data)
        })
    }

    public findById(req:any, res:any){
        filmService.findById(req.params.id).then(data=>{
            res.json(data)
        })
    }

    public deleteById(req:any, res:any){
        filmService.deleteById(req.params.id).then(data=>{
            res.status(202).json(data)
        }).catch(err=>{
            res.status(404).send("Not found")
        })
    }

    public update(req:any, res:any){
        filmService.update(req.body).then(data=>{
            res.json(data)
        })
    }

}

export const filmController = Object.freeze(new UserController())
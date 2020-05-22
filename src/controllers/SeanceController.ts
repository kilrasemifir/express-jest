import { seanceService } from '../services/SeanceService';
import { writeFile } from 'fs/promises';
import { writeFileSync, readFileSync } from 'fs';
import { Readable } from 'stream';
const multer = require('multer')



class UserController {


    public findAll(req:any, res:any){
        seanceService.findAll().then(data=>{
            res.json(data)
        })
    }

    public save(req:any, res:any){
        seanceService.save(req.body).then(data=>{
            res.json(data)
        }).catch(err=>{
            res.status(404).send("Error")
        })
    }

    public findById(req:any, res:any){
        seanceService.findById(req.params.id).then(data=>{
            res.json(data)
        })
    }

    public deleteById(req:any, res:any){
        seanceService.deleteById(req.params.id).then(data=>{
            res.status(202).json(data)
        }).catch(err=>{
            res.status(404).send("Not found")
        })
    }

    public update(req:any, res:any){
        seanceService.update(req.body).then(data=>{
            res.json(data)
        })
    }

    public ticket(req:any, res:any){
        seanceService.ticket(req.params.id).then(data => {
            res.set({
                'Content-type':'application/text',
                "Content-Disposition":"attachment; filename=ticket.txt"
            })
            res.send(data)
        })
    }

    public download(req:any, res:any){
        console.log(req.file)
        const data = readFileSync(req.file.path)
        const path = '/ressources/'+req.file.originalname
        //writeFile(path, data).then().catch((err)=>console.log(err))
        res.set({
            'Content-type':'application/png',
            "Content-Disposition":"attachment; filename=test.png",
            'toto':'super toto'
        })
        res.send(data)
    }

}

export const seanceController = Object.freeze(new UserController())
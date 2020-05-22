import { seanceRepository } from "../repositories/SeanceRepository"
import { readFileSync } from 'fs';
import { Readable } from "stream";

class SeanceService {


    public async findAll(){
        return seanceRepository.findAll()
    }

    public async save(seance:any){
        return seanceRepository.save(seance)
    }

    public async findById(id:string){
        return seanceRepository.findById(id)
    }

    public deleteById(id:string){
        return seanceRepository.deleteById(id)
    }

    public update(seance:any){
        return seanceRepository.update(seance)
    }

    public async ticket(id:string){
        return seanceRepository.findById(id).then(data=>{
            const film = data?.get("film")
            const date = data?.get('date')
            return Readable.from([readFileSync('./ressources/ticket.txt','utf-8')
                .replace(/FILM_TITRE/, film.titre)
                .replace(/FILM_DUREE/, `${Math.floor(film.duree/60)}:${film.duree%60}`)
                .replace(/FILM_DEBUT/, `${date.getHours()}:${date.getMinutes()}`)
                .replace(/FILM_FIN/, `${date.getHours()+Math.floor(film.duree/60)}:${date.getMinutes()+film.duree%60}`)
                .replace(/SEANCE_ID/, data?._id)
                .replace(/PRIXTTC/, data?.get('prix'))
            ])
        })
    }
}

export const seanceService = Object.freeze(new SeanceService())

/*return Readable.from([readFileSync('./ressources/ticket.txt','utf-8')
                .toString()
                .replace(/FILM_TITRE/, film.titre)
                .replace(/FILM_DUREE/, `${Math.floor(film.duree/60)}:${film.duree%60}`)
                .replace(/FILM_DEBUT/, `${date.getHours()}:${date.getMinutes()}`)
                .replace(/FILM_FIN/, `${date.getHours()+Math.floor(film.duree/60)}:${date.getMinutes()+film.duree%60}`)
                .replace(/SEANCE_ID/, data?._id)
                .replace(/PRIXTTC/, data?.get('prix'))
            ])*/
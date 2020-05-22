import { filmRepository } from "../repositories/FilmRepository"

class FilmService {


    public async findAll(){
        return filmRepository.findAll()
    }

    public async save(film:any){
        return filmRepository.save(film)
    }

    public async findById(id:string){
        return filmRepository.findById(id)
    }

    public deleteById(id:string){
        return filmRepository.deleteById(id)
    }

    public update(film:any){
        return filmRepository.update(film)
    }
}

export const filmService = Object.freeze(new FilmService())
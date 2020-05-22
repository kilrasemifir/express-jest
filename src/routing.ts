
import { userController } from './controllers/UserController';
import { filmController } from './controllers/FilmController';
import { seanceController } from './controllers/SeanceController';
import { Router } from 'express';
import multer from 'multer'

const upload = multer({dest: '/temp'})

const userRouting = () => {
    const router = Router()
    router.get('/test', userController.test)
    router.get('/', userController.findAll)
    router.post('/', userController.save)
    router.get('/:id', userController.findById)
    router.get('/username/:username', userController.findByUsername)
    router.delete('/:id', userController.deleteById)
    router.put('/', userController.update)
    router.get('/address/city/:city', userController.findByAddressCity)
    return router
}
/**
 *  FILM
 */
const filmRouting = () => {
    const router = Router()
    router.get('/', filmController.findAll)
    router.post('/', filmController.save)
    router.get('/:id', filmController.findById)
    router.delete('/:id', filmController.deleteById)
    router.put('/', filmController.update)
    return router
}
/**
 * SEANCE
 */
const seanceRouting = () => {
    const router = Router()
    router.get('/', seanceController.findAll)
    router.post('/', seanceController.save)
    router.post('/download', upload.single('test'), seanceController.download)
    router.get('/:id', seanceController.findById)
    router.delete('/:id', seanceController.deleteById)
    router.put('/', seanceController.update)
    router.get('/:id/ticket', seanceController.ticket)
    return router
}

export const setRouting = (server:any) => {
    server.use('/users', userRouting())
    server.use('/seances', seanceRouting())
    server.use('/films', filmRouting())
    
}
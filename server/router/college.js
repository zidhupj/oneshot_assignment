import { getCollegeListByCourse, getCollegeListByState } from '../handlers/college/list.js'
import { getCollegeById, getCollegeByName, getSimilarColleges } from '../handlers/college/single.js'


export function collegePlugin(fastify, opts, done) {
    fastify.register(singleCollegePlugin, { prefix: '/single' })
    fastify.register(collegeListPlugin, { prefix: '/list' })
    done()
}

function singleCollegePlugin(fastify, opts, done) {
    fastify.get('/id/:id', getCollegeById)
    fastify.get('/name/:name', getCollegeByName)
    fastify.get('/id/:id/similar', getSimilarColleges)
    done()
}


function collegeListPlugin(fastify, opts, done) {
    fastify.get('/state/:state', getCollegeListByState)
    fastify.get('/course/:course', getCollegeListByCourse)
    done()
}
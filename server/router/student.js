import { getStudentDetails } from "../handlers/student/index.js"

export function studentPlugin(fastify, opts, done) {

    fastify.get('/id/:id', getStudentDetails)

    done()
}
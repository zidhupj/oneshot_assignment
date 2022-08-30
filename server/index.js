import Fastify from 'fastify'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

import { collegePlugin } from './router/college.js'
import { metricsPlugin } from './router/metrics.js'
import { studentPlugin } from './router/student.js'

const uri = process.env.DBString;

const fastify = Fastify({
    logger: true
})

fastify.register(collegePlugin, { prefix: '/college' })
fastify.register(metricsPlugin, { prefix: '/metrics' })
fastify.register(studentPlugin, { prefix: '/student' })

const start = async () => {
    try {
        const client = await new Promise((resolve, reject) => {
            mongoose.connect(uri)
                .then(client => resolve(client))
                .catch(err => reject(err))
        })
        const address = await fastify.listen({ port: 3000, host: '0.0.0.0' })
        console.log("Server is listening on " + address)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()
import { getAllCoursesMetrics, getAllStateMetrics } from '../handlers/metrics/index.js'

export function metricsPlugin(fastify, opts, done) {

    fastify.get('/state', getAllStateMetrics)
    fastify.get('/courses', getAllCoursesMetrics)
    done()
}
import College from '../../models/College.js'


export async function getAllStateMetrics(request, reply) {

    const result = await College.aggregate([
        { $match: {} },
        { $group: { _id: "$state", count: { $count: {} } } }
    ])

    return result

}

export async function getAllCoursesMetrics(request, reply) {
    const result = await College.aggregate([
        { $match: {} },
        { $unwind: '$courses' },
        { $group: { _id: "$courses", count: { $count: {} } } }
    ])

    return result;
}
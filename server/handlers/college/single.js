import College from '../../models/College.js'

export async function getCollegeById(request, reply) {
    const id = request.params.id;

    const college = await College.findById(id)
    console.log(college)

    return { college }
}

export async function getCollegeByName(request, reply) {
    const name = request.params.name

    const college = await College.findOne({ name: name })
    return { college }
}

export async function getSimilarColleges(request, reply) {

    const id = request.params.id;

    const college = await College.findById(id)

    const similarCollages = await College
        .find({
            $and: [
                { _id: { $ne: id } },
                { state: { $eq: college.state } },
                { noOfStudents: { $lte: college.noOfStudents + 100 } },
                { noOfStudents: { $gte: college.noOfStudents - 100 } },
                { courses: { $in: college.courses } },
            ]
        })

    return { college, similarCollages }
}
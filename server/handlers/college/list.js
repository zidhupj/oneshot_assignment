import College from "../../models/College.js";

export async function getCollegeListByState(request, reply) {
    const state = request.params.state;

    return await College.find({ state: state })
}

export async function getCollegeListByCourse(request, reply) {
    const course = request.params.course;

    return await College.find({ courses: { $in: [course] } })
}
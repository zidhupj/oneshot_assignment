import Student from "../../models/Student.js";

export async function getStudentDetails(request, reply) {
    const id = request.params.id;

    return await Student.findById(id)
}
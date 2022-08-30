import mongoose from 'mongoose'

const studentSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    yob: {
        type: Number,
        required: true,
    },
    collegeId: {
        type: Number,
        required: true
    },
    skills: [{
        type: String
    }]
})

export default mongoose.model('student', studentSchema, 'student')
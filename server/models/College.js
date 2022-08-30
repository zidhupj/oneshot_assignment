import mongoose from 'mongoose'

const collegeSchema = new mongoose.Schema({
    _id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    foundedIn: {
        type: Number,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
        default: "India"
    },
    noOfStudents: {
        type: Number,
        required: true,
    },
    courses: [{
        type: String
    }]
})

export default mongoose.model('college', collegeSchema, 'college')
const { MongoClient, ServerApiVersion } = require('mongodb');
require("dotenv").config();


const uri = process.env.DBString;
console.log(uri)
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

const cities = ["Kochi", "Thiruvananthapuram", "Chennai", "Vellore", "Bangalore", "Mangalore", "Mumbai", "Pune", "Hyderabad", "Seconderabad"]
const states = ["Kerala", "Kerala", "Tamil Nadu", "Tamil Nadu", "Karnataka", "Karnataka", "Maharashtra", "Maharashtra", "Andhra Pradesh", "Andhra Pradesh"]
const foundedIn = [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
const noOfStudents = [2005, 2045, 2085, 2125, 2165, 2205, 2245, 2285, 2325, 2365]
const courses = ["Computer science", "Electronics", "IT", "Commerce", "Arts", "Mechanical", "Chemistry", "Biology", "Physics", "Medicine"]

const yob = [2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012]
const skills = ["c++", "Java", "Javascript", "Python", "Figma", "Unity", "Flutter", "Excel", "SolidWorks", "Photoshop"]

client.connect(async (err) => {
    await client.db("oneshot").dropCollection("college")
    await client.db("oneshot").dropCollection("student")
    console.log("collections deleted successfully")
    const collegeCollection = client.db("oneshot").collection("college");
    const studentCollection = client.db("oneshot").collection("student");

    let key = 0

    let collegeList = [];
    let studentList = [];

    for (let i = 1; i <= 100; i++) {
        const random = Math.random()
        console.log(random)
        const ct = Math.floor(Math.random() * 10)
        const cs1 = Math.floor(Math.random() * 10)
        let cs2 = Math.floor(Math.random() * 10)
        while (cs2 === cs1) {
            cs2 = Math.floor(Math.random() * 10)
        }
        let cs3 = Math.floor(Math.random() * 10)
        while (cs3 === cs1 || cs3 === cs2) {
            cs3 = Math.floor(Math.random() * 10)
        }

        collegeList.push({
            _id: i,
            name: `College${i}`,
            foundedIn: foundedIn[Math.floor(Math.random() * 10)],
            city: cities[ct],
            state: states[ct],
            country: "India",
            noOfStudents: noOfStudents[Math.floor(Math.random() * 10)],
            courses: [courses[cs1], courses[cs2], courses[cs3]],
        })

        for (let j = 1; j <= 100; j++) {
            let sk1 = Math.floor(Math.random() * 10)
            let sk2 = Math.floor(Math.random() * 10)
            while (sk1 === sk2) {
                sk2 = Math.floor(Math.random() * 10)
            }
            let sk3 = Math.floor(Math.random() * 10)
            while (sk3 === sk1 || sk3 === sk2) {
                sk3 = Math.floor(Math.random() * 10)
            }
            studentList.push({
                _id: ++key,
                name: `Student${key}`,
                yob: yob[Math.floor(Math.random() * 10)],
                collegeId: i,
                skills: [skills[sk1], skills[sk2], skills[sk3]]
            })
        }
    }
    console.log("list prepared")

    let pList = [collegeCollection.insertMany(collegeList), studentCollection.insertMany(studentList)];

    Promise.all(pList).then(result => {
        console.log("Success")
        client.close();
    }).catch(err => {
        console.log(err);
        client.close();
    })


});

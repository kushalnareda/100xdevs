const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://kushalnaredawork:TSPENYRQm47YdcuC@100xdevs.x4dl5hv.mongodb.net/');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: { type: String, required: true},
    password: { type: String, required: true},
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: { type: String, required: true},
    password: { type: String, required: true},
    });

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: { type: String, required: true },
    description: { type: String },
    price: { type: String, required: true }, 
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}
#! /usr/bin/env node
class School {
    name;
    students = [];
    Teacher = [];
    courses = [];
    addstudent(stdobj) {
        this.students.push(stdobj);
    }
    addTeacher(tobj) {
        this.Teacher.push(tobj);
    }
    addcourses(tobj) {
        this.courses.push(tobj);
    }
    constructor(name) {
        this.name = name;
    }
}
class Student {
    name;
    age;
    id;
    Balance;
    schoolName;
    constructor(name, age, id, Balance, schoolName) {
        this.name = name;
        this.age = age;
        this.id = id;
        this.Balance = Balance;
        this.schoolName = schoolName;
    }
}
class Teacher {
    name;
    schoolName;
    constructor(name, schoolName) {
        this.name = name;
        this.schoolName = schoolName;
    }
}
class Course {
    name;
    schoolName;
    constructor(name, schoolName) {
        this.name = name;
        this.schoolName = schoolName;
    }
}
//school
let School1 = new School("G.B.H.S.T");
let School2 = new School("G.B.P.S.T");
let School3 = new School("G.G.P.S.T");
//Student
let std1 = new Student("Ahesn", 10, 44323, 100, School1.name);
let std2 = new Student("Rehan", 15, 43432, 1000, School2.name);
let std3 = new Student("Ahmad", 16, 34422, 10000, School3.name);
//teacher
let t1 = new Teacher("Abdul", School1.name);
let t2 = new Teacher("Raqaeb", School2.name);
let t3 = new Teacher("Ajmal Khan", School3.name);
//courses
let course1 = new Course("Maths", School1.name);
let course2 = new Course("Science", School2.name);
let course3 = new Course("English", School3.name);
//Teacher
School1.addTeacher(t1);
School2.addTeacher(t2);
School3.addTeacher(t3);
//Student
School1.addstudent(std1);
School2.addstudent(std2);
School3.addstudent(std3);
//Course
School1.addcourses(course1);
School2.addcourses(course2);
School3.addcourses(course3);
console.log(School1);
console.log(School2);
console.log(School3);
export {};
#! /usr/bin/env node
class School {
   name: string;
   students: Student[] = [];
   Teacher: Teacher[] = [];
   courses: Course[] = [];
   addstudent(stdobj: Student){
    this.students.push(stdobj);
    
   }
   addTeacher(tobj: Teacher){
    this.Teacher.push(tobj);

    
   }
   
   addcourses(tobj: Teacher){
    this.courses.push(tobj as Course);

}
   constructor(name: string){
    this.name = name;
    
   }
}

class Student {
    name: string;
    age: number;
    id: number;
    Balance: number
    schoolName: string
    constructor(name: string, age: number,id:number,Balance:number, schoolName: string){
        this.name = name;
        this.age = age;
        this.id = id;
        this.Balance = Balance;
        this.schoolName = schoolName;
    }
}
class Teacher {
    name: string;
   
    schoolName: string
    constructor(name: string, schoolName: string){
        this.name = name;
        
        
        this.schoolName = schoolName;
    }
}
class Course {
    name: string;
    schoolName: string;

    constructor(name: string, schoolName: string) {
        this.name = name;
        this.schoolName = schoolName;
    }
}

//school
let School1 = new School("G.B.H.S.T")
let School2 = new School("G.B.P.S.T")
let School3 = new School("G.G.P.S.T")

//Student
let std1 = new Student ("Ahesn",10,44323,100,School1.name)
let std2 = new Student ("Rehan",15,43432,1000,School2.name)
let std3 = new Student ("Ahmad",16,34422,10000,School3.name)

//teacher

let t1 = new Teacher ("Abdul",School1.name)
let t2 = new Teacher ("Raqaeb",School2.name)
let t3 = new Teacher ("Ajmal Khan",School3.name)

//courses

let course1 = new Course("Maths", School1.name);
let course2 = new Course("Science", School2.name);
let course3 = new Course("English", School3.name);

//Teacher
School1.addTeacher(t1)

School2.addTeacher(t2)

School3.addTeacher(t3 as Teacher)

//Student

School1.addstudent(std1)

School2.addstudent(std2)

School3.addstudent(std3)

//Course

School1.addcourses(course1);
School2.addcourses(course2);
School3.addcourses(course3);

console.log(School1)
console.log(School2)
console.log(School3)
'use strict';

var Teacher = function Teacher(data) {
  this.name = data.name;
  this.greet = function (studentCnt) {
    var promise = new Promise(function (resolve, reject) {
      if (studentCnt === 0) {
        reject('Zero students in class');
      } else {
        resolve('Hello to ' + studentCnt + ' of my favorite students!');
      }
    });
    return promise;
  };
};

var Classroom = function Classroom(data) {
  var _this = this;

  this.subject = data.name;
  this.teacher = data.teacher;
  this.students = [];
  this.addStudent = function (data) {
    this.students.push(data);
    this.greet();
  };
  this.greet = function () {
    _this.teacher.greet(_this.students.length).then(function (classroom) {
      return function (greeting) {
        console.log(classroom.teacher.name + ' says: ', greeting);
      };
    }(_this), function (err) {
      console.log(err);
    });
  };
};

var myTeacher = new Teacher({ name: 'James' });
var myClassroom = new Classroom({ name: 'The Future of JavaScript', teacher: myTeacher });

myClassroom.addStudent({ name: 'Dave' });
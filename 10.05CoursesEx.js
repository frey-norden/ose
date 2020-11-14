// Create an object array about courses
var courses = [
    {course: 'OSE', topic: 'javascript'},
    {course: 'ICT', topic: 'ict infrastructure'},
    {course: 'AWS', topic: 'aws cloud practitioner'},
    {course: 'NOCCA', topic: 'entrepreneurship'},
    {course: 'PYSPEC', topic: 'python'}
];

var outputText = '';

function listCourses() {

    // List courses from an object array , i is an index of array
    for (var i = 0; i < courses.length; i++) {

      console.log(courses[i].course);
      outputText += courses[i].course + ' <br>';
    }
    // Write the answer on the page, to the answer div, as content of the div
    document.getElementById('answer').innerHTML = outputText;
}

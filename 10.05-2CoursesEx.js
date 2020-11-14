var courses = [
{  "name": "Orientation to software engineering",
    "code"   : "SWD1TF001",
    "extent" : 5,
    "timing" : "1.semester"
      },
{  "name": "Programming",
    "code"   : "SWD1TF002",
    "extent" : 5,
    "timing" : "2.semester"
      },
{  "name": "Data management and databases",
    "code"   : "SWD1TF003",
    "extent" : 5,
    "timing" : "2.semester"
      },
{  "name": "Mobile development project",
    "code"   : "SWD1TF004",
    "extent" : 10,
    "timing" : "3.semester"
      }

];

var outputText = '';

function listCourses() {

    // List courses from an object array , i is an index of array
    for (var i = 0; i < courses.length; i++) {

      //console.log(courses[i].course);
      outputText += '<br><br>'+ 'Code: ' + courses[i].code + '<br>';
      outputText += 'Name: ' + courses[i].name + '<br>';
      outputText += 'Extent: ' + courses[i].extent + '<br>';
      outputText += 'Timing: ' + courses[i].timing;
    }
    // Write the answer on the page, to the answer div, as content of the div
    document.getElementById('answer').innerHTML = outputText;
}

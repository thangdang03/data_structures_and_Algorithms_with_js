/* 1. Create a grades object that stores a set of student grades in an object. Provide a
function for adding a grade and a function for displaying the student’s grade average. */


var student = {
    scores: [10],
    name: 'thang'
}

function scoresStudent (scores){
        student.scores.push(scores);
}

function printfScores (){
    student.scores.map(data=>{
        console.log('scores',data);
    })
}

scoresStudent(9);
scoresStudent(10);
printfScores();
let inputMath = document.getElementById('math');
let inputEnglish = document.getElementById('english');
let inputScience = document.getElementById('science');
let inputComputer = document.getElementById('computer');
let button = document.getElementsByTagName('button')[0];
let main = document.getElementById('main');
var count=0;
var n=0;
button.addEventListener("click",function(){
     count += 1;
    if (count>1){
        main.removeChild(document.getElementsByTagName('p')[0]) 
    }
    
    var a = inputMath.value
    var b = inputEnglish.value
    var c = inputScience.value
    var d = inputComputer.value
    var paragraph = document.createElement('p');
    main.appendChild(paragraph);
    // (if/else) ladder to check if Input field is empty or not 
    if (a == ""){
        alert("Math field cannot be empty");    
    }
    else if (b == ""){
        alert("English field cannot be empty");    
    }
    else if (c == "") {
        alert("Science field cannot be empty");
    }
    else if (d == "") {
        alert("Computer field cannot be empty");
    }
    // (if/else) ladder to check pass/fail in per subject
    else{
        if(inputMath.value<33){
            paragraph.innerText += "Failed in maths\n";
            n=1;
        }
        if(inputEnglish.value<33){
            paragraph.innerText += "Failed in English\n";
            n=1;
        }
        if(inputScience.value<33){
            paragraph.innerText += "Failed in Science\n";          
            n=1;
        }    
        if(inputComputer.value<33){
            paragraph.innerText += "Failed in Computer\n";
            n=1;
        }
        else if(n==0){
        Total_marks_got = eval(Number(inputMath.value) + Number(inputEnglish.value) + Number(inputScience.value) + Number(inputComputer.value));
        percentage = eval((Total_marks_got * 100) / 400);
        
        // (if/else) ladder to check grade of Student
        if(percentage>90){
            paragraph.innerText = "Grade: O\nPercentage: "+percentage+"\nPass";
            
        }
        else if(percentage>80 && percentage<= 90 ){
            paragraph.innerText = "Grade: A+\nPercentage: "+percentage+"\nPass";
        }
        else if(percentage>70 && percentage<= 80 ){
            paragraph.innerText = "Grade: A\nPercentage: "+percentage+"\nPass";
        }
        else if(percentage>60 && percentage<= 70 ){
            paragraph.innerText = "Grade: B+\nPercentage: "+percentage+"\nPass";
        }
        else if(percentage>50 && percentage<= 60 ){
            paragraph.innerText = "Grade: B\nPercentage: "+percentage+"\nPass";
        }
        else if(percentage>=33 && percentage<= 50 ){
            paragraph.innerText = "Grade: C\nPercentage: "+percentage+"\nPass";
        }
        paragraph.style.color = "green";
        
    }}
    
    // main.removeChild(paragraph);
    paragraph.classList.add("p-style");
    inputMath.value = "";
    inputEnglish.value = "";
    inputScience.value = "";
    inputComputer.value = "";
});


// function validate(){
//     var a = inputMath.value
//     var b = inputEnglish.value
//     var c = inputScience.value
//     var d = inputComputer.value

//     if (a == ""){
//         alert("Math field cannot be empty");    
//     }
//     else if (b == ""){
//         alert("English field cannot be empty");    
//     }
//     else if (c == "") {
//         alert("Science field cannot be empty");
//     }
//     else if (d == "") {
//         alert("Computer field cannot be empty");
//     }
// }
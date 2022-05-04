let grade = "";

// creating rules for the parameter 
      function getGrade(score){
        if (score <= 100 && score >= 90){
          grade = "A"
        }
        else if(score <= 89 && score >= 80) {
          grade = "B";
        }
        else if(score <= 79 && score >= 70) {
          grade = "C";
        }
        else if(score <= 69 && score >= 60) {
          grade = "D";
        }
        else if(score <= 59 && score >= 0) {
          grade = "F";
        } 
      }

   
// creating argument calling getGrade 
      function letterGrade(){
        let userInput = document.querySelector('#stime').value// updates value
        getGrade(userInput)
        document.querySelector('#gtime').value = grade
       
      }

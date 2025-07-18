       document.addEventListener("keydown",(e)=>{
            if(e.key == "Enter"){
                myFunction();
                document.getElementById('age').value = "";
            }
        })
       
//1 
 //1 
 //1 
     //1 
//1  this is the webiste 
//1 
//1 
//1 
//1 
//1 
//1 
//1 
//1 
//1 
//1 
//1 
//1 
//1 
//1 
//1 
//1 
//1 
//1 
//1 
//1 
//1 
//1 
//1 
//1 
 


function myFunction() {
        
            let voteable;
            let age = Number(document.getElementById("age").value);
            if (isNaN(age)) {
                voteable = "Please enter a valid age";
            } else {
                voteable = (age < 18) ? `You are not eligible to vote ${document.getElementById('output').style.background ="red"}` : `Your are eligible for voting ${document.getElementById('output').style.background ="green"}` 
                
            };

            document.getElementById("output").style.display = "flex";
            document.getElementById("output").innerHTML = voteable;
            
        }
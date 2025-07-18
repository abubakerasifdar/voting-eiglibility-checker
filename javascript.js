 
        function myFunction() {
            let voteable;
            let age = Number(document.getElementById("age").value);
            if (isNaN(age)) {
                voteable = "Please enter a valid age";
            } else {
                voteable = (age < 18) ? "You are not eligible to vote" : "Your are eligible for voting"
            };
            document.getElementById("output").style.display = "flex";
        
            document.getElementById("output").innerHTML = voteable;
        }

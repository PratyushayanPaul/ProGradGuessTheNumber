var thenum= Math.ceil(Math.random()*100);
var counter=0;
var image=document.createElement("image");
image.src="./";

function guess()
{
    var num = parseInt(document.getElementById("input").value)
    if(num < 1 || num > 100){
        console.log("Enter number within 1 to 100");
    }
    else{
        counter++;
        if(thenum == num){
            console.log("Cograts! You guessed it right.");
            console.log("Number of steps: "+counter);
            document.getElementById("out").innerHTML = "<b>Cograts! You guessed it right.</b><br>Number of steps: " + counter;
        }
         else if(thenum > num){   
        console.log("Guess a larger number");
        document.getElementById("out").innerText = "Guess a larger number";
        }
        else{
            console.log("Guess a smaller number");
            document.getElementById("out").innerText = "Guess a smaller number";
        }
    }

}
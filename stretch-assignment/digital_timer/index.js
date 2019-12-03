let msTens = 0;
let msHundreds = 0;

let secondOnes = 0;
let secondTens = 0;

document.getElementById("msTens").textContent = msTens;
document.getElementById("msHundreds").textContent = msHundreds;
document.getElementById("secondOnes").textContent = secondOnes;
document.getElementById("secondTens").textContent = secondTens;



function updateMsTens()
{    
    if (secondTens < 1)
        {
            msTens += 1;

            if (msTens > 9)
                {
                    msTens = 0;
                    updateMsHundreds();
                }

            document.getElementById("msTens").textContent = msTens;
        }    
}

function updateMsHundreds()
{
    msHundreds += 1;
    
    if (msHundreds > 9)
        {
            msHundreds = 0;
            updateSecondOnes();
        }
    
    document.getElementById("msHundreds").textContent = msHundreds;
}

function updateSecondOnes()
{
    secondOnes += 1;
    
    if (secondOnes > 9)
        {
            secondOnes = 0;
            updateSecondTens();
        }
            
    document.getElementById("secondOnes").textContent = secondOnes;
    
}

function updateSecondTens()
{
    secondTens += 1;

    // At 10 seconds, stop incrementing and update all colors
    if (secondTens === 1 && secondOnes === 0)
        {
            document.getElementById("msTens").classList.add("redDigit");
            document.getElementById("msHundreds").classList.add("redDigit");
            document.getElementById("colon").classList.add("redDigit");
            document.getElementById("secondOnes").classList.add("redDigit");
            document.getElementById("secondTens").classList.add("redDigit");
        }

    document.getElementById("secondTens").textContent = secondTens;
        
}

// function startTimer()
// {
//     // alert("Timer started!");
// }


// let startButton = document.getElementById("start");

// console.log(startButton);

// let resetButton = document.getElementById("reset");

// startButton.onclick = startTimer();

// setInterval(function(){ alert("Hello"); }, 3000);


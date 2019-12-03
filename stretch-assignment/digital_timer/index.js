let timerId = undefined;

let msTens = 0;
let msHundreds = 0;

let secondOnes = 0;
let secondTens = 0;

document.getElementById("msTens").textContent = msTens;
document.getElementById("msHundreds").textContent = msHundreds;
document.getElementById("secondOnes").textContent = secondOnes;
document.getElementById("secondTens").textContent = secondTens;

function startTimer()
    {
        if (timerId === undefined)
            {
                timerId = setInterval(updateMsTens, 10);
                document.getElementById("start").textContent = "Stop";

            }
        
        else
            {
                clearInterval(timerId); timerId = undefined;
                document.getElementById("start").textContent = "Start";
            }

    }

function resetTimer()
    {
        clearInterval(timerId);
        timerId = undefined;

        document.getElementById("start").textContent = "Start";

        msTens = 0;
        msHundreds = 0;

        secondOnes = 0;
        secondTens = 0;

        document.getElementById("msTens").textContent = msTens;
        document.getElementById("msHundreds").textContent = msHundreds;
        document.getElementById("secondOnes").textContent = secondOnes;
        document.getElementById("secondTens").textContent = secondTens;

        
        document.getElementById("msTens").classList.remove("redDigit");
        document.getElementById("msHundreds").classList.remove("redDigit");
        document.getElementById("colon").classList.remove("redDigit");
        document.getElementById("secondOnes").classList.remove("redDigit");
        document.getElementById("secondTens").classList.remove("redDigit");

    }


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

            clearInterval(timerId);
        }

    document.getElementById("secondTens").textContent = secondTens;
        
}
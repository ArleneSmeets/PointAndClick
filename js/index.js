document.getElementById("mainTitle").innerText = "Point and Click";
//document.getElementById("mainTitle").style.textAlign = "center";

const offsetCharacter = 16;

const mainCharacter = document.getElementById("mainCharacter");
const gameWindow = document.getElementById("gameWindow");

gameWindow.onclick = function(e)
{
    var rect = gameWindow.getBoundingClientRect();
    var x = e.clientX - rect.left; //x position within the element.
    var y = e.clientY - rect.top; //y position within the element.
    mainCharacter.style.left = x - offsetCharacter + "px";
    mainCharacter.style.top = y - offsetCharacter + "px";

    console.log(e.target.id);

    switch(e.target.id)
    {
        case "door1":
        //insert something here
        console.log("this is door one, and it's locked dummy...");
        break;

        default:
            //do something when it doesn't have a case
            console.log("nothing worth is clicked");
            showSpeech("...");
            break;

             }

    console.log(x);

    function showSpeech(dialog){
        mainCharacterSpeech.style.opacity = 1;
        mainCharacterSpeech.innerHTML = dialog;
    }

    function hideSpeech(){
        mainCharacterSpeech.style.opacity = 0;
        mainCharacterSpeech.innerHTML = "...";
    }

    //put in css on main character transition: all 1 ease-in-out;
}
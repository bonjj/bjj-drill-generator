const bootstrap = require('bootstrap')

const { getData } = require('./technique')
// import "./style.scss";

const techniqueText = document.getElementById('technique-name')
const techniqueUrl = document.getElementById('technique-url')
techniqueText.style.visibility = "hidden";
techniqueUrl.style.visibility = "hidden";


// handle button click
const genBtn = document.querySelector('#generate-btn')

genBtn.onclick = function () {
    console.log('click!')
    // Get the user STYLE selection
    const radioGi = document.getElementById('gi');
    const radioNogi = document.getElementById('nogi');
    const radioBoth = document.getElementById('both');
    let selectedStyle;

    if(radioGi.checked) {
        selectedStyle = 'gi'
    } 
    else if(radioNogi.checked) {
        selectedStyle = 'nogi'
    }
    else {
        selectedStyle = 'both'
    }

    // Get user MODE selection
    const radioAttack = document.getElementById('attack');
    const radioDefence = document.getElementById('defence');
    let selectedMode;

    if(radioAttack.checked) {
        selectedMode = 'attack'
    }
    else {
        selectedMode = 'defence'
    }

    // To do: call api to get collection using selectedStyle and selectedMode
    let techData = getData(selectedStyle, selectedMode)
            
    techData.then((techList) => {
        // console.log(techList);
        // console.log(techList[5]['name']);
        // Randomiser on result
        let randomTech = techList[Math.floor(Math.random() * techList.length)]
        console.log(randomTech)
        techniqueText.innerText = randomTech['name']
        techniqueUrl.setAttribute('href', `${randomTech['video']}`)
        console.log(randomTech['video'])
        techniqueText.style.visibility = "visible";
        techniqueUrl.style.visibility = "visible";
     })

};











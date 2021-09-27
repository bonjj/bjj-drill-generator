const bootstrap = require('bootstrap')
const { getData } = require('./technique')
// import "./style.scss";

// Get elements and sections

const techniqueText = document.getElementById('technique-name')
const techniqueUrl = document.getElementById('technique-url')
const videoSrc = document.getElementById('video-src')

const generatorSection = document.getElementById('generator-section')
const videoSection = document.getElementById('video-section')

// Handle generate button click

const genBtn = document.querySelector('#generate-btn')
const retryBtn = document.querySelector('#retry-btn')

genBtn.onclick = function () {
    console.log('click!')
    // Get the user STYLE selection
    const radioGi = document.getElementById('gi');
    const radioNogi = document.getElementById('nogi');
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
        // Randomiser on result
        let randomTech = techList[Math.floor(Math.random() * techList.length)]
        console.log(randomTech)
        // Update DOM
        techniqueText.innerText = randomTech['name']
        techniqueUrl.setAttribute('href', `${randomTech['video']}`)
        let embedUrl = randomTech['video'].replace("watch?v=", "embed/")
        console.log(embedUrl)
        videoSrc.setAttribute('src', `${embedUrl}`)

        // Handle visiblity (WIP)
        videoSection.classList.replace('hide', 'show')
        generatorSection.style.display = "none"
     })

};

// Handle retry button click

retryBtn.onclick = function () {
    
    // Get the user STYLE selection
    const radioGi = document.getElementById('gi');
    const radioNogi = document.getElementById('nogi');
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
        // Randomiser on result
        let randomTech = techList[Math.floor(Math.random() * techList.length)]
        console.log(randomTech)
        // Update DOM
        techniqueText.innerText = randomTech['name']
        techniqueUrl.setAttribute('href', `${randomTech['video']}`)
        let embedUrl = randomTech['video'].replace("watch?v=", "embed/")
        console.log(embedUrl)
        videoSrc.setAttribute('src', `${embedUrl}`)
        
     })
};


// Handle close button click

const closeIcon = document.getElementById('close-icon')

closeIcon.addEventListener('click', function(){
    videoSrc.setAttribute('src', '')
    videoSection.classList.replace('show', 'hide')
    // videoSection.style.display = "none"
    generatorSection.style.display = "block"
})












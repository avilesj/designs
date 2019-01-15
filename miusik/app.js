let intervalArr = [];

function loadBars(){
    let features = document.getElementsByClassName("feature-level");
    let featuresArray = Array.from(features);
    
    for(let i = 0; i < featuresArray.length; i++){
        intervalArr[i] = setInterval( () => {animate(featuresArray[i], i)}, 10);
    }
}

function animate(element, index) {
    
    let percentage = parseInt(element.getElementsByTagName("h2")[0].innerHTML.replace("%", ""));
    
    let elementWidth = parseInt(element.style.width.replace("%", ""));
    
    if(elementWidth < percentage){
        elementWidth++;
        
        element.style.width = elementWidth +"%";
    }
    else {
        clearInterval(intervalArr[index]);
    }
}

function toggleFetureHelp(id) {
    let featureHelpBox = document.getElementById(id);
    
    featureHelpBox.hidden = !featureHelpBox.hidden;
    
    let arrow = featureHelpBox.parentElement.querySelector("i");
    arrow.classList.toggle("fa-chevron-circle-down");
    arrow.classList.toggle("fa-chevron-circle-up");
}


window.onload = loadBars();

function setBackgroundImage(imageUrl, id) {
    var serviceElements;
    if (id) {
        serviceElements = document.querySelectorAll('#' + id + ' .service-image');
    } else {
        serviceElements = document.querySelectorAll('.service-image');
    }
    
    serviceElements.forEach(function(element) {
        element.style.backgroundImage = "url('" + imageUrl + "')";
        element.style.backgroundSize = "cover";
        element.style.backgroundRepeat = "no-repeat"; 
        element.style.backgroundPosition = "center";
    });
}

function resizeSection(elementIds) {
    elementIds.forEach(function(elementId) {
    var element = document.getElementById(elementId);
    var windowHeight = window.innerHeight;
    element.style.height = windowHeight + 'px';
    });
}

function adjustWidth(elementId, referenceElementId){
    var element = document.getElementById(elementId);
    var referenceElement = document.getElementById(referenceElementId);
    var referenceWidth = referenceElement.offsetWidth;
    element.style.width = referenceWidth + 'px';
}

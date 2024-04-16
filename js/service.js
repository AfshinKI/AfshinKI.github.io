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

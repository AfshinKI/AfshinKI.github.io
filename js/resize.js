function resizeSection(elementIds) {
    elementIds.forEach(function(elementId) {
    var element = document.getElementById(elementId);
    var windowHeight = window.innerHeight;
    element.style.height = windowHeight + 'px';
    });
}



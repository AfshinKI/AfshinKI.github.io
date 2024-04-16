document.querySelectorAll('.nav-link').forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(); 
        var targetId = this.getAttribute('href'); 
        var targetSection = document.querySelector(targetId); 

        if (targetSection) {
            targetSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start',
                inline: 'start',
                scrollTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1.0)'
            });        
        }
    });
});

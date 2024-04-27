

var galleryItems = [
  {
    id: 'cpp',
    src: 'figures/circuit.jpg',
    alt: 'Programming',
    caption: 'C++',
    heading: 'C++ Programming',
    text: 'This is a popup window!'
  },
  {
    id: 'python',
    src: 'figures/circuit.jpg',
    alt: 'Programming',
    caption: 'Python',
    heading: 'Python Programming',
    text: 'This is a popup window!'
  },
  {
    id: 'javascript',
    src: 'figures/circuit.jpg',
    alt: 'Programming',
    caption: 'JavaScript',
    heading: 'JavaScript Programming',
    text: 'This is a popup window!'
  },
  {
    id: 'typescript',
    src: 'figures/circuit.jpg',
    alt: 'Programming',
    caption: 'TypeScript',
    heading: 'TypeScript Programming',
    text: 'This is a popup window!'
  },
  {
    id: 'opencv',
    src: 'figures/circuit.jpg',
    alt: 'Framework',
    caption: 'OpenCV',
    heading: 'OpenCV Framework',
    text: 'This is a popup window!'
  },
  {
    id: 'cuda',
    src: 'figures/circuit.jpg',
    alt: 'Framework',
    caption: 'CUDA SDK',
    heading: 'CUDA SDK Framework',
    text: 'This is a popup window!'
  },
  {
    id: 'qt',
    src: 'figures/circuit.jpg',
    alt: 'Framework',
    caption: 'Qt',
    heading: 'Qt Framework',
    text: 'This is a popup window!'
  },
  {
    id: 'react',
    src: 'figures/circuit.jpg',
    alt: 'Framework',
    caption: 'React',
    heading: 'React Framework',
    text: 'This is a popup window!'
  },
  {
    id: 'cmake',
    src: 'figures/circuit.jpg',
    alt: 'Framework',
    caption: 'CMake',
    heading: 'CMake Framework',
    text: 'This is a popup window!'
  },
  {
    id: 'ros',
    src: 'figures/circuit.jpg',
    alt: 'Framework',
    caption: 'ROS',
    heading: 'ROS Framework',
    text: 'This is a popup window!'
  },
  {
    id: 'github',
    src: 'figures/circuit.jpg',
    alt: 'Framework',
    caption: 'GitHub',
    heading: 'GitHub Framework',
    text: 'This is a popup window!'
  },
  {
    id: 'grpc',
    src: 'figures/circuit.jpg',
    alt: 'Framework',
    caption: 'gRPC',
    heading: 'gRPC Framework',
    text: 'This is a popup window!'
  },
];

// Define gallery grid items

function createGalleryItem(id, src, alt, caption) {
  let galleryItem = document.createElement('li');
  galleryItem.className = 'gallery-item';
  galleryItem.id = id;

  let image = document.createElement('img');
  image.src = src;
  image.alt = alt;

  let figCaption = document.createElement('figcaption');
  figCaption.textContent = caption;

  galleryItem.appendChild(image);
  galleryItem.appendChild(figCaption);

  return galleryItem;
}

function createGallery(attachTo) {
  let gallery = document.getElementById(attachTo);
  for (let i = 0; i < galleryItems.length; i++) {
    let item = galleryItems[i];
    let galleryItem =
        createGalleryItem(item.id, item.src, item.alt, item.caption);
    gallery.appendChild(galleryItem);
  }
}

// Define gallery popups

function createPopup(id, src, alt, heading, text) {
  let popup = document.createElement('div');
  popup.className = 'popup';
  popup.id = id + '-popup';

  // Popup content
  let popupContent = document.createElement('div');
  popupContent.className = 'popup-content';

  let h2 = document.createElement('h2');

  let image = document.createElement('img');
  image.src = src;
  image.alt = alt;
  h2.appendChild(image);

  let textNode = document.createTextNode(heading);
  h2.appendChild(textNode);

  let p = document.createElement('p');
  p.textContent = text;

  let button = document.createElement('button');
  button.className = 'btn btn-lg btn-primary pull-right';
  button.id = 'close';
  button.textContent = 'Close';

  popupContent.appendChild(h2);
  popupContent.appendChild(p);
  popupContent.appendChild(button);

  popup.appendChild(popupContent);

  return popup;
}

function createGalleryPopups(attachTo) {
  // Gallery popups (display control)
  let popups = document.getElementById(attachTo);
  popups.className = 'gallery-popups';

  // Carousel
  let carousel = document.createElement('div');
  carousel.className = 'carousel slide cover-all';
  carousel.id = 'gallery-carousel';
  carousel.setAttribute('data-bs-interval', 'false');
  carousel.setAttribute('data-ride', 'carousel');

  // Carousel inner to hold items
  let carouselInner = document.createElement('div');
  carouselInner.className = 'carousel-inner cover-all';
  for (let i = 0; i < galleryItems.length; i++) {
    let item = galleryItems[i];
    let carouselItem = document.createElement('div');
    carouselItem.className = 'carousel-item cover-all';
    if (i == 0) {
      carouselItem.className += ' active';  // Set first item as active
    }
    carouselItem.id = item.id + '-popup';
    let popup =
        createPopup(item.id, item.src, item.alt, item.heading, item.text);
    carouselItem.appendChild(popup);
    carouselInner.appendChild(carouselItem);
  }

  carousel.appendChild(carouselInner);

  // Carousel controls
  let prev = document.createElement('button');
  prev.className = 'carousel-control-prev';
  prev.type = 'button';
  prev.id = 'carousel-control-prev'
  prev.setAttribute('data-bs-target', '#gallery-carousel');
  prev.setAttribute('data-bs-slide', 'prev');
  prev.innerHTML =
      '<span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span>';

  let next = document.createElement('button');
  next.className = 'carousel-control-next';
  next.id = 'carousel-control-next'
  next.type = 'button';
  next.setAttribute('data-bs-target', '#gallery-carousel');
  next.setAttribute('data-bs-slide', 'next');
  next.innerHTML =
      '<span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span>';

  carousel.appendChild(prev);
  carousel.appendChild(next);

  popups.appendChild(carousel);
}

createGallery('project-gallery');  // Pass id to attach gallery grid
createGalleryPopups(
    'project-gallery-popup');  // Pass id to attach gallery popups

var popups = document.getElementById('project-gallery-popup');

function closePopup() {
  popups.style.display = 'none';
}

function openPopup() {
  popups.style.display = 'block';
}

function isPopupOpen() {
  return popups.style.display == 'block';
}

$(document).ready(function() {
  galleryItems.forEach(function(item) {
    var popup = $('#' + item.id + '-popup');
    $('#' + item.id).click(function(e) {
      e.stopPropagation();  // Stop event bubbling
      var activePopup = $('.carousel-item.active');
      activePopup.removeClass('active');
      popup.addClass('active');
      openPopup();
    });
    popup.find('#close').click(function() {
      closePopup();
    });
  });

  $(document).click(function(event) {
    if (isPopupOpen()) {
      if (!$(event.target).closest('.popup-content').length &&
          !$(event.target).closest('#carousel-control-prev').length &&
          !$(event.target).closest('#carousel-control-next').length) {
        closePopup();
      }
    }
  });
});

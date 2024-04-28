

var galleryItems = [
  {
    id: 'cpp',
    src: 'figures/Elcectronics.JPG',
    alt: 'Programming',
    caption: 'Analog and Digital Electronic',
    heading: 'Analog and Digital Electronic',
    text:
        'Leverage my years of experience in electronics. I possess extensive experience in creating electronics for various fields including medical and industrial applications throughout my career. I excel in all phases of electrical design, from concept to implementation. I emphasize optimizing performance, integrating seamlessly, and delivering reliable solutions for your unique needs. Whether it\'s designing cutting-edge medical devices or pushing the boundaries of innovation, I can join your team and turn your ideas into reality with precision and excellence.',
    bullets: [
      'FPGA based board design', 'High-speed Signal design',
      'Application specific PCIe cards', 'Analog / mixed signal design',
      'Sensors and signal conditioning', 'Medical system electronics',
      'Fail-safe safety electronics'
    ],
  },
  {
    id: 'python',
    src: 'figures/pcb.jpg',
    alt: 'Programming',
    caption: 'Printed Circuit Board (PCB)',
    heading: 'Printed Circuit Board (PCB)',
    text:
        'As a dedicated team member, I specialize in tailoring PCB design to meet the most demanding requirements of modern electronic systems. My skills ensure that your PCB designs are optimized for performance, reliability, and manufacturability. From schematic capture to production file generation, I provide comprehensive support at every stage of the design process.',
    bullets: [
      'Proficiency in ECAD tools: Altium Designer and KiCad',
      'Seamless execution of schematic capture, library creation, and maintenance',
      'Design and development of complex, mixed-signal, and multi-layer PCBs',
      'Expertise in high-speed, sensitive, and high I/O-count designs',
      'Robust design practices ensuring EMC (Electromagnetic Compatibility) and signal integrity',
      'Precise stack-up and build-up design, incorporating controlled impedance',
      'Efficient production file generation and streamlined ordering processes',
      'Thorough component sourcing and coordination with fabrication and assembly houses'
    ],
  },
  {
    id: 'javascript',
    src: 'figures/software.jpg',
    alt: 'Programming',
    caption: 'Software & Firmware Skills',
    heading: 'Software & Firmware Skills',
    text:
        'Utilize my expertise in software development. I offer a wide range of software development services tailored to meet your specific needs. I collaborate closely with you to define software specifications and requirements, develop efficient concepts, and produce prototype-level and production-ready code.',
    bullets: [
      'C / C++ coding for microcontrollers such as AVR, STM',
      'C / C++ coding for software development for Windows and Linux',
      'Verilog and HLS for AMD FPGAs',
      'Embedded software development for IoT devices',
      'Real-time embedded systems programming',
      'Algorithm development and optimization',
      'GUI (Graphical User Interface) design and development',
      'Integration with hardware components', 'GPU and CUDA programming'
    ],

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

function createPopup(id, src, alt, heading, text, bullets) {
  let popup = document.createElement('div');
  popup.className = 'popup';
  popup.id = id + '-popup';

  // Popup content
  let popupContent = document.createElement('div');
  popupContent.className = 'popup-content';

  let h2 = document.createElement('h2');
  h2.innerHTML = heading;

  let line1 = document.createElement('hr');

  let image = document.createElement('img');
  image.src = src;
  image.alt = alt;

  let p1 = document.createElement('p');
  p1.textContent = text;

  let p2 = document.createElement('p');
  p2.textContent = 'Key skills include:';


  for (let i = 0; i < bullets.length; i++) {
    let bullet = document.createElement('li');
    bullet.textContent = bullets[i];
    p2.appendChild(bullet);
  }

  let line2 = document.createElement('hr');

  let button = document.createElement('button');
  button.className = 'btn btn-lg btn-primary pull-right';
  button.id = 'close';
  button.textContent = 'Close';

  popupContent.appendChild(h2);
  popupContent.appendChild(line1);
  popupContent.appendChild(image);
  popupContent.appendChild(p1);
  popupContent.appendChild(p2);
  popupContent.appendChild(line2);
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
    let popup = createPopup(
        item.id, item.src, item.alt, item.heading, item.text, item.bullets);
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

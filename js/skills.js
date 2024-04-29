

var galleryItems = [
  {
    id: 'electronics',
    src: 'figures/Elcectronics.JPG',
    alt: 'Programming',
    caption: 'Analog and Digital Electronics',
    heading: 'Analog and Digital Electronics',
    text:
        'Leverage my years of experience in electronics. I possess extensive experience in creating electronics for various fields including medical and industrial applications throughout my career. I excel in all phases of electrical design, from concept to implementation. I emphasize optimizing performance, integrating seamlessly, and delivering reliable solutions for your unique needs. Whether it\'s designing cutting-edge medical devices or pushing the boundaries of innovation, I can join your team and turn your ideas into reality with precision and excellence.',
    skillCaption: 'Some of my skills include:',
    bullets: [
      'FPGA based board design',
      'High-speed Signal design',
      'Application specific PCIe cards',
      'Analog / mixed signal design',
      'Sensors and signal conditioning',
      'Medical system electronics',
      'Fail-safe safety electronics',
    ],
  },
  {
    id: 'pcb',
    src: 'figures/pcb.jpg',
    alt: 'Programming',
    caption: 'Printed Circuit Board (PCB)',
    heading: 'Printed Circuit Board (PCB)',
    text:
        'As a dedicated team member, I specialize in tailoring PCB design to meet the most demanding requirements of modern electronic systems. My skills ensure that your PCB designs are optimized for performance, reliability, and manufacturability. From schematic capture to production file generation, I provide comprehensive support at every stage of the design process.',
    skillCaption: 'Highlights of my skills includes:',
    bullets: [
      'Proficiency in ECAD tools: Altium Designer and KiCad',
      'Seamless execution of schematic capture, library creation, and maintenance',
      'Design and development of complex, mixed-signal, and multi-layer PCBs',
      'Expertise in high-speed, sensitive, and high I/O-count designs',
      'Robust design practices ensuring EMC (Electromagnetic Compatibility) and signal integrity',
      'Precise stack-up and build-up design, incorporating controlled impedance',
      'Efficient production file generation and streamlined ordering processes',
      'Thorough component sourcing and coordination with fabrication and assembly houses',
    ],
  },
  {
    id: 'software',
    src: 'figures/software.jpg',
    alt: 'Programming',
    caption: 'Software & Firmware',
    heading: 'Software & Firmware',
    text:
        'Utilize my expertise in software development. I offer a wide range of software development services tailored to meet your specific needs. I collaborate closely with you to define software specifications and requirements, develop efficient concepts, and produce prototype-level and production-ready code.',
    skillCaption: 'Here\'s an overview of I excell at:',
    bullets: [
      'C / C++ coding for microcontrollers such as AVR, STM',
      'C / C++ coding for software development for Windows and Linux',
      'Verilog and HLS for AMD FPGAs',
      'Embedded software development for IoT devices',
      'Real-time embedded systems programming',
      'Algorithm development and optimization',
      'GUI (Graphical User Interface) design and development',
      'Integration with hardware components',
      'GPU and CUDA programming',
    ],

  },
];

const modalPostFix = '-modal';

function createGalleryItem(id, src, alt, caption) {
  let imageBox = document.createElement('div');
  imageBox.className = 'image-box wow fadeInUp';

  let overlayContainer = document.createElement('div');
  overlayContainer.className = 'overlay-container text-center';


  let image = document.createElement('img');
  image.src = src;
  image.alt = alt;

  let overlay = document.createElement('a');
  overlay.className = 'overlay';
  overlay.setAttribute('data-toggle', 'modal');
  overlay.setAttribute('data-target', `#${id}${modalPostFix}`);
  overlay.innerHTML = '<i class="fa fa-search-plus"></i>';

  let h3 = document.createElement('h3');
  h3.textContent = caption;

  overlayContainer.appendChild(image);
  overlayContainer.appendChild(overlay);
  overlayContainer.appendChild(h3);

  imageBox.appendChild(overlayContainer);

  return imageBox;
}

function createModal(id, src, heading, text, skillCaption, bullets) {
  let modal = document.createElement('div');
  modal.className = 'modal fade';
  modal.id = id + modalPostFix;
  modal.tabIndex = -1;
  modal.role = 'dialog';
  modal.setAttribute('aria-labelledby', id);
  modal.setAttribute('aria-hidden', 'true');

  let modalDialog = document.createElement('div');
  modalDialog.className = 'modal-dialog modal-lg';

  let modalContent = document.createElement('div');
  modalContent.className = 'modal-content';

  let modalHeader = document.createElement('div');
  modalHeader.className = 'modal-header';

  let closeButton = document.createElement('button');
  closeButton.type = 'button';
  closeButton.className = 'close';
  closeButton.setAttribute('data-dismiss', 'modal');

  let span = document.createElement('span');
  span.setAttribute('aria-hidden', 'true');
  span.innerHTML = '&times;';
  closeButton.appendChild(span);

  let span2 = document.createElement('span');
  span2.className = 'sr-only';
  span2.textContent = 'Close';
  closeButton.appendChild(span2);

  let h2 = document.createElement('h2');
  h2.className = 'modal-title';
  h2.innerHTML = heading;

  modalHeader.appendChild(closeButton);
  modalHeader.appendChild(h2);

  let modalBody = document.createElement('div');
  modalBody.className = 'modal-body';

  let row = document.createElement('div');
  row.className = 'row';

  let col = document.createElement('div');
  col.className = 'col-md-12';

  let image = document.createElement('img');
  image.src = src;

  let h3 = document.createElement('h3');

  let p = document.createElement('p');
  p.textContent = text;

  let p2 = document.createElement('p');
  p2.textContent = skillCaption;
  let ul = document.createElement('ul');
  bullets.forEach(bullet => {
    let li = document.createElement('li');
    li.textContent = bullet;
    ul.appendChild(li);
  });

  let modalFooter = document.createElement('div');
  modalFooter.className = 'modal-footer';

  let modalFooterButton = document.createElement('button');
  modalFooterButton.type = 'button';
  modalFooterButton.className = 'btn btn-sm btn-default';
  modalFooterButton.setAttribute('data-dismiss', 'modal');
  modalFooterButton.textContent = 'Close';
  modalFooter.appendChild(modalFooterButton);

  col.appendChild(image);
  col.appendChild(h3);
  col.appendChild(p);
  col.appendChild(p2);
  col.appendChild(ul);
  row.appendChild(col);
  modalBody.appendChild(row);
  modalContent.appendChild(modalHeader);
  modalContent.appendChild(modalBody);
  modalContent.appendChild(modalFooter);
  modalDialog.appendChild(modalContent);
  modal.appendChild(modalDialog);

  return modal;
}


function createGallery(attachTo) {
  let gallery = document.getElementById(attachTo);

  galleryItems.forEach(item => {
    let card = document.createElement('div');
    card.className = 'col-sm-6 col-md-4 isotopeItem web-design pdingBtm30';

    let galleryItem =
        createGalleryItem(item.id, item.src, item.alt, item.caption);
    card.appendChild(galleryItem);

    let modal = createModal(
        item.id, item.src, item.heading, item.text, item.skillCaption,
        item.bullets);
    card.appendChild(modal);
    gallery.appendChild(card);
  });
}


createGallery('gallery');

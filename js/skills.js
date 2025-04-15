
const galleryItems = [
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
  const div = document.createElement('div');
  div.classList.add('col-md-3', 'col-sm-6', 'card', 'm-2');
  div.innerHTML = `
      <div class="card-body h-100" role="button" data-bs-toggle="modal" data-bs-target="#${id}${modalPostFix}">
        <img src="${src}" alt="${alt}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title text-center">${caption}</h5>
        </div>
      </div>
  `;
  return div;
}


function createModal(id, src, heading, text, skillCaption, bullets) {
  const div = document.createElement('div');
  div.classList.add('modal', 'fade');
  div.id = `${id}${modalPostFix}`;
  div.setAttribute('tabindex', '-1');
  div.setAttribute('aria-labelledby', `${id}-label`);
  div.setAttribute('aria-hidden', 'true');
  div.innerHTML = `
    <div class="modal-dialog modal-lg modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title" id="${id}-label">${heading}</h2>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <img src="${src}" alt="${heading}" class="img-fluid mb-3">
          <h3>${heading}</h3>
          <p>${text}</p>
          <p>${skillCaption}</p>
          <ul>
            ${bullets.map(bullet => `<li>${bullet}</li>`).join('')}
          </ul>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>

      </div>
    </div>
  `;
  return div;
}

function createGallery(attachTo) {
  const container = document.getElementById(attachTo);
  if (!container) {
    console.error(`Element with id ${attachTo} not found.`);
    return;
  }
  container.innerHTML = ''; // Clear existing content
  container.classList.add('d-flex', 'flex-wrap', 'justify-content-center');

  galleryItems.forEach(item => {
    container.appendChild(createGalleryItem(item.id, item.src, item.alt, item.caption));
    container.appendChild(createModal(item.id, item.src, item.heading, item.text,
      item.skillCaption, item.bullets));
  });
  
}


createGallery('skills');


const galleryItems = [
  {
    id: 'electronics',
    src: 'figures/Elcectronics.JPG',
    alt: 'High-speed and mixed-signal electronics design',
    caption: 'High-Speed & Mixed-Signal Design',
    heading: 'High-Speed & Mixed-Signal Design',
    text:
        'INNOVETRON designs the demanding parts of electronic systems: FPGA-based boards, high-speed digital interfaces, and low-noise analog front ends. We take products from architecture and schematic through layout, bring-up, and validation — with signal integrity engineered in from the start, not patched in at the end.',
    skillCaption: 'What we deliver:',
    bullets: [
      'FPGA-based board design',
      'High-speed digital interfaces: PCIe, USB 3, DDR, LVDS',
      'Signal & power integrity: S-parameters, TDR, PDN design',
      'Low-noise analog front ends and sensor conditioning',
      'High-sample-rate ADC/DAC data acquisition',
      'Custom power conversion (DC-DC) for sensitive analog systems',
      'Fail-safe safety electronics',
    ],
  },
  {
    id: 'pcb',
    src: 'figures/pcb.jpg',
    alt: 'Printed circuit board design and layout',
    caption: 'PCB Design & Layout',
    heading: 'PCB Design & Layout',
    text:
        'From schematic capture to fabrication-ready outputs, we deliver PCBs optimized for performance, reliability, and manufacturability — including high-density, high-speed, and mixed-signal boards built to IPC standards, with every design version-controlled and checked automatically before release.',
    skillCaption: 'What we deliver:',
    bullets: [
      'Altium Designer and KiCad workflows',
      'Constraint-driven layout with controlled impedance',
      'Stack-up design for high-speed performance and EMC',
      'Complex, high-density, mixed-signal multi-layer boards',
      'IPC 2221 design practices; IPC Class 3 quality',
      'Complete fabrication and assembly packages',
      'Component sourcing and manufacturer coordination',
      'Version-controlled EDA with automated design checks (CI)',
    ],
  },
  {
    id: 'software',
    src: 'figures/software.JPG',
    alt: 'FPGA, DSP, and firmware development',
    caption: 'FPGA, DSP & Firmware',
    heading: 'FPGA, DSP & Firmware',
    text:
        'We build the logic and code that moves your data: custom FPGA IP, real-time DSP pipelines, and embedded firmware — verified, versioned, and delivered through CI so every release is reproducible.',
    skillCaption: 'What we deliver:',
    bullets: [
      'Verilog and HLS for AMD (Xilinx) FPGAs',
      'Custom IP cores (AXI4-Lite / AXI-Stream)',
      'DSP on FPGA: up/down conversion, filtering, decimation',
      'High-throughput data paths: PCIe, DMA, LVDS',
      'Embedded C/C++ for STM32, AVR, and soft processors',
      'Windows / Linux host software and GUIs',
      'GPU and CUDA acceleration',
      'CI/CD pipelines for FPGA and firmware releases',
    ],

  },
];

const modalPostFix = '-modal';

function createGalleryItem(id, src, alt, caption) {
  const div = document.createElement('div');
  div.className = 'card text-secondary col-lg-3 col-md-6 col-sm-10 p-0 border-0 shadow-sm position-relative';
  div.innerHTML = `
      <div role="button" data-bs-toggle="modal" data-bs-target="#${id}${modalPostFix}">
        <img src="${src}" alt="${alt}" class="card-img-top" style="height: 200px; object-fit: cover;">
        <div class="card-body">
          <h5 class="card-title text-center">${caption}</h5>
        </div>
        <div class="overlay">
          <i class="fa fa-search-plus"></i>
        </div>
      </div>
  `;
  return div;
}


function createModal(id, src, heading, text, skillCaption, bullets) {
  const div = document.createElement('div');
  div.className = 'modal fade';
  div.id = `${id}${modalPostFix}`;
  div.setAttribute('tabindex', '-1');
  div.setAttribute('aria-labelledby', `${id}-label`);
  div.setAttribute('aria-hidden', 'true');
  div.innerHTML = `
    <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable ">
      <div class="modal-content">
        <div class="modal-header">
          <h2 class="modal-title text-innovetron" id="${id}-label">${heading}</h2>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-secondary text-justify">
          <img src="${src}" alt="${heading}" class="img-fluid mb-3" style="height: 200px; width: 100%; object-fit: cover;">
          <p class="text-justify">${text}</p>
          <p>${skillCaption}</p>
          <ul>
            ${bullets.map(bullet => `<li>${bullet}</li>`).join('')}
          </ul>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
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

  const row = document.createElement('div');
  row.className = 'row justify-content-center gap-4 px-4';

  galleryItems.forEach(item => {
    row.appendChild(createGalleryItem(item.id, item.src, item.alt, item.caption));

    container.appendChild(
      createModal(
        item.id,
        item.src,
        item.heading,
        item.text,
        item.skillCaption,
        item.bullets
      )
    );
  });

  container.appendChild(row);
}



createGallery('skills');

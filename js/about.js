const aboutItems = [
  {
    id: 'excel',
    icon: 'fa fa-desktop',
    caption: 'What I excell at?',
    text:
        'I excel at electronic, hardware, and embedded skillsets, offering a wide range of expertise from circuit design and advanced PCB development to innovative software and firmware developments. I can assist you in creating custom solutions that meet the highest quality and regulatory standards, ensuring reliability and performance. With years of experience in areas such as analog and digital circuit design, FPGA board design, and high-speed electronics, I am your perfect candidate. Whether you need firmware for microcontroller-based systems, desktop applications for various platforms, or FPGA programming for hardware acceleration, I have the capabilities to bring your ideas to life with precision and excellence.'
  },
  {
    id: 'hire',
    icon: 'fa fa-check-square',
    caption: 'Why hire me?',
    text:
        'Choose me for your electronic and embedded needs because I am a field expert, with over 9 years of collective experience. My proven track record speaks volumes. With a meticulous eye for detail and an unwavering commitment to excellence, I guarantee that every project not only meets but surpasses expectations. Entrust me to actualize your vision with professionalism, expertise, and an unwavering dedication to excellence. Detailed Work experience will be provided uopn request.'
  },
  {
    id: 'where',
    icon: 'fa fa-map-marker',
    caption: 'Where am I?',
    text:
        'I am proud to call Edmonton, Alberta, our home base. From here, I am equipped to collaborate with your team both locally and globally. By hiring me, you\'ll experience my creativity, expertise, and dedication at its finest.'
  }
];

function createAboutItem(id, icon, caption, text) {
  const div = document.createElement('div');
  div.className = 'col-lg-3 col-md-5 col-sm-10';
  div.innerHTML = `
    <h3>
      <i class="${icon} text-innovetron"></i>
      &nbsp ${caption}
    </h3>
    <p>${text}</p>
  `;
  return div;
}

function createAboutItems(attachTo) {
  const container = document.getElementById(attachTo);
  if (!container) {
    console.error(`Element with id ${attachTo} not found.`);
    return;
  }
  container.innerHTML = ''; // Clear existing content
  container.className = 'd-flex flex-wrap justify-content-center gap-5';
  
  aboutItems.forEach(item => {
    container.appendChild(
        createAboutItem(item.id, item.icon, item.caption, item.text));
  });
}

createAboutItems('about');

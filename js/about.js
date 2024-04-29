var aboutItems = [
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
  let div = document.createElement('div');
  div.className = 'col-md-4 col-sm-4 wow fadeInUp';
  let h3 = document.createElement('h3');
  let i = document.createElement('i');
  i.className = icon;
  h3.appendChild(i);
  h3.innerHTML += '&nbsp ' + caption;
  let p = document.createElement('p');
  p.innerHTML = text;
  div.appendChild(h3);
  div.appendChild(p);
  return div;
}

function createAboutItems(attachTo) {
  let about = document.getElementById(attachTo);
  aboutItems.forEach(function(item) {
    about.appendChild(
        createAboutItem(item.id, item.icon, item.caption, item.text));
  });
}

createAboutItems('about');

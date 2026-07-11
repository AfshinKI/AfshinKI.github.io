const aboutItems = [
  {
    id: 'what',
    icon: 'fa fa-desktop',
    caption: 'What we do',
    text:
        'INNOVETRON is an electronics design consultancy specializing in high-speed, high-precision systems: FPGA-based boards, mixed-signal and low-noise analog design, and the embedded software that drives them. We serve medical and industrial clients across the complete development cycle — architecture, schematic, PCB layout, firmware, bring-up, and validation — whether you need a focused design review or a full product designed from scratch.'
  },
  {
    id: 'why',
    icon: 'fa fa-check-square',
    caption: 'Why INNOVETRON',
    text:
        'You work directly with the engineer doing the design: a PhD, P.Eng with 10+ years of experience, three U.S. patent filings, 20+ peer-reviewed publications, and a track record of leading safety-critical electronics through IEC 60601 compliance and Health Canada authorization. Small-firm attention with big-firm rigor — every design is version-controlled, reviewed, and released through automated checks, so quality is built into the process rather than promised.'
  },
  {
    id: 'how',
    icon: 'fa fa-map-marker',
    caption: 'How we work',
    text:
        'Based in Edmonton, Alberta, and working with clients locally and globally. We are remote-first and responsive: with modern collaboration and CI tooling, you see design progress continuously — live design reviews, versioned releases, and automatically generated documentation — not just a package at the end.'
  }
];

function createAboutItem(id, icon, caption, text) {
  const div = document.createElement('div');
  div.className = 'col-lg-3 col-md-6 col-sm-10';
  div.innerHTML = `
    <h3>
      <i class="${icon} text-innovetron"></i>
      &nbsp ${caption}
    </h3>
    <p class="text-justify">${text}</p>
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
  container.className = 'd-flex flex-wrap justify-content-center gap-4 px-4';
  
  aboutItems.forEach(item => {
    container.appendChild(
        createAboutItem(item.id, item.icon, item.caption, item.text));
  });
}

createAboutItems('about');

const stories = [
  'INNOVETRON was founded by Afshin Kashani, PhD, P.Eng — an engineer whose fascination with electronics started early: a blinking-LED toy car at six, a first printed circuit board at eleven, a security system for the family store at fourteen, and national recognition in electronics by twenty-one.',

  'He earned his PhD at the University of Alberta in Prof. Roger Zemp\'s lab, where he co-invented transparent ultrasound transducer arrays and designed high-voltage switching electronics that outperformed commercial state of the art — work behind three U.S. patent filings and more than twenty peer-reviewed publications with hundreds of citations.',

  'In industry, Afshin built and led a five-engineer electronics team developing ophthalmic laser devices, taking safety-critical hardware from concept through IEC 60601 compliance and Health Canada authorization. Today he works at the forefront of FPGA-based data acquisition and precision sensing systems, and brings that same engineering to INNOVETRON\'s clients.',

  'That combination — an inventor\'s curiosity, regulatory discipline, and hands-on delivery from schematic to validated hardware — is what INNOVETRON puts behind every project.'
];

function createStory(attachTo) {
  const container = document.getElementById(attachTo);
  if (!container) {
    console.error(`Element with id ${attachTo} not found.`);
    return;
  }

  container.innerHTML = ''; // Clear existing content

  // Create a Bootstrap row
  const row = document.createElement('div');
  row.className = 'row align-items-center';

  // Create image column
  const imgCol = document.createElement('div');
  imgCol.className = 'col-lg-4 col-md-6 text-center px-4 my-2';
  imgCol.innerHTML = `
    <img src="figures/founder.jpg" alt="Afshin" class="img-fluid rounded-circle">
    <div class="d-flex justify-content-center gap-2 mt-2">
        <a href="https://www.linkedin.com/in/afshinkashani/" class="text-innovetron h2">
            <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://scholar.google.com/citations?user=o8TAswwAAAAJ&hl=en" class="text-innovetron h2">
            <i class="fa-brands fa-google-scholar"></i>
        </a>
    </div>
  `;

  // Create text column
  const textCol = document.createElement('div');
  textCol.className = 'col-lg-8 col-md-6 px-4 my-2 text-justify';

  stories.forEach(item => {
    const p = document.createElement('p');
    p.textContent = item;
    textCol.appendChild(p);
  });

  // Append columns to row, then to container
  row.appendChild(imgCol);
  row.appendChild(textCol);
  container.appendChild(row);
}

createStory('story');

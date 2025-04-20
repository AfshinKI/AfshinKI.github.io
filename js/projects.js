const projects = [
    {
      id: 'electronics',
      src: 'figures/dummy.png',
      alt: 'Dummy1',
      target: 'dummy.html',
      caption: 'Dummy Project1',
      text: 'Simple description',
    },
    {
      id: 'pcb',
      src: 'figures/dummy.png',
      alt: 'Dummy2',
      target: 'dummy.html',
      caption: 'Dummy Project2',
      text: 'Simple description',
    },
    {
      id: 'software',
      src: 'figures/dummy.png',
      alt: 'Dummy3',
      target: 'dummy.html',
      caption: 'Dummy Project3',
      text: 'Simple description',
    },
  ];

function projectItem(id, src, alt, target, caption, text) {
    const div = document.createElement('div');
    div.className = 'col-lg-3 col-md-6 col-sm-10 p-0 border-0 shadow-sm position-relative';
    div.innerHTML = `
        <a href="${target}" class="text-decoration-none text-reset">
            <img src="${src}" alt="${alt}" class="card-img-top" style="height: 200px; object-fit: cover;">
            <div class="card-img-overlay text-light d-flex flex-column justify-content-center" style="background-color: rgba(0,0,0, 0.5);">
                <h5 class="card-title">${caption}</h5>
                <p class="card-text text-justify">${text}</p>
            </div>
        </a>
    `;
    return div;
}


const container = document.getElementById('project-contents');
if (!container) {
    console.error(`Element with id project-contents not found.`);
}

container.innerHTML = ''; // Clear existing content

const row = document.createElement('div');
row.className = 'row justify-content-center gap-4 px-4';

projects.forEach(item => {
    row.appendChild(projectItem(item.id, item.src, item.alt, item.target, item.caption, item.text));
});

container.appendChild(row);
  
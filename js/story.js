const stories = [
  'Afshin\'s journey the realm of electronics began with a humble gift, a tiny police car adorned with blinking LEDs, igniting a passion that would shape his life\'s trajectory. From the tender age of six, curiosity propelled him to dismantle and explore every electronic gadget, laying the foundation for a lifelong fascination with innovation.',

  'By the age of 11, Afshin had already designed his first printed circuit board, and by 14, he crafted a security system for his family\'s store. His knack for electronics only deepened as he matured, culminating in national recognition for his prowess at the age of 21. Armed with ambition and an insatiable thirst for knowledge, Afshin embarked on a journey to transform his childhood passion into a career that would impact millions.',

  'Eight years ago, Afshin made a bold decision to pursue his dreams beyond the confines of his homeland, guided by Eleanor Roosevelt\'s timeless wisdom: "The future belongs to those who believe in the beauty of their dreams." Leaving behind familiarity, he embraced the unknown, driven by an unwavering faith in the power of his aspirations.',

  'Under the mentorship of Prof. Roger Zemp, Afshin honed his skills and expanded his horizons, culminating in the completion of his PhD. Grateful for the guidance and camaraderie of his mentors and peers, Afshin bid farewell to Zemp Lab, ready to embark on a new chapter. He started as an Electronics Team Lead at a medical device company, eager to contribute his expertise to groundbreaking projects and continue his journey of innovation.',

  'Today, Afshin stands at the forefront of innovation, poised to contribute his expertise to groundbreaking projects. With each achievement, he remains humble, acknowledging the invaluable support of his mentors, colleagues, and friends.',

  'Afshin\'s journey exemplifies the transformative power of passion, perseverance, and unwavering dedication. As he continues to push the boundaries of possibility, he remains guided by the belief that every dream is worth pursuing, no matter the sacrifices along the way.'
];

function createStory(attachTo) {
  const container = document.getElementById(attachTo);
  if (!container) {
    console.error(`Element with id ${attachTo} not found.`);
    return;
  }
  container.innerHTML = ''; // Clear existing content
  container.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'gap-3');
  
  const picture = document.createElement('img');
  picture.src = 'figures/founder.jpg';
  picture.alt = 'Afshin';
  picture.classList.add('img-fluid', 'rounded-circle', 'mb-3', 'col-lg-4', 'col-md-6', 'col-sm-8');
  container.appendChild(picture);

  const textContainer = document.createElement('div');
  textContainer.innerHTML = ''; // Clear existing content
  
  stories.forEach(item => {
    const p = document.createElement('p');
    p.textContent = item;
    textContainer.appendChild(p);
  });
  container.appendChild(textContainer);
}

createStory('story');

var stories = [
  'Afshin\'s journey the realm of electronics began with a humble gift, a tiny police car adorned with blinking LEDs, igniting a passion that would shape his life\'s trajectory. From the tender age of six, curiosity propelled him to dismantle and explore every electronic gadget, laying the foundation for a lifelong fascination with innovation.',

  'By the age of 11, Afshin had already designed his first printed circuit board, and by 14, he crafted a security system for his family\'s store. His knack for electronics only deepened as he matured, culminating in national recognition for his prowess at the age of 21. Armed with ambition and an insatiable thirst for knowledge, Afshin embarked on a journey to transform his childhood passion into a career that would impact millions.',

  'Eight years ago, Afshin made a bold decision to pursue his dreams beyond the confines of his homeland, guided by Eleanor Roosevelt\'s timeless wisdom: "The future belongs to those who believe in the beauty of their dreams." Leaving behind familiarity, he embraced the unknown, driven by an unwavering faith in the power of his aspirations.',

  'Under the mentorship of Prof. Roger Zemp, Afshin honed his skills and expanded his horizons, culminating in the completion of his PhD. Grateful for the guidance and camaraderie of his mentors and peers, Afshin bid farewell to Zemp Lab, ready to embark on a new chapter. He started as an Electronics Team Lead at a medical device company, eager to contribute his expertise to groundbreaking projects and continue his journey of innovation.',

  'Today, Afshin stands at the forefront of innovation, poised to contribute his expertise to groundbreaking projects. With each achievement, he remains humble, acknowledging the invaluable support of his mentors, colleagues, and friends.',

  'Afshin\'s journey exemplifies the transformative power of passion, perseverance, and unwavering dedication. As he continues to push the boundaries of possibility, he remains guided by the belief that every dream is worth pursuing, no matter the sacrifices along the way.'
];

function createStoryItem(text) {
  let p = document.createElement('p')
  p.textContent = text
  return p;
}

function createStory(attachTo) {
  let story = document.getElementById(attachTo);
  stories.forEach(item => {
    let storyItem = createStoryItem(item);
    story.appendChild(storyItem);
    story.appendChild(document.createElement('p'));
  });
}

createStory('storyContents');

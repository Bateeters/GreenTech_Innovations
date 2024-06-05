const words = ['lorem', 'ipsum', 'dolor', 'it', 'amet', 'consectetur', 'adipiscing', 'elit', 'ed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore', 'agna', 'aliqua'];
const minWordsPerSentence = 5;
const maxWordsPerSentence = 15;

function generateRandomSentence(numWords) {
  let sentence = '';
  for (let i = 0; i < numWords; i++) {
    const randIndex = Math.floor(Math.random() * words.length);
    sentence += words[randIndex];
    if (i < numWords - 1) {
      sentence += ' ';
    }
  }
  sentence += '.';
  return sentence;
}

const testimonials = [];
for (let i = 0; i < 20; i++) {
  const testimonial = {
    text: generateRandomSentence(Math.floor(Math.random() * (maxWordsPerSentence - minWordsPerSentence + 1)) + minWordsPerSentence),
    author: `-- Client ${i}`,
  };
  testimonials.push(testimonial);
}

let currentTestimonial = 0;

const testimonialElem = document.getElementById("testimonial");
const authorElem = document.getElementById("author");
const prevBtn = document.getElementById("backward");
const nextBtn = document.getElementById("forward");

function showTestimonial() {
  testimonialElem.innerText = testimonials[currentTestimonial].text;
  authorElem.innerText = testimonials[currentTestimonial].author;
}

function prevTestimonial() {
  currentTestimonial--;
  if (currentTestimonial < 0) {
    currentTestimonial = testimonials.length - 1;
  }
  showTestimonial();
}

function nextTestimonial() {
  currentTestimonial++;
  if (currentTestimonial >= testimonials.length) {
    currentTestimonial = 0;
  }
  showTestimonial();
}

prevBtn.addEventListener("click", prevTestimonial);
nextBtn.addEventListener("click", nextTestimonial);

showTestimonial();

// auto scroll after 5 seconds
setTimeout(() => {
  setInterval(nextTestimonial, 5000);
}, 5000);
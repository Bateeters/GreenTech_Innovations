const words = ['lorem', 'ipsum', 'dolor', 'it', 'amet', 'consectetur', 'adipiscing', 'elit', 'ed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore', 'agna', 'aliqua'];

// Minimum and maximum number of words per sentence
const minWordsPerSentence = 5;
const maxWordsPerSentence = 15;

// Function to generate a random sentence with a specified number of words
function generateRandomSentence(numWords) {
  let sentence = '';  
  // Loop through the number of words
  for (let i = 0; i < numWords; i++) {
    // Generate a random index to select a word from the words array
    const randIndex = Math.floor(Math.random() * words.length);
    // Add the selected word to the sentence
    sentence += words[randIndex];
    // Add a space if it's not the last word
    if (i < numWords - 1) {
      sentence += ' ';
    }
  }
  // Add a period at the end of the sentence
  sentence += '.';
  // Return the generated sentence
  return sentence;
}

// Array to store testimonials
const testimonials = [];

// Loop through 10 times to generate 10 testimonials
for (let i = 0; i < 10; i++) {
  // Generate a random number of words for the testimonial
  const numWords = Math.floor(Math.random() * (maxWordsPerSentence - minWordsPerSentence + 1)) + minWordsPerSentence;
  // Generate a random sentence with the specified number of words
  const testimonial = {
    text: generateRandomSentence(numWords),
    // Author of the testimonial
    author: `-- Client ${i}`,
  };
  // Add the testimonial to the testimonials array
  testimonials.push(testimonial);
}

// Current testimonial index
let currentTestimonial = 0;

// Get testimonial and author elements from HTML
const testimonialElem = document.querySelector("#testimonial");
const authorElem = document.querySelector("#author");
const prevBtn = document.querySelector("#backward");
const nextBtn = document.querySelector("#forward");

// Function to show the current testimonial
function showTestimonial() {
  // Set testimonial text and author
  testimonialElem.innerText = testimonials[currentTestimonial].text;
  authorElem.innerText = testimonials[currentTestimonial].author;
}

// Function to show the previous testimonial
function prevTestimonial() {
  // Decrement the current testimonial index
  currentTestimonial--;
  // If the index is less than 0, set it to the last
  if (currentTestimonial < 0) {
    currentTestimonial = testimonials.length - 1;
  }

  // Update the testimonial
  showTestimonial();
}

// Function to show the next testimonial
function nextTestimonial() {
  // Increment the current testimonial index
  currentTestimonial++;
  // If the index is greater than or equal to the array length, set it to 0
  if (currentTestimonial >= testimonials.length) {
    currentTestimonial = 0;
  }

  // Show the next testimonial
  showTestimonial();
}

// Add event listeners to previous and next buttons
prevBtn.addEventListener("click", prevTestimonial);
nextBtn.addEventListener("click", nextTestimonial);

// Show initial testimonial
showTestimonial();

// auto scroll testimonial after 6 seconds
setTimeout(() => {
  setInterval(nextTestimonial, 6000);
}, 6000);
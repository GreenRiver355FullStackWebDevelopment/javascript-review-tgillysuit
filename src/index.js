import { calculateStarAverage } from "./logic.js";

//Do not change //////////////////////////////////
const reviews = [
  {
    username: "Rose",
    image: "./images/rose.png",
    star: 5,
    review: "Great coffee and ambiance",
  },
  {
    username: "butterfly2222",
    image: "./images/avatar2.png",
    star: 3,
    review: "Coffee was okay, took way to long to make.",
  },
  {
    username: "Sandy Tuna",
    image: "./images/avatar1.png",
    star: 1,
    review:
      "The coffee was great but the employees didn't let me stay past closing! ): Worst experience ever.",
  },
];
/////////////////////////////////////////////////////////////////////

//Your Code Below Here////

// Created some other DOM elements
const form = document.querySelector('form');
const stars = document.querySelector('.starRating');
const reviewSection = document.querySelector('.reviews');

// Render Reviews Function; with the given parameters to display the proper information inside the form
const renderReviews = async ({username, image, rating, review}) => {
  // Creating a div element called with the class name 'review_container'
  const reviewContainer = document.createElement('div');
  reviewContainer.classList.add('review_container');

  // Creating an img element that passes the image parameter inside the src to be able to render the image
  const img = document.createElement('img');
  img.src = image;

  // Creating another div to display the content inside of that div.
  const contentDiv = document.createElement('div');

  // Creating a p element for username, then using that username parameter to display text within the p tag
  const usernameP = document.createElement('p');
  usernameP.textContent = username;

  // Creating a p element for rating to display the rating parameters text
  const ratingP = document.createElement('p');
  ratingP.textContent = rating;

  // Creating a p element for review to display that parameters text
  const reviewP = document.createElement('p');
  ratingP.textContent = review;

  // Applying the content from the p tags to the content div
  contentDiv.appendChild(usernameP);
  contentDiv.appendChild(ratingP);
  contentDiv.appendChild(reviewP);

  // Applying the image and the content div to the review container
  reviewContainer.appendChild(img);
  reviewContainer.appendChild(contentDiv);

  // Applying the review container to the reviews section of the html
  reviewSection.appendChild(reviewContainer)
}

// Iterating through the review and appending 
reviews.forEach(renderReviews);

// The Form Handle function
form.addEventListener('submit', (event) => {
  event.preventDefault();

  
});
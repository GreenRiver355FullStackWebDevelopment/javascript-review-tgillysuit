# 355 JavaScript Review

## What’s Already There

- Do not change anything in the index.html or CSS.
- Most of your code will go in index.js. Do not change anything in the logic.js file.
- Do not manually modify the existing reviews array. However, you may add new reviews to the array using JavaScript.
- The images folder contains images for the midterm. Feel free to add your own images.

## Hints

- Manually test your code early and often.
- Don't forget to use debugger and console.log to debug your code.
- This is an open-book and open-internet assignment, but you are not allowed to use AI tools.
- Don’t be afraid to ask for help. I can’t give you the answers, but I can nudge you in the right direction.
- Turning in something is better than turning in nothing.
- Check the rubric for exact details on what I’m looking for.

## Assignment Deliverables

1. Create a function that will render a review.

- The structure of the review should follow the example below.
- Pay attention to the class names, as they are important for CSS styling to be applied correctly.

  ```
  <div class="review_container">
    <img src="img url here"/>
    <div>
      <p> username here </p>
      <p> star rating here </p>
      <p> review here </p>
    <div>
  </div>

  ```

- Use .forEach to iterate through the reviews.
- Pass a callback to .forEach that renders each review.

2. JavaScript Forms

- Select the form from the DOM.
- Add an event listener to the form for the submit event.
- Don't forget e.preventDefault()
- On submit, the form should render a new review to the screen and add it to the existing reviews array.

3. Calculate and Render Average Star

- Review the helper function in `logic.js` that calculates the average star rating.
- Import this function into `index.js` and use it to calculate the overall star average.
- Display the result inside the `<p>` tag with the class `"starRating"`.
- Ensure the average updates every time a new rating is added.

### Stuck? Here are some resources that may help

### Running your code in the brwoser

- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

### Arrow Functions

- [Arrow Functions Documentation on W3Schools](https://www.w3schools.com/js/js_arrow_function.asp)
- [Arrow Functions Video Tutorial](https://www.youtube.com/watch?v=fRRRkognpOs)

### Dom Manipulation

- [Learn DOM Manipulation In 18 Minutes](https://www.youtube.com/watch?v=y17RuWkWdn8)
- [FreeCodeCamp Article on DOM Manipulation](https://www.freecodecamp.org/news/dom-manipulation-in-javascript/)

### e.preventDefault()

- [EVENT.PREVENTDEFAULT in JavaScript, Simplified](https://www.youtube.com/watch?v=md8jQkOEyyk)

### Reduce

- [Reduce basics - Part 3 of Functional Programming in JavaScript](https://www.youtube.com/watch?v=Wl98eZpkp-c)

### Importing functions to other files

- [import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)

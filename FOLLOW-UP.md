# Implementation:

### Q) What libraries did you add to the frontend? What are they used for?
axios for fetching the data from the .json file
styled components for keeping style centralized in the component files
material-ui/material-ui/icons for the ArrowForward icon
### Q) What's the command to start the application locally?

(Default) `npm start`
(Next.js) `npm run dev`
---

# General:
### Q) If you had more time, what further improvements or new features would you add?
Select button functionality to render to individual flight page (in pages - ex '/flights/0') with the data visualized in more detail (highlight the agent rating) and using more of the data from the flights.json file.
I would probably add an href to the 'Select' button with a query arg of the itinerary id.

### Q) Which parts are you most proud of? And why?
Building and deploying my first next.js/react app in the last week!
### Q) Which parts did you spend the most time with? What did you find most difficult?
Migrating the components over to Next.js because of the dispersed styling of the elements and file structure.
Several errors with styling, svg, favicon.ico not loading.
Biggest error preventing deployment: "PostCSS plugin postcss-purgecss requires PostCSS 8."
Spent at least an hour researching stack overflow, postcss, etc. and trying different solutions to no avail.
### Q) How did you find the test overall? Did you have any issues or have difficulties completing?If you have any suggestions on how we can improve the test, we'd love to hear them.
I really enjoyed the thoroughness of the boilerplate for this challenge, and the clarity of instructions and goals! I definitely had a lot of fun with the design and implementation.
Initially I tried to convert the React components to Next.js pages right off the bat, but I decided to instead flesh out the styling and design using React components and migrate to nextjs as a later step instead.
# README #

Exercises for Ryan to become a super web developer.

## Exercise 1: ##

HTML and CSS

* Create a webpage as the designs in ex1/designs folder.
* Don't worry about the fonts, but try to match the padding and colors.
* you can use any background image you want.




## Exercise 2: ## 
MAKE IT RESPONSIVE

* Let's keep the same design from exercise 1, but make it responsive. 
* The mobile image is included in the ex2 folder.

## Exercise 3: ## 
JavaScript Image Slider

* Same Design as previous excercises
* The top image should become an image slider
* Add arrows on both side that can take you to the prev / next image
* Read images from HTML (decouple the html and js as possible)
* Create buttons on the bottom that can take you to a specific image
* Bonus: make it work on mobile (touch events)
* Bonus: play / pause mode


## Exercise 4: ##

setting up local development environment
Each of the following steps can have its own PR, so we do it incrementally.

* We will add node.js and webpack to our workflow
* Run a local webpack dev server which will serve your files
* Create a build script that will minify the js and css, create a build folder and copy the final files there (remember to .gitignore that folder)
* Add babel to transpile ES6 to ES5
* Transpile scss to css


## Exercise 5: ##

React. 
We will create an accordion component using react.
* The accordion can have one or many items. 
* Each item has a title and a description.
* When the item is collapsed, only the title should be visible.
* when another item is opened, the first should close.
* Should function like https://jqueryui.com/accordion/ (don't worry about the animations yet). 

Note: I installed https://github.com/facebook/create-react-app on folder `/ex5`. to start:
```
cd ex5
yarn install
yarn start
```
 

Good Luck!


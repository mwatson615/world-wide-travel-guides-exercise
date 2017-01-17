# world-wide-travel-guides-exercise

Create the following file structure:

world_wide_travel
 |_ app
 |    |_ controllers
 |    |     |_ bookCtrl.js
 |    |
 |    |_ app.js
 |
 |_ data
 |    |_ guides.json
 |
 |_ lib
 |    |_ gulpfile.js (or gruntfile.js)
 |
 |_ index.html
Add the follow data to guides.json. You will need to display all three pieces of information about each book, in any format you choose.

Remember to also add a .gitignore to the project root folder.

cd into lib and run npm init then install all of your dependencies for your task runner. Remember to use the --save-dev flag to add them to your package.json file. Also run bower init to create a bower.json file.

Install Angular with bower install angular. Remember to add the script tag for angular to index.html.

Now you have the basic structure in place to display your book data in the DOM the Angular Way.

Instructions

Fetch your data using an http call that returns a promise. Save the returned data as a property of the $scope object and loop through it to display the guidebook info to the user.

Here's a list of some things to include in your app in the appropriate spots:

Directives:
ng-app="<your module name>"
ng-controller="bookCtrl"
ng-repeat="book in books"
A call to the data folder for guides.json using $http
Use the $q service to wrap your http call in a promise
$scope.books = <your array of guide books data>

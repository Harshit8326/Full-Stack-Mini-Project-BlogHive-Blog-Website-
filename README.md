#BlogHive#
##Welcome to BlogHive, a dynamic community of bloggers buzzing with activity and creativity. BlogHive is a mini project that allows users to sign up, create blog posts, and interact with the blogging community. Built with modern web technologies, BlogHive aims to provide a seamless and interactive experience for both readers and writers.##

#Project Overview#
##Features##
User Authentication: Secure sign-up and login functionalities using JWT and bcrypt.
Blog Post Creation: Users can create and upload blog posts with file upload capabilities using Multer.
Main Page: A dynamic main page displaying all blog posts, fostering community engagement.
Responsive Design: Front-end designed with HTML, CSS, and JavaScript for a responsive and user-friendly interface.
Technologies Used
Node.js: For building the server-side logic.
Express: As the web framework for handling routes and middleware.
MySQL: For storing user and blog post data.
Sequelize: As the ORM for interacting with the MySQL database.
JWT: For secure user authentication.
bcrypt: For hashing user passwords.
Multer: For handling file uploads.
HTML, CSS, JavaScript: For designing the front-end.
#Project Structure#
##Directories and Files##
/models: Contains Sequelize models for Users and Posts.
/routes: Contains route definitions for user authentication, blog post creation, and fetching posts.
/controllers: Contains the logic for handling requests and responses.
/views: Contains HTML templates for the front-end.
/public: Contains CSS and JavaScript files for the front-end.
app.js: Main application file for setting up the server and middleware.
Functionality Overview
##Front Page##

A welcoming landing page with options to sign up or log in.
##Sign Up Page##

New users can sign up by providing their details.
Passwords are hashed using bcrypt before being stored in the database.
##Login Page##

Existing users can log in using their credentials.
JWT is used to create a secure session.
##Main Page##

Displays all blog posts created by users.
Users can browse through various blog posts.
##Create Page##

Logged-in users can create new blog posts.
Supports file uploads for blog post images using Multer.
#Getting Started#
##Prerequisites##
Node.js
MySQL
Installation
##Clone the repository:##

###sh###
Copy code
git clone https://github.com/yourusername/BlogHive.git
Navigate to the project directory:

###sh###
Copy code
cd BlogHive
Install dependencies:

###sh###
Copy code
npm install
Set up the MySQL database and configure the connection in config/config.json.

##Run the application:##

###sh###
Copy code
node app.js
##Usage##
Navigate to http://localhost:3000 in your browser.
Sign up for a new account or log in with existing credentials.
Explore blog posts on the main page.
Create new blog posts as a logged-in user.
Contributions
Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

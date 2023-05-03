# Hall Bookking WebApp

Instructions

install mysql workbench (i am not using XAMPP because i was having isuues with it)

now install the required packages - 

node
npm

now intialize the project -

npm init -y 

install mysql package -

npm install mysql2

install express , dotenv and hbs for encryption

npm i --nodemon
npm i --save nodemon

create a app.js file for connection

add this -

"start": "nodemon app.js" in package json

npm i bcryptjs

npm i cookie-parser jsonwebtoken


to run type - npm start

for users table -

create table users(
id int(11) not null auto_increment,
username varchar(100),
email varchar(100),
password varchar(100),
PRIMARY KEY (id)
);


for booking make a new table book

create table book(
bookid int(11) not null auto_increment,
eventName varchar(100),
email varchar(100),
phone varchar(20),
bookingDate date,
eventTimeStart time,
eventTimeEnd time,
hall varchar(100),
message varchar(200),
PRIMARY KEY (bookid)
);





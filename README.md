# Periodic-Table
A web-app that displays a responsive and interactive periodic table of the
chemical elements.

## Description
Tired of scrolling left and right on a periodic table on your
phone-in-portrait? I sure am. Introducing the vertically-responsive periodic
table, built for the 21st century, professional chemist on the go.

Looking good on any device in any orientation, this table removes distraction
with its minimalist design offering an elegant dark theme perfect during
light-sensitive experiments. For the traditional chemist a classic,
web-one-o-nostalgic, gray-on-white sets the correct mood for discovery.

For the no-nonsense chemist, no keys are provided, no unnecessary numbering of
columns and rows that are easily counted (by most American undergraduates), no
overuse of colors save for gases and liquids at STP, and no effort is made to
educate. Standard weights are provided (with errors of course), gathered from
ciaaw.org, and a wikipedia link is on offer for the sorry chemist who forgot.

The disgruntled chemist concerned with the opinionated placement of Lanthanum
and Actinium is referred to Laurence Lavelle's (then at UCLA) 2008 paper in the
Journal of Chemical Education addressing the topic. His back-and-forth with Roy
W. Clark and Gary D. White (then at Middle Tennessee State University) is
suggested for further reader.

## Requirements:
I. Configure mysql database

II. Set runtime variables

### I. Configure mysql database
(1) Create a mysql database and note the server host name, user name, and
password.

(2) Name the created database 'chemistry' or change the name to your choosing
in sql > chemical_elements.sql.

(3) Source chemicel_elements.sql to the created database.

### II. Set runtime variables
Enter node runtime environment variables as follows:

(1) HOST='your-server-host'

(2) PORT='your-server-port'

(3) NODE_ENV='production-or-development'

(4) MYSQL_DATABASE_HOST='your-mysql-server-host'

(5) MYSQL_DATABASE_USER='your-mysql-server-user'

(6) MYSQL_DATABASE_PASS='your-mysql-server-password'

(7) MYSQL_DATABASE_NAME='your-mysql-server-database'
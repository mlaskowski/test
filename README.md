requirements :
Node js,
Npm,
Gulp,
java jdk (min v7)

installation:
clone repository,
go to inside cloned folder,
npm install

usage:
npm test or gulp test


debuging: 
phantomJs dont have visible side (because of that work 66% faster)
if test fail create errorShots directory with screens

future test to implemented:

cover main happy path (login, create post, add picture, add to group .etc)  
with e2e this will be work all the time on server  

cover all function with unit test. 
Add (unit testing) task to jenkins befor deploy.
Add (unit test) task to "gulp default" to give fast response programer that his changes dont break build.
Add to gulp task "sonar" which will measure unit test covered. ^^ to check if we enough fast wirte unit test 

at lest 
cover edge case(comunication between components) with integration test



  


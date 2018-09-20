# Social-visualization-with-behavior-logging

Steps to setup node and mongodb

1. Go to https://nodejs.org/en/download/ and download windows version and double click on nodev8.. installation file
2. After successful installation of node, go to https://www.mongodb.com/download-center - then go to community server tab and download mongodb. 
  Double click on mongodb installation file and choose all default settings and install it
3. Start mongodb by running this command (including quotes)
    "C:\Program Files\MongoDB\Server\4.0\bin\mongod.exe"
	(assuming you have installed mongodb in the same directory as above)
4. open another command prompt window and run the following command to import the data to mongodb
    C:\Program Files\MongoDB\Server\4.0\bin\mongoimport.exe" --db testForAuth --collection users --file C:\Assign1-SameerKulkarni\dbdata.json
	(give proper path to the downloaded assignment folder)
5. After you get "inserted (4 - 6) documents" data is successfully inserted to mongodb.


Steps to run:


1. Go to the project root folder and run the following command on terminal.
	"npm install"

2. Then run following command (assuming mondodb is running)
		"npm start"

3. open the browser and go to localhost:3000

4. Enter username: aaa or bbb or ccc with password "123" and click submit

5. If you get unable to connect after this step please refresh the page (browser issue). You should be able to see the profile page. 

6. Then click on "Go to stackoverflow" button.

7. On this page you can click on "Open visualization" button to see the visualization for already recorded interactions.

8. In the visualization page the first graph shows upvote, downvote, comment and stars logs for the logged in user.

9. The last three pie charts show upvote, downvote and comments comparision between AAA, BBB and CCC users respectively (If the last three pie charts doesnt 
  update well please refresh the page once or twice) (It is a browser issue)
	The pie charts are interactive (you can hover your mouse on the pies and it will show the count (wait for 2 seconds).
10. You can upvote, downvote, comment and star on any question on the stackoverflow page and click on "Update Database" button. 
This will increment the count of the pressed action and if you click on show visualization you will be able to see the updated visualization.

11. In the visualization page you can click on "Analysis and Findings" button to see detailed analysis of the visualization as given in assignments requirement page.

12. You can also register new user and perform different interactions. The visualizations will be updated after you click "update database button" and then you can see the visualization by clicking on open visualiztion button

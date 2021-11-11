# Star-Wars-Database
ReactJS Application with a NodeJS virtual server using Star Wars API at https://swapi.dev/ to render an aggregation of results based on people, planets, and starships.

## Getting Started
### VSCode
---
Two terminals must be opened simultaneously for the application to work properly.

NOTE: The following instructions are for PowerShell and Git Bash users. More to follow.

A) On the First Terminal (NodeJS Back End)
1) Type `cd server` and press enter to open the back end server folder
2) Type `yarn install` and press enter to install server dependencies for NodeJS
3) Type `yarn start` and press enter to start the virtual server
4) Once you are finished, press both `Ctrl` + `C` to terminate the NodeJS server.

B) On the Second Terminal (ReactJS Front End)
1) Type `cd client` and press enter to open the front end client folder
2) Type `yarn install` and press enter to install client dependencies for ReactJS
3) Type `yarn start` and press enter to start the React App Client
4) Once you are finished, press both `Ctrl` + `C` to terminate the ReactJS local host.

## Star Wars Database
<img src="screenshots/home.JPG" alt="home" />
Starting with the home page, please select one of three tabs at the top right corner to get started.

---

To look for people in the Star Wars Universe, select `people`. Likewise for planets and starships, select `planets` and `starships` respectively.

<img src="screenshots/people1.JPG" alt="people" />
In all three tabs, you will see a list of items generated from the external Star Wars API (see https://swapi.dev/ for details and documentation)

---

<img src="screenshots/planets1.JPG" alt="planets" />
Results are aggregated in tens, so you have to press the next page to load the next set of items in that category.

If you would like to return to the previous page, just click on the Previous Page button.

---

<img src="screenshots/star.JPG" alt="starships" />
Alternatively, you can search starships which will only return up to the first ten results based on the query you enter and click on the submit button (alternatively, pressing the "Enter" key on your keyboard also works).
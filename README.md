# Book-Pedia Frontend(W.I.P)

React-Vite project / Portfolio which aims to be the frontend of an application that renders articles. The aim of the project is to have a fully working
flow with a frontend, backend and and admin dashboard that allows the user to edit/update/create content (basically an internal CMS).

The project needs a running backend [Bookpedia Backend](https://github.com/cipriRusu/book-pedia-backend) with a valid .env file, which contains the following values:

```env
VITE_API_ADDRESS="http://localhost" #This points to the API's address. Assuming that it's run locally It's defaulted to localhost
VITE_API_PORT=3001 #This point to the API's PORT, defaulted to 3001
VITE_FRONTPAGE_ROUTE="frontpage" #Frontpage's default frontpage route, might change in the future so I've extracted it into it's own variable
```

Inside the project folder run the following commands in the terminal:

```bash
#To install all necessary dependecies
npm install

#To run the project in preview mode
npm run preview
```

- [x] Setup basic scaffold
- [x] Extract .env variables
- [x] Create backend/API connection
- [ ] Create frontend page
- [ ] Create resource page
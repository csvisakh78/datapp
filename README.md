# DATA APP

---

# Introduction

This app contain api for fetching data from server

# Requirements

- Node.js (>= v14.16.0)
- NPM (v6.14.11)

# Prerequisites & Installation Setup

- Clone the repo
- Create .env file from env.example and add mongo url to it or you can export enviroment variables
### Run using docker
- docker build . -t testapp
- docker run -p 3000:3000 -d testapp
### Run as normal app
- Run this command in terminal `npm run start`
- Test api using sample endpoint provided in api-samples.txt file or you can access documentaiton page from https://localhost:3000/api-docs



# Enviroment Variables
    ```bash
    MONGO_URL= <Database connection st4ring. required >
    ENV= <Current environment for app. optional. default is development>
    PORT= <Port in which application to run. optional. default is 3000>
    ```

# Enviroment Variables with example
```bash
 MONGO_URL=YOUR_CONNECTION_STRING
 ENV=development
 PORT=3000
```
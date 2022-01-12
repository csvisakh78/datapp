# DATA APP

---

# Introduction

This app contain api for fetching data from server

# Requirements

- Node.js (>= v14.16.0)
- NPM (v6.14.11)

# Prerequisites & Installation Setup

- Clone the repo
- Create .env file from env.example
    ## Run using docker
    - docker build . -t testapp
    - docker run -p 3000:3000 -d testapp
    ## Run as normal app
    - Run this command in terminal `npm run start`



# Enviroment Variables
    ```bash
    ENV= <Current environment for app. optional. default is development>
    PORT= <Port in which application to run. optional. default is 3000>
    ```

# Enviroment Variables with example
```bash
 ENV=development
 PORT=3000
```
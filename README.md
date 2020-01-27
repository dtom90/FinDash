# Financial Advisor Dashboard
[![Build Status](https://travis-ci.org/IBM-DSE/FinDash.svg?branch=master)](https://travis-ci.org/IBM-DSE/FinDash)

Demo Web Application for Financial Advisor to review list of clients, news, and stocks from a single interface

Built with Node.js + React.js and connects to Db2 system using [IBM Common SQL Engine](https://developer.ibm.com/data/commonsql/)

## Run Locally

- Install packages
  ```
  npm install
  ```

- Set Environment Variables (Optional, for Db2)
  
  Copy `.env.example` to new file `.env` and fill in variables with your DB connection credentials:
  ```
  DB_HOST=
  DB_PORT=
  DB_BASE=
  DB_USER=
  DB_PASS=
  ``` 

- Run Backend
  ```
  npm dev &
  ```

- Run Frontend (separate process)
  ```
  cd client
  npm dev
  ```

## Docker

#### Build

##### From GitHub:
```
docker build -t findash https://github.com/IBM-DSE/FinDash
```

##### Install / Update Dependencies:
```
docker run -it -v `pwd`:/usr/src/app -w /usr/src/app node:8 npm install
```
NOTE: subsequent npm commands using the generated `node_modules` should also be run the same way to avoid dependency mismatch

##### From Local Source:
```
docker build -t findash .
```

#### Run
```
docker run -it -p 3000:3000 findash
```

##### Run with Db2
```
docker run -it --env-file .env -p 3000:3000 findash
```

## IBM Cloud

- Install [Bluemix CLI](https://console.bluemix.net/docs/cli/index.html)

- Push app to IBM Cloud
  ```
  cf push
  ```
- Set environment variables either:
    - with `cf set-env` commands:
      ```
      cf set-env FinDash DB_HOST <YOUR_DB_HOST>
      cf set-env FinDash DB_PORT ...
      ```
    - through IBM Cloud console
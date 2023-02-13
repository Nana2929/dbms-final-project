# dbms-final-project
## Demo 

https://user-images.githubusercontent.com/58811089/210070961-926cd1d3-150a-4354-9abb-4a34883818d1.mp4

## Install the required packages 
1. Frontend: react 
2. Backend: see `dbms-backend/requirements.txt`

## How to start the project in full form

1. Frontend:
  ```
  cd dbms-frontend
  yarn start 
  ```
2. Backend:
  Mainly FastAPI. 
  ```
  cd dbms-backend
  python3 main.py 
  ```
3. Database: 
  I start the DB as a docker container. 
  ```docker run <image>```
  or 
  ```docker start <container-id>```
4. Content-Management System (CMS) (For my reference)
  ```
  # cd projects/directus/dbms-final
  npx directus start 
  ```

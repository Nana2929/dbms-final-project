#!/bin/bash
# reference: https://stackoverflow.com/questions/72640785/how-to-start-fastapi-react-node-server-using-shell-script-file
cd dbms-final-project/backend
python3 main.py & # use & to run in background
cd ../frontend
yarn start
FROM python:3.10


WORKDIR /dbms-final-project

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt
RUN yarn install

COPY ./dbms-final-project ./dbms-final-project

CMD [ "/bin/bash", "./dbms-final-project/run.sh" ]
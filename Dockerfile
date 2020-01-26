FROM python:3
ENV PYTHONUNBUFFERED 1
RUN mkdir -p /www/todo
WORKDIR /www/todo/todo_project
ADD . /www/todo/
RUN pip install -r requirements.txt
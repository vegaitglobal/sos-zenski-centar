# syntax=docker/dockerfile:1
FROM python:3.9.5
ENV PYTHONUNBUFFERED=1
WORKDIR /office
COPY requirements.txt /office/
RUN pip install -r requirements.txt
COPY . /office/
CMD ["python","manage.py", "runserver"]
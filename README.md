# OpenAI Image
![openai image](https://user-images.githubusercontent.com/106734133/217092625-692658eb-7e13-4de7-bb2e-25aa116ec2d7.jpg)

Go to website - [Link](https://sp-ai-image.netlify.app/)<br>
Go to backend - [Link](https://github.com/SunilPark1129/openai-backend)

## Project Description

- Create an image from text by requesting the server to openAI.

## Features
> Features that I would like to introduce.

|Feature|Description|
|:--:|:--|
|Text to Image|<img src="https://user-images.githubusercontent.com/106734133/217093052-068595f5-a23b-4c35-9f66-48e9e520fe76.jpg" height="400"><br><br>Requests the entered text to the server and extracts images related to the text.|
|Loading|<img src="https://user-images.githubusercontent.com/106734133/217094186-91f45a16-2bd8-4d17-96f7-2c88561a162d.jpg"><br><br>Show a loading animation while getting the requested item.|
|Prevent Request|<img src="https://user-images.githubusercontent.com/106734133/217094633-3dba2d21-d5b5-463e-92a2-25e7e7d41301.jpg"><br><br>Prevent requesting another item while loading.|
|Catch Error|<img src="https://user-images.githubusercontent.com/106734133/217095836-2d919e6e-67e2-4fa9-ab79-b390e41d0d5c.jpg" height="400"><br><br>If an error occurs during fetch, determine what kind of error it is through the status. And inform the user what errors were found.|

## Technology Used

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

## Installation
1. Clone the repo
```
git clone https://github.com/SunilPark1129/OpenAI-Image.git
```
2. Install
```
npm i
```
2. run the website
```
npm run dev
```
[Link](https://sp-ai-image.netlify.app/)

## Self-improvement

- First time using Vite. I was satisfied with how fast it was to use (hmr).
- In this project, I studied more how to fetch and practiced catching errors more.
- I have learned that I need a backend server to hide the api key. Even if I hide it with .env, people can still check it thorugh the dev tool. So I made a backend server to study and hide the api key.

## Project Status
Completed

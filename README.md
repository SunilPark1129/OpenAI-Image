# OpenAI Image
![openai image](https://user-images.githubusercontent.com/106734133/218526464-441ad6c0-fb5e-4365-8fe8-f9aac8557aa3.jpg)

Go to website - [Link](https://sp-ai-image.netlify.app/)<br>

## Project Description

- AI creates the picture from user's text/image by requesting the server to openAI.

## Features
> Features that I would like to introduce.

|Feature|Description|
|:--:|:--|
|Auto Image Converter|<img src="https://user-images.githubusercontent.com/106734133/218522623-74c7c22d-a7f4-4089-b7d5-999d52aa6efd.jpg" height="400"><br><br>Converts a rectangular image into a square image without cropping the original. The parts lacking in the original are added by drawing.<br>OpenAI asked 512x512 pixel size of the image when requested to the server. For the convenience of users, I have made it possible to receive images of any size.|
|Image Orientation|<img src="https://user-images.githubusercontent.com/106734133/235763565-50397a98-d5d4-4340-91ec-c2c34da4f717.jpg" height="400"><br><br>When I was making the project, I found that there were orientation values in every images with different values. I had to calculate and rotate the image as much as the orientation value it had to prevent the unexpected angle when displaying on the screen.|
|Compare Images|<img src="https://user-images.githubusercontent.com/106734133/218525082-e0b894a3-ed56-4731-bda2-a7e1c8e9c833.jpg" height="400"><br><br>Added a function to compare the original image and the changed image.|
|Image/Text to Image|<img src="https://user-images.githubusercontent.com/106734133/218521522-80a672e1-d563-43d4-8fd6-3de735a3203e.jpg" height="400"><br><br>Users can upload their own images or request photos via text.|

## Technology Used

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

## Self-improvement

- First time using Vite. I was satisfied with how fast it was to use (hmr).
- In this project, I studied more how to fetch and practiced catching errors more.
- I have learned that I need a backend server to hide the api key. Even if I hide it with .env, people can still check it thorugh the dev tool. So I made a backend server to study and hide the api key.
- I noticed that each photo has an orientation property. When developers receive a picture file, developers need to modify the value of orientatino.
- I found out how to convert an image to base64 and turn it back into a readable string.

## Project Status
Completed

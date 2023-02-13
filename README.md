# OpenAI Image
![openai image](https://user-images.githubusercontent.com/106734133/218526464-441ad6c0-fb5e-4365-8fe8-f9aac8557aa3.jpg)

Go to website - [Link](https://sp-ai-image.netlify.app/)<br>

## Project Description

- Create an image from text by requesting the server to openAI.

## Features
> Features that I would like to introduce.

|Feature|Description|
|:--:|:--|
|Image Upload|<img src="https://user-images.githubusercontent.com/106734133/218521320-a5dad5e8-0728-48c1-a956-1d203e7395dd.jpg" height="400"><br><br>A user uploads an image and requests the server to use image editing provided by open ai. In this process, I found out that there is an orientation in the image, and rotated it as much as the orientation value to remove the error variable.|
|Image Edited|<img src="https://user-images.githubusercontent.com/106734133/218522623-74c7c22d-a7f4-4089-b7d5-999d52aa6efd.jpg" height="400"><br><br>When a rectangular image is uploaded, the image is made square and the missing part is set to be drawn by AI. OpenAI does not provide this service, so I changed some of the settings.|
|Compare Clicker|<img src="https://user-images.githubusercontent.com/106734133/218525082-e0b894a3-ed56-4731-bda2-a7e1c8e9c833.jpg" height="400"><br><br>I created a click event to see how much more the edited photo has grown and changed than the original photo.|
|Text to Image|<img src="https://user-images.githubusercontent.com/106734133/218521522-80a672e1-d563-43d4-8fd6-3de735a3203e.jpg" height="400"><br><br>Requests the entered text to the server and extracts images related to the text.|
|Loading|<img src="https://user-images.githubusercontent.com/106734133/218520719-15b4c302-8b35-4ebd-9be3-0d0778e46ced.jpg" width="400"><br><br>Show a loading animation while getting the requested item. I also added animations to the fonts so that users don't get bored while waiting.|
|Prevent Request|<img src="https://user-images.githubusercontent.com/106734133/218521111-a3f9933f-f5c5-41c9-992e-9037a1f56eeb.jpg"><br><br>Prevent requesting another item while loading. ```disable = isLoading```|
|Catch Error|<img src="https://user-images.githubusercontent.com/106734133/218521190-45f836fd-c44f-4ede-8db0-57590c8d179c.jpg" width="400"><br><br>If an error occurs during fetch, determine what kind of error it is through the status. And inform the user what errors were found.|

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
- I noticed that each photo has an orientation property. When developers receive a picture file, developers need to modify the value of orientatino.
- I found out how to convert an image to base64 and turn it back into a readable string.

## Project Status
Completed

To get started follow the following steps

1. git clone https://github.com/Dhrunit/React-form-builder.git
2. npm install in the folder
3. npm start

The app is live at

Architecture

1. The pages you see are in pages folder and the components used are in the components section
2. Redux saga listens to the save form type and adds loading as well as sets the dynamic url
3. The redux logic is kept in the reducers folder and the routes are in the Routes file
4. Since no backend server is used I have used promises to mimic the api behaviour
5. styled components are also used and related styles are kept in the same folder where it could be used

Time Taken

1. 3.5hrs to learn and practice Redux-saga
2. 4 hours to actually build the application

Improvements

1. UI/UX could be better
2. Code written could be more modularized
3. To improve the overall feel backend server could be used

Key points which I tried to achieve

1. I have not implemented the logic of viewing and sharing the form according to the new url however I tried creating a new URL by encryptiong the form data using atob() and btoa() functions but did not succedd

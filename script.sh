Important link for this project:
1. ImageAssistant Batch Image Downloade:
          https://chromewebstore.google.com/detail/imageassistant-batch-imag/dbjbempljhcmhlfpfacalomonjpalpko
2. ColorZilla:
           https://www.colorzilla.com/chrome/

3. PNG Images-- to get images for example amazon logo
          https://pngimg.com/
4. React-icons
                  https://react-icons.github.io/react-icons/
5. To use React-Icons: On terminal put: npm install react-icons
     In order to get react icon on package.json
6. React-responsive-carousel-npm:
                 https://www.npmjs.com/package/react-responsive-carousel
7. To Ico converter:To convert logo
                   https://www.icoconverter.com/
8. Fake store API:It help to get pictures with the given catagories--Click 'Read Doc'
                  https://fakestoreapi.com/
9. Download react spinners:
                         https://www.davidhu.io/react-spinners/
       click :yarn add react-spinners
        copy npm install react-spinners --save and put in the terminal to download.
        check in package.json-- you can see: "react spinners":"^0.13.8"

//***************************************************
Step 1
To create on GitHub:
- Create a Folder on your computer
- Open Gihub
- click the drop down arrow
- choose 
- Click Add
- click Create New Repossitry
- Put the Name of the project
- Choose your already created folder
- click create respository button at the bottom
You can see your project name to the left.
- click on it
-to the right it show Publish and click it to publish
2.To open on Visual studio the project you get option "Open in Visual Studio code click it
Step 2
Then open your folder on visual studio
On your visual studio do the following:
       1.on your terminal put ls to check the folder directory
       


1. Create a New React Project
The easiest way to start a new React project is by using create-react-app, a command-line tool that sets up a new React application with a sensible default configuration.
         1.Open your terminal and run: npx create-react-app amazon-clone
               
         2. Navigate to Your Project Directory
                    cd amazon-clone

         3. Start the Development Server
                   npm start
         4.Develop Your Project
                  npm install react-router-dom


//***************************************************
After we add or modifid any data or files we need to follow the followig:
On terminal:
      1. git add . ----Enter
      2. git commit -m "write what we did"
      3. git push
After we finish our project to publish on Github run on terminal:
         npm install gh-pages --save-dev

Finally:
    1. On package.json on the top before "name" write the following:
            "homepage": "https://dawitphotos1.github.com/Netflix-Clone",  
     2. On the sripts whrite the following:
                   "predeploy": "npm run build",
                   "deploy": "gh-pages -d build",
     3. Finally on the terminal write: 
                        npm run deploy
       On the left we will see "build" below our project name after it run.

To create Router.jsx:First we need to download 'react-router-dom'.Run on terminal: npm install react-router-dom

* Template Literal Issue: When using template literals inside a string, you should use backticks (`) instead of single or double quotes.
*Initial State for isLoading:to ensure the loading state is handled correctly, it’s usually best to set isLoading to true at the beginning of your useEffect and then set it to false once data fetching is completed or if an error occurs.

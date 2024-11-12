import ShoppingApp from '../assets/book-shop.png'
import CVBuilder from '../assets/CV-builder.png'
import MyKeeper from '../assets/note-book.png'
import Skit from '../assets/sketch-board.png'
import WeatherMe from '../assets/Weather-app.png'
import snomemo from '../assets/blog-img.png'

const data = [
    {
        id:0,
        image:snomemo,
        title: 'Snomemo',
        subTitle: "Personal Blog Site",
        desc: "A personal blog site for exploring philosophical ideas. Full RESTful site created using MERN and redux for state management.",
        git: "https://github.com/StarPlatinum011/burnt-records",
        url : "https://www.snomemo.com"
    },
    {
        
        id:1,
        image:ShoppingApp,
        title: 'Retro Books',
        subTitle: "Shopping Application",
        desc: "A full functional shopping application where users can browse and purchase books available in the inventory. (Desktop only)",
        url: "https://shopping-cart-delta-tan.vercel.app/",
        git: "https://github.com/StarPlatinum011/shopping-cart"
    },
    {
        id:2,
        image:CVBuilder,
        title: 'CV Builder',
        subTitle: "Create Your CV",
        desc: "Create your stylish CV. Created with react and for the styling purposes, vanilla css has been utilized. (Desktop only)",
        url : "https://cv-builder-eta-pink.vercel.app/",
        git: "https://github.com/StarPlatinum011/cv-builder"
    },
    {
        id:3,
        image:MyKeeper,
        title: 'My Keeper',
        subTitle: "Note Taking Application",
        desc: "Clone of google Keep. Note keeping web application where users can add their custom notes.",
        git: "https://github.com/StarPlatinum011/my-keep",
        url : "https://keeper11.netlify.app/"

    },
    {
        id:4,
        image:Skit,
        title: 'Skit',
        subTitle: "Sketching Application",
        desc: "A sketching web application in which users are allowed to choose different tools to maximize their activity. It is created with a complete vanilla JavaScript",
        git: "https://github.com/StarPlatinum011/sketch-board",
        url : "https://github.com/StarPlatinum011/sketch-board"
    },
    {
        id:5,
        image:WeatherMe,
        title: 'Weather Me',
        subTitle: "Weather Application",
        desc: "Simple application to get the results of current weather in a selected location. ",
        git: "https://github.com/StarPlatinum011/weather-app",
        url : "https://github.com/StarPlatinum011/weather-app"
    },
   
    
]

export default data;
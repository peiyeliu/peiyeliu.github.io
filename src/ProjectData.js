import angularMoviedbImg from './components/img/moviedb-angular.png'
import flaskMoviedbImg from './components/img/moviedb-flask.png'
import reactPersonalpageImg from './components/img/react_logo.svg'
import springOnlineShopptingImg from './components/img/spring.jpeg'
import flaskStockInfoImg from './components/img/stock-flask.png'
import iosMoviedbImg from './components/img/ios-moviedb.png'
import tinyOjImg from './components/img/tinyoj.png'
import tinyOjDesignImg from './components/img/tinyOJdesign.png'

import angularMoviedbGif1 from './components/gif/angular-moviedb/moviedb-angular-1.gif'
import angularMoviedbGif2 from './components/gif/angular-moviedb/moviedb-angular-2.gif'
import angularMoviedbGif3 from './components/gif/angular-moviedb/moviedb-angular-3.gif'

import iosMoviedbpic1 from './components/gif/ios-moviedb/moviedbios-1.gif'
import iosMoviedbpic2 from './components/gif/ios-moviedb/moviedbios-2.gif'
import iosMoviedbpic3 from './components/gif/ios-moviedb/moviedbios-3.gif'
import iosMoviedbpic4 from './components/gif/ios-moviedb/moviedbios-4.gif'

import tinyoj1 from './components/gif/tinyoj/tinyoj1.gif'
import tinyoj2 from './components/gif/tinyoj/tinyoj2.gif'
import tinyoj3 from './components/gif/tinyoj/tinyoj3.gif'




const projectData = {
    'angular-moviedb': {
        projectName: 'angular-moviedb',
        projectLink: 'https://github.com/peiyeliu/moviedb-angular',
        projectImg: angularMoviedbImg,
        projectDescription: 'This project used Angular as the front-end framework to display responsive web pages. Backend part was built using Node.js, Express, and Axios.',
        detailPage: true,
        features: [
            {
                image: angularMoviedbGif1,
                description: 'Home page appearance, navigation bar, footer, and carousel components',
            },
            {
                image: angularMoviedbGif2,
                description: 'Search bar with auto-completion on the right side of navigation bar',
            },
            {
                image: angularMoviedbGif3,
                description: 'Embedded youtube videos, clickable bootstrap cards and "add to watchlist" feature',
            },
        ]
    },
    'flask-moviedb': {
        projectName: 'flask-moviedb',
        projectLink: 'https://github.com/peiyeliu/moviedb-python-flask',
        projectImg: flaskMoviedbImg,
        projectDescription: 'A web technology project using Python Flask as the backend framework. User interface display and request handling were achieved in plain HTML, CSS, and JavaScript.',
        detailPage: false,
    },
    'react-personalpage': {
        projectName: 'react-personalpage',
        projectLink: 'https://github.com/peiyeliu/peiyeliu.github.io',
        projectImg: reactPersonalpageImg,
        projectDescription: 'Personal web page powered by React and BootStrap',
        detailPage: false,
    },
    'spring-online-shopping': {
        projectName: 'spring-online-shopping',
        projectLink: 'https://github.com/peiyeliu/e-commerce-spike-springboot',
        projectImg: springOnlineShopptingImg,
        projectDescription: 'online shopping web services develop under Java and Spring framework',
        detailPage: false,
        // systemDesignImage: springOnlineShopptingImg,
        // systemDesignDescription: 'Description of the overall system design.',
    },
    'flask-stock-info': {
        projectName: 'flask-stock-info',
        projectLink: 'https://github.com/peiyeliu/stock-web-page-flask',
        projectImg: flaskStockInfoImg,
        projectDescription: 'a web project that deliver stock info',
        detailPage: false,
    },
    'ios-moviedb': {
        projectName: 'ios-moviedb',
        projectLink: 'https://github.com/peiyeliu/moviedbappIOS',
        projectImg: iosMoviedbImg,
        projectDescription: 'This is an IOS app that displays movie and TV programs ratings, description, casts, and reviews data. Searching and watchlist feature supported.',
        detailPage: true,
        features: [
            {
                image: iosMoviedbpic1,
                description: 'home page layout',
            },
            {
                image: iosMoviedbpic2,
                description: 'search functionality',
            },
            {
                image: iosMoviedbpic3,
                description: 'Movie/TV details, casts, reviews with scroll bar layout',
            },
            {
                image: iosMoviedbpic4,
                description: 'Add or delete item in watchlist',
            },
        ]
    },
    'tinyOJ': {
        projectName: 'tinyOJ',
        projectLink: 'https://github.com/peiyeliu/tinyOJ',
        projectImg: tinyOjImg,
        projectDescription: 'This is a tiny online judge system built in Python and Django framework. Relational database(PostgreSQL, sqlite), docker technique were applied.',
        detailPage: true,
        systemDesignImage: tinyOjDesignImg,
        systemDesignDescription: 'The main business logic was implemented in python Django. Problem, User, Submission, Discussion data are stored in SQl databases.\n' +
            'The remote judge was implemented as a separate microservice in python Flask. Remote judge uses docker to create an isolated environment to test submissions. '
            + 'Files, such as input/outputs, can be stored with the remote judge or in cloud services like Amazon S3.',
        features: [
            {
                image: tinyoj1,
                description: 'Submit problems and get immediate judge results',
            },
            {
                image: tinyoj2,
                description: 'Editorials and discussions included. Admin pages implemented to edit problems/editorials',
            },
            {
                image: tinyoj3,
                description: 'Check out historical submissions',
            }
        ]
    },
};

export default projectData;
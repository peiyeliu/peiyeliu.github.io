import angularMoviedbImg from './components/img/moviedb-angular.png'
import flaskMoviedbImg from './components/img/moviedb-flask.png'
import reactPersonalpageImg from './components/img/react_logo.svg'
import springOnlineShopptingImg from './components/img/spring.jpeg'
import flaskStockInfoImg from './components/img/stock-flask.png'
import iosMoviedbImg from './components/img/ios-moviedb.png'

import angularMoviedbGif1 from './components/gif/angular-moviedb/moviedb-angular-1.gif'
import angularMoviedbGif2 from './components/gif/angular-moviedb/moviedb-angular-2.gif'
import angularMoviedbGif3 from './components/gif/angular-moviedb/moviedb-angular-3.gif'

import iosMoviedbpic1 from './components/gif/ios-moviedb/moviedbios-1.png'
import iosMoviedbpic2 from './components/gif/ios-moviedb/moviedbios-2.png'
import iosMoviedbpic3 from './components/gif/ios-moviedb/moviedbios-3.png'
import iosMoviedbpic4 from './components/gif/ios-moviedb/moviedbios-4.png'
import iosMoviedbpic5 from './components/gif/ios-moviedb/moviedbios-5.png'
import iosMoviedbpic6 from './components/gif/ios-moviedb/moviedbios-6.png'



const projectData = {
    'angular-moviedb': {
        projectName: 'angular-moviedb',
        projectLink: 'https://github.com/peiyeliu/moviedb-angular',
        projectImg: angularMoviedbImg,
        projectDescription: 'This project used Angular as the front-end framework to display responsive web pages. Backend part was built using Node.js, Express, and Axios.',
        detailPage: true,
        // systemDesignImage: angularMoviedbImg,
        // systemDesignDescription: 'Description of the overall system design.',
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
        // systemDesignImage: flaskMoviedbImg,
        // systemDesignDescription: 'Description of the overall system design.',
    },
    'react-personalpage': {
        projectName: 'react-personalpage',
        projectLink: 'https://github.com/peiyeliu/peiyeliu.github.io',
        projectImg: reactPersonalpageImg,
        projectDescription: 'Personal web page powered by React and BootStrap',
        detailPage: false,
        // systemDesignImage: reactPersonalpageImg,
        // systemDesignDescription: 'Description of the overall system design.'
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
        // systemDesignImage: flaskStockInfoImg,
        // systemDesignDescription: 'Description of the overall system design.'
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
                description: 'movie/tv detail view, with youtube video component',
            },
            {
                image: iosMoviedbpic3,
                description: 'Casts, reviews with scroll bar layout',
            },
            {
                image: iosMoviedbpic4,
                description: 'Recommended movies',
            },
            {
                image: iosMoviedbpic5,
                description: 'Search bar',
            },
            {
                image: iosMoviedbpic6,
                description: 'Watchlist',
            },
        ]
    }
};

export default projectData;
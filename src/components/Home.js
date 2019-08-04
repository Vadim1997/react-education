import React from 'react';
import Slide from "./Slide";
class Home extends React.Component {
    constructor (props){
        super(props);
        this.state={
            currentImage: 0,
            images:['https://www.meteovesti.ru/pics/src/63546644559.jpg', 'https://cdn.pixabay.com/photo/2018/05/24/11/15/landscape-3426391_960_720.jpg','https://s.hi-news.ru/wp-content/uploads/2019/07/trees_one-650x374.jpg']
        };
        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this)
    }

    render(){
        return <Slide curentSlide={this.state.images[this.state.currentImage]}/>

        // return <div>
        //         <img src="https://www.meteovesti.ru/pics/src/63546644559.jpg" alt=""/>
        //         <div className="numdertext">1/3 </div>
        //         <img src="https://cdn.pixabay.com/photo/2018/05/24/11/15/landscape-3426391_960_720.jpg" alt=""/>;
        //         <div className="numdertext">2/3 </div>
        //         <img src="https://s.hi-news.ru/wp-content/uploads/2019/07/trees_one-650x374.jpg" alt=""/>;
        //         <div className="numdertext">3/3 </div>
        //     <Slide nextSlide={this.nextSlide()}/>
        // </div>

    }
}

export default Home
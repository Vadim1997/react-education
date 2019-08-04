import React from 'react';
import './Slide.css';
class Slide extends React.Component{
    constructor (props){
        super (props);
    }
    nextSlide (){
        this.setState({currentImage: this.state.currentImage+1 === this.state.images.length ? 0 :this.state.currentImage+1})

    }
    previousSlide (){
        this.setState({currentImage: this.state.currentImage === 0 ? this.state.images.length-1 : this.state.currentImage-1})
    }
    render() {
        return <div>
            <img className='img' src={this.props.curentSlide} alt=''/>
            <button onClick={this.props.nextSlide} className="btn next">next</button>
            <button onClick={this.props.previousSlide} className="btn previous">previous</button>
        </div>;
    }
}
export default Slide
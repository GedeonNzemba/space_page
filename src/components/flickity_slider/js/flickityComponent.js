import React from 'react';
import Flickity from 'react-flickity-component';

const flickityOptions = {
    initialIndex: 2
}

class Carousel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            image1: this.props.image1,
            image2: this.props.image2
        }
    }


    render(){
        return(
            <Flickity
                className={'carousel'} // default ''
                elementType={'div'} // default 'div'
                options={flickityOptions} // takes flickity options {}
                disableImagesLoaded={false} // default false
                reloadOnUpdate // default false
                static // default false
            >

                <img src={this.props.image1}/>
                <img src={this.props.image2}/>
                <img src={this.props.image1}/>
            </Flickity>
        );
    }
}

export default Carousel;

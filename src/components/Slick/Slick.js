import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Slick.css'
import Slider from 'react-slick';
import image1 from '../../images/space/opt_typical-bachelor-unit-b-b2x.png';
import image2 from '../../images/space/opt_typical-bachelor-unit-a-b2x.png';
import image3 from '../../images/space/opt_typical-2-bedroom-bn.png';
import image4 from '../../images/space/opt_62x.png';
import image5 from '../../images/space/opt_42x.png';

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'



class Slick extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            typical_bachelor_unit_b_b: image1,
            typical_bachelor_unit_a_b: image2,
            typical_2_bedroom_b: image3,
            typical_bedroom_a: image4,
            typical_bedroom_b: image5
        }
    }

    render(){
        const photos = [
            {
                picture: this.state.typical_bachelor_unit_b_b
            },
            {
                picture: this.state.typical_bachelor_unit_a_b
            },
            {
                picture: this.state.typical_2_bedroom_b
            },
            {
                picture: this.state.typical_bedroom_a
            },
            {
                picture: this.state.typical_bedroom_b
            }
        ]
        const settings = {
            dots: false,
            fades: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1.,
            arrows: true,
            initialSlide: 0,
            slideToScroll: true,
            className: "slides",
            responsive: [
                {
                  breakpoint: 530,
                  settings: {
                    slidesToShow: 1.,
                    slidesToScroll: true,
                    infinite: true,
                    dots: false
                    
                  }
                }
            ]
            
        }
        
        return(
            <Slider {...settings}>
                {photos.map((photo) => {
                    return(
                        <div className="slider-wrap">
                            <Zoom>
                                <picture>
                                    <source media="(max-width: 100%)" srcSet={photo.picture} />
                                    <img
                                    alt="that wanaka tree"
                                    src={photo.picture}
                                    width="100%"
                                    height="100%"
                                    style={{
                                        outline: "none",
                                        border: "none",
                                        borderStyle: "none"
                                    }}
                                    />
                                </picture>
                            </Zoom>
                            {/* <img width="80%" height="280px"  src={photo.picture} /> */}
                        </div>
                    )
                })}
            </Slider>
        );
    }
}

export default Slick;
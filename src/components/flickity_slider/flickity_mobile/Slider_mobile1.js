import React, { Component } from "react";
import Flickity from 'flickity';
import {Helmet} from 'react-helmet';
import './Slider_mobile1.css';
import image1 from '../../../images/space/opt_typical-bachelor-unit-b-b2x.png';
import image2 from '../../../images/space/opt_typical-bachelor-unit-a-b2x.png';
import image3 from '../../../images/space/opt_typical-2-bedroom-b2xn.png';
import image4 from '../../../images/space/opt_62x.png';
import image5 from '../../../images/space/opt_42x.png';

export default class Carousel extends Component {
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
  
   
   componentDidMount(){
    var carousel = document.querySelector('.carousel_mobile');
    var flkty = new Flickity( carousel, {
        wrapAround: true,
    //     cellAlign: "left",
    //      contain: true,
    //     imagesLoaded: true,
    //   percentPosition: false,
    });
    
    var imgs = carousel.querySelectorAll('.carousel-cell_mobile img');
    // get transform property
    var docStyle = document.documentElement.style;
    var transformProp = typeof docStyle.transform == 'string' ?
      'transform' : 'WebkitTransform';
    
    flkty.on( 'scroll', function() {
      flkty.slides.forEach( function( slide, i ) {
        var img = imgs[i];
        var x = ( slide.target + flkty.x ) * -1/3;
        img.style[ transformProp ] = 'translateX(' + x  + 'px)';
      });
    });
   }
  
  
    render(){
      return(
        <div class="carousel_mobile">
            <div class="carousel-cell_mobile">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/orange-tree.jpg" alt="orange tree" />
            </div>
            <div class="carousel-cell_mobile">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/one-world-trade.jpg" alt="One World Trade" />
            </div>
            <div class="carousel-cell_mobile">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/drizzle.jpg" alt="drizzle" />
            </div>
            <div class="carousel-cell_mobile">
                <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/cat-nose.jpg" alt="cat nose" />
            </div>
        </div>
      );
      }
  
  }
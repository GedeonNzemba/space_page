import React, {Component} from 'react';
import {Helmet} from "react-helmet";
import $ from 'jquery';
import '../css/Slide.css';
import flickity from '../flickity.js';
import Flickity from 'flickity';
import '../../../pages/spaces.js';

import image1 from '../../../images/space/opt_typical-bachelor-unit-b-b2x.png';
import image2 from '../../../images/space/opt_typical-bachelor-unit-a-b2x.png';
import image3 from '../../../images/space/opt_typical-2-bedroom-b2xn.png';
import image4 from '../../../images/space/opt_62x.png';
import image5 from '../../../images/space/opt_42x.png';

class Slider extends React.Component {
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
    // Adding Jquery to before the closing body tag
    const script = document.createElement("script");
    script.src = "https://code.jquery.com/jquery-3.5.1.min.js";
    script.async = true;

    document.body.appendChild(script);

    // Parallex For images
    var carousel = document.querySelector('.carousel-b');
    var flkty = new Flickity( carousel, {
      imagesLoaded: true,
      percentPosition: false,
      wrapAround: true,
      pageDots: false,
      prevNextButtons: false
    });

    var imgs = carousel.querySelectorAll('.carousel-cell img');
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
    // Previous Button
    var flkty = new Flickity('.carousel-b');
    var previousButton_1 = document.querySelector('.button--previous-1');
    previousButton_1.addEventListener( 'click', function() {
      flkty.previous();
    });

    // Next Button
    var flkty = new Flickity('.carousel-b');
    var nextButton_1 = document.querySelector('.button--next-1');
    nextButton_1.addEventListener( 'click', function() {
      flkty.next();
    });

    
  }
 


  render(){
    return(
      <div className="carousel-b">
        <Helmet>
          <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css" />
          <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
          <script src="https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js"></script>
          <script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>
        </Helmet>

        <div className="carousel-cell">
          <img src={this.state.typical_bachelor_unit_b_b} alt="typical bachelor unit A B" />
        </div>
        <div className="carousel-cell">
          <img src={this.state.typical_bachelor_unit_a_b} alt="typical bachelor unit B B" />
        </div>
        <div className="carousel-cell">
          <img src={this.state.typical_2_bedroom_b} alt="typical 2 bedroom B" />
        </div>
        <div className="carousel-cell">
          <img src={this.state.typical_bedroom_a} alt="typical bedroom A" />
        </div>
        <div className="carousel-cell">
          <img src={this.state.typical_bedroom_b} alt="typical bedroom B" />
        </div>
      </div>
        

    );
  }


}

export default Slider;
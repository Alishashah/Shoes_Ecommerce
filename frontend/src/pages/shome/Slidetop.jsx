import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Imgback2 from '../images/img21.jpg'
import Imgback from '../images/img22.jpg'
import Imgback3 from '../images/img23.jpg'


// import Carousel from 'react-bootstrap/Carousel';

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: "540px"
}
const slideImages = [
  {
    url: Imgback2,
    caption: 'Slide 1'
  },
  {
    url:Imgback,
    caption: 'Slide 2'
  },
  {
    url: Imgback3,
    caption: 'Slide 3'
  },
];

const Slidetop = () => {
    return (
      <div className="slide-container mb-4">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-sm-6">
                      {/* <div data-aos="fade-up-right">
                        dfgbvdfcdsfdvgbv
                      </div> */}
                    </div>
                    <div className="col-sm-6">
                      {/* <img src={slideImage.url} alt="" className='img-fluid' /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    )
}
export default Slidetop
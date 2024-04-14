import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Imgslide1 from '../image/1693976719G.jpg'
import Imgslide2 from '../image/1693977288G.jpg'
import Imgslide3 from '../image/1693980522G.jpg'
import Imgslide4 from '../image/bmj.jpg'
import Imgslide5 from '../image/che.jpg'
import Imgslide6 from '../image/lib.jpg'
import { Button, Card } from 'react-bootstrap';



const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Slideicu = () => {

    const data=[
        {
            id:1,
            image:Imgslide1,
            title:"ICE"
        },
        {
            id:2,
            image:Imgslide2,
            title:"ICE"
        },
        {
            id:3,
            image:Imgslide3,
            title:"ICE"
        },
        {
            id:4,
            image:Imgslide2,
            title:"ICE"
        },
        {
            id:5,
            image:Imgslide6,
            title:"ICE"
        },
        {
            id:6,
            image:Imgslide5,
            title:"ICE"
        },
        {
            id:7,
            image:Imgslide1,
            title:"ICE"
        },
        {
            id:8,
            image:Imgslide2,
            title:"ICE"
        },
        {
            id:9,
            image:Imgslide4,
            title:"ICE"
        },
        {
            id:10,
            image:Imgslide3,
            title:"ICE"
        },
        {
            id:11,
            image:Imgslide3,
            title:"ICE"
        },
        {
            id:12,
            image:Imgslide5,
            title:"ICE"
        },
        {
            id:13,
            image:Imgslide1,
            title:"ICE"
        },
    ]

  const slidedata=data.map((item)=>{
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          {/* <Button variant="primary">Read more</Button> */}
        </Card.Body>
      </Card>
    )
})
  return (
   <div className="container mar-top-bottom">
    <div className="row">
    <Carousel responsive={responsive}
    swipeable={true}
    draggable={true}
    showDots={true}
    arrows={false}
    infinite={true}
    autoPlaySpeed={1000}
    removeArrowOnDeviceType={["tablet", "mobile"]}
    >
  {slidedata}
    </Carousel>
    </div>
   </div>
  )
}

export default Slideicu
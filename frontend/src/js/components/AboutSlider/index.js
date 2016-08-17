import React from 'react'
import { Col, Row } from 'react-materialize'
import Slider from 'react-slick'

class AboutSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: false
    }
    return (
      <div>
      <Row>
        <Col s={10} offset='s1'>
          <Slider {...settings}>
            <div className='about-container'><h5> LEQ stands for the life effectiveness questionnaire. We use it to understand how young people think and feel about themselves.</h5></div>
            <div className='about-container'><h5> When you complete the LEQ you will be asked a series of questions. It is not a test, and there are no right or wrong answers. Everyone will have different responses.</h5></div>
            <div className='about-container'><h5> Please answer the statements as you feel now, even if you have felt differently at some other time in your life.</h5></div>
            <div className='about-container'><h5> We ask these questions to help us understand how well we are doing at supporting young people to be the best that they can be.</h5></div>
            <div className='about-container'><h5> You will all be able to view your results at the end. We will also share this with your group leader. Nobody else will be able to see your responses.</h5></div>
          </Slider>
        </Col>
      </Row>
      </div>
    )
  }
}

export default AboutSlider

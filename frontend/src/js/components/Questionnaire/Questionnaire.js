import React from 'react'
import Slider from 'react-slick'
import {Row, Col, Button} from 'react-materialize'
import Range from './Range.js'

const qObjects = [
  {
    name: 'I plan and use my time efficiently.',
    factor: 'Time Management'
  },
  {
    name: 'I am successful in social situations.',
    factor: 'Social Competence'
  },
  {
    name: 'When working on a project, I do my best to get the details right.',
    factor: 'Achievement Motivation'
  },
  {
    name: 'I change my thinking or opinions easily if there is a better idea.',
    factor: 'Intellectual Flexibility'
  },
  {
    name: 'I can get people to work for me.',
    factor: 'Task Leadership'
  },
  {
    name: 'I can stay calm in stressful situations.',
    factor: 'Emotional Control'
  },
  {
    name: 'I like to be busy and actively involved in things.',
    factor: 'Active Initiative'
  },
  {
    name: 'I know I have the ability to do anything I want to do.',
    factor: 'Self-Confidence'
  },
  {
    name: 'I do not waste time.',
    factor: 'Time Management'
  },
  {
    name: 'I am competent in social situations.',
    factor: 'Social Competence'
  },
  {
    name: 'I try to get the best results when I do things.',
    factor: 'Achievement Motivation'
  },
  {
    name: 'I am open to new ideas.',
    factor: 'Intellectual Flexibility'
  },
  {
    name: 'I am a good leader when a task needs to be done.',
    factor: 'Task Leadership'
  },
  {
    name: 'I stay calm and overcome anxiety in new or changing situations.',
    factor: 'Emotional Control'
  },
  {
    name: 'I like to be active and energetic.',
    factor: 'Active Initiative'
  },
  {
    name: 'When I apply myself to something I am confident I will succeed.',
    factor: 'Self-Confidence'
  },
  {
    name: 'I manage the way I use my time well.',
    factor: 'Time Management'
  },
  {
    name: 'I communicate well with people.',
    factor: 'Social Competence'
  },
  {
    name: 'I try to do the best that I possibly can.',
    factor: 'Achievement Motivation'
  },
  {
    name: 'I am adaptable and flexible in my thinking and ideas.',
    factor: 'Intellectual Flexibility'
  },
  {
    name: 'As a leader I motivate other people well when tasks need doing.',
    factor: 'Task Leadership'
  },
  {
    name: 'I stay calm when things go wrong.',
    factor: 'Emotional Control'
  },
  {
    name: 'I like to be an active, ‘get into it’ person.',
    factor: 'Active Initiative'
  },
  {
    name: 'I believe I can do it.',
    factor: 'Self-Confidence'
  }
]

export default class Questionnaire extends React.Component {
  render () {
    var settings = {
      dots: true,
      arrows: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: false,
      mobileFirst: true
    }

    const questions = qObjects.map((question, i) => {
      return (
        <div>
          <div className='Qbubble'>
            <div className='Qnumber'>{i + 1}</div>
          </div>
          <h5 className='Qname'>{question.name}</h5>
          <Range changeState={this.props.changeState} leqFactor={question.factor} />
        </div>
      )
    })

    return (
      <div className='questionnaire'>
        <Row>
          <Col s={2} className='slider-label'>
            <p>Not like me</p>
          </Col>
          <Col s={8}>
            <Slider {...settings}>
              {questions}
              <div><Button className='leqSubmitButton' onClick={this.props.changeTabs.bind(this)} wave='light' large={true}> Submit Questionnaire</Button></div>
            </Slider>
          </Col>
          <Col s={2} className='slider-label'>
            <p>Like me</p>
          </Col>
        </Row>
      </div>

    )
  }
}
//
// <div><h5><div className='Qbubble'><div className='Qnumber'>1. </div></div> I plan and use my time efficiently</h5>{range()}</div>
// <div><h5><div className='Qbubble'><div className='Qnumber'>2. </div></div> I am successful in social situations</h5></div>
// <div><h5><div className='Qbubble'><div className='Qnumber'>3. </div></div> When working on a project, I do my best to get the details right</h5></div>
// <div><h5><div className='Qbubble'><div className='Qnumber'>4. </div></div> I change my thinking or opinions easily if there is a better idea</h5></div>
// <div><h5><div className='Qbubble'><div className='Qnumber'>5. </div></div> I can get people to work for me</h5></div>
// <div><h5><div className='Qbubble'><div className='Qnumber'>6. </div></div> I can stay calm in stressful situations</h5></div>
// <div><h5><div className='Qbubble'><div className='Qnumber'>7. </div></div> I like to be busy and actively involved in things</h5></div>
// <div><h5><div className='Qbubble'><div className='Qnumber'>8. </div></div> I know I have the ability to do anything I want to do</h5></div>
// <div><h5><div className='Qbubble'><div className='Qnumber'>9. </div></div> I do not waste time</h5></div>
// <div><h5><div className='Qbubble'><div className='Qnumber'>10.</div></div> I am competent in social situations</h5></div>
// <div><h5><div className='Qbubble'><div className='Qnumber'>11.</div></div> I try to get the best results when I do things</h5></div>
// <div><h5><div className='Qbubble'><div className='Qnumber'>12.</div></div> I am open to new ideas</h5></div>
// <div><h5><div className='Qbubble'><div className='Qnumber'>13.</div></div> I am a good leader when a task needs to be done</h5></div>
// <div><h5><div className='Qbubble'><div className='Qnumber'>14.</div></div> I stay calm and overcome anxiety in new or changing situations</h5></div>
// <div><h5><div className='Qbubble'><div className='Qnumber'>15.</div></div> I like to be active and energetic</h5></div>
// <div><h5><div className='Qbubble'><div className='Qnumber'>16.</div></div> When I apply myself to something I am confident I will succeed</h5></div>
// <div><h5><div className='Qbubble'><div className='Qnumber'>17.</div></div> I manage the way I use my time well</h5></div>
// <div><h5><div className='Qbubble'><div className='Qnumber'>18.</div></div> I communicate well with people</h5></div>
// <div><h5><div className='Qbubble'><div className='Qnumber'>19.</div></div> I try to do the best that I possibly can</h5></div>
// <div><h5><div className='Qbubble'><div className='Qnumber'>20.</div></div> I am adaptable and flexible in my thinking and ideas</h5></div>
// <div><h5><div className='Qbubble'><div className='Qnumber'>21.</div></div> As a leader I motivate other people well when tasks need doing</h5></div>
// <div><h5><div className='Qbubble'><div className='Qnumber'>22.</div></div> I stay calm when things go wrong</h5></div>
// <div><h5><div className='Qbubble'><div className='Qnumber'>23.</div></div> I like to be an active, ‘get into it’ person</h5></div>
// <div><h5><div className='Qbubble'><div className='Qnumber'>24.</div></div> I believe I can do it</h5></div>

import React from 'react'
import { Col, Row, Tabs, Button, Input } from 'react-materialize'
import Results from '../../components/Results/results_index.js'
import Questionnaire from '../../components/Questionnaire/Questionnaire.js'
import AboutSlider from '../../components/AboutSlider'

class Home extends React.Component {
  constructor () {
    super()
    this.state = {
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false,
      firstTab: 'live',
      secondTab: 'hidden',
      thirdTab: 'hidden',
      fourthTab: 'hidden',
      resultStatus: 'now',
      buttonStatus: 'live',
      questionStatus: 'hidden',
      oldResults: {
        "Time Management": 12,
        "Social Competence": 11,
        "Achievement Motivation": 18,
        "Intellectual Flexibility": 8,
        "Task Leadership": 4,
        "Emotional Control": 20,
        "Active Initiative": 12,
        "Self-Confidence": 10,
      },
      results: {
        "Time Management": 16,
        "Social Competence": 16,
        "Achievement Motivation": 16,
        "Intellectual Flexibility": 16,
        "Task Leadership": 16,
        "Emotional Control": 16,
        "Active Initiative": 16,
        "Self-Confidence": 16,
      }
    }
    this.handleChange = this.handleChange.bind(this)
  }

  changeTabs() {
    console.log('function run')
    this.setState({
      tab1: false,
      tab2: false,
      tab3: true,
      tab4: false
    })
    console.log(this.state)
  }

  showFirstTab() {
    console.log('first tab');
    this.setState({
      firstTab: 'live',
      secondTab: 'hidden',
      thirdTab: 'hidden',
      fourthTab: 'hidden'
    })
  }

  showSecondTab() {
    this.setState({
      firstTab: 'hidden',
      secondTab: 'formContainer',
      thirdTab: 'hidden',
      fourthTab: 'hidden'
    })
  }

  showThirdTab() {
    this.setState({
      firstTab: 'hidden',
      secondTab: 'hidden',
      thirdTab: 'live',
      fourthTab: 'hidden'
    })
  }

  showFourthTab() {
    this.setState({
      firstTab: 'hidden',
      secondTab: 'hidden',
      thirdTab: 'hidden',
      fourthTab: 'live'
    })
  }

  showNow() {
    this.setState({
      resultStatus: 'now'
    })
  }

  showBefore() {
    this.setState({
      resultStatus: 'before'
    })
  }

  showAll() {
    this.setState({
      resultStatus: 'all'
    })
  }

  handleClick() {
    this.setState({
      buttonStatus: 'hidden',
      questionStatus: 'live'
    })
  }

  handleChange (leqFactor, score) {
    const newResults = {}
    newResults[leqFactor] = score += this.state.results[leqFactor]
    this.setState({
      results: {
        ...this.state.results,
        ...newResults
      }
    })
  }

  renderResults() {
    if (this.state.resultStatus === 'now') {
      return (
        <div className='nowResults'>
          <h3>NOW</h3>
          <Results results={this.state.results} />
        </div>
      )
    } else if (this.state.resultStatus === 'before') {
      return (
        <div className='beforeResults'>
          <h3>BEFORE</h3>
          <Results results={this.state.oldResults} />
        </div>
      )
    } else if (this.state.resultStatus === 'all') {
      return (
        <div>
          <div className='beforeResults'>
            <h3>BEFORE</h3>
            <Results results={this.state.oldResults} />
          </div>
          <div className='nowResults'>
            <h3>NOW</h3>
            <Results results={this.state.results} />
          </div>
        </div>
      )
    }
  }


  render () {
    console.log(this.state);
    return (
      <div className='container'>
        <Row>
          <Col s={10} m={10} l={10} offset='s1 m1 l1'>
            <div className='buttonMenu'>
              <div className='buttonCol'><Button waves='light' onClick={this.showFirstTab.bind(this)} className='youthButton'>NEW LEQ</Button></div>
              <div className='buttonCol'><Button waves='light' onClick={this.showSecondTab.bind(this)} className='youthButton'>MY DETAILS</Button></div>
              <div className='buttonCol'><Button waves='light' onClick={this.showThirdTab.bind(this)} className='youthButton'>MY LEQs</Button></div>
              <div className='buttonCol'><Button waves='light' onClick={this.showFourthTab.bind(this)} className='youthButton'>ABOUT THE LEQ</Button></div>
            </div>
          </Col>
          <Col s={1} m={1} l={1}>
            <div className='logo-container'>
              <img src='https://files.gitter.im/andrewMacmurray/london-youth-hackathon/eJwF/LY_Master_Mono_Black_RGB.png' />
            </div>
          </Col>
        </Row>
        <Row>
            <Col s={10} m={10} l={10}  offset='s1 m1 l1' className='mobileView'>
                  <div className={this.state.firstTab}>
                    <Row className={this.state.buttonStatus}>
                      <div><h5>When completing the questionnaire, think about how you think and feel about yourself. </h5></div>
                      <div><h5>Be honest. There are no right or wrong answers and everyone will have different responses.</h5></div>
                      <div><h5>Answer the questions as you feel now, even if you have felt differently at some other time in your life.</h5></div>
                      <Col s={4} m={4} l={4} offset='s4 m4 l4'>
                        <Button onClick={this.handleClick.bind(this)} className='start-button' waves='light' large={true}>START LEQ</Button>
                      </Col>
                    </Row>
                    <div className={this.state.questionStatus}>
                      <Questionnaire changeState={this.handleChange} changeTabs={this.showThirdTab.bind(this)}/>
                    </div>
                  </div>

                  <Row className={this.state.secondTab}>
                    <Col s={10} m={8} l={6} offset='s1 m2 l3'>
                      <Row>
                        <Input label='First Name' defaultValue='' s={6}  />
                        <Input label='Last Name' defaultValue='' s={6} />
                      </Row>
                      <Row>
                        <Input label='Youth Club/School Name' s={12} />
                      </Row>
                      <Row>
                        <Input label='Date of Birth' defaultValue='dd/mm/yyyy' s={6} />
                      </Row>
                      <Row>
                        <Input name='group1' type='checkbox' label='Do you have a disability or impairment' />
                      </Row>
                      <Row>
                        <Input className='disability-question' label='If yes please state' s={12} offset='s2 m2 l2' />
                      </Row>
                      <Button  className='submit-button' waves='light' large={false}>Save</Button>
                    </Col>
                  </Row>

                <div className={this.state.thirdTab}>
                  <div className='renderResults'>
                    {this.renderResults()}
                  </div>
                  <div className='buttonBottom'>
                    <Button floating fab='vertical' icon='launch' className='red' large style={{bottom: '45px', right: '24px'}}>
                    <Button floating onClick={this.showBefore.bind(this)} className='buttonBottom'>BEFORE</Button>
                    <Button floating onClick={this.showNow.bind(this)} className='buttonBottom'>NOW</Button>
                    <Button floating onClick={this.showAll.bind(this)} className='buttonBottom'>ALL</Button>
                    </Button>
                  </div>
                </div>

                <div className={this.state.fourthTab}>
                  <AboutSlider />
                </div>

            </Col>
      </Row>
    </div>
    )
  }
}

export default Home

// <Col s={8} m={8} l={8} offset='s2 m2 l2'>
//   <Tabs className='tab-demo z-depth-1'>
//     <Tab title='New LEQ' active={this.state.tab1}>
//       <Row className={this.state.buttonStatus}>
//         <div><h5>When completing the questionnaire, think about how you think and feel about yourself. </h5></div>
//         <div><h5>Be honest. There are no right or wrong answers and everyone will have different responses.</h5></div>
//         <div><h5>Answer the questions as you feel now, even if you have felt differently at some other time in your life.</h5></div>
//         <Col s={4} m={4} l={4} offset='s4 m4 l4'>
//           <Button onClick={this.handleClick.bind(this)} className='start-button' waves='light' large={true}>START LEQ</Button>
//         </Col>
//       </Row>
//       <div className={this.state.questionStatus}>
//         <Questionnaire changeState={this.handleChange} changeTabs={this.changeTabs.bind(this)}/>
//       </div>
//     </Tab>
//     <Tab title='my details' active={this.state.tab2}>
//     <Row className='formContainer'>
//       <Col s={10} m={8} l={6} offset='s1 m2 l3'>
//         <Row>
//           <Input label='First Name' defaultValue='Jackerius' s={6}  />
//           <Input label='Last Name' defaultValue='Morphius' s={6} />
//         </Row>
//         <Row>
//           <Input label='Youth Club/School Name' s={12} />
//         </Row>
//         <Row>
//           <Input label='Date of Birth' defaultValue='21/01/1923' s={6} />
//         </Row>
//         <Row>
//           <Input name='group1' type='checkbox' label='Do you have a disability or impairment' />
//         </Row>
//         <Row>
//           <Input className='disability-question' label='If yes please state' s={12} offset='s2 m2 l2' />
//         </Row>
//         <Button  className='submit-button' waves='light' large={false}>Save</Button>
//       </Col>
//     </Row>
//   </Tab>
//   <Tab title='my LEQs' active={this.state.tab3}>
//     <Results results={this.state.results} />
//   </Tab>
//   <Tab title='about the LEQ' active={this.state.tab4}>
//     <AboutSlider />
//   </Tab>
// </Tabs>
// </Col>

// LEQ stands for the Life Effectiveness Questionaire.
//
// We use it to understand how young people think and feel about themselves.
// When you complete the LEQ, you will be asked a series of questions. Its not a test and there are no
// no right or wrong answers. Everyone will have different responses.

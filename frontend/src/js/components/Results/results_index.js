import React from 'react'
import {Grid, Row, Col, Card, Modal, Button} from 'react-materialize'
import Bubble from '../Bubble/index.js'

const results = [
  {
    name: "Time Management",
    score: 8,
    color: 'leq-blue',
    description: 'This is how well you use your time.'
  },
  {
    name: "Social Competence",
    score: 3,
    color: 'leq-red',
    description: 'This is how confident you feel in social situations and when talking to others.'
  },
  {
    name: "Achievement Motivation",
    score: 8,
    color: 'leq-yellow',
    description: 'This is how confident you feel in social situations and when talking to others.'
  },
  {
    name: "Intellectual Flexibility",
    score: 8,
    color: 'leq-blue',
    description: 'This is how you take on new information, particularly when it might be very new or different from what you’ve come across before.'
  },
  {
    name: "Task Leadership",
    score: 3,
    color: 'leq-orange',
    description: 'This is how well you work with other people in a team to get things done.'
  },
  {
    name: "Emotional Control",
    score: 8,
    color: 'leq-purple',
    description: 'This is how calm you feel in difficult or stressful situations.'
  },
  {
    name: "Active Initiative",
    score: 3,
    color: 'leq-red',
    description: 'This is how much you like getting involved in things and being active.'
  },
  {
    name: "Self-Confidence",
    score: 8,
    color: 'leq-yellow',
    description: 'This is how much confidence you have in your own abilities and what you can achieve.'
  }
]

export default class Results extends React.Component {
  rowMaker (results) {
    return results.map((result, i) => <Col key={i} s={3} m={3} l={3}>
      <Bubble
        size={result.score}
        radius={result.score}
        text={result.name}
        color={result.color}
        textColor="black"
      />
      <Modal
        header={result.name}
        fixedFooter
        trigger={
          <Button waves='light' className='bubbleButton'>{result.name}</Button>
        }>
        {'SCORE: ' + result.score + '\n' + '\n'}
        <div>{'DEFINITION: ' + result.description}</div>
      </Modal>

    </Col>)
  }

  render () {
    const processedResults = Object.keys(this.props.results).map((result, i) => {
      return {
        name: result,
        score: Math.floor(this.props.results[result]/3),
        color: results[i].color,
        description: results[i].description
      }
    })

    const row1 = this.rowMaker(processedResults.slice(0, 4))
    const row2 = this.rowMaker(processedResults.slice(4, results.length))



    return (
      <div className="results-container">
          <row>{row1}</row>
          <row>{row2}</row>        
      </div>
    )
  }
}

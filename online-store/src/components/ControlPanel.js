import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import Fade from 'react-reveal/Fade'
import { NAVLINK_STYLE } from '../utils/uiConsts'

const ControlPanel = ({ button1, button2, FirstTab, SecondTab, user }) => {
  const [firstTabDisplay, setFirstTabDisplay] = useState(true)
  const [secondTabDisplay, setSecondTabDisplay] = useState(false)

  const click = (func1, func2, element, e) => {
    func1(true)
    func2(false)
    element.style.fontWeight = 'normal'
    e.target.style.fontWeight = 'bold'
  }

  return (
        <Container className="d-flex">
            <Container className="mt-5 mb-5 p-4" style={{ background: '#fff', display: 'grid', gridTemplateColumns: '2fr 1fr' }}>
                {firstTabDisplay ? <Fade bottom><FirstTab user={user} /></Fade> : null}
                {secondTabDisplay ? <Fade bottom><SecondTab user={user} /></Fade> : null}
                <Fade right>
                  <Container className="d-flex align-items-start flex-column p-4">
                      <Button
                          onClick={(e) => {
                            click(setFirstTabDisplay, setSecondTabDisplay, document.getElementById('SecondButton'), e)
                          }}
                          style={{ ...NAVLINK_STYLE, fontSize: '2.5rem', fontWeight: 'bold', transition: '0.1s' }}
                          id="FirstButton"
                      >
                          {button1}
                      </Button>
                      <Button
                          onClick={(e) => {
                            click(setSecondTabDisplay, setFirstTabDisplay, document.getElementById('FirstButton'), e)
                          }}
                          style={{ ...NAVLINK_STYLE, fontSize: '2.5rem', transition: '0.1s' }}
                          id="SecondButton"
                      >
                          {button2}
                      </Button>
                  </Container>
                </Fade>
            </Container>
        </Container>
  )
}

export default ControlPanel

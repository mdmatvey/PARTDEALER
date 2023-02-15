import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Fade from 'react-reveal/Fade'
import { Context } from '..'
import { NAVLINK_STYLE } from '../utils/uiConsts'

const ControlPanel = observer(({ button1, button2, FirstTab, SecondTab, userTemp }) => {
  const { user } = useContext(Context)

  const [firstTabDisplay, setFirstTabDisplay] = useState(true)
  const [secondTabDisplay, setSecondTabDisplay] = useState(false)

  const click = (func1, func2, element, e) => {
    func1(true)
    func2(false)
    element.style.fontWeight = 'normal'
    e.target.style.fontWeight = 'bold'
  }
  const [md1, setMd1] = useState(8)
  const [md2, setMd2] = useState(4)
  const [flexDirection, setFlexDirection] = useState('flex-row')

  useEffect(() => {
    if (user.userWidth < 992) {
      setMd1(12)
      setMd2(12)
      setFlexDirection('flex-column-reverse')
    } else if (user.userWidth >= 992) {
      setMd1(8)
      setMd2(4)
      setFlexDirection('flex-row')
    }
  }, [user.userWidth])

  return (
        <Container className="d-flex">
            <Container className="mt-5 mb-5">
               <Row className={`d-flex ${flexDirection}`}>
                  <Col md={md1}>
                    {firstTabDisplay ? <Fade bottom><FirstTab userTemp={userTemp} /></Fade> : null}
                    {secondTabDisplay ? <Fade bottom><SecondTab userTemp={userTemp} /></Fade> : null}
                  </Col>
                  <Col md={md2}>
                    {
                      user.userWidth
                        ? <Fade top>
                        <Container className='d-flex align-items-start flex-column'>
                            <Button
                                onClick={(e) => {
                                  click(setFirstTabDisplay, setSecondTabDisplay, document.getElementById('SecondButton'), e)
                                }}
                                style={{ ...NAVLINK_STYLE, fontSize: '2.5rem', fontWeight: 'bold', transition: '0.1s', padding: 0 }}
                                id="FirstButton"
                            >
                                {button1}
                            </Button>
                            <Button
                                onClick={(e) => {
                                  click(setSecondTabDisplay, setFirstTabDisplay, document.getElementById('FirstButton'), e)
                                }}
                                style={{ ...NAVLINK_STYLE, fontSize: '2.5rem', transition: '0.1s', padding: 0 }}
                                id="SecondButton"
                            >
                                {button2}
                            </Button>
                        </Container>
                      </Fade>
                        : <Fade right>
                        <Container className='d-flex align-items-start flex-column'>
                            <Button
                                onClick={(e) => {
                                  click(setFirstTabDisplay, setSecondTabDisplay, document.getElementById('SecondButton'), e)
                                }}
                                style={{ ...NAVLINK_STYLE, fontSize: '2.5rem', fontWeight: 'bold', transition: '0.1s', padding: 0 }}
                                id="FirstButton"
                            >
                                {button1}
                            </Button>
                            <Button
                                onClick={(e) => {
                                  click(setSecondTabDisplay, setFirstTabDisplay, document.getElementById('FirstButton'), e)
                                }}
                                style={{ ...NAVLINK_STYLE, fontSize: '2.5rem', transition: '0.1s', padding: 0 }}
                                id="SecondButton"
                            >
                                {button2}
                            </Button>
                        </Container>
                      </Fade>
                    }
                  </Col>
               </Row>
            </Container>
        </Container>
  )
})

export default ControlPanel

import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'
import { Button, Row } from 'react-bootstrap'
import Fade from 'react-reveal/Fade'
import { Context } from '..'
import { TEXTBUTTON_STYLE } from '../utils/uiConsts'
// import { fetchSortProductsPrice, fetchSortProductsPopularity } from './http/productAPI'
import { TiThList, TiThLarge } from 'react-icons/ti'
import { BsCaretDownFill } from 'react-icons/bs'
import '../styles/ResponsiveStyles.css'

let i = 0
let j = 0

const SortdBar = observer(({ setIsProductsLoading }) => {
  const { user, product } = useContext(Context)

  const [flexOuterDirection, setFlexOuterDirection] = useState('flex-row')
  const [flexInnerDirection, setFlexInnerDirection] = useState('flex-row')

  useEffect(() => {
    if (user.userWidth < 1400) {
      setFlexOuterDirection('flex-column')
    } else if (user.userWidth >= 1400) {
      setFlexOuterDirection('flex-row')
    }
  }, [user.userWidth])

  useEffect(() => {
    if (user.userWidth < 427) {
      setFlexInnerDirection('flex-column')
    } else if (user.userWidth >= 427) {
      setFlexInnerDirection('flex-row')
    }
  }, [user.userWidth])

  const [viewType, setViewType] = useState('d-flex align-items-baseline')

  useEffect(() => {
    if (user.userWidth < 509) {
      setViewType('d-none')
    } else if (user.userWidth >= 509) {
      setViewType('d-flex align-items-baseline')
    }
  }, [user.userWidth])

  const itemsOnPage = (e, num) => {
    product.setLimit(num)

    document.getElementById('twelve').style.color = '#000'
    document.getElementById('twenty_four').style.color = '#000'
    document.getElementById('forty_eight').style.color = '#000'
    e.target.style.color = 'gray'
  }

  const listType = (bool, element1, element2) => {
    product.setDisplayGrid(bool)
    element1.style.color = 'gray'
    element2.style.color = '#000'
  }

  const [priceCaretDisplay, setPrcieCaretDisplay] = useState({ display: 'none' })
  const [popularityCaretDisplay, setPopularityCaretDisplay] = useState({ display: 'inline-block' })
  const [nbspDisplay, setNbspDisplay] = useState({ display: 'inline-block' })

  useEffect(() => {
    if (user.userWidth < 485) {
      setNbspDisplay({ display: 'none' })
    } else if (user.userWidth >= 485) {
      setNbspDisplay({ display: 'flex' })
    }
  }, [user.userWidth])

  const priceSort = () => {
    document.getElementById('popularity').style.color = '#000'
    document.getElementById('price').style.color = 'gray'
    i++

    if (i % 2 === 0) {
      // setIsProductsLoading(true)
      //   fetchSortProductsPrice('desc')
      //     .then(data => {
      //       product.setProducts(data)
      //       setIsProductsLoading(false)
      //     })
      setPrcieCaretDisplay({ display: 'inline-block' })
      setPopularityCaretDisplay({ display: 'none' })
      document.getElementById('price-caret').style.transform = `rotate(${i * 180}deg)`
      setNbspDisplay({ display: 'none' })
    } else if (i % 2 !== 0) {
      // setIsProductsLoading(true)
      // fetchSortProductsPrice('asc')
      //   .then(data => {
      //     product.setProducts(data)
      //     setIsProductsLoading(false)
      //   })
      setPrcieCaretDisplay({ display: 'inline-block' })
      setPopularityCaretDisplay({ display: 'none' })
      document.getElementById('price-caret').style.transform = `rotate(${i * 180}deg)`
      setNbspDisplay({ display: 'none' })
    }
  }

  const popularitySort = () => {
    document.getElementById('popularity').style.color = 'gray'
    document.getElementById('price').style.color = '#000'
    j++

    if (j % 2 === 0) {
      //   setIsProductsLoading(true)
      //   fetchSortProductsPopularity('desc')
      //     .then(data => {
      //       product.setProducts(data)
      //       setIsProductsLoading(false)
      //     })
      setPrcieCaretDisplay({ display: 'none' })
      setPopularityCaretDisplay({ display: 'inline-block' })
      document.getElementById('popularity-caret').style.transform = `rotate(${j * 180}deg)`
      setNbspDisplay({ display: 'inline-block' })
    } else if (j % 2 !== 0) {
      // setIsProductsLoading(true)
      // fetchSortProductsPopularity('asc')
      //   .then(data => {
      //     product.setProducts(data)
      //     setIsProductsLoading(false)
      //   })
      setPrcieCaretDisplay({ display: 'none' })
      setPopularityCaretDisplay({ display: 'inline-block' })
      document.getElementById('popularity-caret').style.transform = `rotate(${j * 180}deg)`
      setNbspDisplay({ display: 'inline-block' })
    }
  }

  return (
        <Fade top>
            <Row className="d-flex" style={{ fontSize: '1.1rem', width: '100%', margin: '0 auto', padding: '4px 8px', borderRadius: 5 }} id='brandbar'>
                <div className="d-flex align-items-center col-md-6" style={{ width: '100%' }}>
                     <div className={`d-flex ${flexOuterDirection} justify-content-between w-100`}>
                        <span className={`d-flex ${flexInnerDirection} align-items-baseline`}>
                            <h5><strong>Сортировка:</strong></h5>
                            <Button
                                onClick={() => priceSort()}
                                style={{ ...TEXTBUTTON_STYLE, color: '#000' }}
                                id='price'
                            >
                                цена
                                <BsCaretDownFill id='price-caret' style={{ ...priceCaretDisplay, fontSize: '1rem', transition: '.2s' }} />
                                <span className='nbsp' style={nbspDisplay}>&nbsp;&nbsp;&nbsp;</span>
                            </Button>
                            <Button
                                onClick={() => popularitySort()}
                                style={{ ...TEXTBUTTON_STYLE, color: 'gray' }}
                                id='popularity'
                            >
                                популярность <BsCaretDownFill id='popularity-caret' style={{ ...popularityCaretDisplay, fontSize: '1rem', transition: '.2s' }} />
                            </Button>
                        </span>
                        <span className="d-flex align-items-baseline">
                            <h5><strong>На странице:</strong></h5>
                            <Button
                                onClick={(e) => itemsOnPage(e, 12)}
                                id="twelve"
                                style={{ ...TEXTBUTTON_STYLE, color: product.limit === 12 ? 'gray' : '#000' }}
                            >
                                12
                            </Button>
                            <Button
                                onClick={(e) => itemsOnPage(e, 24)}
                                id="twenty_four"
                                style={{ ...TEXTBUTTON_STYLE, color: product.limit === 24 ? 'gray' : '#000' }}
                            >
                                24
                            </Button>
                            <Button
                                onClick={(e) => itemsOnPage(e, 48)}
                                id="forty_eight"
                                style={{ ...TEXTBUTTON_STYLE, color: product.limit === 48 ? 'gray' : '#000' }}
                            >
                                48
                            </Button>
                        </span>
                        <span className={viewType}>
                            <h5><strong>Вид:</strong></h5>
                            <Button onClick={(e) => listType(true, document.getElementById('grid'), document.getElementById('list'))} style={TEXTBUTTON_STYLE}>
                                <TiThLarge id="grid" style={{ color: product.displayGrid === true ? 'gray' : '#000', transition: '0.25s' }} />
                            </Button>
                            <Button onClick={(e) => listType(false, document.getElementById('list'), document.getElementById('grid'))} style={TEXTBUTTON_STYLE}>
                                <TiThList id="list" style={{ color: product.displayGrid === false ? 'gray' : '#000', transition: '0.25s' }} />
                            </Button>
                        </span>
                    </div>
                </div>
            </Row>
        </Fade>
  )
})

export default SortdBar

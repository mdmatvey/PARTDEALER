import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'
import { Button, Dropdown, DropdownButton, Row } from 'react-bootstrap'
import { Context } from '..'
import { PRIMARY_COLOR, TEXTBUTTON_STYLE } from '../utils/uiConsts'
// import { fetchSortProductsPrice, fetchSortProductsPopularity } from './http/productAPI'
import { TiThList, TiThLarge } from 'react-icons/ti'
import { BsCaretDownFill } from 'react-icons/bs'

let i = 0
let j = 0

const SortdBar = observer(({ setIsProductsLoading }) => {
  const { user, product } = useContext(Context)

  const [dropdown, setDropdown] = useState(false)

  const [flexDirection, setFlexDirection] = useState('flex-row')

  useEffect(() => {
    if (user.userWidth < 1200) {
      setDropdown(true)
    } else if (user.userWidth >= 1200) {
      setDropdown(false)
    }
  }, [user.userWidth])

  useEffect(() => {
    if (user.userWidth < 500) {
      setFlexDirection('flex-column')
    } else if (user.userWidth >= 500) {
      setFlexDirection('flex-row')
    }
  }, [user.userWidth])

  const itemsOnPage = (e, num) => {
    product.setLimit(num)

    document.getElementById('four').style.color = '#000'
    document.getElementById('eight').style.color = '#000'
    document.getElementById('twelve').style.color = '#000'
    document.getElementById('all').style.color = '#000'
    e.target.style.color = 'gray'
  }

  const listType = (bool, element1, element2) => {
    product.setDisplayGrid(bool)
    element1.style.color = 'gray'
    if (dropdown) {
      element2.style.color = '#000'
    } else {
      element2.style.color = '#fff'
    }
  }

  const [priceCaretDisplay, setPrcieCaretDisplay] = useState({ display: 'none' })
  const [popularityCaretDisplay, setPopularityCaretDisplay] = useState({ display: 'inline-block' })
  const [nbspDisplay, setNbspDisplay] = useState({ display: 'inline-block' })

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
        <Row className="d-flex" style={{ fontSize: '1.1rem', width: '100%', margin: '0 auto', padding: '4px 8px', borderRadius: 5 }} id='brandbar'>
            <div className="d-flex align-items-center col-md-6" style={{ width: '100%' }}>
                {
                    dropdown
                      ? <div className={`d-flex ${flexDirection} justify-content-between`} style={{ width: '100%' }}>
                            <DropdownButton title="Сортировать по">
                                <Dropdown.Item>
                                    <Button
                                        onClick={() => priceSort()}
                                        style={{ ...TEXTBUTTON_STYLE, color: '#fff' }}
                                        id='price'
                                    >
                                        цена <BsCaretDownFill id='price-caret' style={{ ...priceCaretDisplay, fontSize: '1rem', transition: '.2s' }} />
                                    </Button>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Button
                                        onClick={() => popularitySort()}
                                        style={{ ...TEXTBUTTON_STYLE, color: 'gray' }}
                                        id='popularity'
                                    >
                                        популярность <BsCaretDownFill id='popularity-caret' style={{ ...popularityCaretDisplay, fontSize: '1rem', transition: '.2s' }} />
                                    </Button>
                                </Dropdown.Item>
                            </DropdownButton>
                            <DropdownButton title="На странице">
                                <Dropdown.Item>
                                    <Button
                                        onClick={(e) => itemsOnPage(e, 4)}
                                        id="four"
                                        style={{ ...TEXTBUTTON_STYLE, color: '#fff' }}
                                    >
                                        4
                                    </Button>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Button
                                        onClick={(e) => itemsOnPage(e, 8)}
                                        id="eight"
                                        style={{ ...TEXTBUTTON_STYLE, color: 'gray' }}
                                    >
                                        8
                                    </Button>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Button
                                        onClick={(e) => itemsOnPage(e, 12)}
                                        id="twelve"
                                        style={{ ...TEXTBUTTON_STYLE, color: '#fff' }}
                                    >
                                        12
                                    </Button>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Button
                                        onClick={(e) => itemsOnPage(e, 20)}
                                        id="all"
                                        style={{ ...TEXTBUTTON_STYLE, color: '#fff' }}
                                    >
                                        Все
                                    </Button>
                                </Dropdown.Item>
                            </DropdownButton>
                            <DropdownButton title="Вид">
                                <Dropdown.Item>
                                    <Button onClick={(e) => listType(true, document.getElementById('grid'), document.getElementById('list'))} style={TEXTBUTTON_STYLE}>
                                        <TiThLarge id="grid" style={{ color: 'gray' }} />
                                    </Button>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Button onClick={(e) => listType(false, document.getElementById('list'), document.getElementById('grid'))} style={TEXTBUTTON_STYLE}>
                                        <TiThList id="list" style={{ color: '#fff' }} />
                                    </Button>
                                </Dropdown.Item>
                        </DropdownButton>
                        </div>
                      : <div className='d-flex justify-content-between w-100'>
                            <span className='d-flex align-items-baseline'>
                                <h5><strong>Сортировать по:</strong></h5>
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
                            <span className="d-flex align-items-center">
                                <h5><strong>На странице:</strong></h5>
                                <Button
                                    onClick={(e) => itemsOnPage(e, 4)}
                                    id="four"
                                    style={{ ...TEXTBUTTON_STYLE, color: '#000' }}
                                >
                                    4
                                </Button>
                                <Button
                                    onClick={(e) => itemsOnPage(e, 8)}
                                    id="eight"
                                    style={{ ...TEXTBUTTON_STYLE, color: 'gray' }}
                                >
                                    8
                                </Button>
                                <Button
                                    onClick={(e) => itemsOnPage(e, 12)}
                                    id="twelve"
                                    style={{ ...TEXTBUTTON_STYLE, color: '#000' }}
                                >
                                    12
                                </Button>
                                <Button
                                    onClick={(e) => itemsOnPage(e, 20)}
                                    id="all"
                                    style={{ ...TEXTBUTTON_STYLE, color: '#000' }}
                                >
                                    Все
                                </Button>
                            </span>
                            <span className='d-flex align-items-baseline'>
                                <h5><strong>Вид:</strong></h5>
                                <Button onClick={(e) => listType(true, document.getElementById('grid'), document.getElementById('list'))} style={TEXTBUTTON_STYLE}>
                                    <TiThLarge id="grid" style={{ color: 'gray', transition: '0.25s' }} />
                                </Button>
                                <Button onClick={(e) => listType(false, document.getElementById('list'), document.getElementById('grid'))} style={TEXTBUTTON_STYLE}>
                                    <TiThList id="list" style={{ transition: '0.25s' }} />
                                </Button>
                            </span>
                        </div>
                }
            </div>
        </Row>
  )
})

export default SortdBar

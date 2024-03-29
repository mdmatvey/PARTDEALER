import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../index'
import { Card, Form } from 'react-bootstrap'
import Fade from 'react-reveal/Fade'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import '../styles/BootstrapReStyles.css'

const FilterBar = observer(({ isCategoriesLoading, isBrandsLoading }) => {
  const { user, product } = useContext(Context)

  const [query, setQuery] = useState('')

  const [columns, setColumns] = useState(2)

  useEffect(() => {
    if (user.userWidth < 360) {
      setColumns(1)
    } else if (user.userWidth < 768) {
      setColumns(2)
    } else if (user.userWidth < 992) {
      setColumns(1)
    } else if (user.userWidth >= 992) {
      setColumns(2)
    }
  }, [user.userWidth])

  useEffect(() => {
    if (document.getElementsByClassName('filterBarChecked')[0]) {
      document.getElementsByClassName('filterBarChecked')[0].children[0].checked = true
    }
  }, [product.categories])

  const checkBrand = (e, brand) => {
    if (e.target.checked) {
      product.setSelectedBrand([...product.selectedBrand, brand])
    } else {
      product.setSelectedBrand(product.selectedBrand.filter(brandToDisplay => brand.id !== brandToDisplay.id))
    }
  }

  const chooseCategory = (e, category) => {
    if (e.target.checked) {
      product.setCategoriesToDisplay([...product.categoriesToDisplay, category])
    } else {
      product.setCategoriesToDisplay(product.categoriesToDisplay.filter(categoryToDisplay => category.id !== categoryToDisplay.id))
    }
  }

  return (
    user.userWidth < 768
      ? <Fade top>
      <Card style={{ width: '100%', border: 'none' }}>
          <h2 style={{ textDecoration: 'underline', textDecorationColor: '#00CCCC', textDecorationThickness: 5 }}><strong>Бренды:</strong></h2>
          <Form style={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)`, height: 285, width: '100%', overflowY: 'scroll', overflowX: 'hidden' }}>
              {
                  isBrandsLoading
                    ? <>
                          <Skeleton count={4} style={{ width: '80%' }} />
                          <Skeleton count={4} style={{ width: '80%' }} />
                      </>
                    : product.brands.filter(brand => {
                      if (brand.name.toLowerCase().includes(query.toLowerCase())) {
                        return true
                      }

                      return false
                    }).map(brand => <Form.Check key={brand.id} label={brand.name} />)
              }
          </Form>
          <Form className="mt-3 d-inline-flex brandbar-form w-75 local-searchbar">
              <Form.Control
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  type="search"
                  placeholder="Бренд"
                  className="me-2"
                  aria-label="Search"
              />
          </Form><br/>
          <h2 style={{ textDecoration: 'underline', textDecorationColor: '#00CCCC', textDecorationThickness: 5 }}><strong>Категории:</strong></h2>
          <Form style={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)`, width: '100%' }}>
              {
                  isCategoriesLoading
                    ? <>
                          <Skeleton count={4} style={{ width: '80%' }} />
                          <Skeleton count={4} style={{ width: '80%' }} />
                      </>
                    : product.categories.map(category => {
                      return (
                        product.categoriesToDisplay.map(category => category.name).includes(category.name)
                          ? <Form.Check onClick={(e) => chooseCategory(e, category)} key={category.id} label={category.name} className="filterBarChecked" />
                          : <Form.Check onClick={(e) => chooseCategory(e, category)} key={category.id} label={category.name} />
                      )
                    })
              }
          </Form>
      </Card>
    </Fade>
      : <Fade left>
      <Card style={{ width: '100%', border: 'none' }}>
          <h2 style={{ textDecoration: 'underline', textDecorationColor: '#00CCCC', textDecorationThickness: 5 }}><strong>Бренды:</strong></h2>
          <Form style={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)`, alignContent: 'start', justifyContent: 'top', width: '100%', height: 285, overflowY: 'scroll', overflowX: 'hidden' }}>
              {
                  isBrandsLoading
                    ? <>
                          <Skeleton count={12} style={{ width: '80%' }} />
                          <Skeleton count={12} style={{ width: '80%' }} />
                      </>
                    : product.brands.filter(brand => {
                      if (brand.name.toLowerCase().includes(query.toLowerCase())) {
                        return true
                      }

                      return false
                    }).map(brand => <Form.Check onClick={(e) => checkBrand(e, brand)} key={brand.id} label={brand.name.length > 10 ? brand.name.substring(0, 10) + '...' : brand.name} />)
              }
          </Form>
          <Form className="mt-3 d-inline-flex brandbar-form local-searchbar">
              <Form.Control
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  type="search"
                  placeholder="Бренд"
                  className="me-2"
                  aria-label="Search"
              />
          </Form><br/>
          <h2 style={{ textDecoration: 'underline', textDecorationColor: '#00CCCC', textDecorationThickness: 5 }}><strong>Категории:</strong></h2>
          <Form style={{ display: 'grid', gridTemplateColumns: `repeat(${columns}, 1fr)`, width: '100%' }}>
              {
                  isCategoriesLoading
                    ? <>
                          <Skeleton count={4} style={{ width: '80%' }} />
                          <Skeleton count={4} style={{ width: '80%' }} />
                      </>
                    : product.categories.map(category => {
                      return (
                        product.categoriesToDisplay.map(category => category.name).includes(category.name)
                          ? <Form.Check onClick={(e) => chooseCategory(e, category)} key={category.id} label={category.name} className="filterBarChecked" />
                          : <Form.Check onClick={(e) => chooseCategory(e, category)} key={category.id} label={category.name} />
                      )
                    })
              }
          </Form>
      </Card>
    </Fade>
  )
})

export default FilterBar

import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Context } from '..'
import SortBar from '../components/SortBar'
import { fetchBrands, fetchCategories, fetchProducts } from '../components/http/productAPI'
import Pages from '../components/Pages'
import ProductList from '../components/ProductList'
import FilterBar from '../components/FilterBar'
import '../styles/ResponsiveStyles.css'

const Shop = observer(() => {
  const { product } = useContext(Context)
  const [isCategoriesLoading, setIsCategoriesIsLoading] = useState(true)
  const [isBrandsLoading, setIsBrandsIsLoading] = useState(true)
  const [isProductsLoading, setIsProductsLoading] = useState(true)

  useEffect(() => {
    fetchCategories()
      .then(data => {
        product.setCategories(data)
        setIsCategoriesIsLoading(false)
      })

    fetchBrands()
      .then(data => {
        product.setBrands(data)
        setIsBrandsIsLoading(false)
      })
  }, [])

  useEffect(() => {
    fetchProducts(null, product.selectedCategory.id, product.selectedBrand.id, product.page, product.limit)
      .then(data => {
        product.setProducts(data.results)
        product.setTotalCount(data.count)
        setIsProductsLoading(false)
      })
  }, [product.page, product.limit, product.selectedCategory, product.selectedBrand])

  return (
        <Container className='pt-4'>
            <Row className="mt-2">
                <Col md={3} id='filterbar-col'>
                    <FilterBar isCategoriesLoading={isCategoriesLoading} isBrandsLoading={isBrandsLoading} />
                </Col>
                <Col md={9}>
                    <SortBar />
                    <ProductList isProductsLoading={isProductsLoading} />
                    <Pages />
                </Col>
            </Row>
        </Container>
  )
})

export default Shop

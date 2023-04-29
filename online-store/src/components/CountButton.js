import React, { useEffect } from 'react'
import { Form } from 'react-bootstrap'
import { PRIMARY_COLOR } from '../utils/uiConsts'

const CountButton = ({ item, productPage }) => {
  useEffect(() => {
    item.count = 1
  }, [])

  const changeCount = (num) => {
    if (Number(item.count) + num > 0) {
      item.count = Number(item.count) + num
    }
  }

  return (
        <div className="d-flex col-md-6" style={{ width: 120, height: productPage ? '100%' : null }}>
            <button
                onClick={() => changeCount(-1)}
                className={`shadow-none count-button ${productPage ? 'inverted' : ''}`}
                style={{ color: productPage ? '#fff' : '#000', borderRadius: '5px 0 0 5px' }}
            >
                <strong>-</strong>
            </button>
            <Form>
                <Form.Control
                    className="form-inline text-center shadow-none"
                    value={item.count}
                    style={{ color: productPage ? '#fff' : '#000', height: '100%', background: 'none', borderWidth: '3px 0 3px 0', borderColor: PRIMARY_COLOR, borderRadius: 0 }}
                    onChange={e => isNaN(Number(e.target.value)) ? NaN : e.target.value.length !== 0 ? e.target.value == 0 ? item.count = 1 : item.count = e.target.value : 1 }
                    type="text"
                    minLength="0"
                    maxLength="2"
                />
            </Form>
            <button
                onClick={() => changeCount(1)}
                className={`shadow-none count-button ${productPage ? 'inverted' : ''}`}
                style={{ color: productPage ? '#fff' : '#000', borderRadius: '0 5px 5px 0' }}
            >
                <strong>+</strong>
            </button>
        </div>
  )
}

export default CountButton

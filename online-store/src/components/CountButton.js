import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { PRIMARY_COLOR } from '../utils/uiConsts'

const CountButton = ({ item, productPage }) => {
  const changeCount = (num) => {
    if (Number(item.count) + num > 0) {
      item.count = Number(item.count) + num
    }
  }

  return (
        <div className="d-flex col-md-6" style={{ width: 120, height: productPage ? '100%' : null }}>
            <Button
                onClick={() => changeCount(-1)}
                className="shadow-none count-button"
                style={{ color: productPage ? '#fff' : '#000', background: 'none', borderWidth: 3, borderColor: PRIMARY_COLOR, borderRadius: '5px 0 0 5px' }}
            >
                <strong>-</strong>
            </Button>
            <Form>
                <Form.Control
                    className="form-inline text-center shadow-none"
                    value={item.count}
                    style={{ color: productPage ? '#fff' : '#000', height: '100%', background: 'none', borderWidth: '3px 0 3px 0', borderColor: PRIMARY_COLOR, borderRadius: 0 }}
                    onChange={e => isNaN(Number(e.target.value)) ? NaN : e.target.value.length !== 0 ? item.count = e.target.value : 1 }
                    type="text"
                    minLength="0"
                    maxLength="2"
                />
            </Form>
            <Button
                onClick={() => changeCount(1)}
                className="shadow-none count-button"
                style={{ color: productPage ? '#fff' : '#000', background: 'none', borderWidth: 3, borderColor: PRIMARY_COLOR, borderRadius: '0 5px 5px 0' }}
            >
                <strong>+</strong>
            </Button>
        </div>
  )
}

export default CountButton

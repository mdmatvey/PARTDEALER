import React from 'react';
import { Button, Form } from 'react-bootstrap';

const CountButton = ({count, setCount}) => {
    const changeCount = (num) => {
        if (Number(count) + num > 0) {
            setCount(() => Number(count) + num)
        }
    }

    return (
        <div className="d-flex col-md-6" style={{width: 110}}>
            <Button
                onClick={() => changeCount(-1)} 
                className="shadow-none"
                style={{background: '#919090', border: 'none', borderRadius: 0}}
            >
                -
            </Button>
            <Form>
                <Form.Control 
                    className="form-inline text-center shadow-none"
                    value={count} 
                    style={{border: 'none', borderRadius: 0}}
                    onChange={e => isNaN(Number(e.target.value)) ? NaN : setCount(e.target.value)}
                    type="text" 
                    minLength="0" 
                    maxLength="2"
                />
            </Form>
            <Button 
                onClick={() => changeCount(1)} 
                className="shadow-none"
                style={{background: '#4a4a4a', border: 'none', borderRadius: 0}}
            >
                +
            </Button>
        </div>
    );
};

export default CountButton;
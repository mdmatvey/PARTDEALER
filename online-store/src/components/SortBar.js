import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Button, Row } from 'react-bootstrap';
import { Context } from '..';

const SortdBar = observer(() => {
    const {product} = useContext(Context);

    const itemsOnPage = (e, num) => {
        product.setLimit(num);
        document.getElementById("four").style.fontWeight = "normal";
        document.getElementById("eight").style.fontWeight = "normal";
        document.getElementById("twelve").style.fontWeight = "normal";
        document.getElementById("all").style.fontWeight = "normal";
        e.target.style.fontWeight = "bold"
    }

    return (
        <Row className="d-flex" style={{background: "#a8a8a8", width: "100%", margin: "0 auto"}}>
            <div className="d-flex align-items-center col-md-6" style={{width: "100%"}}>
                Сортировать по: 
                <Button style={{color: "#000", background: "none", border: "none", borderRadius: "0"}}>наличие</Button> 
                <Button style={{color: "#000", background: "none", border: "none", borderRadius: "0"}}>цена</Button> 
                <Button style={{color: "#000", background: "none", border: "none", borderRadius: "0"}}>срок</Button>
                <span className="d-flex align-items-center" style={{display: "block", marginLeft: "auto"}}>
                    На странице: 
                    <Button onClick={(e) => itemsOnPage(e, 4)} id="four" style={{color: "#000", background: "none", border: "none", borderRadius: "0"}}>4</Button> 
                    <Button onClick={(e) => itemsOnPage(e, 8)} id="eight" style={{color: "#000", background: "none", border: "none", borderRadius: "0"}}>8</Button> 
                    <Button onClick={(e) => itemsOnPage(e, 12)} id="twelve" style={{color: "#000", background: "none", border: "none", borderRadius: "0"}}>12</Button>
                    <Button onClick={(e) => itemsOnPage(e, 20)} id="all" style={{color: "#000", background: "none", border: "none", borderRadius: "0"}}>Все</Button>
                </span>
            </div>  
        </Row>
    );
});

export default SortdBar;
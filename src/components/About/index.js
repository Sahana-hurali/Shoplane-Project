import React, { useState } from 'react';
import { addProduct } from '../../actions';
import { connect } from 'react-redux';

const About = ({ addProductProp }) => {
    const [itemName, setitem] = useState("")
    return (<>
        <h1>About</h1>
        <input onChange={(e) => setitem(e.target.value)} value={itemName} />
        <button onClick={() => {
            addProductProp({ id: Math.random(), name: itemName })
            setitem("")
        }
        }>ADD</button>
    </>);
}

const mapDispatchToProps = (dispatch) => ({
    addProductProp: (data) => dispatch(addProduct(data))
})

const mapStateToProps = (store) => ({
    productsCount: store.products.length
})

export default connect(mapStateToProps, mapDispatchToProps)(About);
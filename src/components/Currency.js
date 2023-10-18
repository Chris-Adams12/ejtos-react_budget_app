import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency } = useContext(AppContext);
    const [newCurrency, setNewCurrency] = useState(currency);
    const handleCurrencyChange = (event) => {
        setNewCurrency(event.target.value);
    }
    return (
<div className='alert alert-secondary'>
<span>Currency: </span>
<select className="custom-select" id="inputGroupSelect02" onChange={(event) => setAction(event.target.value)}>
    <option defaultValue value="Dollar" name="Dollar">$ Dollar</option>
    <option value="Pound" name="Pound">£ Pound</option>
    <option value="Euro" name="Euro">€ Euro</option>
    <option value="Ruppee" name="Ruppee">₹ Ruppee</option>
</select>
</div>
    );
};
export default Currency;

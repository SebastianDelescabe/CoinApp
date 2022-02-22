import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import TableCoins from './components/TableCoins';


function App() {

  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  const getData = async () => {
    const apiData = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
    setCoins(apiData.data)
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <div className="container">
      <div className='row'>
        <h1 className=' text-light mt-4 text-center'>Coin Market</h1>
        <input
          type='text'
          placeholder='Search Coin'
          className='form-control bg-dark text-light border-0 mt-4 text-center'
          onChange={e => setSearch(e.target.value)} />
        <TableCoins coins={coins} search={search} />
      </div>
    </div>
  );
}

export default App;

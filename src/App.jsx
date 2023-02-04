import React, { useState } from 'react'

import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

import TaxSlab from './components/TaxSlab/TaxSlab'
import TaxCalculation from './components/TaxCalculation/TaxCalculation'
import './App.css'

const App = () => {
  const [financialYear, setFinancialYear] = useState('FY-2223')

  const handleFYChange = (e) => {
    setFinancialYear(e.target.value)
  }

  return (
    <div className='App'>
      <FormControl
        style={{ margin: '1rem' }}
        fullWidth
      >
        <InputLabel
          id='financial-year-select-label'
          style={{
            color: '#646cff'
          }}
        >
            Financial Year
        </InputLabel>
        <Select
          labelId='financial-year-select-label'
          id='financial-year-select'
          value={financialYear}
          label='Financial Year'
          onChange={handleFYChange}
        >
          <MenuItem value={'FY-2223'}>2022 - 2023</MenuItem>
          <MenuItem value={'FY-2324'}>2023 - 2024</MenuItem>
        </Select>
      </FormControl>
      <TaxSlab
        financialYear={financialYear}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start'
        }}
      >
        {
          financialYear === 'FY-2223'
          ?  <div>
            <ul>
              <li>Any kind of deductions & exemptions are not allowed in the new tax scheme</li>
            </ul>
          </div>
          : <div>
            <ul>
              <li>Any kind of deductions & exemptions are not allowed, except standard deductions in the new tax scheme</li>
              <li>If the total income exceeds 155000, then the allowed standard deduction is &#x20B9; 52500 otherwise, it is &#x20B9; 50000</li>
            </ul>
          </div>
        }
        <TaxCalculation
          financialYear={financialYear}
        />
      </div>
    </div>
  )
}

export default App

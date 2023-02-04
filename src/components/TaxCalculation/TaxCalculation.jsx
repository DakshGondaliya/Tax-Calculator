import React, { useState } from 'react'
import PropTypes from 'prop-types'

import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'

import { taxAsPerOTS, taxAsPerNTS } from './utils'

const TaxCalculation = props => {
  const { financialYear } = props
  const [totalIncome, setTotalIncome] = useState('')
  const [deduction, setDeduction] = useState('')
  const [exemption, setExemption] = useState('')

  const inputProps = {
    inputMode: 'numeric',
    pattern: '[0-9]*'
  }

  const handleTextField = (e, field) => {
    switch (field) {
      case 'income':
        setTotalIncome(e.target.value)
        break
      case 'deduction':
        setDeduction(e.target.value)
        break
      case 'exemption':
        setExemption(e.target.value)
        break
    }
  }

  const otsTax = taxAsPerOTS(Number(totalIncome), Number(deduction), Number(exemption))
  const ntsTax = taxAsPerNTS(Number(totalIncome), financialYear)

  const winner = otsTax > ntsTax
                 ? 'New Tax Scheme'
                 : ntsTax > otsTax && otsTax >= 0
                  ? 'Old Tax Scheme'
                  : otsTax < 0
                    ? '-'
                    : 'Both'

  return (
    <div>
      <Box
        component='form'
        sx={{
          '& > :not(style)': { m: 1, width: '15rem' },
        }}
        noValidate={false}
        autoComplete='off'
      >
        <TextField
          id='income'
          type={'number'}
          inputProps={inputProps}
          placeholder='Enter Total Income'
          label='Total Income'
          variant='outlined'
          value={totalIncome}
          onChange={(e) => { handleTextField(e, 'income') }}
        />
        <TextField
          id='deduction'
          type={'number'}
          inputProps={inputProps}
          placeholder='Enter Deduction Amount'
          label='Deduction Amount'
          variant='outlined'
          value={deduction}
          onChange={(e) => { handleTextField(e, 'deduction') }}
        />
        <TextField
          id='exemption'
          type={'number'}
          inputProps={inputProps}
          placeholder='Enter Exemption Amount'
          label='Exemption Amount'
          variant='outlined'
          value={exemption}
          onChange={(e) => { handleTextField(e, 'exemption') }}
        />
      </Box>

      {otsTax < 0 && (
        <div style={{ color: 'red', margin: '0 0.5rem' }}>
          Please make sure total income must be greater than (deduction + expemtion) amount inorder to get correct tds amount as per old tax scheme
        </div>
      )}

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          margin: '0.5rem 0.5rem 0rem'
        }}
      >
        <div style={{ marginRight: '2rem' }}>
          <p>
            <b>TDS as per Old Tax Scheme:</b>
            <span> &#x20B9; {otsTax < 0 ? '-' : otsTax.toFixed(2)}</span>
          </p>
          <p>
            <b>TDS as per New Tax Scheme:</b>
            <span> &#x20B9; {ntsTax.toFixed(2)}</span>
          </p>
        </div>
        <div
           style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div style={{ fontWeight: 'bold' }}>
            Better
          </div>
          <div
            style={{
              fontSize: '3rem',
              fontWeight: 'bolder',
              color: '#646cff'
            }}
          >
            {winner}
          </div>
        </div>
      </div>
    </div>
  )
}

TaxCalculation.propTypes = {
  financialYear: PropTypes.string
}

export default TaxCalculation
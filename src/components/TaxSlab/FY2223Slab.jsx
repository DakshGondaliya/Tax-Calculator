import React from 'react'
import PropTypes from 'prop-types'

import SlabTable from './SlabTable'

const FY2223Slab = props => {
  const { createSlabData } = props
  
  const data = [
    createSlabData('\u20B9 0 - 2.5 Lakhs',	'0%', '', '\u20B9 0 - 2.5 Lakhs',	'0%', ''),
    createSlabData('\u20B9 2.5 - 5 Lakhs',	'0%', 'If Net Taxable Income <= \u20B9 5 Lakhs', '\u20B9 2.5 - 5 Lakhs',	'0%', 'If Net Taxable Income <= \u20B9 5 Lakhs'),
    createSlabData('\u20B9 2.5 - 5 Lakhs',	'5%', 'If Net Taxable Income > \u20B9 5 Lakhs', '\u20B9 2.5 - 5 Lakhs',	'5%', 'If Net Taxable Income > \u20B9 5 Lakhs'),
    createSlabData('\u20B9 5 - 10 Lakhs',	'20%', '', '\u20B9 5 - 7.5 Lakhs',	'10%', ''),
    createSlabData('> \u20B9 10 Lakhs', '30%', '', '\u20B9 7.5 - 10 Lakhs',	'15%', ''),
    createSlabData('', '', '', '\u20B9 10 - 12.5 Lakhs',	'20%', ''),
    createSlabData('', '', '', '\u20B9 12.5 - 15 Lakhs',	'25%', ''),
    createSlabData('', '', '', '> \u20B9 15 Lakhs',	'30%', '')
  ]

  return (
    <SlabTable
      tableLabel={'FY 2022-2023 Table'}
      tableData={data}
    />
  )
}

FY2223Slab.propTypes = {
  createSlabData: PropTypes.func
}

export default FY2223Slab
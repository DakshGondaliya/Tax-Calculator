import React from 'react'
import PropTypes from 'prop-types'

import SlabTable from './SlabTable'

const FY2324Slab = props => {
  const { createSlabData } = props
  
  const data = [
    createSlabData('\u20B9 0 - 2.5 Lakhs',	'0%', '', '\u20B9 0 - 3 Lakhs',	'0%', ''),
    createSlabData('\u20B9 2.5 - 5 Lakhs',	'0%', 'If Net Taxable Income <= \u20B9 5 Lakhs', '\u20B9 3 - 6 Lakhs',	'0%', 'If Net Taxable Income <= \u20B9 7 Lakhs'),
    createSlabData('\u20B9 2.5 - 5 Lakhs',	'5%', 'If Net Taxable Income > \u20B9 5 Lakhs', '\u20B9 3 - 6 Lakhs',	'5%', 'If Net Taxable Income > \u20B9 7 Lakhs'),
    createSlabData('\u20B9 5 - 10 Lakhs',	'20%', '', '\u20B9 6 - 9 Lakhs',	'0%', 'If Net Taxable Income <= \u20B9 7 Lakhs'),
    createSlabData('> \u20B9 10 Lakhs', '30%', '', '\u20B9 6 - 9 Lakhs',	'10%', 'If Net Taxable Income > \u20B9 7 Lakhs'),
    createSlabData('', '', '', '\u20B9 9 - 12 Lakhs',	'15%', ''),
    createSlabData('', '', '', '\u20B9 12 - 15 Lakhs',	'20%', ''),
    createSlabData('', '', '', '> \u20B9 15 Lakhs',	'30%', '')
  ]

  return (
    <SlabTable
      tableLabel={'FY 2023-2024 Table'}
      tableData={data}
    />
  )
}

FY2324Slab.propTypes = {
  createSlabData: PropTypes.func
}

export default FY2324Slab
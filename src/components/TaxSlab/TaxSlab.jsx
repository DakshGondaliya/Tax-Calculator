import React from 'react'
import PropTypes from 'prop-types'

import FY2223Slab from './FY2223Slab'
import FY2324Slab from './FY2324Slab'

const TaxSlab = props => {
  const { financialYear } = props

  const createSlabData = (ots, otsTaxRate, otsRemark, nts, ntsTaxRate, ntsRemark) => {
    return { 
      ots,
      otsTaxRate,
      otsRemark,
      nts,
      ntsTaxRate,
      ntsRemark 
    }
  }
  
  return (
    <React.Fragment>
      {
        financialYear === 'FY-2223'
        ? <FY2223Slab createSlabData={createSlabData} />
        : <FY2324Slab createSlabData={createSlabData}/>
      }
    </React.Fragment>
  )
}

TaxSlab.propTypes = {
  financialYear: PropTypes.string
}

export default TaxSlab
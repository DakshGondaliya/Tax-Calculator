import React from 'react'
import PropTypes from 'prop-types'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

const SlabTable = props => {
  const { tableLabel, tableData } = props

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label={tableLabel}>
        <TableHead
          sx={{
            '& th': { color: '#000', fontWeight: 'bold' }
          }}
        >
          <TableRow>
            <TableCell>Old Tax Slabs</TableCell>
            <TableCell align='center'>Tax Rate</TableCell>
            <TableCell align='center'>Remarks</TableCell>
            <TableCell>New Tax Slabs</TableCell>
            <TableCell align='center'>Tax Rate</TableCell>
            <TableCell align='center'>Remarks</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row, index) => (
            <TableRow
              key={`${index} ${row.ots} ${row.nts}`}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{row.ots}</TableCell>
              <TableCell align='center'>{row.otsTaxRate}</TableCell>
              <TableCell align='center'>{row.otsRemark}</TableCell>
              <TableCell>{row.nts}</TableCell>
              <TableCell align='center'>{row.ntsTaxRate}</TableCell>
              <TableCell align='center'>{row.ntsRemark}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

SlabTable.propTypes = {
  tableLabel: PropTypes.string,
  tableData: PropTypes.array
}

export default SlabTable
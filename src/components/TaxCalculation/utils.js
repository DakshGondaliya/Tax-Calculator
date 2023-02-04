const taxWithCess = (tds) => {
  return tds * 1.04
}

const taxAsPerOTS = (totalIncome, deduction, exemption) => {
  const netIncome = totalIncome - deduction - exemption
  if (netIncome < 0) return -1

  if (netIncome > 1000000) {
    return taxWithCess(112500 + (netIncome - 1000000) * 0.3)
  } else if (netIncome > 500000 && netIncome <= 1000000) {
    return taxWithCess(12500 + (netIncome - 500000) * 0.2)
  } else {
    return 0
  }
}

const taxAsPerNTS = (totalIncome, financialYear) => {
  if (financialYear === 'FY-2223') {
    if (totalIncome > 1500000) {
      return taxWithCess(187500 + (totalIncome - 1500000) * 0.3)
    } else if (totalIncome > 1250000 && totalIncome <= 1500000) {
      return taxWithCess(125000 + (totalIncome - 1250000) * 0.25)
    } else if (totalIncome > 1000000 && totalIncome <= 1250000) {
      return taxWithCess(75000 + (totalIncome - 1000000) * 0.2)
    } else if (totalIncome > 750000 && totalIncome <= 1000000) {
      return taxWithCess(37500 + (totalIncome - 750000) * 0.15)
    } else if (totalIncome > 500000 && totalIncome <= 750000) {
      return taxWithCess(12500 + (totalIncome - 500000) * 10)
    } else {
      return 0
    }
  } else if (financialYear === 'FY-2324') {
    const netIncome = totalIncome > 1550000
                      ? totalIncome - 52500
                      : totalIncome > 700000 && totalIncome < 1550000
                        ? totalIncome - 50000
                        : totalIncome

    if (netIncome > 1500000) {
      return taxWithCess(150000 + (netIncome - 1500000) * 0.3)
    } else if (netIncome > 1200000 && netIncome <= 1500000) {
      return taxWithCess(90000 + (netIncome - 1200000) * 0.2)
    } else if (netIncome > 900000 && netIncome <= 1200000) {
      return taxWithCess(45000 + (netIncome - 900000) * 0.15)
    } else if (netIncome > 700000 && netIncome <= 900000) {
      return taxWithCess(25000 + (netIncome - 700000) * 0.10)
    } else {
      return 0
    }
  }
}

export { taxAsPerOTS, taxAsPerNTS }
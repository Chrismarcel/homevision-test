/* eslint-disable implicit-arrow-linebreak */

export const formatCurrency = (amount) =>
  Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount)

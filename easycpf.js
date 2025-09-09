const lucro = [0.11, 0.115, 0.12, 0.125, 0.13, 0.1375, 0.14, 0.15, 0.16]

const precosRanges = [
  { min: 1000, price: 0.5649 },
  { min: 10000, price: 0.3557 },
  { min: 50000, price: 0.2616 },
  { min: 100000, price: 0.1779 },
  { min: 250000, price: 0.1569 },
  { min: 500000, price: 0.1465 },
  { min: 1000000, price: 0.1360 },
  { min: 1500000, price: 0.1151 },
  { min: 3000000, price: 0.0732 },
]

lucro.forEach(mediaVenda => {
  console.log(`Tabela com a conslta a R$${mediaVenda}`);
  precosRanges.forEach(({ min, price }) => {
    const eNegativo = price > mediaVenda;
    const resultado = eNegativo ? min * (Number(price - mediaVenda)) : min * (Number(mediaVenda - price));

    console.log(`Comprando ${min} consultas. ${eNegativo ? 'Preju:': 'Lucro:'}R$${resultado.toFixed(2)}`);
  })
  console.log('\r')
});

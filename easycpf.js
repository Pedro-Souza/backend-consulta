const lucro = [0.01, 0.0115, 0.012, 0.0125, 0.013, 0.014, 0.0145, 0.015, 0.0175, 0.02, 0.025]

const precosRanges = [
  { min: 1000, price: 0.0374 },
  { min: 500000, price: 0.03574 },
  { min: 3000001, price: 0.03355 }
]

lucro.forEach(mediaVenda => {
  console.log(`Tabela com a conslta a R$${mediaVenda}`);
  const a = 50000 * mediaVenda;
  const b = 100000 * mediaVenda;
  const c = 150000 * mediaVenda;
  const d = 250000 * mediaVenda;
  const e = 450000 * mediaVenda;
  console.log(a)
  console.log(b)
  console.log(c)
  console.log(d)
  console.log(e)
  console.log('\r')
});

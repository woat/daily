const race = '100m Dash'
const winners = ['Hunter Gath', 'Singa Song', 'Imda Bos']

const winnersObj = winners.map((winner, i) => ({
  name: winner,
  place: i + 1,
  race
}))

console.log(winnersObj)

const ages = [23,62,45,234,2,62,234,62,34]

const agesFilt = ages.filter(age => age >= 60)

console.log(agesFilt)


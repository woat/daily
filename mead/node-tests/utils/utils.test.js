const expect = require('expect')
const utils = require('./utils')

it('should add two numbers', () => {
  var res = utils.add(33, 11) 

  expect(res).toBe(44)
})

it('should add two numbers asynchronusly', (done) => {
  utils.asyncAdd(4, 3, (sum) => {
    expect(sum).toBe(7)
    done()
  })
})

it('should square two numbers', () => {
  const res = utils.square(2)

  expect(res).toBe(4)
})

it('should set names', () => {
  const object = {
    test: '1',
    owo: 'gang'
  }
  const fullname = 'Andru Mead'
  const res = utils.setName(object, fullname)

  expect(res.firstName).toBe('Andru')
  expect(res.lastName).toBe('Mead')
})

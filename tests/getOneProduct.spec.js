const getOneProduct = require('../apiServices/getOneProduct/getOneProduct')
const prisma = require('../prisma')


it('test_product_found', async () => {
  const req = { params: { productID: 1 } }
  const res = { status: jest.fn().mockReturnThis(), json: jest.fn() }
  const product = { id: 1, name: 'Test Product' }
  prisma.products.findUnique = jest.fn().mockResolvedValue(product)
  await getOneProduct(req, res)

  expect(prisma.products.findUnique).toHaveBeenCalledWith({ where: { id: req.params.productID } })
  expect(res.status).toHaveBeenCalledWith(200)
  expect(res.json).toHaveBeenCalledWith(product)
})

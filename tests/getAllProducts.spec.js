const getAllProducts = require('../apiServices/getAllProducts/getAllProducts')
const prisma = require('../prisma')

describe('getAllProducts', () => {
  let mockRequest
  let mockResponse

  beforeEach(() => {
    mockRequest = {}
    mockResponse = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    }
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should retrieve all products and return them as a JSON response', async () => {
    const mockProducts = [{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }]

    prisma.products.findMany = jest.fn().mockResolvedValue(mockProducts)

    await getAllProducts(mockRequest, mockResponse)

    expect(prisma.products.findMany).toHaveBeenCalled()

    expect(mockResponse.json).toHaveBeenCalledWith({
      products: mockProducts,
      message: 'These are the products',
    })

    expect(mockResponse.status).not.toHaveBeenCalled()
  })

  it('should handle an error and return a 500 status with an error message', async () => {
    prisma.products.findMany = jest.fn().mockRejectedValue(new Error('Database error'))

    await getAllProducts(mockRequest, mockResponse)

    expect(prisma.products.findMany).toHaveBeenCalled()

    expect(mockResponse.status).toHaveBeenCalledWith(500)
    expect(mockResponse.json).toHaveBeenCalledWith({ error: 'Failed to retrieve products. Please try again later.' })
  })
})

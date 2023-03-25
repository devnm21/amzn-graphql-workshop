const products = [
    {
        id: 1,
        name: 'Product 1',
        isInStock: true,
    },
    {
        id: 2,
        name: 'Product 2',
        isInStock: true,
    },
    {
        id: 3,
        name: 'Product 3',
        isInStock: false,
    }
]

const resolvers = {
    Query: {
        products: () => products,
    },
    Mutation: {
        addProduct: (_, data) => {
            products.push(data)
            return true
        },
    }
}

module.exports = resolvers
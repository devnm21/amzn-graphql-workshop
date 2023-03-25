const typedefs = `
 # Type for a Product
  type Product {
    id: Int
    name: String
    isInStock: Boolean
  }    

  type Query {
    products: [Product]
  }

  type Mutation {
    addProduct(id: Int! name: String! isInStock: Boolean!): Boolean
  }

`

module.exports = typedefs
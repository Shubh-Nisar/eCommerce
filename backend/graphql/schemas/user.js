<<<<<<< HEAD
export const UserSchema = `
    type User {
        _id: ID!
        name: String!
        phoneNo: String!
        email: String!
        password: String
        isAdmin: Boolean!
        token: String
    }

    input UserInput {
        name: String!
        phoneNo: String!
        email: String!
        password: String!
        isAdmin: Boolean
    }
    
    input UpdateUserInput {
        name: String
        phoneNo: String!
        email: String
        password: String
        isAdmin: Boolean
    }
`;
=======
export const UserSchema = `
    type User {
        _id: ID!
        name: String!
        phoneNo: String!
        email: String!
        password: String
        isAdmin: Boolean!
        userAddress: [userAddress]
        token: String
    }

    type userAddress {
        _id: ID!
        address: String
        city: String
        postalCode: String
        country: String
    }

    input UserInput {
        name: String!
        phoneNo: String!
        email: String!
        password: String!
        isAdmin: Boolean
        userAddress: userAddressInput
    }

    input userAddressInput {
        address: String!
        city: String!
        postalCode: String!
        country: String!
    }
    
    input UpdateUserInput {
        name: String
        phoneNo: String!
        email: String
        password: String
        isAdmin: Boolean
        userAddress: userAddressInput
    }
`;
>>>>>>> backend

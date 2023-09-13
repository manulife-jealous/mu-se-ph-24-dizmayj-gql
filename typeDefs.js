//JD: THIS IS the SCHEMA

const { gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        message: String,
        employees: [Employee],
        employeeDetail (id: ID): Employee,
        employeesByDepartment (department: String): [Employee],
        departments: [Department]
    }

    type Employee {
        id: ID,
        name: String,
        dob: String,
        department: String,
        title: String,
        avatarUrl: String
    }

    type Department {
        id: ID,
        name: String,
        employees: [Employee]
    }
`;

module.exports = typeDefs;
// import fetch from 'node-fetch';

const fetch = require('node-fetch');

const URL = `http://localhost:3001`;

const Query = {
    message: () => {
        return 'Hello World';
    },
    /* GET ALL HERE */
    employees: async () => {
        const res = await fetch(`${URL}/employees`);
        const data = await res.json();
        return data;
    }, 

    departments: async () => {
        const res = await fetch(`${URL}/employees/departments`);
        const data = await res.json();
        return data;
    },
    /* END of GET */

    /* START of GET by ID */
    employeeDetail: async (parent, args, context, info) => {
        const { id } = args;
        const res = await fetch(`${URL}/employees/id/${id}`);
        const data = await res.json();
        return data;
    },
    employeesByDepartment: async (parent, args, context, info) => {
        const { department } = args;
        const res = await fetch(`${URL}/employees/department/${department}`);
        const data = await res.json();
        return data;
    },
    /* END of GET by ID */
}

const Department = {
    //all user posts
    employees: async (parent, args, context, info) => { 
        const { name } =  parent;
        const res = await fetch(`${URL}/employees/department/${name}`);
        const employees_department = await res.json();
        return await Promise.all(employees_department);
    }
}

module.exports = { Query, Department };
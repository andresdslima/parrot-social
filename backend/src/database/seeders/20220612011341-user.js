'use strict';


module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('User', [{
      name: 'Carlos Alberto13',
      username: 'carlinhos1103',
      avatar: '2',
      email: 'carlos31@gmail.com',
      apartment: 100,
      password: 'carlinhos123',
      admin: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Carlos123 Alberto',
      username: 'carlinhos13210',
      avatar: '2',
      email: 'carlos213@gmail.com',
      apartment: 100,
      password: 'carlinhos123',
      admin: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
      
      {
        name: 'Gabriel Silva',
      email: 'gbs@gmail.com',
      apartment: 504,
      password: 'aaa12ssd3',
      admin: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {

      name: 'Daniela Lopes',
      email: 'danil@gmail.com',
      apartment: 205,
      password: 'bababababa',
      admin: true,
      createdAt: new Date(),
      updatedAt: new Date() 
    },

     {

      name: 'Jussara Maria',
      email: 'jumaria@gmail.com',
      apartment: 404,
      password: 'abc404',
      admin: true,
      createdAt: new Date(),
      updatedAt: new Date()
     },

     {

      name: 'Joãozinho Soares',
      email: 'jsoares@gmail.com',
      apartment: 110,
      password: 'haha101010',
      admin: true,
      createdAt: new Date(),
      updatedAt: new Date() 

     },

     {
       name: 'Marcelo Pires',
      email: 'pires@gmail.com',
      apartment: 330,
      password: '@3457u',
      admin: true,
      createdAt: new Date(),
      updatedAt: new Date()
     },

     {
       name: 'Carla Tobias',
      email: 'ctobias@gmail.com',
      apartment: 630,
      password: 'A3R5uj',
      admin: true,
      createdAt: new Date(),
      updatedAt: new Date() 
    },

      

    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

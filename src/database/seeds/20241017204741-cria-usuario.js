const bcryptjs = require('bcryptjs');

@type { import('sequelize-cli').Migration }
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert(
      'users',
      [
        {
          nome: 'Luiz',
          email: "luiz@luiz.com",
          password_hash: await bcryptjs.hash("123456", 8),
          created_at: new Date(),
          updaded_at: new Date(),
        },
        {
          nome: 'Luiz 2',
          email:"luiz2@luiz.com",
          password_hash: await bcryptjs.hash("123456", 8), 
          created_at: new Date(),
          updaded_at: new Date(),
        },
        {
          nome: 'Luiz 3',
          email:"luiz3@luiz.com",
          password_hash: await bcryptjs.hash("123456", 8), 
          created_at: new Date(),
          updaded_at: new Date(),
        }
      ],
      {}
    );

  },

  async down() { }
};

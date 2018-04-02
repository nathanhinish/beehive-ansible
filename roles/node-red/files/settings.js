const settings = require(`${process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME']}/.node-red/settings.js`)

settings.disableEditor = true

// settings.adminAuth = {
//   type: 'credentials',
//   users: [{
//       username: 'admin',
//       password: '$2a$08$NCCCL0iuGrg36B8u4cwgPevSbFnihVjuHM8OW5.aD9wz87cPJ4I7O',
//       permissions: '*'
//   }]
// }

module.exports = settings
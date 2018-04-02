const settings = require(`${process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME']}/.node-red/settings.js`)

settings.disableEditor = true

settings.adminAuth = {
  type: 'credentials',
  users: [{
      username: 'admin',
      password: '$2a$08$NCCCL0iuGrg36B8u4cwgPevSbFnihVjuHM8OW5.aD9wz87cPJ4I7O',
      permissions: '*'
  }]
}

if (!settings.editorTheme) {
  settings.editorTheme = {}
}
if (!settings.editorTheme.projects) {
  settings.editorTheme.projects = {}
}
settings.editorTheme.projects.enabled = true

module.exports = settings
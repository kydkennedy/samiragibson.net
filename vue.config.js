const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

// set up multiple pages in vue 
module.exports ={
  pages: {
    index: {
      entry: 'src/index.js',
      template: 'public/index.html',
      title: 'Home',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    about: {
      entry: 'src/about.js',
      template: 'public/about.html',
      title: 'About',
      chunks: ['chunk-vendors', 'chunk-common', 'about']
  },

    projects: {
      entry: 'src/projects.js',
      template: 'public/projects.html',
      title: 'Projects',
      chunks: ['chunk-vendors', 'chunk-common', 'projects']
  },

    contact: {
      entry: 'src/contact.js',
      template: 'public/contact.html',
      title: 'Contact',
      chunks: ['chunk-vendors', 'chunk-common', 'contact']
    }
}
}
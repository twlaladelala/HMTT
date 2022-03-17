const { truthProp } = require("vant/lib/utils");

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  Plugins: [
    ['import' , {
      libraryName:'vant',
      libraryDirectory : 'es',
      style :true
    },'vant']
  ]
}

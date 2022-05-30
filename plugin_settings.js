const plugin_settings = {
  height: '100%',
  container: '#gjs',
  showOffsets: true,
  fromElement: true,
  noticeOnUnload: false,
  storageManager: false,
  plugins: ['grapesjs-open-graph-embed-card'],
  pluginsOpts: {
    'grapesjs-open-graph-embed-card': {
      /* Test your options here */
    }
  }
}

if(window){
  window.onload = () => {
    window.editor = window.grapesjs.init(plugin_settings);
  }
}

module.exports = plugin_settings;
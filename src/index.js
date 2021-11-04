import loadComponents from './grapesjs-open-graph-embed-card/components';
import loadBlocks from './grapesjs-open-graph-embed-card/blocks';
import en from './locale/en';

export default (editor, opts = {}) => {
  const options = { ...{
    i18n: {},
    // default options
  },  ...opts };

  // Add components
  loadComponents(editor, options);
  // Add blocks
  loadBlocks(editor, options);
  // Load i18n files
  editor.I18n && editor.I18n.addMessages({
      en,
      ...options.i18n,
  });
};
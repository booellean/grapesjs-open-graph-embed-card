/**
 * Icon provided by Icons8
 * https://icons8.com/icons/set/code
 * https://img.icons8.com/ios-filled/24/000000/source-code.png
 * iOS Filled Code Icon
 * Obtained October 24, 2021
 */

export default (editor, opts = {}) => {
  const bm = editor.BlockManager;

  bm.add('open-graph-card', {
    label: 'OG Embed',
    content: { type: 'open-graph-card' },
    media: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M 29.125 7.34375 L 17.125 41.34375 L 20.875 42.65625 L 32.875 8.65625 Z M 9.9375 13.375 L 1.25 23.71875 L 0.1875 25 L 1.25 26.28125 L 9.9375 36.65625 L 13.03125 34.09375 L 5.40625 25 L 13 15.9375 Z M 40.0625 13.375 L 37 15.9375 L 44.59375 25 L 37 34.0625 L 40.09375 36.625 L 48.71875 26.28125 L 49.78125 25 L 48.71875 23.71875 Z"></path></svg>',
    category: opts.category || 'Basic'
  });
}

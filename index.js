const katex = require('katex')

module.exports = {
  book: {
    assets: './static',
    js: [],
    css: [
      'katex.min.css',
    ],
  },
  ebook: {
    assets: './static',
    css: [
      'katex.min.css',
    ],
  },
  blocks: {
    math: {
      shortcuts: {
        parsers: ['markdown', 'asciidoc', 'restructuredtext'],
        start: '$$',
        end: '$$',
      },
      process: function(blk) {
        const tex = blk.body
        const isInline = !(tex[0] === '\n')
        return katex.renderToString(tex, {
          displayMode: !isInline,
        })
      },
    },
    inlineMath: {
      shortcuts: {
        parsers: ['markdown', 'asciidoc', 'restructuredtext'],
        start: '$|',
        end: '|$',
      },
      process: function(blk) {
        const tex = blk.body
        const isInline = true
        return katex.renderToString(tex, {
          displayMode: !isInline,
        })
      },
    },
  },
}

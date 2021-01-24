const { process } = require('./index').blocks.math
const { process: inlineProcess } = require('./index').blocks.inlineMath

describe('katex', () => {
  it('processes $$\\psi = \\frac{1−\\sqrt 5}{2}$$', () => {
    expect(() => process({
      body: '\\psi = \\frac{1-\\sqrt 5}{2}',
    })).not.toThrow()
  })

  it('processes inlinely', () => {
    expect(() => inlineProcess({
      body: 'n \\gt 2',
    })).not.toThrow()
  })
})

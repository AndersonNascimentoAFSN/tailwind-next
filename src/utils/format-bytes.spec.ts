import { FormatBytes } from './format-bytes'

describe('FormatBytes', () => {
  it('execute', () => {
    const bits = 1024
    const bitsInB = FormatBytes.execute(bits)

    expect(bitsInB).toBe('1024.0 B')
  })
})

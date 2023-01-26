import { classNames } from './'
import { describe, expect, it } from 'vitest'

describe.concurrent('Test classNames function', () => {
  it('Send concat strings', () => {
    expect(classNames('class-1 class-2', 'class-3')).toBe('class-1 class-2 class-3')
  })
  it('Send concat strings without end white spaces', () => {
    expect(classNames('class-1 class-2', '  ')).toBe('class-1 class-2')
  })
  it('Send concat strings without start white spaces', () => {
    expect(classNames('    class-1 class-2 class-3')).toBe('class-1 class-2 class-3')
  })
  it('Send blank string', () => {
    expect(classNames('  ')).toBe('')
  })
})

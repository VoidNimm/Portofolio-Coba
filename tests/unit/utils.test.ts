import { expect, test } from 'vitest'
import { cn } from '@/lib/utils'

test('cn merges classes correctly', () => {
  expect(cn('bg-red-500', 'text-white')).toBe('bg-red-500 text-white')
})

test('cn overrides conflicting classes', () => {
  expect(cn('bg-red-500', 'bg-blue-500')).toBe('bg-blue-500')
})

test('cn handles conditional classes', () => {
  const hasError = true
  const isDisabled = false
  expect(cn('base', hasError && 'error', isDisabled && 'disabled')).toBe('base error')
})

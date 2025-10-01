import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})

export default [
  {
    ignores: ['node_modules/**', '.next/**'],
  },
  ...compat.extends('next/core-web-vitals'),
]
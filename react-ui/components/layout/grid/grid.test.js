/* eslint-disable no-undef */

import React from 'react'
import Grid from './index'
import { render, screen } from '@testing-library/react'

describe('Grid component', () => {
   it('was mounted', () => {
      render(<Grid><h1>hello Test</h1></Grid>)
      expect(screen.getByText('hello Test')).toBeInTheDocument()
      screen.debug()
   })
})
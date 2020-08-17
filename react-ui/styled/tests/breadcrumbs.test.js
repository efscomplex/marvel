/* eslint-disable no-undef */
import { screen, render } from '@testing-library/react'
import Breadcrumbs from '../Breadcrumbs'

describe('Breadcrumbs Styled Component', ()=>{
   it('was mounted', ()=>{
      render(<Breadcrumbs.Link> link me!! </Breadcrumbs.Link>)
      screen.debug()
   })
})
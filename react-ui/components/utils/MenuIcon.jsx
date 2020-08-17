import React from 'react'
import styled from 'styled-components'
import getIcon from 'react-ui/resources/react-icons'
import Icon from 'react-ui/components/base/icon'

const Menu = getIcon('Menu')

export default styled(props => <Icon svg={Menu} {...props}/>)``
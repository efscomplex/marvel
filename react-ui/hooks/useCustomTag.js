import React from 'src/react-ui/hooks/react'

export default function useCustomTag(tag, opts) {

	return React.createElement(tag, opts?.props, opts?.children)
}
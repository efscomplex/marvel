import useCustomTag from 'src/react-ui/hooks/useCustomTag'
import merge from 'src/react-ui/resources/merge'
import styles from './styles.module.css'

export default function Segment({as="div", children, ...props}) {

   props = merge(props, {className:styles.segment})

   return useCustomTag(as, {children, props}) 
}

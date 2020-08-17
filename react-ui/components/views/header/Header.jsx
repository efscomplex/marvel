import React from 'react'
import FlexBox from 'react-ui/components/layout/flexbox'
import merge from 'react-ui/resources/merge'
import useSlots from 'react-ui/hooks/useSlots'
import Banner from 'ui/components/base/banner'

export default function Header(
   {banner, height, absolute, children, ...rest}
){
   const flexProps = getFlexProps({height})
   const {
      Slot,
      slots,
      childs
   } = useSlots(children)
   const props = merge(rest, flexProps)

   return (
      <FlexBox {...props}>
         { childs }
         {  (banner || slots.includes('banner')) &&
            <Banner src={banner} absolute={absolute}>
               <Slot name="banner" style={{height: "100%"}}/>
            </Banner>
         }
      </FlexBox>
   )
}
const getFlexProps = ({height}) => (
   {
      as:"header",
      justify:"space-between",
      gap:"1rem",
      align:"center",
      style: {
         position: "relative", 
         height
      } 
   }
)   

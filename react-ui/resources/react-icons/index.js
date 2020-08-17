//** NOTE - Game Icons */
import { GiPeaks } from 'react-icons/gi'
import { GiSmartphone } from 'react-icons/gi'
import { GiWorld } from 'react-icons/gi'
import { GiDeskLamp } from 'react-icons/gi'

//** NOTE - Github Icons */
import { GoLocation } from 'react-icons/go'
import { GoCalendar } from 'react-icons/go'

//** NOTE - Feather Icons */
import { FiMap } from 'react-icons/fi'

//** NOTE - Grammet - Icons */

//** NOTE - Remix Icons */
import { RiLoginBoxLine } from 'react-icons/ri'
import { RiShoppingCart2Line } from 'react-icons/ri'

//** NOTE - Font Awesome Icons */
import { FaUserTie } from 'react-icons/fa'
import { FaSearch } from 'react-icons/fa'
import { FaUserLock } from 'react-icons/fa'
import { FaUserAlt } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { FaFacebookMessenger } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaMapSigns } from 'react-icons/fa'
import { FaMapMarkedAlt } from 'react-icons/fa'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { FaMap } from 'react-icons/fa'

//** NOTE - Ion Icons */
import { IoIosHome } from 'react-icons/io'
import { IoLogoRss } from 'react-icons/io'
import { IoIosLogIn } from 'react-icons/io'
import { IoIosSearch } from 'react-icons/io'
import { IoIosMenu } from 'react-icons/io'
import { IoLogoSlack } from 'react-icons/io'
import { IoLogoTwitter } from 'react-icons/io'
import { IoLogoFacebook } from 'react-icons/io'
import { IoIosMail } from 'react-icons/io'

//** NOTE - Ant Dessign Icons */
import { AiOutlineAreaChart } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiTwotonePhone } from 'react-icons/ai'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { AiOutlineBulb } from 'react-icons/ai'

//** NOTE - Bootstrap Icons */
import { BsFillInfoCircleFill } from 'react-icons/bs'
import { BsFillPersonFill } from 'react-icons/bs'
import { BsHouseDoorFill } from 'react-icons/bs'
import { BsBootstrapFill } from 'react-icons/bs'
import { BsCalendarFill } from 'react-icons/bs'
import { BsStopwatch } from 'react-icons/bs'

//**  NOTE - icons */
const icons = {
   fi: {
      Map: FiMap,
   },
   ri: {
      LoginBoxLine: RiLoginBoxLine,
      Shoppingcartline: RiShoppingCart2Line,
   },
   fa: {
      UserTie: FaUserTie,
      Search: FaSearch,
      UserLock: FaUserLock,
      UserAlt: FaUserAlt,
      FacebookCircle: FaFacebook,
      FacebokF: FaFacebookF,
      FacebookMessenger: FaFacebookMessenger,
      Linkedin: FaLinkedinIn,
      MapSigns: FaMapSigns,
      MapMarked: FaMapMarkedAlt,
      MapMarker: FaMapMarkerAlt,
      MapFill: FaMap,
   },
   go: {
      Location: GoLocation,
      Calendar: GoCalendar,
   },
   ion: {
      Home: IoIosHome,
      Rss: IoLogoRss,
      Login: IoIosLogIn,
      Lupe: IoIosSearch,
      Menu: IoIosMenu,
      Slack: IoLogoSlack,
      Twitter: IoLogoTwitter,
      Facebook: IoLogoFacebook,
      Mail: IoIosMail,
   },
   bs: {
      Home: BsHouseDoorFill,
      Info: BsFillInfoCircleFill,
      User: BsFillPersonFill,
      Bootstrap: BsBootstrapFill,
      Calendarfill: BsCalendarFill,
      Crono: BsStopwatch,
   },
   ai: {
      Chart: AiOutlineAreaChart,
      Github: AiFillGithub,
      TwitterCircle: AiFillTwitterCircle,
      InstagramFill: AiFillInstagram,
      LinkedinFill: AiFillLinkedin,
      Instagram: AiOutlineInstagram,
      FacebookFill: AiFillFacebook,
      Phone: AiTwotonePhone,
      Shoppingcart: AiOutlineShoppingCart,
      Bulb: AiOutlineBulb
   },
   gi: {
      Peaks: GiPeaks,
      Smartphone: GiSmartphone,
      World: GiWorld,
      Lamp: GiDeskLamp,
   },
   gr: {
      //LinkedinNarrow: GrLinkedinOption
   },
}
const capitalize = (str) => str[0].toUpperCase() + str.slice(1)

export default function getIcons(name, brand) {
   if (!name) return icons

   if (brand && typeof name === 'string') {
      return icons[brand] && icons[brand][name]
   }

   let names = Array.isArray(name) ? name : [name]
   names = names.map( icon => capitalize(icon))
   const Icon = getIconsFromNames(names, icons)
   
   return typeof name === 'string' ? Icon[capitalize(name)] : Icon
}

function getIconsFromNames(names, icons) {
   let iconNames = Object.entries(icons)
   let aux = iconNames.flat().filter((item) => typeof item !== 'string')
   let matches = {}

   names.forEach((name) => {
      let icon = aux.find((brand) => brand[name])
      if (icon) {
         matches[name] = icon[name]
      } else {
         matches[name] = () => name
      }
   })
   return matches
}
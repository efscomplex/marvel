import moment from 'src/react-ui/resources/moment'


export function formatDate(data, locale= "es"){
      moment.locale(locale)
      return moment(data).format("ll")
}
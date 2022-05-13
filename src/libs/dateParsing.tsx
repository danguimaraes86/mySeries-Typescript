import { DateTime } from 'luxon'

export function getYear(date: string) {
  if(!date){
    return ''
  } else {
    return `(${DateTime.fromISO(date).year})`
  }
}

export function dateLocale(date: string){
  if(!date){
    return ''
  } else {
    return DateTime.fromISO(date).toLocaleString(DateTime.DATE_MED)
  }
}
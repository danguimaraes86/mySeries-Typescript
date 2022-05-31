import { DateTime } from 'luxon'

export function getYear(date: string) {
  return date ? `(${DateTime.fromISO(date).year})` : ''
}

export function dateLocale(date: string){
  return date ? DateTime.fromISO(date).toLocaleString(DateTime.DATE_MED) : ''
}
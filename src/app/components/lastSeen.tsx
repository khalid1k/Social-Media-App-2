import React from 'react'
import ReactTimeAgo from 'react-time-ago'
import TimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en'

interface DateType{
    date:Date
}
export default function LastSeen({ date }:DateType) {
    TimeAgo.addDefaultLocale(en)
    TimeAgo.addLocale(en)
  return (
    <div>
      Last seen: <ReactTimeAgo date={date} locale="en-US"/>
    </div>
  )
}
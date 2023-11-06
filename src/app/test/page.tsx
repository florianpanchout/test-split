import React from 'react'

type Props = {}

export default function page({}: Props) {
  return (
    <div>Main : {process.env.NEXT_PUBLIC_IS_TARGET_SPLIT_TESTING ? 'true' : 'false'} </div>
  )
}
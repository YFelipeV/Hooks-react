import React, { memo } from 'react'

const Small = memo(({value})=> {
  console.log("me volvi a llamar :(")
  return (
    <div>
        <small>{value}</small>
    </div>
  )
  
})

export default Small
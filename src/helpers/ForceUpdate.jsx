import { useState } from 'react'

export function useForceUpdate (){
    // eslint-disable-next-line no-unused-vars
    const [value, setValue] = useState(0) // integer state
    return () => setValue(val => val + 1) // update the state to force render
}

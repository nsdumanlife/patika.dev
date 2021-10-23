import { useState, useEffect } from 'react'

function Counter() {
    const [count, setCount] = useState(0)

    useEffect(() => { 
        console.log('Component is mounted.')

        const interval = setInterval(() => {
            setCount((n) => n + 1 )
        }, 1000)
        
        return () => {
            clearInterval(interval)
            console.log('Component is unmounted')}
    } , [] )

    useEffect(() => {
        console.log('count state is updated.')
    }, [ count ])

    const increase = () => {
        setCount( count + 1 )
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={ () => setCount(count - 1) } >Decrease</button>
            <button onClick={increase}>Increase</button>
        </div>
    )
}

export default Counter

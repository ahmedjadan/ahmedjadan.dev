import { useEffect, useState } from 'react'

export default function CopyToCLipBoard() {
    // const copyToClipboard = (str) => {
    //     const { clipboard } = window.navigator;
    // }
    const [copy, setCopy] = useState(false)
    const copyToClipboard = async (text) => {
        await navigator.clipboard.writeText(text)
        await setCopy(true)
    }
    return (
        <div>
            <button onClick={() => copyToClipboard('hello and welcome Ahmed Jadan')} > {copy ? 'copied' : 'copy'} </button>
        </div>
    )
}

import { useEffect, useState } from 'react'
import Select from 'react-select'

export function Timezone() {
    const [timezone, settimezone] = useState([])
    useEffect(() => {
        // fetch('../data/timezone.json')
        //     .then(res => res.json())
        //     .then(res => console.log(res))
        //     .catch(err => console.log(err))
    }, [timezone])

    if (timezone.length === 0) {
        return <div>Loading...</div>
    }

    return (
        <Select
            options={timezone}
            isMulti
            name="colors"
            className="basic-multi-select"
            classNamePrefix="select"
        />
    )
}

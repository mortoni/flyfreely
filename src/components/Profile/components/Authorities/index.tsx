import { Typography } from '@material-ui/core'
import Chip from '@material-ui/core/Chip'
import * as React from 'react'

const Authorities: React.SFC = ({}) => {
    const [chipData, setChipData] = React.useState([
        { key: 0, label: 'Australia' },
        { key: 1, label: 'South Africa' },
        { key: 2, label: 'Denmark' },
        { key: 3, label: 'Dominican Republic' },
        { key: 4, label: 'New Zealand' },
        { key: 5, label: 'UK' },
        { key: 6, label: 'India' },
        { key: 7, label: 'UAE' },
    ])

    const handleDelete = (chipToDelete: any) => () => {
        setChipData((chips) =>
            chips.filter((chip) => chip.key !== chipToDelete.key),
        )
    }

    return (
        <>
            <Typography variant='h5'>Jurisdiction</Typography>
            {chipData.map((data) => (
                <Chip
                    key={data.key}
                    label={data.label}
                    onDelete={handleDelete(data)}
                />
            ))}
        </>
    )
}

export default Authorities

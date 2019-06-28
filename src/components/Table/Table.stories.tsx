import { storiesOf } from '@storybook/react'
import * as React from 'react'
import Table from './Table'

const columns = [
    { title: 'Name', field: 'name' },
    { title: 'Surname', field: 'surname' },
    { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
    {
        field: 'birthCity',
        lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
        title: 'Birth Place',
    },
]
const data = [
    {
        birthCity: 63,
        birthYear: 1987,
        name: 'Mehmet',
        surname: 'Baran',
    },
    {
        birthCity: 34,
        birthYear: 2017,
        name: 'Zerya Betül',
        surname: 'Baran',
    },
]

storiesOf('Components/Table', module).add('normal', () => {
    const options = {
        headerStyle: { backgroundColor: '#fafafa' },
        paging: false,
    }
    return <Table columns={columns} data={data} options={options} />
})
storiesOf('Components/Table', module).add('with filtering', () => {
    const options = {
        filtering: true,
        headerStyle: { backgroundColor: '#fafafa' },
        paging: false,
    }
    return <Table columns={columns} data={data} options={options} />
})
storiesOf('Components/Table', module).add('with pagination', () => {
    const options = {
        filtering: false,
        headerStyle: { backgroundColor: '#fafafa' },
        paging: true,
    }
    return <Table columns={columns} data={data} options={options} />
})

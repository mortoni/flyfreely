import Paper from '@material-ui/core/Paper'
import AddBox from '@material-ui/icons/AddBox'
import ArrowUpward from '@material-ui/icons/ArrowUpward'
import Check from '@material-ui/icons/Check'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import Clear from '@material-ui/icons/Clear'
import DeleteOutline from '@material-ui/icons/DeleteOutline'
import Edit from '@material-ui/icons/Edit'
import FilterList from '@material-ui/icons/FilterList'
import FirstPage from '@material-ui/icons/FirstPage'
import LastPage from '@material-ui/icons/LastPage'
import Remove from '@material-ui/icons/Remove'
import SaveAlt from '@material-ui/icons/SaveAlt'
import Search from '@material-ui/icons/Search'
import ViewColumn from '@material-ui/icons/ViewColumn'
import MaterialTable from 'material-table'
import * as React from 'react'
import styled from 'styled-components'

const tableIcons = {
    Add: React.forwardRef((props: any, ref: any) => (
        <AddBox {...props} ref={ref} />
    )),
    Check: React.forwardRef((props: any, ref: any) => (
        <Check {...props} ref={ref} />
    )),
    Clear: React.forwardRef((props: any, ref: any) => (
        <Clear {...props} ref={ref} />
    )),
    Delete: React.forwardRef((props: any, ref: any) => (
        <DeleteOutline {...props} ref={ref} />
    )),
    DetailPanel: React.forwardRef((props: any, ref: any) => (
        <ChevronRight {...props} ref={ref} />
    )),
    Edit: React.forwardRef((props: any, ref: any) => (
        <Edit {...props} ref={ref} />
    )),
    Export: React.forwardRef((props: any, ref: any) => (
        <SaveAlt {...props} ref={ref} />
    )),
    Filter: React.forwardRef((props: any, ref: any) => (
        <FilterList {...props} ref={ref} />
    )),
    FirstPage: React.forwardRef((props: any, ref: any) => (
        <FirstPage {...props} ref={ref} />
    )),
    LastPage: React.forwardRef((props: any, ref: any) => (
        <LastPage {...props} ref={ref} />
    )),
    NextPage: React.forwardRef((props: any, ref: any) => (
        <ChevronRight {...props} ref={ref} />
    )),
    PreviousPage: React.forwardRef((props: any, ref: any) => (
        <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: React.forwardRef((props: any, ref: any) => (
        <Clear {...props} ref={ref} />
    )),
    Search: React.forwardRef((props: any, ref: any) => (
        <Search {...props} ref={ref} />
    )),
    SortArrow: React.forwardRef((props: any, ref: any) => (
        <ArrowUpward {...props} ref={ref} />
    )),
    ThirdStateCheck: React.forwardRef((props: any, ref: any) => (
        <Remove {...props} ref={ref} />
    )),
    ViewColumn: React.forwardRef((props: any, ref: any) => (
        <ViewColumn {...props} ref={ref} />
    )),
}

export interface TableProps {
    columns: any
    data: any
    actions?: any
    options?: any
    classes?: any
}

const FlyPaper = styled(Paper)`
    && {
        background-color: #fafafa;
    }
`

const Table: React.SFC<TableProps> = ({
    columns,
    data,
    options,
    actions,
    classes,
}) => {
    return (
        <MaterialTable
            options={options}
            columns={columns}
            actions={actions}
            components={{
                Container: (props) => <FlyPaper {...props} elevation={0} />,
            }}
            data={data}
            icons={tableIcons}
            title=''
        />
    )
}

export default Table

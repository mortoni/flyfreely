// import FormControl from '@material-ui/core/FormControl'
// import MenuItem from '@material-ui/core/MenuItem'
// import Select from '@material-ui/core/Select'
// import Typography from '@material-ui/core/Typography'
// import * as React from 'react'
// import styled, { withTheme } from 'styled-components'

// export interface HeaderWithSelectProps {
//     headerButtons?: any[]
//     classes: any
// }

// const styles = {
//     // button: {
//     //     color: '#fafafa !important',
//     // },
//     // container: {
//     //     display: 'flex',
//     //     flexDirection: 'row',
//     // },
//     // menuItem: {
//     //     '&$selected': {
//     //         backgroundColor: '#fafafa',
//     //     },
//     //     'color': '#fafafa',
//     // },
//     // selectInput: {
//     //     '&svg': {
//     //         borderColor: '#fafafa',
//     //         color: '#fafafa',
//     //         fill: '#fafafa',
//     //     },
//     // },
//     // select: {
//     //     flex: 0.3,
//     // },
//     selectField: {
//         backgroundColor: '#fafafa',
//     },
//     title: {
//         flex: 0.7,
//     },
// }

// const Container = styled.div`
//     display: flex;
//     flex-direction: row;
// `

// const SelectContainer = styled.div`
//     flex: 0.3;
// `

// const FlySelect = styled(Select)`
//     &svg: {
//         border-color: #fafafa;
//         color: #fafafa;
//         fill: #fafafa;
//     }
// `

// const HeaderWithSelect: React.SFC<HeaderWithSelectProps> = ({ classes }) => {
//     return (
//         <Container>
//             <div className={classes.title}>
//                 <Typography variant='h5' component='h6'>
//                     Test
//                 </Typography>
//             </div>
//             <SelectContainer>
//                 <FormControl className={classes.formControl} fullWidth={true}>
//                     {/* <InputLabel htmlFor="age-simple" classes={{ root: classes.inputLabel }}>Age</InputLabel> */}
//                     <FlySelect
//                         value={10}
//                         onChange={() => {}}
//                         classes={{
//                             root: classes.selectInput,
//                             select: { backgroundColor: '#fafafa' },
//                         }}
//                         inputProps={{
//                             id: 'age-simple',
//                             name: 'age',
//                         }}
//                     >
//                         <MenuItem value=''>
//                             <em>None</em>
//                         </MenuItem>
//                         <MenuItem value={10}>Ten</MenuItem>
//                         <MenuItem value={20}>Twenty</MenuItem>
//                         <MenuItem value={30}>Thirty</MenuItem>
//                     </FlySelect>
//                 </FormControl>
//             </SelectContainer>
//         </Container>
//     )
// }

// export default withStyles(styles)(HeaderWithSelect)
// TODO:

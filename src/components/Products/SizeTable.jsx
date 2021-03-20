import { IconButton, makeStyles, Table, TableBody, TableCell, TableRow,  TableContainer } from '@material-ui/core'
import React from 'react'
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"

const useStyles = makeStyles({
    iconCell: {
        height: 48,
        width: 48,
        padding: 0
    }
})

const SizeTable = (props) => {

    const classes = useStyles();
    const sizes = props.sizes;

    return (
        <TableContainer>
            <Table>
                <TableBody>
                    {sizes.length > 0 && (
                        sizes.map(size => (
                            <TableRow key={size.size}>
                                <TableCell component="th" scope="row">
                                    {size.size}
                                </TableCell>
                                <TableCell>
                                    残り{size.quantity}点
                                </TableCell>
                                <TableCell className={classes.iconCell}>
                                    {size.quantity > 0 ? (
                                        <IconButton>
                                            <ShoppingCartIcon></ShoppingCartIcon>
                                        </IconButton>
                                    ) : (
                                        <div>Sold Out</div>
                                    )}
                                </TableCell>
                                <TableCell className={classes.iconCell}>
                                    <IconButton>
                                        <FavoriteBorderIcon></FavoriteBorderIcon>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    )

}

export default SizeTable
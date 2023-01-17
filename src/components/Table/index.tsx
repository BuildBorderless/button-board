import { ChangeEvent, MouseEvent, useState } from "react"
import { alpha } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TablePagination from "@mui/material/TablePagination"
import TableRow from "@mui/material/TableRow"
import TableSortLabel from "@mui/material/TableSortLabel"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Paper from "@mui/material/Paper"
import Checkbox from "@mui/material/Checkbox"
import { visuallyHidden } from "@mui/utils"
import LaunchIcon from "@mui/icons-material/Launch"
import { Bond } from "../../types"
import {
    dateToString,
    formatNumber,
    getCdr,
    getTrancheRatios,
} from "../../helpers"
import { IconButton, Tooltip } from "@mui/material"
import { Link } from "react-router-dom"

interface Data {
    address: string
    detailsId: string
    isMatureString: string
    startDateString: string
    maturityDateString: string
    collateralName: string
    collateralSymbol: string
    totalCollateral: number
    totalDebt: number
    cdr: number
    trancheRatios: string
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1
    }
    if (b[orderBy] > a[orderBy]) {
        return 1
    }
    return 0
}

type Order = "asc" | "desc"

function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key
): (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string }
) => number {
    return order === "desc"
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy)
}

interface HeadCell {
    id: keyof Data
    label: string
    numeric: boolean
}

const headCells: readonly HeadCell[] = [
    {
        id: "collateralName",
        numeric: false,
        label: "Collateral",
    },
    {
        id: "detailsId",
        numeric: false,
        label: "",
    },
    {
        id: "startDateString",
        numeric: false,
        label: "Start",
    },
    {
        id: "maturityDateString",
        numeric: false,
        label: "Maturity",
    },
    {
        id: "totalCollateral",
        numeric: true,
        label: "Collateral",
    },
    {
        id: "totalDebt",
        numeric: true,
        label: "Debt",
    },
    {
        id: "cdr",
        numeric: true,
        label: "CDR",
    },
    {
        id: "trancheRatios",
        numeric: false,
        label: "Tranche Ratios",
    },
    {
        id: "isMatureString",
        numeric: false,
        label: "Is Mature",
    },
    {
        id: "address",
        numeric: false,
        label: "Address",
    },
]

interface EnhancedTableProps {
    numSelected: number
    onRequestSort: (event: MouseEvent<unknown>, property: keyof Data) => void
    onSelectAllClick: (event: ChangeEvent<HTMLInputElement>) => void
    order: Order
    orderBy: string
    rowCount: number
}

const EnhancedTableHead = (props: EnhancedTableProps) => {
    const {
        onSelectAllClick,
        order,
        orderBy,
        numSelected,
        rowCount,
        onRequestSort,
    } = props
    const createSortHandler =
        (property: keyof Data) => (event: MouseEvent<unknown>) => {
            onRequestSort(event, property)
        }

    return (
        <TableHead sx={{ whiteSpace: "nowrap" }}>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={
                            numSelected > 0 && numSelected < rowCount
                        }
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            "aria-label": "select all desserts",
                        }}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? "right" : "left"}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : "asc"}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === "desc"
                                        ? "sorted descending"
                                        : "sorted ascending"}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    )
}

interface EnhancedTableToolbarProps {
    numSelected: number
}

const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
    const { numSelected } = props

    return (
        <Toolbar
            sx={{
                flexDirection: "column",
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                ...(numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(
                            theme.palette.primary.main,
                            theme.palette.action.activatedOpacity
                        ),
                }),
            }}
        >
            <Typography variant="h6" id="tableTitle" component="div">
                Bonds
            </Typography>
            <Typography color="inherit" variant="subtitle1" component="div">
                {numSelected} selected
            </Typography>
        </Toolbar>
    )
}

export const BondsTable = ({
    bonds,
    selected,
    setSelected,
}: {
    bonds: Bond[]
    selected: readonly string[]
    setSelected: Function
}) => {
    const [order, setOrder] = useState<Order>("desc")
    const [orderBy, setOrderBy] = useState<keyof Data>("totalCollateral")
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(10)
    const rows = bonds.map((b) => ({
        address: b.id,
        detailsId: b.id,
        isMatureString: b.isMature ? "Yes" : "No",
        startDateString: dateToString(b.startDate),
        maturityDateString: dateToString(b.maturityDate),
        collateralName: b.collateral.name,
        collateralSymbol: b.collateral.symbol,
        totalCollateral: b.totalCollateral,
        totalDebt: b.totalDebt,
        cdr: getCdr(b),
        trancheRatios: b.tranches ? getTrancheRatios(b.tranches) : "-",
    }))

    const handleRequestSort = (
        event: MouseEvent<unknown>,
        property: keyof Data
    ) => {
        const isDesc = orderBy === property && order === "desc"
        setOrder(isDesc ? "asc" : "desc")
        setOrderBy(property)
    }

    const handleSelectAllClick = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.address)
            setSelected(newSelected)
            return
        }
        setSelected([])
    }

    const handleClick = (event: MouseEvent<unknown>, name: string) => {
        const selectedIndex = selected.indexOf(name)
        let newSelected: readonly string[] = []

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name)
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1))
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1))
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1)
            )
        }

        setSelected(newSelected)
    }

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage)
    }

    const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10))
        setPage(0)
    }

    const isSelected = (address: string) => selected.indexOf(address) !== -1

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0

    return (
        <Box sx={{ maxWidth: "98%", mt: 2 }}>
            <Paper sx={{ width: "100%" }}>
                <EnhancedTableToolbar numSelected={selected.length} />
                <TableContainer>
                    <Table
                        sx={{ minWidth: 750 }}
                        aria-labelledby="tableTitle"
                        size={"small"}
                    >
                        <EnhancedTableHead
                            numSelected={selected.length}
                            order={order}
                            orderBy={orderBy}
                            onSelectAllClick={handleSelectAllClick}
                            onRequestSort={handleRequestSort}
                            rowCount={rows.length}
                        />
                        <TableBody sx={{ whiteSpace: "nowrap" }}>
                            {rows
                                .sort(getComparator(order, orderBy))
                                .slice(
                                    page * rowsPerPage,
                                    page * rowsPerPage + rowsPerPage
                                )
                                .map((row, index) => {
                                    const isItemSelected = isSelected(
                                        row.address
                                    )
                                    const labelId = `enhanced-table-checkbox-${index}`

                                    return (
                                        <TableRow
                                            hover
                                            onClick={(event) =>
                                                handleClick(event, row.address)
                                            }
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.address}
                                            selected={isItemSelected}
                                        >
                                            <TableCell padding="checkbox">
                                                <Checkbox
                                                    color="primary"
                                                    checked={isItemSelected}
                                                    inputProps={{
                                                        "aria-labelledby":
                                                            labelId,
                                                    }}
                                                />
                                            </TableCell>
                                            <TableCell
                                                component="th"
                                                id={labelId}
                                                scope="row"
                                                padding="none"
                                            >
                                                {row.collateralName}
                                            </TableCell>
                                            <TableCell
                                                component="th"
                                                id={labelId}
                                                scope="row"
                                                padding="none"
                                            >
                                                <Tooltip title="Show Details">
                                                    <IconButton
                                                        component={Link}
                                                        to={`/bond/${row.detailsId}`}
                                                        target="_blank"
                                                    >
                                                        <LaunchIcon />
                                                    </IconButton>
                                                </Tooltip>
                                            </TableCell>
                                            <TableCell align="right">
                                                {row.startDateString}
                                            </TableCell>
                                            <TableCell align="right">
                                                {row.maturityDateString}
                                            </TableCell>
                                            <TableCell align="right">
                                                {formatNumber(
                                                    row.totalCollateral
                                                )}
                                            </TableCell>
                                            <TableCell align="right">
                                                {formatNumber(row.totalDebt)}
                                            </TableCell>
                                            <TableCell align="right">
                                                {Number(row.cdr * 100).toFixed(
                                                    2
                                                )}
                                                %
                                            </TableCell>
                                            <TableCell align="right">
                                                {row.trancheRatios}
                                            </TableCell>
                                            <TableCell align="right">
                                                {row.isMatureString}
                                            </TableCell>
                                            <TableCell align="right">
                                                <code>{row.address}</code>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}
                            {emptyRows > 0 && (
                                <TableRow
                                    style={{
                                        height: 33 * emptyRows,
                                    }}
                                >
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 50]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
        </Box>
    )
}

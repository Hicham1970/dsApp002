import { Box } from '@mui/material'
import {
  DataGrid,
  GridToolbar
} from '@mui/x-data-grid'
import { tokens } from '../../theme'
import { hydrostatic_table } from '../../data/hydrostatic_table'
import Header from "../../components/Header"
import { useTheme } from '@mui/material'
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import { useState } from 'react';
import { Button } from '@mui/material'
import PrintToPdf from '../../functions/PrintToPdf'


export default function Hydrostatic() {
  // eslint-disable-next-line no-unused-vars
  const [isLoader, setIsLoader] = useState(false)
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  const columns = [
    { field: "id", headerName: "ID", flex: 0.1, className: "id-column--cell" },
    { field: "DRAFT", type: "number", headerName: "DRAFT", flex: 0.2, cellClassName: "draft-column--cell" },
    { field: "DISPLACEMENT", type: "number", headerName: "DISPLACEMENT", flex: 0.3 },
    { field: "TPC", headerName: "TPC", type: "number", flex: 0.3, cellClassName: "name-column--cell" },
    { field: "MTC", headerName: "MTC", type: "number", flex: 0.3 },
    { field: "LCF", type: "number", headerName: "LCF", flex: 0.3 },
  ]
  return (
    <Box m="20px" id="printMe">
      <Box display={'flex'} justifyContent="space-between" alignItems="center">
        <Header title="HYDROSTATIC TABLE" subtitle="Hydrostatic Table Mv TBN" />
      </Box>
      <Box>
        <Button
          type="button"
          onClick={PrintToPdf()}
          disabled={isLoader}

          sx={{
            backgroundColor: colors.blueAccent[700],
            color: colors.grey[100],
            fontSize: "14px",
            fontWeight: "bold",
            padding: "10px 20px",
            borderRadius: "4px",

          }}
        >
          <DownloadOutlinedIcon sx={{ mr: "10px" }} />
          {isLoader ? "Generating Report..." : "Download Reports"}
        </Button>
      </Box>
      <Box
        m="40px 0 0 0"
        height="75vh"
        // styling using classNames
        sx={{
          "& .id-column--cell": {
            width: "10px",
          },
          "& .MuiDataGrid-root": {
            border: "thick",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none"
          },
          "& .draft-column--cell": {
            color: colors.greenAccent[500]
          },
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: colors.blueAccent[700],
            backgroundBottom: "none",
            headerAlign: "center", align: "center", width: "27px"
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400]
          },
          "& .MuiDataGrid-footerContainer": {
            border: "none",
            backgroundColor: colors.blueAccent[700]
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
          "& .MuiDataGrid-columnHeaderTitleContainer ": {
            color: `${colors.grey[100]} !important`,
            fontSize: '25px'
          },
          "& .MuiDataGrid-cell.MuiDataGrid-cell ": {
            color: `${colors.grey[100]} !important`,
            fontSize: '25px'
          }

        }}
      >
        <DataGrid
          rows={hydrostatic_table}
          columns={
            columns
          }
          components={
            {
              Toolbar: GridToolbar,
            }}

        />
      </Box>
    </Box>
  )



}

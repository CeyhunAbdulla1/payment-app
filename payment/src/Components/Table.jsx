

// ! ada
import axios from 'axios';
import { useState, useEffect } from 'react';
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

export default function IsCellEditableGrid() {
  
  const [data,setdata]=useState([])
  useEffect(()=>{
      axios.get("http://localhost:9000/get-data").then(res=>{
          setdata(res.data.data);
      })
  },[])
  
  return (
    <div style={{ height: 400, width: '1200px' }}>
      <DataGrid
        rows={data}
        columns={columns}
        getRowId={(row) => row.month} 
        // experimentalFeatures={{ newEditingApi: true }}
      />
    </div>
  );
}

const columns = [
  { field: 'ad', headerName: 'Ad', width: 150, editable: true },
  { field: 'surname', headerName: 'Soyad', width: 150, editable: true },
  {
    field: 'group',
    headerName: 'Təlim',
    width: 150,
    editable: true,
  },
  {
    field: 'telim',
    headerName: 'Qrup',
    width: 150,
    editable: true,
  },

  {
    field: 'amount',
    headerName: 'Ödənilən məbləğ',
    type: 'number',
    width: 140,
    editable: true,
  },
    {
    field: 'month',
    headerName: 'Ay(lar)',
    type: 'number',
    width: 100,
    editable: true,
  },
  {
    field: 'history',
    headerName: 'Qəbzin tarixi',
    type: 'number',
    width: 150,
    editable: true,
  },
];

// !ada
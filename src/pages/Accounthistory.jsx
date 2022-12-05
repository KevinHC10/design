import './accounthistory.css';
import React, {useEffect,useState,useRef} from "react";
import { DataGrid,koKR } from '@mui/x-data-grid';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {
  DataGridPro,
  GridColumns,
  GridRowsProp,
  GridActionsCellItem,
  GRID_CHECKBOX_SELECTION_COL_DEF,
} from '@mui/x-data-grid-pro';



const Accounthistory = () => {
  const [info, setInfo] = useState([]);
  const [pageSize, setPageSize] = React.useState(25);

  //고유 값으로 사용 될 ID
  //ref 를 사용하여 변수 달기
  const nextId = useRef(11);

//더미 데이터 호출
  useEffect(() => {
      axios.get('http://localhost:8000/api/getuser')
          .then(res => setInfo(res.data))
          .catch(err => console.log(err));
  },[] );



      const handleDelete = (id) => {
        setInfo(info => info.filter(item => item.id !== id));
    }
  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'order_name', headerName: '사용자 이름', width: 170 },
    { field: 'order_type', headerName: '구분', width: 170 },
    { field: 'order_count', headerName: '매수/매도가격', width: 170 },
    { field: 'order_price', headerName: '주문수량', width: 170 },
    { field: 'order_totalprice', headerName: '주문총액', width: 200 },
    { field: 'order_date', headerName: '채결시간', width: 200 },
    {
      field: 'actions',
      type: 'actions',
      width: 100,
      getActions: (params) => [
        <GridActionsCellItem icon={<EditIcon />} label="Edit" />,
        <GridActionsCellItem icon={<DeleteIcon />} label="Delete" onClick={() => handleDelete(params.row.id)} />,
      ],
    },


  ]
    
    return (        
      <>

            <div className='MainContentContainer'>
                <div className="productList">
                  <div style={{ height: 1100, width: '100%',backgroundColor: 'white'}}>
                    <DataGrid
                      rows={info}
                      disableSelectionOnClick
                      columns={columns}
                      checkboxSelection
                      localeText={koKR.components.MuiDataGrid.defaultProps.localeText}
                      initialState={{
                        pagination: {
                          pageSize: 25,
                        },
                        sorting: {
                          sortModel: [{ field: 'order_date', sort: 'desc' }],
                        },
                        pinnedColumns: {
                          left: [GRID_CHECKBOX_SELECTION_COL_DEF.field],
                          right: ['actions'],
                      }}}
                    />
                    </div>
                </div>
            </div>


      </>
    )
  };
  export default Accounthistory;








    
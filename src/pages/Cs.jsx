import './cs.css';
import React, {useEffect,useState,useRef} from "react";
import { DataGrid,koKR } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';
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


const Cs = () => {
  const [info, setInfo] = useState([]);
  const [selected, setSelected] = useState('');
  const [modalOn, setModalOn] = useState(false);

  //고유 값으로 사용 될 ID
  //ref 를 사용하여 변수 달기
  const nextId = useRef(11);

//더미 데이터 호출
  useEffect(() => {
      axios.get('http://localhost:8000/api/user_pnl_down')
          .then(res => setInfo(res.data))
          .catch(err => console.log(err));
  },[] );

 

      const handleDelete = (id) => {
        setInfo(info => info.filter(item => item.id !== id));
    }
  const columns = [
    {
      field: 'action',
      headerName: 'Action',
      width: 160,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/product/' + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        )
      },
    },
    { field: 'id' , headerName: '회원번호', width: 160},
    { field: 'num' , headerName: '비고', width: 160},
    { field: 'gorl_real' , headerName: '실현손익', width: 160},
    { field: 'gorl_val' , headerName: '평가손익', width: 160},
    { field: 'commit' , headerName: '수수료', width: 160},
    { field: 'commit_transaction' , headerName: '거래료', width: 160},
    { field: 'net_pnl' , headerName: '순손익', width: 160},
    { field: 'margin_valuation' , headerName: '평가담보금', width: 160},
    { field: 'amount_dep' , headerName: '입금', width: 160},
    { field: 'amount_with' , headerName: '출금', width: 160},
    {
        field: 'actions',
        type: 'actions',
        width: 100,
        getActions: () => [
          <GridActionsCellItem icon={<EditIcon />} label="Edit" />,
          <GridActionsCellItem icon={<DeleteIcon />} label="Delete" />,
        ],
      },


  ]

  return (        
    <>
    <div className='home'>
      <div className="homeWidgets"  style={{  height: '100%' }}>

          <div className='MainContentContainer'>
              <div className="productList">
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
    </div>
    </>
  )
};
  export default Cs;








    
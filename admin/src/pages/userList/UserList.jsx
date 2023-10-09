import "./userList.css";
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUsers } from "../../redux/apiCalls";

export default function UserList() {
  const dispatch = useDispatch();
  const users = useSelector((state)=> state.user.users);
  
  
  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);

  


  const handleDelete = (id) => {
    deleteUser(id, dispatch);
  };
  
  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "username",
      headerName: "Utilisateur",
      width: 150,
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "firstName",
      headerName: "Prénom",
      width: 160,
    },
    {
      field: "lastName",
      headerName: "Nom",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row._id}>
              <button className="userListEdit">Mettre à jour</button>
            </Link>
            <DeleteOutlinedIcon
              className="userListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
       <Link to="/newUser">
          <button className="userAddButton">Créer</button>
        </Link>
      <DataGrid
        rows={users.filter(user => !user.isAdmin)}
        disableSelectionOnClick
        columns={columns}
        getRowId={(row)=>row._id}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}

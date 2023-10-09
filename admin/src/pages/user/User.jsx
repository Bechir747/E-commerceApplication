import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { Link , useLocation} from "react-router-dom";
import { useState } from "react";
import "./user.css";
import { useSelector , useDispatch} from 'react-redux';
import { updateUser } from '../../redux/apiCalls';

export default function User() {
  const location = useLocation();
  const userId = location.pathname.split("/")[2];
  const user = useSelector((state)=> 
  state.user.users.find((user)=> user._id === userId))
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

      console.log(formData)
      updateUser(userId, {
        firstName: formData.firstName,
        lastName: formData.lastName,
        username: formData.username,
        email: formData.email,
      }, dispatch);
  };

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Modifier l'utilisateur</h1>
        <Link to="/newUser">
          <button className="userAddButton">Créer</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <div className="userShowTopTitle">
              <span className="userShowUsername">{user.firstName}</span>
              <span className="userShowUsername">{user.lastName}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Details de Compte</span>
            <div className="userShowInfo">
              <PermIdentityIcon className="userShowIcon" />
              <span className="userShowInfoTitle">{user.username}</span>
            </div>
            <span className="userShowTitle">Details de Contact</span>
            <div className="userShowInfo">
              <EmailOutlinedIcon className="userShowIcon" />
              <span className="userShowInfoTitle">{user.email}</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Mettre à jour</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder={user.username}
                  className="userUpdateInput"
                  name="username" value={formData.username} onChange={handleChange}
                />
              </div>
              <div className="userUpdateItem">
                <label>Prénom</label>
                <input
                  type="text"
                  placeholder={user.firstName }
                  className="userUpdateInput"
                  name="firstName" value={formData.firstName} onChange={handleChange}
                />
              </div>
              <div className="userUpdateItem">
                <label>Nom</label>
                <input
                  type="text"
                  placeholder={user.lastName }
                  className="userUpdateInput"
                  name="lastName" value={formData.lastName} onChange={handleChange}
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder={user.email}
                  className="userUpdateInput"
                  name="email" value={formData.email} onChange={handleChange}
                />
              </div>
              <div className="userUpdateItem">
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
              </div>
              <button className="userUpdateButton" onClick={handleSubmit}>Mettre à jour</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

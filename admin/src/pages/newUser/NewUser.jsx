import "./newUser.css";
import axios from "axios"
import react, {useState} from "react"
import { addUser } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";

export default function NewUser() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
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

    if (formData.password !== formData.confirmPassword) {
      console.error('Les mots de passe ne correspondent pas');
      return;
    }
      console.log(formData)
      addUser({
        firstName: formData.firstName,
        lastName: formData.lastName,
        username: formData.username,
        email: formData.email,
        password: formData.password,
      }, dispatch);
  };
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Prénom</label>
          <input type="text" placeholder="prénom..." 
          name="firstName" value={formData.firstName} onChange={handleChange}/>
        </div>
        <div className="newUserItem">
          <label>Nom</label>
          <input type="text" placeholder="nom..." 
          name="lastName" value={formData.lastName} onChange={handleChange}/>
        </div>
        <div className="newUserItem">
          <label>UserName</label>
          <input type="text" placeholder="username..."
          name="username" value={formData.username} onChange={handleChange}/>
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="text" placeholder="email..." 
          name="email" value={formData.email} onChange={handleChange}/>
        </div>
        <div className="newUserItem">
          <label>Mot de passe</label>
          <input type="password" placeholder="mot de passe..." 
          name="password" value={formData.password} onChange={handleChange}/>
        </div>
        <div className="newUserItem">
          <label>Password Confirmation</label>
          <input type="password" placeholder="confirmation de mot de passe..." 
          name="confirmPassword" value={formData.confirmPassword} onChange={handleChange}/>
        </div>
        <button className="newUserButton" onClick={handleSubmit}>Créer</button>
      </form>
    </div>
  );
}

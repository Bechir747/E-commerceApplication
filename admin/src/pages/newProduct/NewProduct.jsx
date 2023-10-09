import { useState } from "react";
import "./newProduct.css";
import { addProduct } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";

export default function NewProduct() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: '',
    desc: '',
    img: '',
    categories: [],
    size: [],
    color: [],
    price: 0,
    inStock: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCat = (e) => {
    setFormData({...formData, categories : e.target.value.split(",")});
  };
  const handleCol = (e) => {
    setFormData({...formData, color : e.target.value.split(",")});
  };
  const handleSize = (e) => {
    setFormData({...formData, size : e.target.value.split(",")});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      console.log(formData)
      addProduct({
        title: formData.title,
        desc: formData.desc,
        img: formData.img,
        categories: formData.categories,
        size: formData.size,
        color: formData.color,
        price: formData.price,
        inStock: formData.inStock,
      }, dispatch);
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Nouveau Article</h1>
      <form className="addProductForm">
      <div className="addProductItem">
          <label>ImageURL</label>
          <input type="text" 
          name="img" value={formData.img} onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input type="text"  
          name="title" value={formData.title} onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input type="text" 
          name="desc" value={formData.desc} onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Categories</label>
          <input type="text" 
          name="categories" value={formData.categories} onChange={handleCat}/>
        </div>
        <div className="addProductItem">
          <label>Couleur</label>
          <input type="text" 
          name="color" value={formData.color} onChange={handleCol}/>
        </div>
        <div className="addProductItem">
          <label>Size</label>
          <input type="text" 
          name="size" value={formData.size} onChange={handleSize}/>
        </div>
        <div className="addProductItem">
          <label>Prix</label>
          <input type="number" 
          name="price" value={formData.price} onChange={handleChange}/>
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <select name="inStock" onChange={handleChange}>
            <option value={formData.inStock}>Yes</option>
            <option value={formData.inStock}>No</option>
          </select>
        </div>
        <button onClick={handleSubmit} className="addProductButton">
        Créer
        </button>
      </form>
    </div>
  );
}

import { Link, useLocation } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart";
import PublishIcon from '@mui/icons-material/Publish';
import { useSelector } from "react-redux";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../requestMethods";
import { updateProduct } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";


export default function Product() {

  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [pStats, setPStats] = useState([]);
  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: '',
    desc: '',
    price: 0,
    inStock: true,
  });

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("orders/income?pid=" + productId);
        const list = res.data.sort((a,b)=>{
            return a._id - b._id
        })
        list.map((item) =>
          setPStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], Sales: item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [productId, MONTHS]);

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
      updateProduct(productId,{
        title: formData.title,
        desc: formData.desc,
        price: formData.price,
        inStock: formData.inStock,
      },dispatch);
  };

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Article</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Créer</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={pStats} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={product.img} alt="" className="productInfoImg" />
            <span className="productName">{product.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{product._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">{product.inStock ? "Yes": "No"}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Titre</label>
            <input type="text" placeholder={product.title} name="title" value={formData.title} onChange={handleChange}/>
            <label>Description</label>
            <input type="text" placeholder={product.desc} name="desc" value={formData.desc} onChange={handleChange}/>
            <label>Prix</label>
            <input type="text" placeholder={product.price} name="price" value={formData.price} onChange={handleChange}/>
            <label>Stock</label>
            <select name="inStock" id="idStock"  onChange={handleChange}>
            <option value={formData.inStock}>Yes</option>
            <option value={formData.inStock}>No</option>
          </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img src={product.img} alt="" className="productUploadImg" />
              <label for="file">
                <PublishIcon />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton" onClick={handleSubmit}>Mettre à jour</button>
          </div>
        </form>
      </div>
    </div>
  );
}

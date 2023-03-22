import React, { useState } from "react";
import "../css/AdminGoods.css";
import { MdOutlineCancelPresentation } from "react-icons/md";
import axios from "axios";
import useFetch from "../hooks/useFetch";

function AdminGoods() {
  const [goods] = useFetch("http://localhost:5000/api/product");
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    filename: "",
    file: null,
  });

  const addProduct = () => {
    const url = "/api/product";
    const newFormData = new FormData();
    newFormData.append("name", formData.name);
    newFormData.append("price", formData.price);
    newFormData.append("category", formData.category);
    newFormData.append("filename", formData.filename);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    return axios.post(url, newFormData, config);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      file: e.target.files[0],
      filename: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    if (window.confirm("등록하시겠습니까?")) {
      e.preventDefault();
      addProduct().then((res) => {
        console.log(res.data);
      });
      setFormData({
        name: "",
        price: "",
        category: "",
        filename: "",
        file: null,
      });
      alert("상품이 등록되었습니다.");
      window.location.reload();
    } else {
      alert("상품등록을 취소하였습니다.");
    }
  };

  const deleteProduct = (num) => {
    if (window.confirm("삭제하시겠습니까?")) {
      const url = "/api/product/" + num;
      fetch(url, {
        method: "DELETE",
      });
      alert("삭제되었습니다.");
      window.location.reload();
    } else {
      alert("취소하였습니다.");
    }
  };

  return (
    <div className="admin_goods">
      <form onSubmit={handleSubmit}>
        <div className="goods_regist">
          <p>상품등록하기</p>
          <table>
            <tbody>
              <tr>
                <td className="goods_regist_td">상품이름</td>
                <td className="goods_regist_td">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </td>
                <td className="goods_regist_td"></td>
              </tr>
              <tr>
                <td className="goods_regist_td">상품가격</td>
                <td className="goods_regist_td">
                  <input
                    type="number"
                    name="price"
                    value={formData.price}
                    onChange={handleInputChange}
                    required
                  />
                </td>
                <td className="admin_goods_won">원</td>
              </tr>
              <tr>
                <td className="goods_regist_td">카테고리</td>
                <td className="goods_regist_td">
                  <select
                    name="category"
                    id="category"
                    value={formData.category}
                    onChange={handleInputChange}
                  >
                    <option value="">선택하기</option>
                    <option value="유니폼">유니폼</option>
                    <option value="모자">모자</option>
                    <option value="의류">의류</option>
                    <option value="잡화">잡화</option>
                    <option value="기념상품">기념상품</option>
                  </select>
                </td>
                <td className="goods_regist_td"></td>
              </tr>
              <tr>
                <td className="goods_regist_td">상품사진</td>
                <td className="goods_regist_td">
                  <input
                    type="file"
                    name="file"
                    file={formData.file}
                    value={formData.filename}
                    onChange={handleImageChange}
                  />
                </td>
                <td className="goods_regist_td"></td>
              </tr>
              <tr>
                <td className="admin_goods_regist_button_right" colSpan="3">
                  <button type="submit" className="admin_goods_regist_button">
                    등록
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </form>
      <div className="admin_goods_list">
        <table className="admin_goods_list_table">
          <tbody>
            <tr className="admin_goods_list_table_1">
              <th>상품번호</th>
              <th>상품이름</th>
              <th>카테고리</th>
              <th>상품가격</th>
              <th>상품삭제</th>
            </tr>

            {goods &&
              goods.map((p) => {
                return (
                  <tr>
                    <td className="admin_goods_list_table_td">{p.num}</td>
                    <td className="admin_goods_list_table_td">{p.NAME}</td>
                    <td className="admin_goods_list_table_td">{p.category}</td>
                    <td className="admin_goods_list_table_td">{p.price}</td>
                    <td className="admin_goods_list_table_td">
                      <button onClick={(e) => deleteProduct(p.num)}>
                        <MdOutlineCancelPresentation />
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminGoods;

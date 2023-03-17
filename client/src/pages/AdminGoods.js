import React, { useState } from "react";
import "../css/common.css";
import "../css/reset.css";
import "../css/main.css";
import "../css/AdminGoods.css";
import { MdOutlineCancelPresentation } from "react-icons/md";
import axios from "axios";

function AdminGoods() {
  const [file, setFile] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [goods_img, setGoods_img] = useState("");

  const addProduct = () => {
    const url = "/api/product";
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("category", category);
    formData.append("goods_img", goods_img);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    return axios.post(url, formData, config);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    addProduct().then((response) => {
      console.log(response.data);
    });
    setName("");
    setPrice(0);
    setFile(null);
    setCategory("");
    setGoods_img("");
    window.location.reload();
  };
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setGoods_img(e.target.value);
  };

  const onNameHandler = (e) => {
    setName(e.target.value);
  };

  const onPricehandler = (e) => {
    setPrice(e.target.value);
  };

  const onCategoryHandler = (e) => {
    setCategory(e.target.value);
  };
  return (
    <div clssName="admin_goods">
      <form onSubmit={handleFormSubmit}>
        <div className="goods_regist">
          <p>상품등록하기</p>
          <table>
            <tr>
              <td>상품이름</td>
              <td>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={onNameHandler}
                  className="admin_goods_input_txt"
                />
              </td>
              <td></td>
            </tr>
            <tr>
              <td>상품가격</td>
              <td>
                <input
                  type="text"
                  name="price"
                  value={price}
                  onChange={onPricehandler}
                  className="admin_goods_input_txt"
                />
              </td>
              <td className="admin_goods_won">원</td>
            </tr>
            <tr>
              <td>카테고리</td>
              <td>
                <select name="category" onChange={onCategoryHandler} id="">
                  <option value="유니폼">유니폼</option>
                  <option value="모자">모자</option>
                  <option value="의류">의류</option>
                  <option value="잡화">잡화</option>
                  <option value="기념상품">기념상품</option>
                </select>
              </td>
              <td></td>
            </tr>
            <tr>
              <td>상품사진</td>
              <td>
                <input
                  type="file"
                  name="file"
                  file={file}
                  value={goods_img}
                  onChange={handleFileChange}
                />
              </td>
              <td></td>
            </tr>
            <tr>
              <td className="admin_goods_regist_button_right" colspan="3">
                <button type="submit" className="admin_goods_regist_button">
                  등록
                </button>
              </td>
            </tr>
          </table>
        </div>
      </form>
      <div className="admin_goods_list">
        <table className="admin_goods_list_table">
          <tr>
            <th>상품번호</th>
            <th>상품이름</th>
            <th>카테고리</th>
            <th>상품가격</th>
            <th>상품삭제</th>
          </tr>
          <tr>
            <td>1</td>
            <td>한화이글스 야구공</td>
            <td>기념상품</td>
            <td>10000</td>
            <td>
              <button>
                <MdOutlineCancelPresentation />
              </button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default AdminGoods;

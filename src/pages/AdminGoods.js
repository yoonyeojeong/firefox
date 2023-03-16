import React from "react";
import "../css/common.css";
import "../css/reset.css";
import "../css/main.css";
import "../css/AdminGoods.css";
import { MdOutlineCancelPresentation } from "react-icons/md";

function AdminGoods() {
  return (
    <div clssName="admin_goods">
      <div className="goods_regist">
        <p>상품등록하기</p>
        <table>
          <tr>
            <td>상품이름</td>
            <td>
              <input type="text" className="admin_goods_input_txt" />
            </td>
            <td></td>
          </tr>
          <tr>
            <td>상품가격</td>
            <td>
              <input type="text" className="admin_goods_input_txt" />
            </td>
            <td className="admin_goods_won">원</td>
          </tr>
          <tr>
            <td>카테고리</td>
            <td>
              <select name="" id="">
                <option value="">유니폼</option>
                <option value="">모자</option>
                <option value="">의류</option>
                <option value="">잡화</option>
                <option value="">기념상품</option>
              </select>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>상품사진</td>
            <td>
              <input type="file" />
            </td>
            <td></td>
          </tr>
          <tr>
            <td className="admin_goods_regist_button_right" colspan="3">
              <button className="admin_goods_regist_button">등록</button>
            </td>
          </tr>
        </table>
      </div>
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

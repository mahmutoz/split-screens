import React from 'react';
import {useSelector} from "react-redux";
import style from "@/components/app/panels/panel1/Table.module.scss";

function Table() {
  const {formData} = useSelector((state) => state.formDataReducer);
  return (
    <table className={style.table}>
      <tbody>
      {
        formData.map((item, index) =>
          <tr key={index}>
            <td>
              {item.contract}
            </td>
            <td>
              {item.offer}
            </td>
            <td>
              {item.status}
            </td>
          </tr>
        )
      }
      </tbody>
    </table>

  );
}

export default Table;

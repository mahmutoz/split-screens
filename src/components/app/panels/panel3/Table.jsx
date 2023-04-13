import React from 'react';
import {useSelector} from "react-redux";

function Table() {
  const {formData} = useSelector((state) => state.formDataReducer);
  return (

    <table>
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

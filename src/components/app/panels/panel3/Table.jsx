import React from 'react';
import {useSelector} from "react-redux";

function Table() {
  const {formData} = useSelector((state) => state.formDataReducer);
  return (

    <table>
      <tbody>
      <tr>
        {
          formData.map(item =>

            <td>
              {item.contract}
            </td>
          )
        }
      </tr>
      </tbody>
    </table>

  );
}

export default Table;

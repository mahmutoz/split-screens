import React from "react";
import styles from "@/components/app/panels/panel1/Table.module.scss";
import {useSelector} from "react-redux";

function Table() {
  const {tableHead, tableData, selectedContract} = useSelector((state) => state.tableReducer);

  const isAllChecked = tableHead.some((item) => item.checked);

  return (
    <table className={styles.table}>
      <thead>
      <tr>
        {
          tableHead.map((item) => (
            item.checked ? <th key={item.id}>{item.title}</th> : ""
          ))
        }
      </tr>
      </thead>
      <tbody>
      {

        isAllChecked ?
          tableData.map((item) => (

            (item.contract === selectedContract || selectedContract === 0) &&
            <tr key={item.id}>
              {
                Object.entries(tableHead).map(([key, value]) => (
                  value.checked ? <td key={key}>{item[value.type]}</td> : ""
                ))
              }
            </tr>
          )) :
          <tr>
            <td colSpan={tableHead.length} className="text-center">Lütfen tablo başlıklarını seçiniz.</td>
          </tr>
      }
      </tbody>
    </table>
  );
}

export default Table;

import styles from "@/components/app/panels/panel1/Table.module.scss";
import React from "react";
import {useSelector} from "react-redux";

function Table() {
  const {tableHead, tableData, selectedContract} = useSelector((state) => state.tableReducer);
  return (
    <table className={styles.table}>
      <thead className={styles.table__head}>
      <tr>
        {
          tableHead.map((item) => (
            item.checked ? <th key={item.id}>{item.title}</th> : ""
          ))
        }
      </tr>
      </thead>
      <tbody className={styles.table__body}>
      {
        tableData.map((item) => (
          item.contract === selectedContract || selectedContract === 0 ?
            <tr key={item.id}>
              {
                Object.entries(tableHead).map(([key, value]) => (
                  value.checked && <td key={key}>{item[value.type]}</td>
                ))
              }
            </tr> : ""
        ))
      }
      </tbody>
    </table>
  );
}

export default Table;

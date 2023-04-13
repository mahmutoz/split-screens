import React from "react";
import styles from "@/components/app/panels/panel1/Toolbar.module.scss";
import {useSelector, useDispatch} from "react-redux";
import {setSelectedContract, setTableHead} from "@/stores/reducers/table.js";
import UploadIcon from "@/assets/img/icons/upload.svg";
import SettingsIcon from "@/assets/img/icons/gear.svg";
import PlusIcon from "@/assets/img/icons/plus.svg";

function Toolbar() {
  const dispatch = useDispatch();
  const {tableHead, tableData} = useSelector((state) => state.tableReducer);

  const handleSelect = (e) => {
    const selectedContract = +e.target.value;
    dispatch(setSelectedContract(selectedContract));
  }

  const handleCheckBox = (event, item) => {
    const newTableHead = [...tableHead];
    newTableHead[item.id] = {...item, [event.target.name]: event.target.checked};
    dispatch(setTableHead([...newTableHead]));
  }

  const uniqueContracts = tableData.filter((item, index, self) =>
    self.findIndex(t => t.contract === item.contract) === index
  ).map(item => {
    return {
      id: item.id,
      contract: item.contract
    }
  });

  return (
    <div className={styles.toolbar}>
      <form>
        <div className={styles.toolbar__inner}>
          <select onChange={(event) => handleSelect(event)}>
            <option value="">Kontrat Seçiniz</option>
            {
              uniqueContracts.map((item) => (
                <option key={item.id} value={item.contract}>{item.contract}</option>
              ))
            }
          </select>
          <div className={styles.toolbar__actions}>
            <button type="button" className={styles.toolbar__btn}>
              <img src={UploadIcon} width={16} height={16} alt="upload"/>
            </button>
            <button type="button" className={styles.toolbar__btn}>
              <img src={SettingsIcon} width={16} height={16} alt="settings"/>
              <ul className={styles.menu}>
                {
                  tableHead.map((item) => (
                    <li key={item.id}>
                      <input
                        onChange={(event) => handleCheckBox(event, item)}
                        name={"checked"}
                        id={item.id}
                        type="checkbox"
                        defaultChecked={item.checked}
                      />
                      <label htmlFor={item.id}>{item.title}</label>
                    </li>
                  ))
                }
              </ul>
            </button>
            <button type="button" className={styles.toolbar__btn}>
              <img src={PlusIcon} width={16} height={16} alt="plus"/>
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Toolbar

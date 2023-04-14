import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {setFormData} from "@/stores/reducers/formData.js";
import style from "@/components/app/panels/panel3/Form.module.scss";

function Form() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    id: "",
    contract: "",
    offer: "",
    status: "",
  });

  const [isFormActive, setIsFormActive] = useState(false);

  const addData = (e) => {
    e.preventDefault();
    dispatch(setFormData(form))
  }

  const changeHandle = (e) => {
    const {name, value} = e.target;
    setForm({...form, [name]: value});
  }

  const toggleBtn = () => {
    setIsFormActive(!isFormActive);
    setForm({
      id: "",
      contract: "",
      offer: "",
      status: "",
    });
  }

  const isDisabled = Object.values(form).some(item => item === "");

  return (
    <div className={style.form}>
      {
        isFormActive ? (
          <form className={style.form__inner} onSubmit={addData}>
            <input name="id" value={form.id} onChange={changeHandle} placeholder="no giriniz."/>
            <input name="contract" value={form.contract} onChange={changeHandle} placeholder="kontrat giriniz."/>
            <input name="offer" value={form.offer} onChange={changeHandle} placeholder="teklif giriniz."/>
            <input name="status" value={form.status} onChange={changeHandle} placeholder="data giriniz."/>
            <button disabled={isDisabled}>Kaydet</button>
          </form>
        ) : (
          ""
        )
      }
      <button type="button" onClick={toggleBtn} className="btn btn-primary">
        {isFormActive ? "Formu Kapat" : "Yeni Ekle"}
      </button>
    </div>
  )
}

export default Form;

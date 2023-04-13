import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

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
  }

  const changeHandle = (e) => {
    const {name, value} = e.target;
    setForm({...form, [name]: value});
  }

  return (
    <div>
      {JSON.stringify(form)}
      {
        isFormActive ? (
          <form onSubmit={addData}>
            <input name="id" value={form.id} onChange={changeHandle} placeholder="no giriniz."/>
            <input name="contract" value={form.contract} onChange={changeHandle} placeholder="kontrat giriniz."/>
            <input name="offer" value={form.offer} onChange={changeHandle} placeholder="teklif giriniz."/>
            <input name="status" value={form.status} onChange={changeHandle} placeholder="data giriniz."/>
            <button>Kaydet</button>
          </form>
        ) : (
          ""
        )
      }
      <button type="button" onClick={() => setIsFormActive(true)} className="btn btn-primary">Yeni Ekle</button>
    </div>
  )
}

export default Form;

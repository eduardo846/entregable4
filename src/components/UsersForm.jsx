import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

const UsersForm = ({getUsers, userSelected, deselectUser}) => {
    const {register, handleSubmit, reset} = useForm()
    useEffect(()=>{
      if(userSelected){
        reset(userSelected)
      }
    },[userSelected])
    const submit = (data)=>{
      if(userSelected){
        axios.put(`https://users-crud1.herokuapp.com/users/${userSelected.id}/`, data)
      .then(()=>getUsers())
      }else{

        axios.post('https://users-crud1.herokuapp.com/users/',data)
        .then(()=>getUsers())
        .catch(error=>console.log(error.response))
      }
      clear()
    }
    const clear = ()=>{
      reset({
        email: "",
  password: "",
  first_name: "",
  last_name: "",
  birthday: ""
      })
      deselectUser()
    }

  return (
    <div className="buttonAdd">
      <button
        type="button"
        className="btn btn-primary position-relative"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        <i className="fa fa-plus iconPlus" aria-hidden="true">
          {" "}
        </i>
        Crear nuevo Usuario
      </button>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Nuevo usuario
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="form-container">
                <form className="row g-3 container1" onSubmit={handleSubmit(submit)}>
                  <div className="col-md-12 firstText">
                    <label htmlFor="input_first_name" className="form-label">
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="input_first_name"
                      {...register("first_name")}
                      required
                    />
                  </div>
                  <div className="col-md-12 lastText">
                    <label htmlFor="input_last_name" className="form-label">
                      Apellidos
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="input_last_name"
                      {...register("last_name")}
                      required
                    />
                  </div>

                  <div className="col-md-12 emailText">
                    <label htmlFor="inputEmail" className="form-label">
                      Correo
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail"
                      {...register("email")}
                      required
                    />
                  </div>
                  <div className="col-md-12 passText">
                    <label htmlFor="inputPassword" className="form-label">
                      Contraseña
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="inputPassword"
                      {...register("password")}
                      required
                    />
                  </div>
                  <div className="col-md-12 birthText">
                    <label htmlFor="inputBirthday" className="form-label">
                      Cumpleaños
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="inputBirthday"
                      {...register("birthday")}
                    />
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary buttonText">
                      Agregar nuevo usuario
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersForm;

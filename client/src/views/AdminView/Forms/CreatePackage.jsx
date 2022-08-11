import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { postPackage } from "../../../redux/actions/postPackage";
import { getPlatforms } from "../../../redux/actions/getPlatforms";
import { getBuses } from "../../../redux/actions/getBuses";
import { getCities } from "../../../redux/actions/getCities";
import { getHotels } from "../../../redux/actions/getHotels";
import { getActivities } from "../../../redux/actions/getActivities";
import { getHotelsByCityId } from "../../../redux/actions/getHotelsByCityId";
import DateTimePicker from "react-datetime-picker";
import swal from "sweetalert";
import './Form.css'
export const CreatePackage = ({ }) => {
  const dispatch = useDispatch();
  const expRegSoloLetras = /^[a-zA-Z ]*$/;
  useEffect(() => {
    dispatch(getPlatforms());
    dispatch(getBuses());
    dispatch(getCities());
    dispatch(getHotels());
    dispatch(getActivities());
  }, []);
  let { platforms, business, cities, hotels, activities } = useSelector(
    (state) => state.adminReducer
  );
  let [newHotels, setNewHotels] = useState([]);
  let [newActivities, setNewActivities] = useState([]);
  console.log(newHotels);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function TransformData2(x) {
    return x.split(",");
  }

  const [packages, setPackages] = React.useState({
    start_date: "",
    end_date: "",
    name: "",
    price: 1,
    discount: 1,
    stock: 1,
    plattformId: 0,
    businessId: 0,
    cityId: 0,
    hotelId: 0,
    activity: [],
  });
  function handleDelete(activ) {
    setPackages({
      ...packages,
      activity: packages.activity.filter((e) => e !== activ),
    });
    swal({
      title: "Paquete borrado con éxito",
      icon: "success",
    });
  }
  let [startDate, setStartDate] = useState("");
  let [endDate, setEndDate] = useState("");
  const handleDates = () => {
    setPackages({
      ...packages,
      start_date: startDate ? startDate?.toISOString() : "",
    });
  };
  const handleEndDates = () => {
    setPackages({
      ...packages,
      end_date: endDate ? endDate?.toISOString() : "",
    });
  };

  console.log(packages);
  function handleChangePackages(event) {
    if (event.target.name === "activity") {
      setPackages({
        ...packages,
        [event.target.name]: [...packages.activity, event.target.value],
      });

      return;
    }
    if (event.target.name === "cityId") {
      let newHotel = hotels.filter(
        (h) => h.cityId === parseInt(event.target.value)
      );
      let newActivities = activities.filter(
        (h) => h.cityId === parseInt(event.target.value)
      );

      setNewHotels(newHotel);
      setNewActivities(newActivities);
    }
    setPackages({ ...packages, [event.target.name]: event.target.value });
    console.log([event.target.name], event.target.value);
  }

  function handleSubmitPackages() {
    dispatch(postPackage(packages));
    swal({
      title: "Paquete creado con éxito",
      icon: "success",
    });
  }
  const name = register("name", {
    required: { value: true, message: "REQUERIDO" },
    pattern: { value: expRegSoloLetras, message: "SOLO LETRAS" }
  });
  /*   
      const start_date = register("start_date", {
        required: { value: true, message: "REQUERIDO" },
      });
    
      const end_date = register("end_date", {
        required: { value: true, message: "REQUERIDO" },
      }); */

  const price = register("price", {
    required: { value: true, message: "REQUERIDO" },
    min: { value: 0, message: "Precio minimo $0" },
  });

  const discount = register("discount", {
    required: { value: true, message: "REQUERIDO" },
    min: { value: 0, message: "Descuento minimo 0%" },
    max: { value: 100, message: "Descuento maximo 100%" },
  });

  const stock = register("stock", {
    required: { value: true, message: "REQUERIDO" },
    min: { value: 0, message: "Stock minimo 0" },
  });

  return (
    <div className="div div-package-form">
      <form className="form" onSubmit={handleSubmit(handleSubmitPackages)}>
        <div className="div-form">
          <label className="label-form"> Nombre: </label>

          <input
            type="text"
            name="name"
            value={packages["name"]}
            placeholder="Ingrese un nombre."
            {...name}
            onChange={(e) => {
              name.onChange(e);
              handleChangePackages(e);
            }}
          />
          {errors?.name && <span>{errors?.name?.message}</span>}
        </div>

        <div className="div-form">
          <label className="label-form"> Fecha de inicio: </label>
          <DateTimePicker
            name="start_date"
            onBlur={handleDates}
            onChange={setStartDate}
            value={startDate}
            dayPlaceholder={"DD"}
            monthPlaceholder={"MM"}
            yearPlaceholder={"YYYY"}
            format={"dd-MM-y h:mm:ss a"}
            minDate={new Date()}
            hourPlaceholder={"hh"}
            minutePlaceholder={"mm"}
            secondPlaceholder={"ss"}
            required
          />
        </div>

        <div className="div-form">
          <label className="label-form"> Fecha de finalización: </label>
          <DateTimePicker
            name="end_date"
            onBlur={handleEndDates}
            onChange={setEndDate}
            value={endDate}
            dayPlaceholder={"DD"}
            monthPlaceholder={"MM"}
            yearPlaceholder={"YYYY"}
            format={"dd-MM-y h:mm:ss a"}
            minDate={new Date()}
            hourPlaceholder={"hh"}
            minutePlaceholder={"mm"}
            secondPlaceholder={"ss"}
            required
          />

          {/*  <input
                type="text"
                name="end_date"
                value={packages["end_date"]}
                placeholder="Ingrese fecha finalización."
                {...end_date}
                onChange={(e) => {
                  end_date.onChange(e);
                  handleChangePackages(e);
              }}
            /> */}
        </div>

        <div className="div-form">
          <label className="label-form"> Precio: </label>

          <input
            type="number"
            name="price"
            value={packages["price"]}
            placeholder="Ingrese un precio."
            {...price}
            onChange={(e) => {
              price.onChange(e);
              handleChangePackages(e);
            }}
          />
          {errors?.price && <span>{errors?.price?.message}</span>}
        </div>

        <div className="div-form">
          <label className="label-form"> Descuento: </label>

          <input
            type="number"
            name="discount"
            value={packages["discount"]}
            placeholder="Ingrese el descuento."
            {...discount}
            onChange={(e) => {
              discount.onChange(e);
              handleChangePackages(e);
            }}
          />
          {errors?.discount && <span>{errors?.discount?.message}</span>}
        </div>

        <div className="div-form">
          <label className="label-form"> Stock: </label>

          <input
            type="number"
            name="stock"
            value={packages["stock"]}
            placeholder="Ingrese el stock."
            {...stock}
            onChange={(e) => {
              stock.onChange(e);
              handleChangePackages(e);
            }}
          />
          {errors?.stock && <span>{errors?.stock?.message}</span>}
        </div>

        <div className="div-form">
          <select name="cityId" defaultValue="" required onChange={handleChangePackages}>
            <option key="keycities" value="" disabled>
              Ciudad
            </option>
            {cities.filter(a=>a.enabled).map((city) => (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            ))}
          </select>
        </div>
        <div className="div-form">
          <select
            name="plattformId"
            defaultValue=""
            onChange={handleChangePackages}
            required
          >
            <option key="keyplatform" value="" disabled>
              Plataforma
            </option>
            {platforms.map((platf) => (
              <option key={platf.id} value={platf.id}>
                {platf.terminal}
              </option>
            ))}
          </select>
        </div>

        <div className="div-form">
          <select
            name="businessId"
            defaultValue=""
            onChange={handleChangePackages}
            required
          >
            <option key="keybusiness" value="" disabled>
              Transportista
            </option>
            {business.filter(a=>a.enabled).map((busi) => (
              <option key={busi.id} value={busi.id}>
                {busi.name}
              </option>
            ))}
          </select>
        </div>

        <div className="div-form">
          <select
            name="hotelId"
            defaultValue=""
            onChange={handleChangePackages}
            required
          >
            <option key="keyhotels" value="" disabled>
              Hotel
            </option>
            {newHotels.filter(a=>a.enabled).map((hotel) => (
              <option key={hotel?.id} value={hotel?.id}>
                {hotel?.name}
              </option>
            ))}
          </select>
        </div>
        <div className="div-form">
          <select
            name="activity"
            defaultValue=""
            onChange={handleChangePackages}
          >
            <option key="keyActivity" value="" disabled>
              ACTIVIDADES
            </option>
            {newActivities.filter(a=>a.enabled).map((activity) => (
              <option key={activity?.id} value={activity?.name}>
                {activity?.name}
              </option>
            ))}
          </select>
        </div>
        {/*             <div className="div-form">
              <label className="label-form"> Actividades: </label>
              <input
                type="text"
                name="activity"
                value={packages["activity"]}
                placeholder="Ingrese Id actividades."
                {...activity}
                onChange={(e) => {
                  activity.onChange(e);
                  handleChangePackages(e);
              }}
            />
            {errors?.activity && <span>{errors?.activity?.message}</span>}
            </div> */}
        <div>
          <ul>
            {packages.activity.map((activ) => (
              <li style={{ listStyle: "none" }} key={activ}>
                {activ}
                <button
                  type="button"
                  key={activ}
                  onClick={() => handleDelete(activ)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        </div>

        <button type="submit" className="button-form">
          Crear Paquete
        </button>
      </form>
    </div>
  );
};
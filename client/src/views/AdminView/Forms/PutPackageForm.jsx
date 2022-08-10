import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import { getActivities } from "../../../redux/actions/getActivities";
import { getBuses } from "../../../redux/actions/getBuses";
import { getCities } from "../../../redux/actions/getCities";
import { getClean } from "../../../redux/actions/getClean";
import { getHotels } from "../../../redux/actions/getHotels";
import { getPlatforms } from "../../../redux/actions/getPlatforms";
import { putPackage } from "../../../redux/actions/putPackage";
import DateTimePicker from "react-datetime-picker";
export const PutPackageForm = ({ pack }) => {
  const dispatch = useDispatch();


  const packAct = pack.activities.map(e => e.name)
  const [packages, setPackages] = React.useState({
    start_date: new Date(pack.start_date),
    end_date: new Date(pack.end_date),
    name: pack.name,
    price: pack.price,
    discount: pack.discount,
    stock: pack.stock,
    plattformId: pack.plattformId,
    businessId: pack.businessId,
    cityId: pack.cityId,
    hotelId: pack.hotelId,
    activity: packAct,
  });
  let [startDate, setStartDate] = useState(packages["start_date"]);
  let [endDate, setEndDate] =  useState(packages["start_date"]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { platforms, business, cities, hotels, activities } = useSelector((state) => state.adminReducer);
  let [newHotels, setNewHotels] = useState([]);
  let [newActivities, setNewActivities] = useState([])
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
  useEffect(() => {
    dispatch(getPlatforms())
    dispatch(getBuses())
    dispatch(getCities())
    dispatch(getHotels())
    dispatch(getActivities())
    return () => dispatch(getClean())
  }, [dispatch])
 
  /* function TransformData(x) {
    return x.split(",");
  } */

  function handleDelete(activ) {
    console.log(activ)
    setPackages({
      ...packages,
      activity: packages.activity.filter((e) => e !== activ),
    });
  }

  function handleChange(event) {
    if (event.target.name === "activity") {
      setPackages({
        ...packages,
        [event.target.name]: [... new Set([...packages.activity, event.target.value])] /* [TransformData(event.target.value)] */,
      });
      return;
    }
    if (event.target.name === "cityId") {
    
    
      console.log(packages)
      let newHotel = hotels.filter(
        (h) => h.cityId === parseInt(event.target.value)
      );
      let newActivities = activities.filter(
        (h) => h.cityId === parseInt(event.target.value)
      );
     
      setNewHotels(newHotel);
      setNewActivities(newActivities);
      
      return   (setPackages({
        ...packages,
        [event.target.name]: event.target.value,
        activity:[]
      }))  
    }

    setPackages({ ...packages, [event.target.name]: event.target.value });
  }

  function handleSubmitPackage() {
    //e.preventDefault(); // para que era esto?
    console.log("mm")
    dispatch(putPackage(pack.id, packages));
    swal({
      title: "Paquete editado con exito",
      icon: "success",
    })
  }

  const name = register("name", {
    required: { value: true, message: "REQUERIDO" },
  });

/*   const start_date = register("start_date", {
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
    max: { value: 100, message: "Descuento maximo 100%" },
  });

  const stock = register("stock", {
    required: { value: true, message: "REQUERIDO" },
  });

  return (
    <div className="div">
      <form className="form" onSubmit={handleSubmit(handleSubmitPackage)}>
        <div className="div-form">
          <label className="label-form"> Nombre: </label>
          <input
            type="text"
            name="name"
            value={packages["name"]}
            placeholder="Ingrese el nombre del paquete."
            {...name}
            onChange={(e) => {
              name.onChange(e);
              handleChange(e);
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
          />
 </div>

        <div className="div-form">
          <label className="label-form"> Precio: </label>
          <input
            type="number"
            name="price"
            value={packages["price"]}
            placeholder="Ingrese el precio."
            {...price}
            onChange={(e) => {
              price.onChange(e);
              handleChange(e);
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
              handleChange(e);
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
              handleChange(e);
            }}
          />
          {errors?.stock && <span>{errors?.stock?.message}</span>}
        </div>

        <div className="div-form">
          <select name="plattformId" required defaultValue="" onChange={handleChange}>
            <option key="keyplatform" value="" disabled>Plataformas</option>
            {platforms.map((platform) => (
              <option key={platform.id} value={platform.id}>
                {platform.terminal}
              </option>
            ))}
          </select>
        </div>

        <div className="div-form">
          <select name="businessId" required defaultValue="" onChange={handleChange}>
            <option key="keybusiness" value="" disabled>Transportista</option>
            {business.map((busi) => (
              <option key={busi.id} value={busi.id}>
                {busi.name}
              </option>
            ))}
          </select>
        </div>

        <div className="div-form">
          <select name="cityId" required defaultValue="" onChange={handleChange}>
            <option key="keycities" value="" disabled>Ciudad</option>
            {cities.map((city) => (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            ))}
          </select>
        </div>

        <div className="div-form">
          <select name="hotelId" required defaultValue="" onChange={handleChange}>
            <option key="keyhotels" value="" disabled>Hotel</option>
            {newHotels.map((hotel) => (
              <option key={hotel.id} value={hotel.id}>
                {hotel.name}
              </option>
            ))}
          </select>
        </div>

        <div className="div-form">
          <div>
            <label>Actividades</label>
            <select
              name="activity"
              defaultValue={''}
              onChange={handleChange}
            >
              <option key="keyactivity" value={''}>
                Ninguna
              </option>
              {newActivities.map((activ) => (
                <option value={activ.name} key={activ.id}>
                  {activ.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <ul>
              {packages["activity"].map((activi) => (
                <li style={{ listStyle: "none" }} key={activi.id}>
                  {" "}
                  {activi}
                  <button
                    type="button"
                    key={activi}
                    onClick={() => handleDelete(activi)}
                  >
                    x
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <button type="submit" className="button-form">
          {" "}
          Put Package
        </button>
      </form>
    </div>
  );
};

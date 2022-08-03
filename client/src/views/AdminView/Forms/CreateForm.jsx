import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postActivity } from "../../../redux/actions/postActivity";
import { postCity } from "../../../redux/actions/postCity";
import { postBus } from "../../../redux/actions/postBus";
import { postPackage } from "../../../redux/actions/postPackage";
import { postPlatform } from "../../../redux/actions/postPlattform";
import { postHotel } from "../../../redux/actions/postHotel";
import { useForm } from "react-hook-form";
import { getPlatforms } from "../../../redux/actions/getPlatforms";
import { getBuses } from "../../../redux/actions/getBuses";
import { getCities } from "../../../redux/actions/getCities";
import { getHotels } from "../../../redux/actions/getHotels";
import { getActivities } from "../../../redux/actions/getActivities";
import { getClean } from "../../../redux/actions/getClean";

function Ejemplo({ lang }) {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const expRegUrl =
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;
  const expRegEmail =
    /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  const [city, setCity] = React.useState({ name: "", location: [] });
  const [bus, setBus] = React.useState({
    name: "",
    phone: "",
    email: "",
    score: [],
    comments: [],
  });
  const [activity, setActivity] = React.useState({
    name: "",
    image: "",
    price: "",
    cityId: 0,
    score: 0,
    comments: [],
  });
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
  const [platform, setPlatform] = React.useState({
    terminal: "",
    address: "",
    location: [],
  });
  const [hotel, setHotel] = React.useState({
    name: "",
    location: [],
    phone: "",
    price: "",
    stars: 0,
    pool: true,
    wifi: true,
    gym: true,
    urlImage: [],
    score: [],
    comments: [],
  });

  const { platforms, business, cities, hotels, activities } = useSelector(
    (state) => state.adminReducer
  );

  useEffect(() => {
    dispatch(getPlatforms());
    dispatch(getBuses());
    dispatch(getCities());
    dispatch(getHotels());
    dispatch(getActivities());
    return () => dispatch(getClean())
  }, [dispatch]);

  function TransformData(x) {
    if (isNaN(x[0])) return x;
    return x.split(",");
  }
  function handleChangeCity(event) {
    setCity({
      ...city,
      [event.target.name]: TransformData(event.target.value),
    });
  }
  function handleSubmitCity() {
    //e.preventDefault(); // para que era esto?
    dispatch(postCity(city));
  }

  function handleChangeBus(event) {
    if (event.target.name === "score") {
      setBus({
        ...bus,
        [event.target.name]: TransformData(event.target.value),
      });
      return;
    }
    if (event.target.name === "comments") {
      setBus({
        ...bus,
        [event.target.name]: TransformData2(event.target.value),
      });
      return;
    }

    setBus({ ...bus, [event.target.name]: event.target.value });
  }
  function handleSubmitBus() {
    //e.preventDefault();
    dispatch(postBus(bus));
  }

  function handleChangeActivity(event) {
    setActivity({ ...activity, [event.target.name]: event.target.value });
    if (event.target.name === "score") {
      setActivity({
        ...activity,
        [event.target.name]: TransformData(event.target.value),
      });
      return;
    }
    if (event.target.name === "comments") {
      setActivity({
        ...activity,
        [event.target.name]: TransformData2(event.target.value),
      });
      return;
    }
  }

  function handleSubmitActivity() {
    //e.preventDefault();
    dispatch(postActivity(activity));
  }

  function TransformData2(x) {
    return x.split(",");
  }

  function handleChangePackages(event) {
    if (event.target.name === "activity") {
      setPackages({
        ...packages,
        [event.target.name]: [... new Set([...packages.activity, event.target.value])],
      });
      return;
    }
    setPackages({ ...packages, [event.target.name]: event.target.value });
    console.log([event.target.name], event.target.value);
  }

  function handleSubmitPackages() {
    //e.preventDefault(); // para que era esto?
    dispatch(postPackage(packages));
  }

  function handleChangePlatform(event) {
    setPlatform({
      ...platform,
      [event.target.name]: TransformData(event.target.value),
    });
  }

  function handleSubmitPlatform() {
    //e.preventDefault(); // para que era esto?
    dispatch(postPlatform(platform));
  }

  function handleChangeHotel(event) {
    if (event.target.name === "location") {
      setHotel({
        ...hotel,
        [event.target.name]: TransformData(event.target.value),
      });
      return;
    }
    if (event.target.name === "urlImage") {
      setHotel({ ...hotel, [event.target.name]: [event.target.value] });
      return;
    }
    if (
      event.target.name === "gym" ||
      event.target.name === "pool" ||
      event.target.name === "wifi"
    ) {
      if (event.target.value === "true") {
        setHotel({ ...hotel, [event.target.name]: true });
      } else {
        setHotel({ ...hotel, [event.target.name]: false });
      }

      return;
    }
    if (event.target.name === "score") {
      setHotel({
        ...hotel,
        [event.target.name]: TransformData(event.target.value),
      });
      return;
    }
    if (event.target.name === "comments") {
      setHotel({
        ...hotel,
        [event.target.name]: TransformData2(event.target.value),
      });
      return;
    }

    setHotel({ ...hotel, [event.target.name]: event.target.value });
  }

  function handleSubmitHotel() {
    //e.preventDefault(); // para que era esto?
    dispatch(postHotel(hotel));
  }

  function handleDelete(activ) {
    setPackages({
      ...packages,
      activity: packages.activity.filter((e) => e !== activ),
    });
  }

  if (lang === "") {
    return <div>Waiting for the Data</div>;
  }

  if (lang === "hotels") {
    const name = register("name", {
      required: { value: true, message: "REQUERIDO" },
    });

    const location = register("location", {
      required: { value: true, message: "REQUERIDO" },
    });

    const stars = register("stars", {
      required: { value: true, message: "REQUERIDO" },
      min: { value: 1, message: "Minimo 1 estrella" },
      max: { value: 5, message: "Maximo 5 estrellas" },
    });

    const phone = register("phone", {
      required: { value: true, message: "REQUERIDO" },
    });

    const price = register("price", {
      required: { value: true, message: "REQUERIDO" },
      min: { value: 0, message: "Precio minimo $0" },
    });

    const urlImage = register("urlImage", {
      pattern: {
        value: expRegUrl,
        message: "Url no valida",
      },
    });

    const score = register("score", {
      required: { value: true, message: "REQUERIDO" },
      min: { value: 0, message: "Minimo 0" },
    });

    return (
      <form className="form" onSubmit={handleSubmit(handleSubmitHotel)}>
        <div className="div-form">
          <label className="label-form"> Nombre: </label>

          <input
            type="text"
            name="name"
            value={hotel["name"]}
            placeholder="Ingrese el nombre."
            {...name}
            onChange={(e) => {
              name.onChange(e);
              handleChangeHotel(e);
            }}
          />
          {errors?.name && <span>{errors?.name?.message}</span>}
        </div>

        <div className="div-form">
          <label className="label-form"> Ubicación: </label>
          <input
            type="number"
            name="location"
            value={hotel["location"]}
            placeholder="Ingrese la ubicación."
            {...location}
            onChange={(e) => {
              location.onChange(e);
              handleChangeHotel(e);
            }}
          />
          {errors?.location && <span>{errors?.location?.message}</span>}
        </div>

        <div className="div-form">
          <label className="label-form"> Estrellas: </label>
          <input
            type="number"
            name="stars"
            value={hotel["stars"]}
            placeholder="Ingrese la ubicación."
            {...stars}
            onChange={(e) => {
              stars.onChange(e);
              handleChangeHotel(e);
            }}
          />
          {errors?.stars && <span>{errors?.stars?.message}</span>}
        </div>

        <div className="div-form">
          <label className="label-form"> Telefono: </label>

          <input
            type="number"
            name="phone"
            value={hotel["phone"]}
            placeholder="Ingrese la ubicación."
            {...phone}
            onChange={(e) => {
              phone.onChange(e);
              handleChangeHotel(e);
            }}
          />
          {errors?.phone && <span>{errors?.phone?.message}</span>}
        </div>

        <div className="div-form">
          <label className="label-form"> Precio: </label>

          <input
            type="text"
            name="price"
            value={hotel["price"]}
            placeholder="Ingrese el precio."
            {...price}
            onChange={(e) => {
              price.onChange(e);
              handleChangeHotel(e);
            }}
          />
          {errors?.price && <span>{errors?.price?.message}</span>}
        </div>

        <div className="div-form">
          <label className="label-form"> Imagen: </label>

          <input
            type="text"
            name="urlImage"
            value={hotel["urlImage"]}
            placeholder="Ingrese una Url."
            {...urlImage}
            onChange={(e) => {
              urlImage.onChange(e);
              handleChangeHotel(e);
            }}
          />
          {errors?.urlImage && <span>{errors?.urlImage?.message}</span>}
        </div>

        <div className="div-form">
          <label className="label-form"> Gimnasio </label>
          <select name="gym" onChange={handleChangeHotel}>
            <option value="true" selected>
              Si
            </option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="div-form">
          <label className="label-form"> Pool </label>
          <select name="pool" onChange={handleChangeHotel}>
            <option value="true" selected>
              Si
            </option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="div-form">
          <label className="label-form"> Wifi </label>
          <select name="wifi" onChange={handleChangeHotel}>
            <option value="true" selected>
              Si
            </option>
            <option value="false">No</option>
          </select>
        </div>

        <div className="div-form">
          <select name="cityId" required defaultValue="" onChange={handleChangeHotel}>
            <option key="keycity" value="" disabled>
              Ciudad
            </option>
            {cities.map((city) => (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            ))}
          </select>
        </div>

        <div className="div-form">
          <label className="label-form"> Puntaje: </label>

          <input
            type="number"
            name="score"
            value={hotel["score"]}
            placeholder="Ingrese un puntaje."
            {...score}
            onChange={(e) => {
              score.onChange(e);
              handleChangeHotel(e);
            }}
          />
          {errors?.score && <span>{errors?.score?.message}</span>}
        </div>

        <div className="div-form">
          <label className="label-form"> Comentarios: </label>

          <input
            type="textarea"
            name="comments"
            value={hotel["comments"]}
            placeholder="Ingrese un comentario."
            onChange={handleChangeHotel}
          />
        </div>

        <button type="submit" className="button-form">
          {" "}
          Create Hotel
        </button>
      </form>
    );
  }

  if (lang === "plattforms") {
    const terminal = register("terminal", {
      required: { value: true, message: "REQUERIDO" },
    });

    const address = register("address", {
      required: { value: true, message: "REQUERIDO" },
    });

    const location = register("location", {
      required: { value: true, message: "REQUERIDO" },
    });

    return (
      <form className="form" onSubmit={handleSubmit(handleSubmitPlatform)}>
        <div className="div-form">
          <label className="label-form"> Terminal: </label>

          <input
            type="text"
            name="terminal"
            value={platform["terminal"]}
            placeholder="Ingrese un nombre."
            {...terminal}
            onChange={(e) => {
              terminal.onChange(e);
              handleChangePlatform(e);
            }}
          />
          {errors?.terminal && <span>{errors?.terminal?.message}</span>}
        </div>

        <div className="div-form">
          <label className="label-form"> Dirección: </label>
          <input
            type="text"
            name="address"
            value={platform["address"]}
            placeholder="Ingrese una dirección."
            {...address}
            onChange={(e) => {
              address.onChange(e);
              handleChangePlatform(e);
            }}
          />
          {errors?.address && <span>{errors?.address?.message}</span>}
        </div>

        <div className="div-form">
          <label className="label-form"> Ubicación: </label>

          <input
            type="text"
            name="location"
            value={platform["location"]}
            placeholder="Ingrese las coordenadas."
            {...location}
            onChange={(e) => {
              location.onChange(e);
              handleChangePlatform(e);
            }}
          />
          {errors?.location && <span>{errors?.location?.message}</span>}
        </div>

        <button type="submit" className="button-form">
          {" "}
          Create Plattform
        </button>
      </form>
    );
  }

  if (lang === "cities") {
    const name = register("name", {
      required: { value: true, message: "REQUERIDO" },
    });

    const location = register("location", {
      required: { value: true, message: "REQUERIDO" },
    });

    return (
      <div className="div">
        <form className="form" onSubmit={handleSubmit(handleSubmitCity)}>
          <div className="div-form">
            <label className="label-form"> Nombre: </label>

            <input
              type="text"
              name="name"
              value={city["name"]}
              placeholder="Ingrese el nombre."
              {...name}
              onChange={(e) => {
                name.onChange(e);
                handleChangeCity(e);
              }}
            />
            {errors?.name && <span>{errors?.name?.message}</span>}
          </div>

          <div className="div-form">
            <label className="label-form"> Ubicación: </label>

            <input
              type="text"
              name="location"
              value={city["location"]}
              placeholder="Ingrese la ubicación."
              {...location}
              onChange={(e) => {
                location.onChange(e);
                handleChangeCity(e);
              }}
            />
            {errors?.location && <span>{errors?.location?.message}</span>}
          </div>

          <button type="submit" className="button-form">
            {" "}
            Create City
          </button>
        </form>
      </div>
    );
  }

  if (lang === "business") {
    const name = register("name", {
      required: { value: true, message: "REQUERIDO" },
    });

    const phone = register("phone", {
      required: { value: true, message: "REQUERIDO" },
    });

    const email = register("email", {
      required: { value: true, message: "REQUERIDO" },
      pattern: { value: expRegEmail, message: "Email invalido" },
    });

    const score = register("score", {
      required: { value: true, message: "REQUERIDO" },
      min: { value: 0, message: "Minimo 0" },
    });

    return (
      <form className="form" onSubmit={handleSubmit(handleSubmitBus)}>
        <div className="div-form">
          <label className="label-form"> Nombre: </label>

          <input
            type="text"
            name="name"
            value={bus["name"]}
            placeholder="Ingrese un nombre."
            {...name}
            onChange={(e) => {
              name.onChange(e);
              handleChangeBus(e);
            }}
          />
          {errors?.name && <span>{errors?.name?.message}</span>}
        </div>

        <div className="div-form">
          <label className="label-form"> Telefono: </label>

          <input
            type="text"
            name="phone"
            value={bus["phone"]}
            placeholder="Ingrese un telefono."
            {...phone}
            onChange={(e) => {
              phone.onChange(e);
              handleChangeBus(e);
            }}
          />
          {errors?.phone && <span>{errors?.phone?.message}</span>}
        </div>

        <div className="div-form">
          <label className="label-form"> Email: </label>

          <input
            type="text"
            name="email"
            value={bus["email"]}
            placeholder="Ingrese un email."
            {...email}
            onChange={(e) => {
              email.onChange(e);
              handleChangeBus(e);
            }}
          />
          {errors?.email && <span>{errors?.email?.message}</span>}
        </div>

        <div className="div-form">
          <label className="label-form"> Puntaje: </label>

          <input
            type="number"
            name="score"
            value={bus["score"]}
            placeholder="Ingrese un puntaje."
            {...score}
            onChange={(e) => {
              score.onChange(e);
              handleChangeBus(e);
            }}
          />
          {errors?.score && <span>{errors?.score?.message}</span>}
        </div>
        <div className="div-form">
          <label className="label-form"> Comentarios: </label>

          <input
            type="textarea"
            name="comments"
            value={bus["comments"]}
            placeholder="Ingrese un comentario."
            onChange={handleChangeBus}
          />
        </div>

        <button type="submit" className="button-form">
          {" "}
          Create Bus
        </button>
      </form>
    );
  }

  if (lang === "activities") {
    const name = register("name", {
      required: { value: true, message: "REQUERIDO" },
    });

    const image = register("image", {
      pattern: {
        value: expRegUrl,
        message: "Url no valida",
      },
    });

    const price = register("price", {
      required: { value: true, message: "REQUERIDO" },
      min: { value: 0, message: "Precio minimo $0" },
    });

    return (
      <form className="form" onSubmit={handleSubmit(handleSubmitActivity)}>
        <div className="div-form">
          <label className="label-form"> Nombre: </label>

          <input
            type="text"
            name="name"
            value={activity["name"]}
            placeholder="Ingrese un nombre."
            {...name}
            onChange={(e) => {
              name.onChange(e);
              handleChangeActivity(e);
            }}
          />
          {errors?.name && <span>{errors?.name?.message}</span>}
        </div>

        <div className="div-form">
          <label className="label-form"> Imagen: </label>

          <input
            type="text"
            name="image"
            value={activity["image"]}
            placeholder="Ingrese una Url."
            {...image}
            onChange={(e) => {
              image.onChange(e);
              handleChangeActivity(e);
            }}
          />
          {errors?.image && <span>{errors?.image?.message}</span>}
        </div>

        <div className="div-form">
          <label className="label-form"> Precio: </label>

          <input
            type="number"
            name="price"
            value={activity["price"]}
            placeholder="Ingrese un precio."
            {...price}
            onChange={(e) => {
              price.onChange(e);
              handleChangeActivity(e);
            }}
          />
          {errors?.price && <span>{errors?.price?.message}</span>}
        </div>
        <div className="div-form">
          <label className="label-form"> Puntaje: </label>

          <input
            type="text"
            name="score"
            value={activity["score"]}
            placeholder="Ingrese el puntaje."
            onChange={handleChangeActivity}
          />
        </div>
        <div className="div-form">
          <label className="label-form"> Comentarios: </label>

          <input
            type="text"
            name="comments"
            value={activity["comments"]}
            placeholder="Ingrese un comentario."
            onChange={handleChangeActivity}
          />
        </div>

        <div className="div-form">
          <select name="cityId" required defaultValue="" onChange={handleChangeActivity}>
            <option key="keycities" value="" disabled>
              Ciudad
            </option>
            {cities.map((city) => (
              <option key={city.id} value={city.id}>
                {city.name}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="button-form">
          {" "}
          Create Activity
        </button>
      </form>
    );
  }

  if (lang === "packages") {
    const name = register("name", {
      required: { value: true, message: "REQUERIDO" },
    });

    const start_date = register("start_date", {
      required: { value: true, message: "REQUERIDO" },
    });

    const end_date = register("end_date", {
      required: { value: true, message: "REQUERIDO" },
    });

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
      <div className="div">
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

            <input
              type="text"
              name="start_date"
              value={packages["start_date"]}
              placeholder="Ingrese fecha inicio."
              {...start_date}
              onChange={(e) => {
                start_date.onChange(e);
                handleChangePackages(e);
              }}
            />
            {errors?.start_date && <span>{errors?.start_date?.message}</span>}
          </div>

          <div className="div-form">
            <label className="label-form"> Fecha de finalización: </label>

            <input
              type="text"
              name="end_date"
              value={packages["end_date"]}
              placeholder="Ingrese fecha finalización."
              {...end_date}
              onChange={(e) => {
                end_date.onChange(e);
                handleChangePackages(e);
              }}
            />
            {errors?.end_date && <span>{errors?.end_date?.message}</span>}
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
              {business.map((busi) => (
                <option key={busi.id} value={busi.id}>
                  {busi.name}
                </option>
              ))}
            </select>
          </div>

          <div className="div-form">
            <select
              name="cityId"
              defaultValue=""
              onChange={handleChangePackages}
              required
            >
              <option key="keycities" value="" disabled>
                Ciudad
              </option>
              {cities.map((city) => (
                <option key={city.id} value={city.id}>
                  {city.name}
                </option>
              ))}
            </select>
          </div>

          <div className="div-form">
            <select
              name="hotelId"
              defaultValue=""
              onChange={handleChangePackages}
            >
              <option key="keyhotels" value="" disabled>
                Hotel
              </option>
              {hotels.map((hotel) => (
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
                defaultValue={[]}
                onChange={handleChangePackages}
              >
                <option key="keyactivity" value={[]}>
                  Ninguna
                </option>
                {activities.map((activity) => (
                  <option value={activity.name} key={activity.id}>
                    {activity.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <ul>
                {packages.activity.map((activ) => (
                  <li style={{ listStyle: "none" }} key={activ}>
                    {" "}
                    {activ}
                    <button
                      type="button"
                      key={activ}
                      onClick={() => handleDelete(activ)}
                    >
                      x
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <button type="submit" className="button-form">
            Crear Paquete
          </button>
        </form>
      </div>
    );
  }
}

export const CreateForm = ({ word }) => {
  const models = [
    "Hotel",
    "Plattform",
    "City",
    "Business",
    "Activity",
    "packages",
  ];
  console.log(word);
  const [lang, setLang] = React.useState(word);
  const [boton, setButton] = React.useState(false);
  console.log(lang, boton);

  // function handleChange(event) {

  //   setLang( (event.target.value));
  //   setButton(models.includes(lang)?true:false)
  // }

  return (
    <div>
      {/* <input value={lang}  onChange={handleChange}/>
    
    <button onClick={()=>{setButton(models.includes(lang)?true:false)}}>Go</button>
    {boton && models.includes(lang)?<Ejemplo lang={lang}/>: ''}

    <Link to ="/admin"> Volver</Link> */}
      <Ejemplo lang={word} />
    </div>
  );
};

{
  /* <form onSubmit={handleSubmit}>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Name</label>
      <input class="form-control" type="text"
              name="name"
              value={packages["name"]}
              onChange={handleChange} id="inputEmail4" placeholder="Nombre"/>
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Fecha de inicio</label>
      <input type="text"
              name="start_date"
              value={packages["start_date"]}
              onChange={handleChange}class="form-control" id="inputPassword4" placeholder="Fecha"/>
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Fecha de finalizacion</label>
    <input type="text"
              name="end_date"
              value={packages["end_date"]}
              onChange={handleChange} class="form-control" id="inputAddress" placeholder="Fecha"/>
  </div>
  <div class="form-group">
    <label for="inputAddress2">Precio</label>
    <input  type="number"
              name="price"
              value={packages["price"]}
              onChange={handleChange} class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">Descuento</label>
      <input   type="number"
              name="discount"
              value={packages["discount"]}
              onChange={handleChange} class="form-control" id="inputCity"/>
    </div>
    <div class="form-group col-md-4">
      <label for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Stock</label>
      <input   type="number"
              name="stock"
              value={packages["stock"]}
              onChange={handleChange} class="form-control" id="inputZip"/>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip"> Platform Id</label>
      <input  type="number"
              name="plattformId"
              value={packages["plattformId"]}
              onChange={handleChange} class="form-control" id="inputZip"/>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Bus Id</label>
      <input   type="number"
              name="businessId"
              value={packages["businessId"]}
              onChange={handleChange} class="form-control" id="inputZip"/>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">City Id</label>
      <input  type="number"
              name="cityId"
              value={packages["cityId"]}
              onChange={handleChange} class="form-control" id="inputZip"/>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Hotel Id</label>
      <input  type="number"
              name="hotelId"
              value={packages["hotelId"]}
              onChange={handleChange} class="form-control" id="inputZip"/>
    </div>
    <div class="form-group col-md-2">
      <label for="inputZip">Activity</label>
      <input   type="text"
              name="activity"
              value={packages["activity"]}
              onChange={handleChange} class="form-control" id="inputZip"/>
    </div>
  </div>
  {/* <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck">
      <label class="form-check-label" for="gridCheck">
        Check me out
      </label>
    </div>
  </div> */
}
//   <button type="submit" class="btn btn-primary">Create Package</button>
// </form> */}

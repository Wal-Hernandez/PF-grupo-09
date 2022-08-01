import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { putPackage } from "../../../redux/actions/putPackage";
export const PutPackageForm = ({ pack }) => {
  const dispatch = useDispatch();
  const [packages, setPackages] = React.useState({
    start_date: pack.start_date,
    end_date: pack.end_date,
    name: pack.name,
    price: pack.price,
    discount: pack.discount,
    stock: pack.stock,
    plattformId: pack.plattformId,
    businessId: pack.businessId,
    cityId: pack.cityId,
    hotelId: pack.hotelId,
    activity: [],
  });
  console.log(packages);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function TransformData(x) {
    return x.split(",");
  }

  function handleChange(event) {
    if (event.target.name === "activity") {
      setPackages({
        ...packages,
        [event.target.name]: TransformData(event.target.value),
      });
      return;
    }
    setPackages({ ...packages, [event.target.name]: event.target.value });
  }

  function handleSubmitPackage() {
    //e.preventDefault(); // para que era esto?
    dispatch(putPackage(pack.id, packages));
  }

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
    max: { value: 100, message: "Descuento maximo 100%" },
  });

  const stock = register("stock", {
    required: { value: true, message: "REQUERIDO" },
  });

  const plattformId = register("plattformId", {
    required: { value: true, message: "REQUERIDO" },
  });

  const businessId = register("businessId", {
    required: { value: true, message: "REQUERIDO" },
  });

  const hotelId = register("cityId", {
    required: { value: true, message: "REQUERIDO" },
  });

  const cityId = register("cityId", {
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
          <input
            type="text"
            name="start_date"
            value={packages["start_date"]}
            placeholder="Ingrese fecha inicio."
            {...start_date}
            onChange={(e) => {
              start_date.onChange(e);
              handleChange(e);
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
              handleChange(e);
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
          <label className="label-form"> Id plataforma: </label>
          <input
            type="number"
            name="plattformId"
            value={packages["plattformId"]}
            placeholder="Ingrese Id plataforma."
            {...plattformId}
            onChange={(e) => {
              plattformId.onChange(e);
              handleChange(e);
            }}
          />
          {errors?.plattformId && <span>{errors?.plattformId?.message}</span>}
        </div>

        <div className="div-form">
          <label className="label-form"> Id empresa transporte: </label>
          <input
            type="number"
            name="businessId"
            value={packages["businessId"]}
            placeholder="Ingrese Id empresa."
            {...businessId}
            onChange={(e) => {
              businessId.onChange(e);
              handleChange(e);
            }}
          />
          {errors?.businessId && <span>{errors?.businessId?.message}</span>}
        </div>

        <div className="div-form">
          <label className="label-form"> Id ciudad: </label>
          <input
            type="number"
            name="cityId"
            value={packages["cityId"]}
            placeholder="Ingrese Id ciudad."
            {...cityId}
            onChange={(e) => {
              cityId.onChange(e);
              handleChange(e);
            }}
          />
          {errors?.cityId && <span>{errors?.cityId?.message}</span>}
        </div>

        <div className="div-form">
          <label className="label-form"> Id hotel: </label>
          <input
            type="number"
            name="hotelId"
            value={packages["hotelId"]}
            placeholder="Ingrese Id hotel."
            {...hotelId}
            onChange={(e) => {
              hotelId.onChange(e);
              handleChange(e);
            }}
          />
          {errors?.hotelId && <span>{errors?.hotelId?.message}</span>}
        </div>

        <div className="div-form">
          <label className="label-form"> Actividades: </label>
          <input
            type="text"
            name="activity"
            value={packages["activity"]}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="button-form">
          {" "}
          Put Package
        </button>
      </form>
    </div>
  );
};

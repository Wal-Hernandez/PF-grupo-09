import React, { useState } from "react";
import Navbar from "../Navbar";
import { useDispatch, useSelector } from "react-redux";
import { loadShopping } from "../../redux/actions/loadShopping";
import "./Profile.css";
import Reviews from "../Reviews";
export default function ProfileUser({ userlog }) {
  const dispatch = useDispatch();
  const { shopping } = useSelector((state) => state.rootReducer);
  React.useEffect(() => {
    dispatch(loadShopping(userlog?.email));
  }, [dispatch]);
  console.log(shopping);
  const [selected, setSelected] = useState("");
  const [activityId, setActivityId] = useState("");
  const [businessId, setBusinessId] = useState("");
  const [hotelId, setHotelId] = useState("");
  console.log(activityId);
  console.log(businessId);

  return (
    <div>
      <Navbar userlog={userlog} />
      {/* <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      /> */}
      <div>
        {/* <img src="img.jpg" alt="John" style={{ width: "100%" }} /> */}
        <h1 className="title">{userlog?.nombre + " " + userlog?.apellido}</h1>
        <p>Historial de Compras</p>
        {shopping.length
          ? shopping.map((data) =>
              data?.cartDetails.map((pack) => (
                <div className="user-card">
                  <p className="title">{pack.package?.name}</p>
                  <input type="checkbox" id={`spoiler${pack.id}`} />
                  <label for={`spoiler${pack.id}`}>Actividades</label>
                  <div class="spoiler">
                    {pack.package?.activities?.map((a) => (
                      <div>
                        <p className="title">
                          {a?.name}{" "}
                          {data.statusCartId === 3?<button
                            onClick={() => {
                              setActivityId(a.id);
                              setSelected("activityreviews");
                            }}
                          >
                            Evaluar
                          </button>: null}
                        </p>
                      </div>
                    ))}
                  </div>
                  <input type="checkbox" id={`spoiler${pack.id}2`} />
                  <label for={`spoiler${pack.id}2`}>Empresa</label>
                  <div class="spoiler">
                    <p className="title">{pack.package?.business?.name}</p>
                    {data.statusCartId === 3 ? (
                      <button
                        onClick={() => {
                          setBusinessId(pack.package?.business.id);
                          setSelected("businessreviews");
                        }}
                      >
                        Evaluar
                      </button>
                    ) : null}
                  </div>
                  <input type="checkbox" id={`spoiler${pack.id}3`} />
                  <label for={`spoiler${pack.id}3`}>Hospedaje</label>
                  <div class="spoiler">
                    <p className="title">{pack.package?.hotel?.name}</p>
                    {data.statusCartId === 3 ? (
                      <button
                        onClick={() => {
                          setHotelId(pack.package?.hotel.id);
                          setSelected("hotelreviews");
                        }}
                      >
                        Evaluar
                      </button>
                    ) : null}
                  </div>
                </div>
              ))
            )
          : ""}
        <p> Opiniones y Puntajes</p>
        <Reviews
          hotel={hotelId}
          activity={activityId}
          business={businessId}
          userlog={userlog}
          selected={selected}
        />
        <p>
          <button className="coment-btn">Comentario</button>
        </p>
      </div>
    </div>
  );
}

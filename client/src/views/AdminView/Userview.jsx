import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { getUserForAdmin } from "../../redux/actions/getUserByAdmin";
import {PutUserForm} from "../../views/AdminView/Forms/PutUser"
 let Userview=()=>{
const {users} = useSelector(state=>state.adminReducer)
const dispatch = useDispatch();

const [edit, setEdit] = React.useState(false);
const [pack, setPack] = React.useState({});
let setUpdate = (packs) => {
    setPack(packs)
    setEdit((edit) => !edit);

  };
  let handleReset = (e) => {
    setEdit(false);
  };

React.useEffect(()=>{dispatch(getUserForAdmin())},[])
// async function handleDelete (e) {
//     console.log(e.target.value)
//     let resp = window.confirm("Confirmar acción.");
//     if (resp){  dispatch(deleteModel(e.target.value, model));
//     } 
//     dispatchByName(model);
//   }


return(

<div>

{edit 
              ? (
                <div>
                {" "}
                <PutUserForm pack={pack}/>
                <button className="btn btn-warning" onClick={handleReset}>Volver</button>
              </div>
                ):users.length? (users.map((packs) => {
                    return (
                       
                     <div className="adminPanelColumn" key={packs.id}>
                      
                      <div className="text">
                        <h1>{packs.nombre} {packs.apellido}</h1>
                       </div>
                       
                       <div>
                         <p>{packs.id}</p>
                       </div>
                       <button onClick={() => {setUpdate(packs)}}>
                           <span class="material-symbols-outlined">
                           edit
                           </span>
                         </button>
                         <button value={packs.id}  >
                           delete
                           </button>
                       
                       </div>

                       
                     )})):''}
    <button>Users</button>
</div>


)
}
export default Userview
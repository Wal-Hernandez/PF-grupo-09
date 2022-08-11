import React, { useState } from "react";
import { Container, FormGroup, Input } from "reactstrap";

export const Imagenes = ({setUrl}) => {

    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);

    const uploadImage = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append("file", files[0]);
        data.append("upload_preset", "pf_travel");
        setLoading(true);
        const res = await fetch(
            "https://api.cloudinary.com/v1_1/dwzqzzsis/image/upload", {
            method: "POST",
            body: data,

        }
        )
        const file = await res.json();
        setImage(file.secure_url)
        setUrl(file.secure_url)
        setLoading(false)
        console.log(file.secure_url)
    }

    return (
        <div>
            <Container style={{ textAlign: "center" }}>
                <h5>
                    Subir imagenes
                </h5>
                <FormGroup>
                    <Input
                        type="file"
                        name="file"
                        placeholder="Subi tu imagen aqui"
                        onChange={uploadImage} />
                    {loading ? (<h5>Cargando imagenes...</h5>) : (<img src={image} style={{ width: "300px" }} />)}
                </FormGroup>
            </Container>
        </div>
    )
}
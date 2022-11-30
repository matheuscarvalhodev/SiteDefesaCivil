import axios from 'axios';
import { useState, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import styles from './CadastroNoticia.module.css'
import SideNavBar from "componentes/SiderBar";
import Rodape from "componentes/Rodape";

//Firebase
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { storage } from './firebase';


function CadastroNoticia() {
    const [formValues, setFormValues] = useState({})

    const [imgURL, setImageURL] = useState("");
    const [progress, setProgress] = useState(0);
    const [image, setImage] = useState('');
    //---------------------------------
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        // console.log("***HandleInputChange ", name, value);
        setFormValues({ ...formValues, [name]: value });
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        

        const titulo = data.tituloNoticia;
        const corpo = data.corpoDaNoticia;
        console.log(titulo)

        if ((titulo === '' || titulo == null) || (corpo === '' || corpo == null)) {
            alert("Nenhum campo pode ficar em branco!")
        }
        else {
            if ((image === null || image === '')|| image === undefined) {
                // const formData = new FormData(e.target);
                // const data = Object.fromEntries(formData);
                // console.log("HandleSubmit ", data);
                // const titulo = data.tituloNoticia;
                // const corpo = data.corpoDaNoticia;
                // const dataPublicacao = new Date();

                // axios.post("http://localhost:5000/noticias", { titulo, corpo, dataPublicacao })

                alert("Você precisa adicionar um arquivo de imagem!");
                // window.location.reload();
                return;
            }
            else {
                const storageRef = ref(storage, `images/${image.name}`)
                const uploadTask = uploadBytesResumable(storageRef, image)

                uploadTask.on(
                    "state_changed",
                    snapshot => {
                        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                        setProgress(progress);
                    },
                    error => {
                        alert(error)
                    },
                    () => {
                        getDownloadURL(uploadTask.snapshot.ref).then(url => {
                            setImage(url)

                            const urlImagem = url;
                            const dataPublicacao = new Date();

                            axios.post("http://localhost:3000/noticias", { titulo, corpo, urlImagem, dataPublicacao })

                            alert("Notícia enviada!");
                            window.location.reload();
                        })
                    }
                )
            }
        }

    };

    console.log(image)

    return (
        <div>
            <SideNavBar cor={"#f1a014"} titulo={"Defesa Civil"}/>
            <div className={styles.principal}>
                <form onSubmit={handleSubmit} className="container">
                    {/* Título da página */}
                    <h2 className={styles.tituloCadastroNoticia}>Cadastramento de notícias</h2>
                    <div className={styles.titulo}>
                        <h3 className={styles.tituloNoticia}>Título</h3>
                        <input type="text" name="tituloNoticia" onChange={handleInputChange} value={formValues.tituloNoticia || ''} className="form-control bg-light" placeholder="" />
                    </div>
                    <div className={styles.corpo}>
                        <h3 className={styles.tituloNoticia}>Corpo do texto</h3>
                        <textarea name="corpoDaNoticia" value={formValues.corpoDaNoticia || ''} onChange={handleInputChange} className="form-control bg-light" id="exampleFormControlTextarea1" rows="10" />
                    </div>
                    <div className={styles.inputImg}>
                    <h3>Anexe uma imagem</h3>
                    <input type="file" accept="image/*" onChange={(e) => {
                                            e.preventDefault()
                                            setImage(e.target.files[0])
                    }} />
                    
                    </div>
                    <button type="submit" className="btn btn-secondary btn-lg" >Publicar</button>
                </form>
            </div>
            <Rodape/>
        </div>

    )
}

export default CadastroNoticia;
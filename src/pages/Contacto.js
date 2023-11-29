import '../css/home.css'
import '../css/contacto.css'
const Contacto = (props)=>{
    return(
        <main class="contenedor">
        <div class="formulario">
            <h2>Complete el formulario</h2>
            <form action="">
                <p>
                    <label for="">Nombre</label>
                    <input type="text" required/>
                </p>
                <p>
                    <label for="">Email</label>
                    <input type="email"/>
                </p>
                <p>
                    <label for="">Telefono</label>
                    <input type="text"/>
                </p>
                <p>
                    <label for="">Mensajes</label>
                    <textarea></textarea>
                </p>
                <p> <input type="submit" value="Enviar"/></p>
            </form>
        </div>
        <div class="datos">
            <h2>Otras vias de comunicacion</h2>
            <p>Tambien contactate con nosotros por</p>
            <ul>
                <li>+54 1595689465</li>
                <li>Email: Pancracio@gmail.com</li>
                <li>Facebook</li>
                <li>Twitter</li>
            </ul>
        </div>
        <div className="mapa">
            <h1>Nuestra Ubicación</h1>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22085.902842178853!2d-58.44877370016858!3d-34.62718860227366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb1bf49f69c1%3A0xafef701e0e0bce21!2sAeropark!5e0!3m2!1ses-419!2sar!4v1701169925930!5m2!1ses-419!2sar" style={{width:600, height:450, border:0 }}> </iframe>
        </div>


    </main>
    )
}

export default Contacto;
import '../css/home.css'
const HomePage =(props)=>{
    return(
        <body>
    <main class="holder">
        <div class="columnas">
            <section class="bienvenidos">
                <h2>Bienvenidos</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta natus quidem recusandae molestiae atque aliquam at officia quisquam ipsum debitis voluptatibus iste vitae, quos asperiores eligendi! Quis iste neque explicabo.</p>
            </section>
            <section class="testimonios">
                <h2>Testimonios</h2>
                <div class="testimonio">
                    <span class="cita">Simplemente Excelente</span>
                    <span class="autor">Juan Gomez</span>

                </div>

            </section>


        </div>
        <div>
            <section class="titulo_promo">
                <h2>Aprovecha nuestros descuentos</h2>
                <p>¡Temporada alta 2023!</p>

            </section>

            <section class="promos">
                <div>
                    <h3>Viajes al exterior</h3>
                    <img src="/images/alex-azabache-x5KZMQ_RPXc-unsplash.jpg" alt="exterior" width="200"/>
                </div>
                <div>
                    <h3>Viajes al interior</h3>
                    <img src="/images/sacha-verheij-5bwgW8_9OPs-unsplash.jpg" alt="interior" width="200"/>
                </div>
                <div>
                    <h3>Promo vacaciones</h3>
                    <img src="/images/tom-barrett-M0AWNxnLaMw-unsplash.jpg" alt="vacaciones" width="200"/>

                </div>
            </section>
        </div>
        <div>
            <section>
                <div class="alojamiento">
                    <h2>¿Necesitas alojamiento?</h2>
                    <p>En TransporteX contamos con la mejor disposición de hoteles del país</p>
                    <img src="images/05.jpg" alt=""/>
                    
                </div>
            </section>
        </div>
    </main>
    </body>
    )
}

export default HomePage;
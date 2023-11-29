import '../css/ayuda.css'
const Ayuda =(props)=>{
    return(
        <main class="holder ayuda">
        <section class="titulos">
            <h2>¿Cómo podemos ayudarte?</h2>
            <p>En TransporteX brindamos el mayor confort y comodidad para nuestros clientes.</p>
            <div class="ayudas">
                <div class="ayuda">
                    <h3>¿Cómo comprar en TransporteX?</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat maxime quas soluta eos vitae itaque velit eaque corporis iste, repellat odio explicabo sunt odit provident! Non provident tenetur maxime ad!</p>
                </div>

                <div class="ayuda">
                    <h3>Documentación necesaria</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam praesentium, sapiente earum eligendi eos fuga aspernatur quis sunt doloribus voluptas modi molestias ea incidunt obcaecati id maxime repellendus, neque dolor?</p>
                </div>

                <div class="ayuda">
                    <h3>Cancelaciones</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit quod molestiae impedit asperiores atque facere officia maxime quas dolores expedita, laboriosam quia nobis cum qui a. Eligendi magnam officia dolorum.</p>
                </div>

                <div class="ayuda">
                    <h3>¿Por qué elegirnos?</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus optio recusandae adipisci culpa dignissimos dolorem, inventore saepe vitae sit commodi nostrum possimus amet! Tempore blanditiis, facere reiciendis eaque similique harum.</p>
                </div>
            </div>
            <div class="eleccion">
                <h2>¿Por qué elegirnos como tu agencia de viajes?</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, ullam! Ipsam voluptates repellat nemo sequi porro, quae ea adipisci. Voluptatum sequi, quis autem labore eveniet repellendus sint. Obcaecati, unde velit.</p>
                
                <h2>Comprá tu viaje al mejor precio</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptate itaque quod nostrum veniam, adipisci, nulla deserunt rerum sed ut facere doloribus quas doloremque? Et magni consequatur totam nihil velit!</p>
            </div>

        </section>
        <section class="consultas">
            <div class="consulta">
                <h2>¿Tu consulta no está aquí?</h2>
                <p>Envíanos tu consulta y responderemos a la brevedad</p>
                <form action="">
                    <p>
                        <label for="">Email</label>
                        <input type="email"/>
                    </p>
                    <p>
                        <label for="">Escribe tu consulta</label>
                        <textarea></textarea>
                    </p>
                    <p> <input type="submit" value="Enviar"/></p>
                </form> 
            </div>
            

        </section>
        
    </main>
    )
}

export default Ayuda;
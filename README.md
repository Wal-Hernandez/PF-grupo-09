# PF-grupo-09

Presentation
1) Idea
El presente proyecto es una página web de tipo e-commerce que tiene como finalidad 
la posibilidad de ofrecer y vender paquetes turísticos a una clientela dentro de la 
Argentina, que mantenga un diseño simple e intuitivo para el usuario
En principio, la página consistirá de un home que mostrara paquetes turisticos, así
como las opciones de filtrar y ordenar viajes. También tendrá la opción de redirigirse a 
distintos planes de viajes y otras secciones como preguntas frecuentes, zonas de 
reservas, categorías y demás.
También queremos crear un usuario a registrar en la página: Administrador (Dueño)
que pueda manipular los paquetes ofrecidos. Es necesario aclarar que no hará falta 
registrarse para ver los planes que se ofrecen.
Para el sector de compra de planes, se implementará un sistema de pago por medio de 
un formulario donde se introducirán los datos de pago. Tras llenar el formulario y el 
pago haya sido realizado con éxito, el usuario recibirá un comprobante a través de 
correo electrónico.
2) Tecnologías a Utilizar (en discusión)
Por su parte, buscaremos mantener las mismas tecnologías empleadas hasta ahora en 
el curso (PostresSQL, Sequelize, Node.js, React y Express) además de incorporar
Firebase para que el administrador se pueda registrar y Mercado Pago/ Stripe como 
pasarela de pagos.
3) User Stories , SP y Priorización
I - Como Usuario, quiero poder ver los paquetes turísticos en el Home (Para poder 
seleccionarlos.) - 5SP (Alto Valor, Baja Comp)
II - Como Usuario, quiero poder ordenar los planes por precios. (Para una búsqueda más 
eficiente) - 7SP (Alto Valor, Baja Comp)
III - Como Usuario, quiero poder filtrar planes/paquetes por fecha, viajes próximos(Para 
saber que viajes me convienen)– 7SP (Alto Valor, Baja Comp)
IV- Como Usuario, quiero poder ver los detalles de los paquetes. (Para ver mejor si es el 
servicio que me interesa) – 3SP (Alto Valor, Baja Comp)
V- Como Admin quiero poder crear, leer, editar y borrar paquetes con un formulario(Para 
poder dar una oferta)- 15SP(Alto Valor, Alta Comp)
VI – Como Admin, quiero poder Logearme y Deslogearme de mi cuenta(Para acceder al 
panel de administrador). – 8SP (Alto Valor, Baja Comp)
VII- Como Admin quiero poder ver los detalles de las ventas. (Para tener un registro de las 
ventas) – 9SP (Bajo Valor, Alto Comp)
VIII- Como Usuario, quiero poder ver una zona de About (Para poder ver información de la 
empresa)- 3SP (Bajo Valor, Baja Comp)
IX-Como Usuario, quiero recibir la confirmación de compra a través de email (Para poder 
estar seguro de que se hizo la compra) -10SP (Alto Valor, Alta Comp)
X - Como Usuario, quiero poder utilizar MercadoPago/Stripe, y tarjeta de débito/crédito
para la realización de compra del paquete (Para poder hacer la compra) – 17SP (Alto 
Valor, Alta Comp)
XI - Como Usuario, quiero poder dar review a los viajes. (Para tener una lista de los 
productos que estoy interesado) – 4SP(Bajo Valor, Alta Comp)
XII-Como Usuario, quiero ver la locación del hotel donde me voy a hospedar en un 
mapa(Para ver si estoy en un sitio acorde mis intereses)-8 SP (Bajo Valor, Alta Comp)
XIII- Como Admin, quiero agregar y seleccionar los hoteles que se ofrecen (Para dar 
variedad a las ofertas)- 5SP (Alto Valor, Baja Comp)
XIV- Como Admin, quiero crear, editar y eliminar actividades que se ofrecen por paquete (
en función del destino) (Para dar más variedad a las ofertas)-15SP (Alto Valor, Alta Comp)
XV- Como Usuario, quiero poder contactar a la empresa a través de un formulario o de un 
contacto de Whatsapp/número de teléfono (Para hacer consultas particulares)- 3SP (Alto 
Valor, Baja Comp)

Fived Importados - Tienda Ecommerce - React Native

Es una aplicación de una tienda que ofrece productos de primera marca, como Apple,
con una experiencia super facil y entretenida para que puedas obtener tu producto que tanto buscas tener.


Funcionalidades Principales


Pantalla de Cuenta

  Acceso seguro: Solo los usuarios autenticados pueden acceder a la pantalla de perfil y realizar compras.
    
  Información del usuario: Muestra detalles del usuario, como nombre y dirección.

Autenticación con Firebase

  Utiliza el sistema de autenticación de Firebase para gestionar el acceso de usuarios.
    
  Permite a los usuarios iniciar sesión y registrarse de manera segura.

Pantalla de Categorías

  Muestra una selección de categorías en tarjetas.
    
  Al hacer clic en una categoría, se navega a la pantalla de productos correspondiente.

Pantalla de Productos

   Cuenta con vista a todos los productos disponibles en la tienda, con sus respectivas fotos, nombres.
   Además un buscador para poder filtrar y encontrar más rapido lo que deseas.
   Haciendo click en un producto, te lleva a la pantalla del detalle del producto.

Pantalla de Detalles del Producto

  Descripcion del producto
  Precio y stock disponible de cada uno de ellos
  Se puede agregar al carrito 

Navegación Inferior

  Pestaña 1 - Productos: Categorías y productos (stack principal).
  Pestaña 2 - Carrito: Detalles del carrito de compras con resumen y botón para finalizar la orden.
  Pestaña 3 - Órdenes: Historial de órdenes realizadas.
  Pestaña 4 - Perfil: Información del usuario, ubicación y carga de imagen de perfil.

Tecnologías Utilizadas
    Firebase Authentication: Implementa el sistema de autenticación de Firebase para gestionar la seguridad de la aplicación.
    React Native Navigation Stack: Gestiona la navegación entre pantallas.
    React Native Navigation Buttom tap: Gestiona la navegación entre pestañas.
    Expo-Location: Permite acceder y gestionar la ubicación del usuario.
    Expo-Picker-Image: Facilita la carga de imágenes de perfil.
    Redux: Centraliza y gestiona el estado de la aplicación.
    RTK Query y Firebase: Realiza operaciones de lectura/escritura en la base de datos.

Instalación

  Clona el repositorio: git clone https://github.com/tu-usuario/tu-aplicacion.git
  Instala las dependencias: npm install
  Configura las claves de API para servicios externos (Expo-Location, Firebase, etc.).
  Configura las credenciales de Firebase en tu proyecto.
  Ejecuta la aplicación: npm start

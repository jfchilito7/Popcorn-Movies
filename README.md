# Popcorn Movies
Popcorn Movies es una aplicación web que permite a los usuarios descubrir películas populares a través de una interfaz visual y minimalista. El proyecto se integra con una API externa para mostrar información actualizada de películas.

# Video - Imagen
Click para ver el video
[![Watch the video](assets/docs/img1.png)](https://youtu.be/3LcBXYVA_WE)
![Descripción](assets/docs/img2.png)

# Características
- Interfaz sencilla y amigable.
- Galería de pósteres de películas populares.
- Integración con una API de películas para información en tiempo real.

 # Tecnologías Utilizadas
- HTML5
- CSS3
- JavaScript (ES6+)
- API de películas

# Instalación

- Clona este repositorio:

```bash
  git clone https://github.com/jfchilito7/Popcorn-Movies.git

```
- Navega al directorio del proyecto:

```bash
cd popcorn-movies

```
- Abre el archivo ```index.html``` en tu navegador.

# Uso
- La aplicación muestra una lista de películas populares.
- Haz clic en cualquier película para ver detalles adicionales.

# API
Este proyecto se conecta a una API externa para obtener la lista de películas. Asegúrate de tener una clave API válida y agregarla en el archivo index.js o en la configuración de tu entorno.

## Ejemplo de uso de la API:
```
fetch(`https://api.themoviedb.org/3/movie/popular?api_key=TU_API_KEY`)
  .then(response => response.json())
  .then(data => {
    // Maneja la data
  });
```
## Contribuciones
Las contribuciones son bienvenidas. Si tienes sugerencias o mejoras, abre un issue o envía un pull request.

## Licencia
Este proyecto está licenciado bajo la MIT License. Para más información, consulta el archivo LICENSE.

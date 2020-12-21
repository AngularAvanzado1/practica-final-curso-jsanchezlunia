# PracticaCursoAngular

## Aclaraciones

La práctica realizada aborda todos los requisitos, tanto funcionales como no funcionales, incluyendo en los NO funcionales los requisitos tanto mínimos, como los propuestos como Plus, y Extra.
A continuación algunas aclaraciones sobre algunos de los puntos, por si sirve de ayuda para su localización en el proyecto y su comprensión.

- Utilizado patrón _Container Presenter_:
    - Container: _ListadoRegionesGeograficasComponent_
    - Presenter: _RegionComponent_ (componente presentador para cada una de las regiones del listado)
    
- Utilizado el sistema de directivas:
    - `[pcaRegionesUbicacionActual]`, que pinta el background del elemento HTML de otro color si la región continental corresponde a nuestra ubicación actual. La ubicación actual ahora mismo es Europa "a piñón", pero quedaría delegado a esta directiva implementar una funcionalidad más avanzada y que por ejemplo contraste con la ubicación real.  

- _**WebComponent**_ `<wbde-country>` generado basado en el componente `<country>`.

- Aplicación web estándar (sin Angular) que utiliza el WebComponent `<wbde-country id="ESP"></wbde-country>`:
    - _vanilla_. Contiene además un input field para introducir otro código de país y un pequeño JavaScript para darle vida a esta aplicación estándar para que permita cambiar de país al clicar un botón, pasándole al `id` del WebComponent el código de país introducido en el input.
    
- Landing page _SEO friendly_ generada con **_SSR_** que muestre la lista de continentes:
    - script `start:ssr`.
    
## Pendiente

- Revisar Container Presenter
- Revisar Redux
- Revisar testing con Redux

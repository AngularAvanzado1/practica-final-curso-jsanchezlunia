# PracticaCursoAngular

## Aclaraciones

La práctica realizada cumple todos los requisitos, tanto funcionales como no funcionales, incluyendo en los NO funcionales los requisitos tanto mínimos, como los propuestos como Plus, y Extra.

- Utilizado patrón _Container Presenter_:
    - Container: _ListadoRegionesGeograficasComponent_
    - Presenter: _RegionComponent_

- _**WebComponent**_ `<wbde-country>` generado basado en el componente `<country>`.

- Aplicación web estándar (sin Angular) que utiliza el WebComponent `<wbde-country id="ESP"></wbde-country>`:
    - _vanilla_. Contiene además un input field para introducir otro código de país y un pequeño JavaScript para darle vida a la aplicación estándar para que permita cambiar de país, pasándole al `id` del WebComponent el código de país introducido.

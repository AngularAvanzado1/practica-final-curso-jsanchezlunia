import {InfoPageResultsInterface} from '@practica-final-curso-angular-jsanchezlunia/shared/api-banco-mundial';
import {PaisInterface} from './pais.interface';

export interface ListadoPaisesRegionInterface {
  infoPageResults: InfoPageResultsInterface;
  paises: PaisInterface[];
}

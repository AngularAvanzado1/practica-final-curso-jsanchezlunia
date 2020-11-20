import {
  InfoPageResultsInterface,
  RegionGeograficaContinentalInterface
} from '@practica-curso-angular/shared/api-banco-mundial';

export interface ListadoRegionesGeograficasInterface {
  infoPageResults: InfoPageResultsInterface;
  regionesGeograficasContinentales: RegionGeograficaContinentalInterface[]
}

export interface PaisInterface {
  id: string;
  name: string;
  iso2Code: string;
  longitude: string;
  latitude: string;
  capitalCity: string;
  region: {
    id: string,
    iso2code: string,
    value: string
  };
  adminregion: {};
  incomeLevel: {};
  lendingType: {};
}

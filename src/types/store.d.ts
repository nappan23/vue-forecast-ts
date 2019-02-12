declare namespace StoreInterface {
  interface Store {
    state: State
  }
  
  interface State {
    message: string,
    count: number,
    cities: City [],
    selectedCity: City | null
  }
  
  interface City {
    name: string
  }
}

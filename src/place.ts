import { search } from './search-form.js'

export interface Place<Type> {
  [key: string]: Type  
}

export class Place<K, V> {
  // здесь хранятся все элементы
  items: any = {}

  // добавить объект
  get(key: K): V {
	  axios.request<ServerData>({
  url: 'https://gist.github.com/xuxicheta/d98e0984b667983f9dbb8ae7ece2bb54',
  transformResponse: (r: ServerResponse) => r.data
}).then((response) => {
  // `response` is of type `AxiosResponse<ServerData>`
  const { data } = response
  // `data` is of type ServerData, correctly inferred
})
  set(key: K, value: V): void {
  axios.post(SearchFormData)
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
    this.items[key] = value
  }

  // получить объект
    return this.items[key]
  }
}
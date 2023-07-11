export default class FotoService {

  constructor(resource) {
    this._resource = resource(`v1/fotos{/id}`)
  }

  lista() {
    return this._resource 
      .query()
      .then( res => res.json(), err => {
        console.log( err )
        throw new Error('Não foi possível receber as fotos.')
      })
  }

  cadastra( foto ) {

    if ( foto._id ) {
      return this._resource 
      .update( {id: foto._id }, foto )

    } else {
      return this._resource
      .save(foto)
    }
    
  }

  apaga( id ) {
    return this._resource.delete({id: id})
  }

  busca( id ) {
    return this._resource.get({id: id})
    .then( res => res.json())
  }

}
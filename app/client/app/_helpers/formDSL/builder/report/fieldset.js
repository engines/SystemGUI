app.formDSL.builder.report.fieldset = ( r, fieldsetSpec, params ) => {

  if ( fieldsetSpec.body ) {
    let componentsSpec = fieldsetSpec.body || []
    let result = []
    for ( let i in componentsSpec ) {
      result.push( app.formDSL.builder.report.component( r, componentsSpec[i] ) )
    }
    fieldsetSpec.body = result
  }

  if ( !fieldsetSpec.label ) fieldsetSpec.label = false

  return r.fieldset( fieldsetSpec )

}

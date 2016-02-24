config = ->

  @get '/projects', (schema, request) =>
    slug = request.queryParams.slug

    # Individual record
    if slug
      projects = schema.project.where({slug: slug})
      if projects.length
        projects[0]
      else
        return new Response(404, {'Content-Type': 'application/json'}, { errors: [] })

    # All records
    else
      schema.project.all()

`export default config`

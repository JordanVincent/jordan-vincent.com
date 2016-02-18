config = ->

  @get '/projects', (schema, request) =>
    slug = request.queryParams.slug

    # Individual record
    if slug
      projects = schema.project.where({slug: slug})
      projects[0] if projects.length

    # All records
    else
      schema.project.all()

`export default config`

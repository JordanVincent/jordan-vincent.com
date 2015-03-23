Transitions = ->
  @transition(
    @fromRoute(null,'about', 'influences', 'projects', 'projects.index', 'project', 'contact'),
    @toRoute('about', 'influences', 'projects', 'projects.index', 'project', 'contact'),
    @use('crossFade'),
    @reverse('crossFade')
  )

  @transition(
    @withinRoute('project'),
    @use('crossFade')
  )

`export default Transitions;`

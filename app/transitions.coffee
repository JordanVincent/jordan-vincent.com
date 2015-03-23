Transitions = ->
  @transition(
    @fromRoute(null, 'about', 'influences', 'projects', 'contact'),
    @toRoute('about', 'influences', 'projects', 'contact'),
    @use('crossFade'),
    @reverse('crossFade')
  )

  @transition(
    @fromRoute('projects.index'),
    @toRoute('project'),
    @use('crossFade'),
    @reverse('crossFade')
  )

  @transition(
    @withinRoute('project'),
    @use('crossFade')
  )

`export default Transitions;`

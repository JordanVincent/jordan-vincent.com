Transitions = ->
  @transition(
    @fromRoute(null, 'index', 'influences', 'projects', 'contact'),
    @toRoute('index', 'influences', 'projects', 'contact'),
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

  @transition(
    this.hasClass('prototype-carousel'),
    @use('crossFade')
  )

`export default Transitions;`

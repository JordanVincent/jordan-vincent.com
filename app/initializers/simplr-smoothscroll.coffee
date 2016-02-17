initialize = ->
  platform = navigator.platform.toLowerCase()
  userAgent = navigator.userAgent.toLowerCase()

  # Only enable simplr-smoothscroll for webkit browsers on windows and linux
  if (platform.indexOf('win') == 0 || platform.indexOf('linux') == 0) && (userAgent.indexOf('webkit') != -1)
    $.srSmoothscroll(
      step: 100,
      speed: 100,
      ease: 'swing',
      target: $('body'),
      container: $(window)
    )


initializer =
  name: 'simplr-smoothscroll'
  initialize: initialize

`export default initializer`
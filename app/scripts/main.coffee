class App

  constructor: ->
    $(document).ready =>
      @fitScreen()
      @initSmoothScroll()
      @initToggleNavigation()
      @runHeaderCarousel()
      @activateNavigationLinks()

    $(window).resize =>
      @fitScreen()

    $(document).scroll =>
      @displayNavigation()

  fitScreen: ->
    height = $(window).height()
    $('.fullscreen').each (index, element) ->
      $el = $(element)
      $el.height('auto')
      if $el.height() > height then $el.height('auto') else $el.height(height)

  initSmoothScroll: ->
    $('a').smoothScroll
      offset: -$('#nav').outerHeight()

  initToggleNavigation: ->
    $nav = $('#nav')

    closeNav = ->
      $nav.addClass('closed')

    openNav = ->
      $nav.removeClass('closed')

    $nav.find('.menu-btn').click ->
      if $nav.hasClass('closed') then openNav() else closeNav()

    $nav.find('li a').click ->
      closeNav()

  runHeaderCarousel: ->
    $carouselItems = $('#header .carousel .carousel-item')
    carouselIndex = 0

    $($carouselItems[carouselIndex]).show()

    setInterval ->
      carouselIndex = ($carouselItems.length-1) if --carouselIndex < 0
      $carouselItems.filter(':visible').fadeOut 800, ->
        $($carouselItems[carouselIndex]).fadeIn(800)
    , 4000

  displayNavigation: ->
    scrollY = $(document).scrollTop()
    headerHeight = $('#header').height()
    navHeight    = $('#nav').outerHeight()

    navTop = if scrollY > (headerHeight-2*navHeight) then 0 else -navHeight
    $('#nav').css('top',navTop)

  activateNavigationLinks: ->
    $links     = $('#nav li a')
    $sections  = $('section')
    $document  = $(document)
    navHeight  = $('#nav').outerHeight()

    isSectionPassed = ($section) ->
      scrollY    = $document.scrollTop()
      sectionTop = Math.round($section.position().top)
      sectionTop <= scrollY + navHeight

    passedSections = ->
      $sections.filter (index, section) ->
        isSectionPassed $(section)

    activeSection = ->
      passed = passedSections()
      sorted = passed.sort (sectionA, sectionB) ->
        sectionATop = $(sectionA).position().top
        sectionBTop = $(sectionB).position().top
        sectionBTop - sectionATop
      sorted[0]

    isSessionLink = ($link, $session) ->
      $link.attr('href') is '#' + $session.attr('id')

    sessionLink = ($session) ->
      $links.filter (index, link) ->
        isSessionLink $(link), $session

    activateLink = ->
      $activeSection = $(activeSection())
      $links.removeClass('active')

      link = sessionLink $activeSection
      $(link).addClass('active')

    $document.scroll ->
      activateLink()


app = new App
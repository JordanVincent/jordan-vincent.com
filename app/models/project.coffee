`import DS from "ember-data";`

Project = DS.Model.extend
  name: DS.attr()
  slug: DS.attr()

  category: DS.attr()
  position: DS.attr()

  color: DS.attr()
  logo: DS.attr()
  coverImage: DS.attr()

  date: DS.attr()

  summary: DS.attr()
  intro: DS.attr()
  description: DS.attr()

  backgroundColorStyle: ( ->
    "background-color: #{@get('color')};".htmlSafe()
  ).property('color')

  isColorDark: ( ->
    tinycolor(@get('color')).isDark()
  ).property('color')

`export default Project;`
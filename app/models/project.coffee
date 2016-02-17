`import DS from "ember-data";`

Project = DS.Model.extend
  name: DS.attr()
  rank: DS.attr()
  color: DS.attr()
  logo: DS.attr()
  date: DS.attr()
  summary: DS.attr()
  intro: DS.attr()
  description: DS.attr()
  position: DS.attr()
  coverImage: DS.attr()

`export default Project;`
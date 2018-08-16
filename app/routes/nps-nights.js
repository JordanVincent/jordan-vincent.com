import Ember from 'ember';
const PARKS = [
  {"id":"yell","name":"Yellowstone","state":"Wyoming, Montana, Idaho","group":"mountain","maxCount":134150.98589775857},
  {"id":"yose","name":"Yosemite","state":"California","group":"mountain","maxCount":106768.8},
  {"id":"grca","name":"Grand Canyon","state":"Arizona","group":"desert","maxCount":77126.8},
  {"id":"grte","name":"Grand Teton","state":"Wyoming","group":"mountain","maxCount":60410},
  {"id":"olym","name":"Olympic","state":"Washington","group":"mountain","maxCount":46050.63784176621},
  {"id":"glac","name":"Glacier","state":"Montana","group":"mountain","maxCount":41841},
  {"id":"acad","name":"Acadia","state":"Maine","group":"continental","maxCount":38096.842876920615},
  {"id":"grsm","name":"Great Smoky Mountains","state":"Tennessee, North Carolina\t","group":"mountain","maxCount":36670.8},
  {"id":"sequ","name":"Sequoia","state":"California","group":"mountain","maxCount":35143.4},
  {"id":"josh","name":"Joshua Tree","state":"California","group":"desert","maxCount":33898.4},
  {"id":"romo","name":"Rocky Mountain","state":"Colorado","group":"mountain","maxCount":32047.2},
  {"id":"kica","name":"Kings Canyon","state":"California","group":"mountain","maxCount":30495},
  {"id":"mora","name":"Mount Rainier","state":"Washington","group":"mountain","maxCount":26190},
  {"id":"shen","name":"Shenandoah","state":"Virginia","group":"mountain","maxCount":21360.6},
  {"id":"deva","name":"Death Valley","state":"California","group":"desert","maxCount":19620.006296050582},
  {"id":"lavo","name":"Lassen Volcanic","state":"California","group":"mountain","maxCount":18343.2},
  {"id":"zion","name":"Zion","state":"Utah","group":"desert","maxCount":17460},
  {"id":"crla","name":"Crater Lake","state":"Oregon","group":"mountain","maxCount":15983.3},
  {"id":"dena","name":"Denali","state":"Alaska","group":"tundra","maxCount":14808.4},
  {"id":"cany","name":"Canyonlands","state":"Utah","group":"desert","maxCount":12832.8},
  {"id":"voya","name":"Voyageurs","state":"Minnesota","group":"tundra","maxCount":12425.2},
  {"id":"bryc","name":"Bryce Canyon","state":"Utah","group":"mountain","maxCount":11025},
  {"id":"badl","name":"Badlands","state":"South Dakota","group":"desert","maxCount":10945.339631637433},
  {"id":"isro","name":"Isle Royale","state":"Michigan","group":"continental","maxCount":9837.2},
  {"id":"bibe","name":"Big Bend","state":"Texas","group":"desert","maxCount":9393.342542321216},
  {"id":"noca","name":"North Cascades","state":"Washington","group":"mountain","maxCount":8395.4},
  {"id":"meve","name":"Mesa Verde","state":"Colorado","group":"desert","maxCount":7925.6},
  {"id":"grba","name":"Great Basin","state":"Nevada","group":"desert","maxCount":7501.2},
  {"id":"maca","name":"Mammoth Cave","state":"Kentucky","group":"continental","maxCount":7184},
  {"id":"grsa","name":"Great Sand Dunes","state":"Colorado","group":"desert","maxCount":5463.4},
  {"id":"glba","name":"Glacier Bay","state":"Alaska","group":"tundra","maxCount":4527.8},
  {"id":"chis","name":"Channel Islands","state":"California","group":"coast","maxCount":3850.6},
  {"id":"thro","name":"Theodore Roosevelt","state":"North Dakota","group":"continental","maxCount":3558.6},
  {"id":"ever","name":"Everglades","state":"Florida","group":"tropical","maxCount":3484.6},
  {"id":"gaar","name":"Gates of the Arctic","state":"Alaska","group":"tundra","maxCount":3453.2},
  {"id":"care","name":"Capitol Reef","state":"Utah","group":"desert","maxCount":3265.2},
  {"id":"havo","name":"Hawaii Volcanoes","state":"Hawaii","group":"coast","maxCount":3135.4},
  {"id":"blca","name":"Black Canyon of the Gunnison","state":"Colorado","group":"desert","maxCount":3124.6},
  {"id":"arch","name":"Arches","state":"Utah","group":"desert","maxCount":2964.8},
  {"id":"viis","name":"Virgin Islands","state":"Virgin Islands","group":"tropical","maxCount":2239.6},
  {"id":"hosp","name":"Hot Springs","state":"Arkansas","group":"continental","maxCount":2181.6},
  {"id":"katm","name":"Katmai","state":"Alaska","group":"tundra","maxCount":1595},
  {"id":"gumo","name":"Guadalupe Mountains","state":"Texas","group":"desert","maxCount":1400.4},
  {"id":"wica","name":"Wind Cave","state":"South Dakota","group":"continental","maxCount":1393.8},
  {"id":"lacl","name":"Lake Clark","state":"Alaska","group":"tundra","maxCount":1389.4},
  {"id":"redw","name":"Redwood","state":"California","group":"coast","maxCount":1015},
  {"id":"hale","name":"Haleakala","state":"Hawaii","group":"coast","maxCount":1000},
  {"id":"cuva","name":"Cuyahoga Valley","state":"Ohio","group":"continental","maxCount":971.2},
  {"id":"drto","name":"Dry Tortugas","state":"Florida","group":"tropical","maxCount":666.8},
  {"id":"kova","name":"Kobuk Valley","state":"Alaska","group":"tundra","maxCount":580},
  {"id":"sagu","name":"Saguaro","state":"Arizona","group":"desert","maxCount":485.8},
  {"id":"bisc","name":"Biscayne","state":"Florida","group":"tropical","maxCount":472},
  {"id":"kefj","name":"Kenai Fjords","state":"Alaska","group":"tundra","maxCount":408.8}
];
//
// const PARKS = [
//   { id: 'acad', name: 'Acadia', state: 'Maine', group: 'continental' },
//   { id: 'arch', name: 'Arches', state: 'Utah', group: 'desert' },
//   { id: 'badl', name: 'Badlands', state: 'South Dakota', group: 'desert' },
//   { id: 'bibe', name: 'Big Bend', state: 'Texas', group: 'desert' },
//   { id: 'bisc', name: 'Biscayne', state: 'Florida', group: 'tropical' },
//   { id: 'blca', name: 'Black Canyon of the Gunnison', state: 'Colorado', group: 'desert' },
//   { id: 'bryc', name: 'Bryce Canyon', state: 'Utah', group: 'mountain' },
//   { id: 'caca', name: 'Carlsbad Caverns', state: 'New Mexico', group: 'desert' },
//   { id: 'cany', name: 'Canyonlands', state: 'Utah', group: 'desert' },
//   { id: 'care', name: 'Capitol Reef', state: 'Utah', group: 'desert' },
//   { id: 'chis', name: 'Channel Islands', state: 'California', group: 'coast' },
//   { id: 'cong', name: 'Congaree', state: 'South Carolina', group: 'continental' },
//   { id: 'crla', name: 'Crater Lake', state: 'Oregon', group: 'mountain' },
//   { id: 'cuva', name: 'Cuyahoga Valley', state: 'Ohio', group: 'continental' },
//   { id: 'dena', name: 'Denali', state: 'Alaska', group: 'tundra' },
//   { id: 'deva', name: 'Death Valley', state: 'California', group: 'desert' },
//   { id: 'drto', name: 'Dry Tortugas', state: 'Florida', group: 'tropical' },
//   { id: 'ever', name: 'Everglades', state: 'Florida', group: 'tropical' },
//   { id: 'gaar', name: 'Gates of the Arctic', state: 'Alaska', group: 'tundra' },
//   { id: 'glac', name: 'Glacier', state: 'Montana', group: 'mountain' },
//   { id: 'glba', name: 'Glacier Bay', state: 'Alaska', group: 'tundra' },
//   { id: 'grba', name: 'Great Basin', state: 'Nevada', group: 'desert' },
//   { id: 'grca', name: 'Grand Canyon', state: 'Arizona', group: 'desert' },
//   { id: 'grsa', name: 'Great Sand Dunes', state: 'Colorado', group: 'desert' },
//   { id: 'grsm', name: 'Great Smoky Mountains', state: 'Tennessee, North Carolina	', group: 'mountain' },
//   { id: 'grte', name: 'Grand Teton', state: 'Wyoming', group: 'mountain' },
//   { id: 'gumo', name: 'Guadalupe Mountains', state: 'Texas', group: 'desert' },
//   { id: 'hale', name: 'Haleakala', state: 'Hawaii', group: 'coast' },
//   { id: 'havo', name: 'Hawaii Volcanoes', state: 'Hawaii', group: 'coast' },
//   { id: 'hosp', name: 'Hot Springs', state: 'Arkansas', group: 'continental' },
//   { id: 'isro', name: 'Isle Royale', state: 'Michigan', group: 'continental' },
//   { id: 'jeff', name: 'Gateway Arch', state: 'Missouri', group: 'continental' },
//   { id: 'josh', name: 'Joshua Tree', state: 'California', group: 'desert' },
//   { id: 'katm', name: 'Katmai', state: 'Alaska', group: 'tundra' },
//   { id: 'kefj', name: 'Kenai Fjords', state: 'Alaska', group: 'tundra' },
//   { id: 'kica', name: 'Kings Canyon', state: 'California', group: 'mountain' },
//   { id: 'kova', name: 'Kobuk Valley', state: 'Alaska', group: 'tundra' },
//   { id: 'lacl', name: 'Lake Clark', state: 'Alaska', group: 'tundra' },
//   { id: 'lavo', name: 'Lassen Volcanic', state: 'California', group: 'mountain' },
//   { id: 'maca', name: 'Mammoth Cave', state: 'Kentucky', group: 'continental' },
//   { id: 'meve', name: 'Mesa Verde', state: 'Colorado', group: 'desert' },
//   { id: 'mora', name: 'Mount Rainier', state: 'Washington', group: 'mountain' },
//   { id: 'noca', name: 'North Cascades', state: 'Washington', group: 'mountain' },
//   { id: 'npsa', name: 'American Samoa', state: 'American Samoa', group: 'coast' },
//   { id: 'olym', name: 'Olympic', state: 'Washington', group: 'mountain' },
//   { id: 'pefo', name: 'Petrified Forest', state: 'Arizona', group: 'desert' },
//   { id: 'pinn', name: 'Pinnacles', state: 'California', group: 'coast' },
//   { id: 'redw', name: 'Redwood', state: 'California', group: 'coast' },
//   { id: 'romo', name: 'Rocky Mountain', state: 'Colorado', group: 'mountain' },
//   { id: 'sagu', name: 'Saguaro', state: 'Arizona', group: 'desert' },
//   { id: 'sequ', name: 'Sequoia', state: 'California', group: 'mountain' },
//   { id: 'shen', name: 'Shenandoah', state: 'Virginia', group: 'mountain' },
//   { id: 'thro', name: 'Theodore Roosevelt', state: 'North Dakota', group: 'continental' },
//   { id: 'viis', name: 'Virgin Islands', state: 'Virgin Islands', group: 'tropical' },
//   { id: 'voya', name: 'Voyageurs', state: 'Minnesota', group: 'tundra' },
//   { id: 'wica', name: 'Wind Cave', state: 'South Dakota', group: 'continental' },
//   { id: 'wrst', name: 'Wrangell-St. Elias', state: 'Alaska', group: 'tundra' },
//   { id: 'yell', name: 'Yellowstone', state: 'Wyoming, Montana, Idaho', group: 'mountain' },
//   { id: 'yose', name: 'Yosemite', state: 'California', group: 'mountain' },
//   { id: 'zion', name: 'Zion', state: 'Utah', group: 'desert' }
// ];

const PARK_GROUPS = {
  mountain: {
    title: 'Mountain',
    description: `
      <p>Mountaineous parks are known for their snowy winters. Only lodges provide the appropriate shelter during the cold season. They are great camping destination once the snow melts from late spring to early fall.</p>
      <p>You will notice a peak of frequentation in the Appalachian Mountains in October when leaves turn yellow.</p>
    `
  },
  tundra: {
    title: 'Tundra',
    description: `
      <p>These parks are similar to mountaineous parks but with much more severe winters. Temperature only exceede 50°F for 2–3 months in summer.</p>
      <p>They are all situated in remote parts of Alaska, which contributes to the low frquentation.</p>
    `
  },
  desert: {
    title: 'Desert',
    description: `
      <p>Desertic parks feature very hot summers, and surprisingly cold winters. Deserts have two high seasons, in spring and in fall, when temperatures are optimal.</p>
      <p>Lodges equipped with air conditioning attract tourists even during the warmest months.</p>
    `
  },
  tropical: {
    title: 'Tropical',
    description: `
      <p>The best time of the year to visit parks in tropical climates is during the dry season. Temperature tend to be constant year-round, but wet season sees storms and heavy rain.</p>
    `
  },
  coast: {
    title: 'Coast',
    description: `
      <p>Parks along the coast have relatively constant temperatures and weather. They can be visited anytime of the year.</p>
    `
  },
  continental: {
    title: 'Continental',
    description: `
      <p>Somewhat of a catch-all category. Parks in the Midwest region have harsh winters and warm summers. Parks closer to Canada feature long winters with aboundant snowfalls.</p>
    `
  }
};


export default Ember.Route.extend({
  model() {

    const parks = [];
    const groups = [];

    for (let parkKey in PARK_GROUPS) {

      groups.push({
        title: PARK_GROUPS[parkKey].title,
        description: Ember.String.htmlSafe(PARK_GROUPS[parkKey].description),
        parks: PARKS.filter(p => p.group === parkKey).map(p => ({
          id: p.id,
          name: p.name,
          componentName: `nps-nights/charts/${p.id}`
        }))
      });
    }

    return groups
  }
});

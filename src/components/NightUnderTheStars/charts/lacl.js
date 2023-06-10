const chart = `<svg id="chart-lacl" class="chart" width="340" height="440"><g class="inner" transform="translate(40, 80)"><g class="temp-layer"><circle class="temperature-curve" cx="130" cy="130" r="130" fill="rgba(255, 255, 255, 0.6)" mask="url(#coldMask-lacl)"></circle><circle class="temperature-curve" cx="130" cy="130" r="130" fill="rgba(255, 75, 0, 0.1)" mask="url(#hotMask-lacl)"></circle></g><g class="guides-layer"><line class="guide-line" x1="151.66666666666666" y1="130" x2="260" y2="130" style="transform: rotate(0deg); transform-origin: 130px 130px; stroke: rgba(180, 163, 155, 0.4);"></line><line class="guide-line" x1="151.66666666666666" y1="130" x2="260" y2="130" style="transform: rotate(90deg); transform-origin: 130px 130px; stroke: rgba(180, 163, 155, 0.4);"></line><line class="guide-line" x1="151.66666666666666" y1="130" x2="260" y2="130" style="transform: rotate(180deg); transform-origin: 130px 130px; stroke: rgba(180, 163, 155, 0.4);"></line><line class="guide-line" x1="151.66666666666666" y1="130" x2="260" y2="130" style="transform: rotate(270deg); transform-origin: 130px 130px; stroke: rgba(180, 163, 155, 0.4);"></line><circle class="guide-ring primary" cx="130" cy="130" r="21.666666666666668" style="fill: none; stroke: rgba(180, 163, 155, 0.5);"></circle><circle class="guide-ring secondary" cx="130" cy="130" r="130" style="fill: none; stroke: rgba(180, 163, 155, 0.2);"></circle><rect x="115" y="255" rx="2" ry="2" width="30" height="13" fill="#F5EEEB"></rect><text class="last-tick-value" x="130" y="265">5k</text><text class="month-label" x="23.93398282201788" y="236.06601717798213">Jan</text><text class="month-label" x="-14.888873943360238" y="168.82285676537816">F</text><text class="month-label" x="-14.888873943360238" y="91.17714323462188">M</text><text class="month-label" x="23.93398282201781" y="23.933982822017924">A</text><text class="month-label" x="91.17714323462191" y="-14.888873943360238">M</text><text class="month-label" x="168.82285676537805" y="-14.888873943360267">J</text><text class="month-label" x="236.0660171779821" y="23.933982822017853">J</text><text class="month-label" x="274.8888739433602" y="91.17714323462177">A</text><text class="month-label" x="274.88887394336024" y="168.82285676537816">S</text><text class="month-label" x="236.06601717798213" y="236.0660171779821">O</text><text class="month-label" x="168.8228567653781" y="274.88887394336024">N</text><text class="month-label" x="91.17714323462198" y="274.8888739433603">D</text><path class="direction-indicator" fill="none" stroke="#cac5c2" stroke-width="1" marker-end="url(#arrow)" d="M 13.428105781454363 224.3980586574756 A 150 150 0 0 1 7.127193356651219 216.0364654526569"></path><text class="park-name" x="130" y="310">Lake Clark</text><text class="park-state" x="130" y="330">Alaska</text></g><g class="metrics-layer"><path class="concessionLodging" transform="translate(130, 130)" d="MNaN,NaNLNaN,NaN NaN,NaN NaN,NaNZ" style="fill: var(--lodging-color); stroke: var(--lodging-color); stroke-width: 0.5;"></path><path class="tentCampers" transform="translate(130, 130)" d="MNaN,NaNLNaN,NaN NaN,NaN NaN,NaNZ" style="fill: var(--tent-color); stroke: var(--tent-color); stroke-width: 0.5;"></path><path class="rvCampers" transform="translate(130, 130)" d="MNaN,NaNLNaN,NaN NaN,NaN NaN,NaNZ" style="fill: var(--rv-color); stroke: var(--rv-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-21.086014200185705,5.654972332128644L-21.744251112576894,2.7375460588310867 -21.98333754098756,2.776523498358854 -21.32188756373031,5.708190662256122Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-21.742479761621386,2.7372572815666905L-22.04415266350821,-0.23047775425618955 -22.289850784978118,-0.22111424408251024 -21.985108891943067,2.776812275623251Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-22.041731080044457,-0.23057004035615491L-21.966879282576713,-3.209693038479628 -22.216535176651803,-3.2353839039642205 -22.29227236844187,-0.22102195798254443Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-21.964737894533634,-3.2094726787225754L-21.432351411492856,-6.135692059112598 -21.67849987634894,-6.204641879486035 -22.21867656469488,-3.2356042637212723Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-21.432070668293996,-6.1356134187963L-20.36667064134492,-8.913209178966092 -20.598081555920704,-9.022202274280978 -21.6787806195478,-6.204720519802333Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-20.36794004494985,-8.913807060135001L-18.901838682186003,-11.50988639564591 -19.11445388983548,-11.646470415877525 -20.596812152315774,-9.021604393112069Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-18.902857084831314,-11.510540617557169L-17.149161597665994,-13.92621265587628 -17.343826988759787,-14.083408010627627 -19.11343548719017,-11.645816193966269Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-17.149054628089743,-13.926126276266675L-15.159659536984382,-16.146111518288297 -15.331473199221673,-16.329218834494906 -17.343933958336038,-14.083494390237231Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-15.15967074506676,-16.146123463100235L-12.819809966056507,-17.988693656739425 -12.963196702034313,-18.19414478320198 -15.331461991139294,-16.32920688968297Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-12.820091449476223,-17.98909697916159L-10.272400716359524,-19.556686009990653 -10.401337763254734,-19.769874964130437 -12.962915218614597,-18.193741460779815Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-10.27083576575222,-19.554098466757075L-7.688703522875755,-21.088923332281436 -7.827626242444068,-21.303212287835752 -10.402902713862037,-19.77246250736402Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-7.682402110320907,-21.07920337345043L-5.221753418637834,-22.81390937948655 -5.393589675234236,-23.0333196244197 -7.833927654998917,-21.312932246666758Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-5.206983352862316,-22.79505012467226L-2.9319420658596003,-24.76931135821264 -3.1529568828098333,-25.009398053408454 -5.408359741009754,-23.05217887923399Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-2.906546200965828,-24.741724025570782L-0.7542476688969999,-26.842933497970442 -1.0376511777292814,-27.126873173172136 -3.1783527477036055,-25.03698538605031Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-0.7182838293317344,-26.806901619017204L1.38226698180064,-28.95040529309492 1.02531244019643,-29.304752177608204 -1.0736150172945473,-27.162905052125375Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M1.4278198274380114,-28.90518522428791L3.547883463838025,-31.01345883754215 3.1139760484910766,-31.4723199710516 0.979759594559059,-29.349972246415216Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M3.6006338809570146,-30.957674780076893L5.810077346209852,-32.94411158612292 5.3126786581236445,-33.55231022784192 3.061225631372087,-31.528104028516857Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M5.865408581721153,-32.876454828900485L8.22817563477742,-34.63097727915658 7.7089200073124236,-35.44043385365592 5.257347422612343,-33.61996698506436Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M8.278993853523255,-34.55175783676174L10.849099915416945,-35.962510628663296 10.343399245349657,-36.99363561157108 7.658101788566589,-35.51965329605076Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M10.892838243744896,-35.87332806332564L13.595833869526434,-37.047907410807106 13.098502067973566,-38.29904693489602 10.299660917021706,-37.08281817690874Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M13.635573296659237,-36.947934781276366L16.412199767353826,-37.9513454379166 15.924142090556328,-39.43450356110684 13.058762640840763,-38.39901956442676Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M16.449001771615357,-37.83950785362056L19.27488630927073,-38.67982335678033 18.811806500787863,-40.41597132095404 15.887340086294799,-39.54634114540288Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M19.30796487707719,-38.55580739429837L22.169024615589407,-39.23260050019087 21.755726666148874,-41.24420614043413 18.778727932981404,-40.539987283436005Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M22.19696248466518,-39.09662117804499L25.08006440705903,-39.60040529167741 24.75419081144683,-41.90900938117415 21.727788797073103,-41.38018546258001Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M25.100798994076477,-39.453514125817286L27.990081862069342,-39.7652234296818 27.808322831534174,-42.3876314897518 24.733456224429382,-42.05590054703428Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M28.00085012565694,-39.6098595881058L30.87288657822848,-39.69871889736807 30.9208832581973,-42.63962949130381 27.797554567946577,-42.542995331327795Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M30.870291373899487,-39.539702400611986L33.6854856105529,-39.36050637142916 34.093315353802566,-42.59687583071928 30.923478462526294,-42.79864598805989Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M33.666119457829716,-39.206824531752986L36.3532958938391,-38.697991646350694 37.31568756563355,-42.144049369274306 34.11268150652575,-42.75055767039545Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M36.316327493887,-38.565618056789674L38.78438394979992,-37.6435906975476 40.49570638223133,-41.10222839424927 37.352655965585654,-42.276422958835326Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M38.73867040810728,-37.5512021589814L40.97737142558018,-36.14320598648861 43.37499979024013,-39.412480964194984 40.54141992392397,-41.19461693281548Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M40.93745032247309,-36.088771752478806L43.0297825005635,-34.31157313368443 45.89307669133103,-37.362003221296035 43.41492089334722,-39.46691519820479Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M42.998255354061214,-34.27798547211016L44.94830100598799,-32.25647251517932 48.1388800853206,-35.10016353218396 45.92460383783332,-37.39559088287031Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M44.922752239341015,-32.2337014769436L46.726039407952484,-30.04230072576751 50.17277956177408,-32.68233535211335 48.16442885196758,-35.12293457041968Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M46.7046635245934,-30.025927843067272L48.35642827264248,-27.705958937145397 52.02167689093174,-30.13188209679015 50.19415544513316,-32.69870823481359Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M48.33872000974519,-27.694238344750854L49.826262808185405,-25.271430568823696 53.69056763615053,-27.454269809594276 52.03938515382903,-30.143602689184693Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M49.81332314516417,-25.26412130998865L51.110480516065344,-22.758755722220897 55.16433027495028,-24.640105209175587 53.70350729917177,-27.46157906842932Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M51.1057769949589,-22.756572867022303L52.16302958404276,-20.193785016053962 56.39905842865255,-21.660699542051507 55.16903379605672,-24.64228806437418Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M52.174337685311045,-20.197700952092262L52.89922671662061,-17.63314350050803 57.293537565605945,-18.452233238993923 56.38775032738427,-21.656783606013207Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M52.94368333332361,-17.641430114678176L53.171735065612815,-15.19885579256651 57.577471477355935,-14.926682079747943 57.24908094890295,-18.443946624823777Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M53.27937119605599,-15.19220634227755L52.770801925501395,-12.879894874273317 56.69584236160798,-11.414218284906372 57.46983534691276,-14.933331530036902Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M52.9342396653792,-12.818864453553482L51.713569037085726,-10.575231781014912 54.891602166527555,-8.459399948111065 56.53240462173017,-11.475248705626205Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M51.88601013627661,-10.46042606562167L50.16436447209578,-8.316062887034004 52.687503203685466,-6.043712656178886 54.71916106733667,-8.574205663504307Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M50.321145029320164,-8.17486560329291L48.2908946560851,-6.162448095147833 50.30115398893443,-3.9749248754332216 52.530722646461086,-6.184909939919981Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M48.427116628477194,-6.014214122160547L46.20601271873482,-4.122793816737407 47.818660743179244,-2.125150061436421 50.16493201654234,-4.123158848420507Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M46.32267900019618,-3.9782751957594873L43.97899034942047,-2.1857738040037002 45.280195441595154,-0.4174268700533066 47.70199446171788,-2.269668682414341Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M44.07837487164172,-2.0507095345745463L41.65347968911064,-0.33479844362114286 42.708115464697954,1.1972445133385499 45.180810919373904,-0.5524911394824605Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M41.73789095250309,-0.21217631704246076L39.25887187295473,1.447495501852956 40.116997878021834,2.752830464028391 42.6237042013055,1.074622386759868Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M39.33036159084131,1.5562418020960205L36.81668205745218,3.178679989166393 37.51808814518454,4.275391055755482 40.045508160135256,2.6440841637853274Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M36.87701350926033,3.2730136027728847L34.34473617194568,4.87770773183245 34.92196457268323,5.78797887552839 37.45775669337639,4.18105744214899Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M34.395403931822266,4.95760920527423L31.860396333031392,6.566223839271296 32.34020333737876,7.314208289634953 34.87129681280664,5.70807740208661Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M31.90261279972135,6.632036260405778L29.387728894354332,8.262728842684348 29.77862623870231,8.8819912348303 32.2979868706888,7.248395868500474Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M29.422106706074423,8.31719041995098L26.873361618884605,9.882902456151783 27.180879561535317,10.402225183618725 29.744248426982217,8.827529657563668Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M26.900577725166798,9.928863815101016L24.30087431871976,11.411783963071676 24.54183045422946,11.846102923525004 27.153663455253124,10.356263824669492Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M24.321967951512868,11.449804844538367L21.68510454049865,12.872041978475147 21.876842328397835,13.234111509684032 24.52073682143635,11.808082042058313Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M21.70107817120133,12.90220590726348L19.040935579039807,14.285036494766427 19.197372373841052,14.588521549667167 21.860868697695153,13.203947580895699Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M19.05259024778621,14.307646378770034L16.380288654982234,15.673507690136057 16.515428965867375,15.930744171436208 19.18571770509465,14.56591166566356Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M16.388112956168083,15.688401067933532L13.746009047514185,17.114502206165625 13.870396439546361,17.339309439342188 16.507604664681526,15.915850793638734Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M13.750099082671401,17.121894189165406L11.14213910068807,18.600637263965975 11.254984236103923,18.81256692914926 13.866306404389146,17.331917456342406Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M11.143284403512387,18.602788208649557L8.46975823114033,19.93656030576763 8.560330193542287,20.154157009906196 11.253838933279605,18.810415984465678Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M8.469894228386831,19.936887035495303L5.648337618044726,20.891058362351192 5.705908521481641,21.119069658889043 8.560194196295786,20.153830280178525Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M5.648534403054286,20.891837735306805L2.7079465861885157,21.39220732870901 2.7343608860404873,21.623894508449194 5.7057117364720815,21.11829028593343Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M2.7080136873436813,21.392795891627L-0.27208654628279483,21.567304778127077 -0.27226038231370175,21.799363923044798 2.7342937848853226,21.623305945531204Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-0.2720861216168629,21.566737878316133L-3.249335407835507,21.387919718822758 -3.2801097635206933,21.61927480022021 -0.2722608069796337,21.799930822855742Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-3.249218041899515,21.387037386599378L-6.1662976267082055,20.782056642598 -6.23164491632158,21.008054899150046 -3.2802271294566863,21.62015713244359Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-6.166204109490212,20.781733220948087L-8.957598068563964,19.735975397641916 -9.054481170327637,19.950876103822928 -6.231738433539573,21.00837832079996Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-8.957547825608332,19.73586395151303L-11.591382026424231,18.33563451674757 -11.715119362125574,18.536534977881335 -9.05453141328327,19.950987549951815Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-11.591085292216688,18.335152737834267L-14.025706440504214,16.613739715869656 -14.176348536912778,16.797000182811985 -11.715416096333117,18.53701675679464Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-14.025302453088862,16.613248253495318L-16.1833317786653,14.559713203003612 -16.360575386862045,14.719412010619434 -14.17675252432813,16.797491645186323Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-16.183304711852823,14.5596888154518L-18.002706050837997,12.198618056990497 -18.2005524635663,12.331699249528057 -16.36060245367452,14.719436398171247Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-18.0028428695025,12.198710087928953L-19.50514137549083,9.621247822791991 -19.717652203610733,9.728516047447267 -18.200415644901796,12.331607218589602Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-19.50474190499161,9.62104618369608L-20.687069940669776,6.87966285137597 -20.91039938916421,6.964102407413092 -19.71805167410995,9.728717686543177Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-20.686426642078615,6.879419623947598L-21.08993924121332,5.644332989905144 -21.317962522702697,5.718830004479622 -20.91104268775537,6.9643456348414645Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path></g></g><defs><mask id="coldMask-lacl"><circle cx="130" cy="130" r="130" fill="white"></circle><path d="M-66.70925237808878,17.874690302392832C-75.60323554417157,6.361410330403733,-81.8943087760694,-8.675094343717445,-85.02159616815239,-22.781468032461426C-89.16525936328443,-41.47244655231344,-89.27279358833869,-65.15980670578394,-81.7739529659693,-81.77395296596926C-73.51480611342309,-100.07260481132546,-52.46568985284641,-118.1484860129559,-33.6464758633278,-125.57035741757885C-14.184981237627959,-133.24552974593166,12.718082960397885,-131.17810339480013,33.64647586332774,-125.57035741757886C54.57486876625753,-119.96261144035758,76.60323462854261,-107.24452847995967,91.92388155425115,-91.9238815542512C107.24452847995968,-76.60323462854264,119.96261144035759,-54.574868766257524,125.57035741757888,-33.646475863327694C131.17810339480016,-12.718082960397906,134.31435518080247,15.308186016350728,125.57035741757889,33.64647586332762C117.08987518353334,51.432109558724726,94.88464644517474,69.29100771792514,75.45418610911446,75.45418610911454C58.91342130305364,80.7007774128351,37.99143091945865,77.50505944422761,19.907498219135558,74.29579480540085C7.386915837759485,72.0738299839243,-6.328660542623838,69.95927645710371,-17.033528405809605,63.56999344264931C-26.194918530858118,58.1019470302256,-32.911556023922586,48.416093675929446,-40.98273052627029,40.98273052627034C-49.46101820080672,33.174425656418165,-59.8117022530716,26.803583490879415,-66.70925237808878,17.874690302392832" transform="translate(130, 130)" style="fill: black;"></path></mask><mask id="hotMask-lacl"><circle cx="130" cy="130" r="130" fill="white"></circle><path d="M-125.57035741757888,33.64647586332768C-131.1781033948001,12.718082960397886,-131.17810339480016,-12.71808296039785,-125.57035741757889,-33.64647586332764C-119.96261144035762,-54.57486876625746,-107.24452847995971,-76.60323462854262,-91.9238815542512,-91.92388155425115C-76.60323462854268,-107.24452847995967,-54.574868766257595,-119.96261144035756,-33.6464758633278,-125.57035741757885C-12.71808296039795,-131.17810339480016,12.718082960397885,-131.17810339480013,33.64647586332774,-125.57035741757886C54.57486876625753,-119.96261144035758,76.60323462854261,-107.24452847995967,91.92388155425115,-91.9238815542512C107.24452847995968,-76.60323462854264,119.96261144035759,-54.574868766257524,125.57035741757888,-33.646475863327694C131.17810339480016,-12.718082960397906,131.1781033948002,12.718082960397831,125.57035741757889,33.64647586332762C119.9626114403576,54.57486876625749,107.24452847995967,76.60323462854267,91.92388155425112,91.92388155425122C76.60323462854261,107.24452847995974,54.57486876625749,119.96261144035758,33.6464758633277,125.57035741757888C12.71808296039791,131.17810339480013,-12.718082960397828,131.1781033948002,-33.646475863327616,125.57035741757889C-54.57486876625744,119.96261144035762,-76.60323462854258,107.24452847995974,-91.92388155425112,91.92388155425122C-107.2445284799597,76.6032346285427,-119.96261144035758,54.57486876625752,-125.57035741757888,33.64647586332768" transform="translate(130, 130)" style="fill: black;"></path></mask><marker id="arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth"><path fill="#cac5c2" d="M0,0 L0,6 L9,3 z"></path></marker></defs></svg>
`
export default chart;
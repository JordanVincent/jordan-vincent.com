const chart = `<svg id="chart-kova" class="chart" width="340" height="440"><g class="inner" transform="translate(40, 80)"><g class="temp-layer"><circle class="temperature-curve" cx="130" cy="130" r="130" fill="rgba(255, 255, 255, 0.6)" mask="url(#coldMask-kova)"></circle><circle class="temperature-curve" cx="130" cy="130" r="130" fill="rgba(255, 75, 0, 0.1)" mask="url(#hotMask-kova)"></circle></g><g class="guides-layer"><line class="guide-line" x1="151.66666666666666" y1="130" x2="260" y2="130" style="transform: rotate(0deg); transform-origin: 130px 130px; stroke: rgba(180, 163, 155, 0.4);"></line><line class="guide-line" x1="151.66666666666666" y1="130" x2="260" y2="130" style="transform: rotate(90deg); transform-origin: 130px 130px; stroke: rgba(180, 163, 155, 0.4);"></line><line class="guide-line" x1="151.66666666666666" y1="130" x2="260" y2="130" style="transform: rotate(180deg); transform-origin: 130px 130px; stroke: rgba(180, 163, 155, 0.4);"></line><line class="guide-line" x1="151.66666666666666" y1="130" x2="260" y2="130" style="transform: rotate(270deg); transform-origin: 130px 130px; stroke: rgba(180, 163, 155, 0.4);"></line><circle class="guide-ring primary" cx="130" cy="130" r="21.666666666666668" style="fill: none; stroke: rgba(180, 163, 155, 0.5);"></circle><circle class="guide-ring secondary" cx="130" cy="130" r="130" style="fill: none; stroke: rgba(180, 163, 155, 0.2);"></circle><rect x="115" y="255" rx="2" ry="2" width="30" height="13" fill="#F5EEEB"></rect><text class="last-tick-value" x="130" y="265">5k</text><text class="month-label" x="23.93398282201788" y="236.06601717798213">Jan</text><text class="month-label" x="-14.888873943360238" y="168.82285676537816">F</text><text class="month-label" x="-14.888873943360238" y="91.17714323462188">M</text><text class="month-label" x="23.93398282201781" y="23.933982822017924">A</text><text class="month-label" x="91.17714323462191" y="-14.888873943360238">M</text><text class="month-label" x="168.82285676537805" y="-14.888873943360267">J</text><text class="month-label" x="236.0660171779821" y="23.933982822017853">J</text><text class="month-label" x="274.8888739433602" y="91.17714323462177">A</text><text class="month-label" x="274.88887394336024" y="168.82285676537816">S</text><text class="month-label" x="236.06601717798213" y="236.0660171779821">O</text><text class="month-label" x="168.8228567653781" y="274.88887394336024">N</text><text class="month-label" x="91.17714323462198" y="274.8888739433603">D</text><path class="direction-indicator" fill="none" stroke="#cac5c2" stroke-width="1" marker-end="url(#arrow)" d="M 13.428105781454363 224.3980586574756 A 150 150 0 0 1 7.127193356651219 216.0364654526569"></path><text class="park-name" x="130" y="310">Kobuk Valley</text><text class="park-state" x="130" y="330">Alaska</text></g><g class="metrics-layer"><path class="concessionLodging" transform="translate(130, 130)" d="MNaN,NaNLNaN,NaN NaN,NaN NaN,NaNZ" style="fill: var(--lodging-color); stroke: var(--lodging-color); stroke-width: 0.5;"></path><path class="tentCampers" transform="translate(130, 130)" d="MNaN,NaNLNaN,NaN NaN,NaN NaN,NaNZ" style="fill: var(--tent-color); stroke: var(--tent-color); stroke-width: 0.5;"></path><path class="rvCampers" transform="translate(130, 130)" d="MNaN,NaNLNaN,NaN NaN,NaN NaN,NaNZ" style="fill: var(--rv-color); stroke: var(--rv-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-25.858263493290238,7.001831265029349L-26.314007265769764,4.0732578462000815 -27.626708524025158,4.207567768729118 -27.160333155879684,7.2044589800268035Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-26.3247916127657,4.074361254001698L-26.470087671553426,1.143876568071036 -27.767629003251262,1.1467208707412198 -27.61592417702922,4.206464360927502Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-26.478612501870362,1.1438952551039971L-26.345955130116725,-1.7918524500309805 -27.62101340626023,-1.909288192135158 -27.759104172934325,1.1467021837082587Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-26.35087878869962,-1.7923059300878286L-25.945268606056338,-4.701509398776231 -27.19349100698077,-4.9398871237457405 -27.616089747677332,-1.9088347120783091Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-25.947178301839013,-4.701874100559921L-25.252600143240247,-7.554085527223489 -26.46717219562694,-7.914231504636863 -27.191581311198096,-4.939522421962051Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-25.252124713098972,-7.553944552258204L-24.278738903611497,-10.326367133268535 -25.454125476271315,-10.801112419954121 -26.467647625768215,-7.9143724796021475Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-24.275244830197728,-10.324955857248284L-23.05010858878853,-12.995691080355321 -24.1819661487603,-13.58338377926382 -25.457619549685084,-10.802523695974372Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-23.043766157155027,-12.992397909115269L-21.567956764316115,-15.524321212262171 -22.643991630459276,-16.236132965594273 -24.1883085803938,-13.586676950503872Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-21.5610759474987,-15.519769458004696L-19.81809988450415,-17.855319374748753 -20.807651610857178,-18.71056044702859 -22.65087244727669,-16.24068471985175Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-19.81481282028971,-17.852478459768218L-17.76652065652914,-19.905168944090214 -18.62583240133219,-20.903199738771114 -20.81093867507162,-18.713401362009126Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-17.768974049829243,-19.90801838968406L-15.425756842254403,-21.63533011536381 -16.14050063455224,-22.730613793327596 -18.623379008032085,-20.90035029317727Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-15.430466524286004,-21.642547299917492L-12.88553404546878,-23.10347835647219 -13.479250195253876,-24.24839694870359 -16.135790952520637,-22.723396608773914Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-12.888432126234411,-23.109066997696722L-10.213033945255596,-24.354424668413163 -10.713447301692646,-25.52889900102043 -13.476352114488245,-24.24280830747906Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-10.21257155212591,-24.35333942787071L-7.451788430662418,-25.42384109759568 -7.881301397828792,-26.62833633160354 -10.713909694822332,-25.529984241562882Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-7.447779850102645,-25.412599722949327L-4.631804068492793,-26.33070061473673 -4.997567574573614,-27.58107688160116 -7.885309978388566,-26.63957770624989Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-4.625249349013972,-26.308293060303292L-1.7660812273967328,-27.05055311723114 -2.056878195668452,-28.368609633013 -5.004122294052435,-27.6034844360346Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-1.7589778590233174,-27.018356629680998L1.1336606435915384,-27.545607110297833 0.9444729394773095,-28.94916675444826 -2.063981564041868,-28.400806120563143Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M1.138906596557506,-27.50668804886825L4.046544742499622,-27.762266620551156 4.0058005333792845,-29.25763465508361 0.9392269865113416,-28.988085815877845Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M4.047633536844988,-27.72230638336918L6.938663242186667,-27.626308341471262 7.105558635865091,-29.194629768880304 4.004711739033918,-29.297594892265586Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M6.9351027928958535,-27.592850684007413L9.777246399047952,-27.079067010800237 10.16672332751455,-28.675354223330622 7.109119085155904,-29.22808742634415Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M9.770995605973585,-27.053447878257344L12.544898091698501,-26.19603205048689 13.128603876685288,-27.787385460499436 10.172974120588915,-28.700973355873515Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M12.53669156659224,-26.173658652709964L15.213860171676744,-25.031225946386574 15.975917202590834,-26.598221990625145 13.13681040179155,-27.809758858276364Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M15.203427597857171,-25.009773743672966L17.752761246253783,-23.610616140977626 18.69472944588489,-25.133226937635655 15.986349776410407,-26.619674193338753Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M17.740372652213004,-23.590591041351875L20.119282161569384,-21.941704989509446 21.256957615041944,-23.38588976757063 18.707118039925668,-25.153252037261407Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M20.107056474515744,-21.92618549219559L22.257176300578717,-20.008302959595582 23.593234160847064,-21.32838222106848 21.269183302095584,-23.40140926488449Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M22.248220636186485,-19.999454400570954L24.14467646561891,-17.821155168281518 25.64335988081664,-18.992710493339576 23.602189825239297,-21.33723078009311Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M24.138821658919337,-17.816578331107962L25.80317933205107,-15.438556991758444 27.42387144919893,-16.461671508607765 25.64921468751621,-18.99728733051313Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M25.797720957498953,-15.435111215609117L27.23134092678495,-12.905230339165644 28.95276017795138,-13.776749793890996 27.429329823751047,-16.465117284757092Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M27.225029816901934,-12.902035152960872L28.4136931840916,-10.252835428226632 30.22567678050801,-10.957033956538993 28.959071287834394,-13.779944980095769Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M28.407507056901647,-10.250431288546928L29.315881057862175,-7.505442374817384 31.207522109862435,-8.011121994384276 30.231862907697963,-10.959438096218697Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M29.313086944492788,-7.504695443371715L29.895279093180473,-4.674147916662287 31.8362577720539,-4.968617128503728 31.21031622323182,-8.011868925829946Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M29.896503057397243,-4.674333606377562L30.18127299208546,-1.7859640481285353 32.13873051743602,-1.888091051358769 31.83503380783713,-4.968431438788453Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M30.183175238478466,-1.786063294585231L30.200574790234306,1.1246322400639863 32.15528305888679,1.1992295973230982 32.13682827104302,-1.8879918049020736Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M30.200826283502064,1.1246418377791254L29.96161233159339,4.025871126323536 31.90136374262536,4.275748403400584 32.15503156561903,1.1992199996079598Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M29.960136539758498,4.0256810159603535L29.458079682762154,6.882543266466589 31.366787565773002,7.326243697949915 31.902839534460252,4.2759385137637675Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M29.457784161372683,6.882474569224236L28.65236077565523,9.653673105918765 30.49909414988188,10.312778538978696 31.367083087162474,7.326312395192268Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M28.65694355904902,9.655308716925495L27.522531313558627,12.317824743936072 29.278211789468717,13.165852166464319 30.49451136648809,10.311142927971966Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M27.52965598391172,12.321266096687214L26.137900161121223,14.886100509805496 27.80203743043151,15.86968829329509 29.271087119115624,13.162410813713176Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M26.14164475659496,14.888313751723697L24.55580070533025,17.35996064515561 26.144600600822095,18.44486799864322 27.798292834957774,15.86747505137689Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M24.552174391908974,17.357484427660914L22.819038538314125,19.745623333056052 24.35762009205697,20.914674060742776 26.14822691424337,18.447344216137914Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M22.805287729047524,19.735175142292103L20.958598212748996,22.057824317445636 22.484200401752958,23.29868584490788 24.37137090132357,20.925122251506725Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M20.931194721445287,22.03553545451531L19.031001631877654,24.319500571964397 20.574486191608674,25.64932190728365 22.511603893056666,23.320974707838207Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M18.989053991593508,24.28335970702055L17.025989228446125,26.483948974447046 18.585750883858562,27.961851806802958 20.61643383189282,25.685462772227496Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M16.974655607379947,26.435309425125176L14.909863302249093,28.487329238914153 16.447083642941337,30.186945205665925 18.63708450492474,28.010491356124824Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M14.857902191610819,28.429878832519453L12.655505477904256,30.241098582581657 14.069843948365275,32.24213582293592 16.49904475357961,30.244395612060625Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M12.615137776025545,30.183985468250203L10.253445726099065,31.60708400078906 11.339777845678277,33.96864536932812 14.110211650243984,32.29924893726737Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M10.237222701208353,31.571817006310805L7.679491919167046,32.419353348758506 8.234118539206976,35.0383874349329 11.356000870568991,34.00391236380638Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M7.681144345826693,32.42715636720398L4.947996805440458,32.69419134438324 5.002335836161105,35.3461757820816 8.23246611254733,35.03058441648743Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M4.948867601588498,32.73669003827571L2.127664098589828,32.57735122043238 1.8364350701876373,35.12491928738012 5.0014650400130645,35.30367708818913Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M2.1211887405959016,32.633995351472095L-0.7068187533748032,32.1449794526984 -1.2387684048283218,34.53539469280941 1.8429104281815643,35.068275156340405Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-0.7200062217782754,32.204239808192575L-3.5091877791058037,31.44218992175052 -4.222301879249908,33.657381306276825 -1.2255809364248496,34.47613433731524Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-3.5274768459020307,31.499002405460825L-6.240045160806194,30.48979764690273 -7.112921147787555,32.518316214181255 -4.204012812453682,33.600568822566515Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-6.263311843782032,30.54386821261813L-8.847047872234842,29.274918447372517 -9.888198786090353,31.089797128799358 -7.089654464811718,32.464245648465855Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-8.87839793248496,29.329566198483533L-11.281394858180466,27.73745123419652 -12.452587228001175,29.315332731867933 -9.856848725840235,31.03514937768834Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-11.321196896106752,27.791074277542606L-13.562976085197622,25.933668073333177 -14.789498127448862,27.29250532754573 -12.412785190074889,29.261709688521847Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-13.605691402885654,25.980991450329718L-15.69804174646008,23.925036459194747 -16.93307321325672,25.09692093826619 -14.74678280976083,27.24518195054919Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-15.738518177814477,23.96344333622392L-17.69132260602438,21.75554976576231 -18.914169032159215,22.772869728866596 -16.89259678190232,25.058514061237016Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-17.726004302669793,21.78440243409224L-19.546811005736405,19.45592014139545 -20.754141905640548,20.346673089805723 -18.8794873355138,22.744017060536667Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-19.573523919271484,19.4756285796487L-21.26181658413314,17.047800483613965 -22.46418897006608,17.829438743680956 -20.72742899210547,20.326964651552473Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-21.28016421625067,17.059727912597268L-22.810869797836,14.536183533600475 -24.026261702408142,15.212006392546987 -22.445841337948547,17.817511314697654Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-22.82222456666407,14.542497391956116L-24.15349454927649,11.919903307388871 -25.3986638064364,12.479699582625777 -24.014906933580072,15.205692534191344Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-24.160546785921383,11.923073812750449L-25.234713889983162,9.19640208701193 -26.515595100495354,9.623403058251743 -25.391611569791507,12.4765290772642Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-25.24070068413571,9.198397874674962L-25.865364926716413,6.926123307447526 -27.15323172245351,7.280166937608627 -26.509608306342805,9.62140727058871Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path></g></g><defs><mask id="coldMask-kova"><circle cx="130" cy="130" r="130" fill="white"></circle><path d="M-20.928392902929815,5.60774597722128C-21.86301723246669,2.1196804933996485,-20.860161311557118,-1.8707630167313773,-20.92839290292982,-5.607745977221273C-21.02602684507233,-10.955069274417411,-21.4697506234617,-16.295112994505402,-21.640413782563307,-21.640413782563297C-22.242136466144323,-40.486828859310855,-28.392674241657797,-63.168270101471734,-20.95895058986461,-78.21986847470015C-12.686457956434815,-94.96978311994528,12.19907135955698,-111.73487108618318,30.632312400571298,-114.3213462322541C49.73523178995729,-117.00178783816088,76.19722011566589,-104.98824436450009,91.92388155425115,-91.9238815542512C108.14152851942762,-78.45165003779164,123.58447243177675,-54.04013214117081,125.57035741757888,-33.646475863327694C127.49125551116558,-13.920189726193517,119.395752542619,15.540558921630629,105.42677924850894,28.24902036025215C91.6135446558509,40.815796419409295,62.17204153957594,47.28610700617998,42.70630330541251,42.706303305412554C29.696397913267877,39.64539638552974,19.539133364517493,22.429607339113254,5.607745977221284,20.928392902929815C1.9756382157488988,20.537005279162468,-2.119680493399638,21.863017232466696,-5.60774597722127,20.92839290292982C-9.095811461042906,19.993768573392938,-12.767205771423763,17.874088079993296,-15.320646925708521,15.32064692570854C-17.874088079993278,12.76720577142378,-19.99376857339293,9.09581146104292,-20.928392902929815,5.60774597722128" transform="translate(130, 130)" style="fill: black;"></path></mask><mask id="hotMask-kova"><circle cx="130" cy="130" r="130" fill="white"></circle><path d="M-125.57035741757888,33.64647586332768C-131.1781033948001,12.718082960397886,-131.17810339480016,-12.71808296039785,-125.57035741757889,-33.64647586332764C-119.96261144035762,-54.57486876625746,-107.24452847995971,-76.60323462854262,-91.9238815542512,-91.92388155425115C-76.60323462854268,-107.24452847995967,-54.574868766257595,-119.96261144035756,-33.6464758633278,-125.57035741757885C-12.71808296039795,-131.17810339480016,12.718082960397885,-131.17810339480013,33.64647586332774,-125.57035741757886C54.57486876625753,-119.96261144035758,76.60323462854261,-107.24452847995967,91.92388155425115,-91.9238815542512C107.24452847995968,-76.60323462854264,119.96261144035759,-54.574868766257524,125.57035741757888,-33.646475863327694C131.17810339480016,-12.718082960397906,131.1781033948002,12.718082960397831,125.57035741757889,33.64647586332762C119.9626114403576,54.57486876625749,107.24452847995967,76.60323462854267,91.92388155425112,91.92388155425122C76.60323462854261,107.24452847995974,54.57486876625749,119.96261144035758,33.6464758633277,125.57035741757888C12.71808296039791,131.17810339480013,-12.718082960397828,131.1781033948002,-33.646475863327616,125.57035741757889C-54.57486876625744,119.96261144035762,-76.60323462854258,107.24452847995974,-91.92388155425112,91.92388155425122C-107.2445284799597,76.6032346285427,-119.96261144035758,54.57486876625752,-125.57035741757888,33.64647586332768" transform="translate(130, 130)" style="fill: black;"></path></mask><marker id="arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth"><path fill="#cac5c2" d="M0,0 L0,6 L9,3 z"></path></marker></defs></svg>
`
export default chart;

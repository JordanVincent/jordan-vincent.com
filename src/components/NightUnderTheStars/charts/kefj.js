const chart = `<svg id="chart-kefj" class="chart" width="340" height="440"><g class="inner" transform="translate(40, 80)"><g class="temp-layer"><circle class="temperature-curve" cx="130" cy="130" r="130" fill="rgba(255, 255, 255, 0.6)" mask="url(#coldMask-kefj)"></circle><circle class="temperature-curve" cx="130" cy="130" r="130" fill="rgba(255, 75, 0, 0.1)" mask="url(#hotMask-kefj)"></circle></g><g class="guides-layer"><line class="guide-line" x1="151.66666666666666" y1="130" x2="260" y2="130" style="transform: rotate(0deg); transform-origin: 130px 130px; stroke: rgba(180, 163, 155, 0.4);"></line><line class="guide-line" x1="151.66666666666666" y1="130" x2="260" y2="130" style="transform: rotate(90deg); transform-origin: 130px 130px; stroke: rgba(180, 163, 155, 0.4);"></line><line class="guide-line" x1="151.66666666666666" y1="130" x2="260" y2="130" style="transform: rotate(180deg); transform-origin: 130px 130px; stroke: rgba(180, 163, 155, 0.4);"></line><line class="guide-line" x1="151.66666666666666" y1="130" x2="260" y2="130" style="transform: rotate(270deg); transform-origin: 130px 130px; stroke: rgba(180, 163, 155, 0.4);"></line><circle class="guide-ring primary" cx="130" cy="130" r="21.666666666666668" style="fill: none; stroke: rgba(180, 163, 155, 0.5);"></circle><circle class="guide-ring secondary" cx="130" cy="130" r="130" style="fill: none; stroke: rgba(180, 163, 155, 0.2);"></circle><rect x="115" y="255" rx="2" ry="2" width="30" height="13" fill="#F5EEEB"></rect><text class="last-tick-value" x="130" y="265">5k</text><text class="month-label" x="23.93398282201788" y="236.06601717798213">Jan</text><text class="month-label" x="-14.888873943360238" y="168.82285676537816">F</text><text class="month-label" x="-14.888873943360238" y="91.17714323462188">M</text><text class="month-label" x="23.93398282201781" y="23.933982822017924">A</text><text class="month-label" x="91.17714323462191" y="-14.888873943360238">M</text><text class="month-label" x="168.82285676537805" y="-14.888873943360267">J</text><text class="month-label" x="236.0660171779821" y="23.933982822017853">J</text><text class="month-label" x="274.8888739433602" y="91.17714323462177">A</text><text class="month-label" x="274.88887394336024" y="168.82285676537816">S</text><text class="month-label" x="236.06601717798213" y="236.0660171779821">O</text><text class="month-label" x="168.8228567653781" y="274.88887394336024">N</text><text class="month-label" x="91.17714323462198" y="274.8888739433603">D</text><path class="direction-indicator" fill="none" stroke="#cac5c2" stroke-width="1" marker-end="url(#arrow)" d="M 13.428105781454363 224.3980586574756 A 150 150 0 0 1 7.127193356651219 216.0364654526569"></path><text class="park-name" x="130" y="310">Kenai Fjords</text><text class="park-state" x="130" y="330">Alaska</text></g><g class="metrics-layer"><path class="concessionLodging" transform="translate(130, 130)" d="MNaN,NaNLNaN,NaN NaN,NaN NaN,NaNZ" style="fill: var(--lodging-color); stroke: var(--lodging-color); stroke-width: 0.5;"></path><path class="tentCampers" transform="translate(130, 130)" d="M-20.510915307916825,5.529661033899645L-21.056666457342683,2.6118362942573197 -21.902230179620208,2.7112833460930226 -21.345869512639815,5.685831214635511Z" style="fill: var(--tent-color); stroke: var(--tent-color); stroke-width: 0.5;"></path><path class="tentCampers" transform="translate(130, 130)" d="M-21.057751822139068,2.611963944399258L-21.202572927224555,-0.3267170282168137 -22.05145157839068,-0.33883916418125715 -21.901144814823823,2.7111556959510836Z" style="fill: var(--tent-color); stroke: var(--tent-color); stroke-width: 0.5;"></path><path class="tentCampers" transform="translate(130, 130)" d="M-21.202378356026713,-0.32671424970599633L-20.97380322776815,-3.2587843761587076 -21.8142216745756,-3.3844279422617016 -22.05164614958852,-0.33884194269207496Z" style="fill: var(--tent-color); stroke: var(--tent-color); stroke-width: 0.5;"></path><path class="tentCampers" transform="translate(130, 130)" d="M-20.972824226970225,-3.2586380143648466L-20.335804567357915,-6.120689511573477 -21.15002383230029,-6.373132586204843 -21.815200675373525,-3.3845743040555636Z" style="fill: var(--tent-color); stroke: var(--tent-color); stroke-width: 0.5;"></path><path class="tentCampers" transform="translate(130, 130)" d="M-20.337173741781317,-6.121114014672375L-19.242617547246255,-8.843449585418668 -20.00710779455062,-9.211916930694613 -21.148654657876886,-6.3727080831059455Z" style="fill: var(--tent-color); stroke: var(--tent-color); stroke-width: 0.5;"></path><path class="tentCampers" transform="translate(130, 130)" d="M-19.245457486345128,-8.844818373083648L-17.79148932516417,-11.408145955049871 -18.49971703469911,-11.863052317655207 -20.004267855451747,-9.210548143029634Z" style="fill: var(--tent-color); stroke: var(--tent-color); stroke-width: 0.5;"></path><path class="tentCampers" transform="translate(130, 130)" d="M-17.791601107123597,-11.408217754449815L-16.061805592593654,-13.801011278793885 -16.71580518621494,-14.330477521254943 -18.499605252739684,-11.862980518255263Z" style="fill: var(--tent-color); stroke: var(--tent-color); stroke-width: 0.5;"></path><path class="tentCampers" transform="translate(130, 130)" d="M-16.057892382885218,-13.797843214990028L-14.082788397586995,-15.982037195271353 -14.673460076534099,-16.596526494914194 -16.719718395923376,-14.3336455850588Z" style="fill: var(--tent-color); stroke: var(--tent-color); stroke-width: 0.5;"></path><path class="tentCampers" transform="translate(130, 130)" d="M-14.077562605738898,-15.976600684114189L-11.816232972453694,-17.864534501880865 -12.337213225056072,-18.556806440501948 -14.678685868382196,-16.601963006071358Z" style="fill: var(--tent-color); stroke: var(--tent-color); stroke-width: 0.5;"></path><path class="tentCampers" transform="translate(130, 130)" d="M-11.809800570280393,-17.85598720762113L-9.354649513519899,-19.516374589862252 -9.829951316558226,-20.265333173809623 -12.343645627229373,-18.565353734761683Z" style="fill: var(--tent-color); stroke: var(--tent-color); stroke-width: 0.5;"></path><path class="tentCampers" transform="translate(130, 130)" d="M-9.343252722587456,-19.4984160541619L-6.779992850443142,-21.022173264783856 -7.247418610433323,-21.825280806261066 -9.841348107490669,-20.283291709509975Z" style="fill: var(--tent-color); stroke: var(--tent-color); stroke-width: 0.5;"></path><path class="tentCampers" transform="translate(130, 130)" d="M-6.75986722599332,-20.987594424343122L-4.158837145520114,-22.46944075267856 -4.655286961840726,-23.348102277106598 -7.267544234883145,-21.8598596467018Z" style="fill: var(--tent-color); stroke: var(--tent-color); stroke-width: 0.5;"></path><path class="tentCampers" transform="translate(130, 130)" d="M-4.126728716818985,-22.412612368455118L-1.5231947319782608,-23.871418051965986 -2.0567536933147084,-24.87892527078792 -4.687395390541855,-23.404930661330038Z" style="fill: var(--tent-color); stroke: var(--tent-color); stroke-width: 0.5;"></path><path class="tentCampers" transform="translate(130, 130)" d="M-1.4808867277683457,-23.791528812455002L1.1593877372644223,-25.11063895651789 0.6269604864217961,-26.320765157251643 -2.0990616975246232,-24.958814510298904Z" style="fill: var(--tent-color); stroke: var(--tent-color); stroke-width: 0.5;"></path><path class="tentCampers" transform="translate(130, 130)" d="M1.2029589081773635,-25.011608308790986L3.9060061677895073,-26.04647987630061 3.4798175588645464,-27.528703992107594 0.5833893155088548,-26.419795804978545Z" style="fill: var(--tent-color); stroke: var(--tent-color); stroke-width: 0.5;"></path><path class="tentCampers" transform="translate(130, 130)" d="M3.9367710377432568,-25.93948398009367L6.6947547204374835,-26.482272186647936 6.5663326971650555,-28.249199828732923 3.449052688910796,-27.635699888314534Z" style="fill: var(--tent-color); stroke: var(--tent-color); stroke-width: 0.5;"></path><path class="tentCampers" transform="translate(130, 130)" d="M6.701346646170518,-26.391575470496978L9.48388901631083,-26.25451948354608 9.757180777390342,-28.18240449716681 6.559740771432021,-28.33989654488388Z" style="fill: var(--tent-color); stroke: var(--tent-color); stroke-width: 0.5;"></path><path class="tentCampers" transform="translate(130, 130)" d="M9.47520074202136,-26.193229696650445L12.231437133713413,-25.540829128646138 12.842691970900844,-27.51541095314097 9.765869051679811,-28.243694284062446Z" style="fill: var(--tent-color); stroke: var(--tent-color); stroke-width: 0.5;"></path><path class="tentCampers" transform="translate(130, 130)" d="M12.217953553957562,-25.497272121167004L14.88731795858223,-24.46809407691064 15.781593021642378,-26.43106821556983 12.856175550656696,-27.558967960620105Z" style="fill: var(--tent-color); stroke: var(--tent-color); stroke-width: 0.5;"></path><path class="tentCampers" transform="translate(130, 130)" d="M14.871545257433334,-24.433472285773874L17.401552897045963,-23.093840936824723 18.566842336108333,-24.99926056464012 15.797365722791275,-26.465690006706595Z" style="fill: var(--tent-color); stroke: var(--tent-color); stroke-width: 0.5;"></path><path class="tentCampers" transform="translate(130, 130)" d="M17.385072732255832,-23.066893443431137L19.71113529977796,-21.438410448978548 21.168751327419304,-23.21614201073825 18.583322500898465,-25.026208058033706Z" style="fill: var(--tent-color); stroke: var(--tent-color); stroke-width: 0.5;"></path><path class="tentCampers" transform="translate(130, 130)" d="M19.69923080253966,-21.42389153585871L21.739801983299536,-19.473691487250022 23.47269954257937,-21.04012534624607 21.180655824657606,-23.230660923858085Z" style="fill: var(--tent-color); stroke: var(--tent-color); stroke-width: 0.5;"></path><path class="tentCampers" transform="translate(130, 130)" d="M21.738683693457663,-19.47268062133755L23.48572907259559,-17.230608158665675 25.4121324081173,-18.553598231715185 23.473817832421243,-21.041136212158545Z" style="fill: var(--tent-color); stroke: var(--tent-color); stroke-width: 0.5;"></path><path class="tentCampers" transform="translate(130, 130)" d="M23.49425774812822,-17.236465370838157L24.968195120562303,-14.786706322737349 27.021188576947463,-15.859232550553667 25.40360373258467,-18.547741019542702Z" style="fill: var(--tent-color); stroke: var(--tent-color); stroke-width: 0.5;"></path><path class="tentCampers" transform="translate(130, 130)" d="M24.983736741329245,-14.794825586753257L26.147799220343238,-12.196558331874602 28.29306915734231,-12.977498674961335 27.00564695618052,-15.851113286537759Z" style="fill: var(--tent-color); stroke: var(--tent-color); stroke-width: 0.5;"></path><path class="tentCampers" transform="translate(130, 130)" d="M26.17447006407663,-12.206267290871484L26.940736248941146,-9.511422828516086 29.139277026205338,-9.89800481430618 28.266398313608917,-12.967789715964454Z" style="fill: var(--tent-color); stroke: var(--tent-color); stroke-width: 0.5;"></path><path class="tentCampers" transform="translate(130, 130)" d="M26.992358691824695,-9.52049989758282L27.186994425073255,-6.786826337881347 29.317941793188464,-6.654526506356934 29.08765458332179,-9.888927745239446Z" style="fill: var(--tent-color); stroke: var(--tent-color); stroke-width: 0.5;"></path><path class="tentCampers" transform="translate(130, 130)" d="M27.27905577200623,-6.781110710704729L26.740722827143152,-4.056802045612956 28.60367185669474,-3.5114691145127765 29.225880446255488,-6.660242133533552Z" style="fill: var(--tent-color); stroke: var(--tent-color); stroke-width: 0.5;"></path><path class="tentCampers" transform="translate(130, 130)" d="M26.855644384130564,-4.0231615602725554L25.803067811127235,-1.344786716967834 27.348429076079796,-0.6434606775939331 28.488750299707327,-3.5451095998531765Z" style="fill: var(--tent-color); stroke: var(--tent-color); stroke-width: 0.5;"></path><path class="tentCampers" transform="translate(130, 130)" d="M25.911396813537372,-1.2956241347725583L24.559105199448403,1.3170877402462209 25.83508272779769,2.021958022769527 27.24010007366966,-0.6926232597892091Z" style="fill: var(--tent-color); stroke: var(--tent-color); stroke-width: 0.5;"></path><path class="tentCampers" transform="translate(130, 130)" d="M24.64832069871114,1.366371801112197L23.138385199020828,3.932942345668296 24.213551141311203,4.577286765049477 25.745867228534955,1.97267396190355Z" style="fill: var(--tent-color); stroke: var(--tent-color); stroke-width: 0.5;"></path><path class="tentCampers" transform="translate(130, 130)" d="M23.20457215232262,3.97260803104613L21.64782639473379,6.523001952886334 22.578087606731053,7.108544067621478 24.147364188009412,4.537621079671643Z" style="fill: var(--tent-color); stroke: var(--tent-color); stroke-width: 0.5;"></path><path class="tentCampers" transform="translate(130, 130)" d="M21.69214011096421,6.550894706855538L20.071072452971137,9.049398940817937 20.88939583926519,9.615083175881281 22.533773890500633,7.080651313652274Z" style="fill: var(--tent-color); stroke: var(--tent-color); stroke-width: 0.5;"></path><path class="tentCampers" transform="translate(130, 130)" d="M20.098729883270696,9.068517754437181L18.341590171947637,11.457606572925297 19.064694160327754,12.039309244335445 20.861738408965632,9.595964362262038Z" style="fill: var(--tent-color); stroke: var(--tent-color); stroke-width: 0.5;"></path><path class="tentCampers" transform="translate(130, 130)" d="M18.358229273893784,11.470991936866689L16.40889946370522,13.690171981324688 17.039430461831888,14.31260702563332 19.048055058381607,12.025923880394053Z" style="fill: var(--tent-color); stroke: var(--tent-color); stroke-width: 0.5;"></path><path class="tentCampers" transform="translate(130, 130)" d="M16.419323395090277,13.700462070492078L14.225849034106451,15.678008095544108 14.768827555859367,16.340001090246908 17.029006530446832,14.30231693646593Z" style="fill: var(--tent-color); stroke: var(--tent-color); stroke-width: 0.5;"></path><path class="tentCampers" transform="translate(130, 130)" d="M14.231292155823072,15.684644285193166L11.858182460965457,17.452341037439375 12.326220004854855,18.148775142980547 14.763384434142747,16.33336490059785Z" style="fill: var(--tent-color); stroke: var(--tent-color); stroke-width: 0.5;"></path><path class="tentCampers" transform="translate(130, 130)" d="M11.85866816379618,17.453063757274332L9.331885786102674,18.97876729706947 9.718761949493029,19.72217569609459 12.325734302024133,18.14805242314559Z" style="fill: var(--tent-color); stroke: var(--tent-color); stroke-width: 0.5;"></path><path class="tentCampers" transform="translate(130, 130)" d="M9.330077050450544,18.975291690654164L6.645617200823581,20.16272882236833 6.922852800397122,20.96318670497542 9.720570685145159,19.7256513025099Z" style="fill: var(--tent-color); stroke: var(--tent-color); stroke-width: 0.5;"></path><path class="tentCampers" transform="translate(130, 130)" d="M6.644767477878577,20.160275430991437L3.8064972017068976,20.88611973347592 3.956037416670788,21.724575151777987 6.9237025233421265,20.965640096352313Z" style="fill: var(--tent-color); stroke: var(--tent-color); stroke-width: 0.5;"></path><path class="tentCampers" transform="translate(130, 130)" d="M3.80661133323953,20.886759656335183L0.8828045735053687,21.18786931354992 0.9156659236259785,22.0370376078368 3.9559232851381556,21.723935228918723Z" style="fill: var(--tent-color); stroke: var(--tent-color); stroke-width: 0.5;"></path><path class="tentCampers" transform="translate(130, 130)" d="M0.8828243220698421,21.18837963509017L-2.059079993424874,21.11403441901086 -2.1365572326798623,21.959394688655156 0.9156461750615056,22.03652728629655Z" style="fill: var(--tent-color); stroke: var(--tent-color); stroke-width: 0.5;"></path><path class="tentCampers" transform="translate(130, 130)" d="M-2.05898838702589,21.113034894364766L-4.959530698163669,20.65231416870921 -5.156854761736234,21.480666177970477 -2.1366488390788465,21.96039421330125Z" style="fill: var(--tent-color); stroke: var(--tent-color); stroke-width: 0.5;"></path><path class="tentCampers" transform="translate(130, 130)" d="M-4.959457642289247,20.652007485483303L-7.754171129197097,19.75621268114366 -8.070206884413743,20.547174007088763 -5.156927817610655,21.480972861196385Z" style="fill: var(--tent-color); stroke: var(--tent-color); stroke-width: 0.5;"></path><path class="tentCampers" transform="translate(130, 130)" d="M-7.754562092617638,19.75719116835722L-10.402947203590912,18.477656399568176 -10.82019160561319,19.217385256925965 -8.069815920993202,20.5461955198752Z" style="fill: var(--tent-color); stroke: var(--tent-color); stroke-width: 0.5;"></path><path class="tentCampers" transform="translate(130, 130)" d="M-10.403014636271504,18.477775950362677L-12.868693015230965,16.872661293466948 -13.379435875760247,17.551197349111177 -10.820124172932598,19.217265706131464Z" style="fill: var(--tent-color); stroke: var(--tent-color); stroke-width: 0.5;"></path><path class="tentCampers" transform="translate(130, 130)" d="M-12.868035158537888,16.871787312604567L-15.0876892034922,14.95075344358734 -15.693078237303698,15.55026317323395 -13.380093732453323,17.552071329973558Z" style="fill: var(--tent-color); stroke: var(--tent-color); stroke-width: 0.5;"></path><path class="tentCampers" transform="translate(130, 130)" d="M-15.0877285314474,14.950792389604649L-16.987261242695137,12.71220083101261 -17.67205195920916,13.217965413494227 -15.693038909348498,15.55022422721664Z" style="fill: var(--tent-color); stroke: var(--tent-color); stroke-width: 0.5;"></path><path class="tentCampers" transform="translate(130, 130)" d="M-16.988134220560074,12.712845584620867L-18.572568118948485,10.233512357813167 -19.31549721918628,10.64428000058527 -17.671178981344223,13.217320659885969Z" style="fill: var(--tent-color); stroke: var(--tent-color); stroke-width: 0.5;"></path><path class="tentCampers" transform="translate(130, 130)" d="M-18.572348217933573,10.233390773907637L-19.83080186161159,7.570605174142466 -20.61921416011693,7.886307820242299 -19.315717120201192,10.6444015844908Z" style="fill: var(--tent-color); stroke: var(--tent-color); stroke-width: 0.5;"></path><path class="tentCampers" transform="translate(130, 130)" d="M-19.82979282989344,7.5702011292233005L-20.52505791093013,5.473970575183178 -21.33172690962651,5.741521673351978 -20.620223191835077,7.886711865161465Z" style="fill: var(--tent-color); stroke: var(--tent-color); stroke-width: 0.5;"></path><path class="rvCampers" transform="translate(130, 130)" d="MNaN,NaNLNaN,NaN NaN,NaN NaN,NaNZ" style="fill: var(--rv-color); stroke: var(--rv-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-20.715536182675887,5.588481604419853L-21.32177932376552,2.698022491982265 -22.637620853236434,2.883851878592686 -22.013265544619035,5.860666573680733Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-21.31803917807679,2.6974942908549995L-21.53276102467482,-0.2047069335492644 -22.869044853010728,-0.19301689023651747 -22.641360998925162,2.8843800797199517Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-21.52796569044618,-0.20474888396701496L-21.364465939793618,-3.1029028214463015 -22.69964767714974,-3.2806659422866087 -22.873840187239367,-0.1929749398187669Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-21.361362857863323,-3.102489684033828L-20.7647251180796,-5.9243785174422054 -22.059775919518056,-6.322126266188166 -22.702750759080036,-3.281079079699082Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-20.769790017306292,-5.925934095233288L-19.678432725388994,-8.599136875289567 -20.88086292890788,-9.195828868728986 -22.054711020291364,-6.320570688397083Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-19.689815497910114,-8.604785443669353L-18.209471957446834,-11.110244973526369 -19.299813015697698,-11.84681870140039 -20.86948015638676,-9.190180300349201Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-18.219355644940787,-11.11692184264679L-16.44098145912258,-13.434129981745327 -17.417352128523905,-14.280095787297643 -19.289929328203744,-11.840141832279969Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-16.446553230438283,-13.438957582734544L-14.412147000936553,-15.523041009900455 -15.258045717569306,-16.48159384727728 -17.4117803572082,-14.275268186308425Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-14.416392558077609,-15.52785197693916L-12.095203193997914,-17.287440235721753 -12.797556129122203,-18.33874994982512 -15.25380016042825,-16.476782880238574Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-12.098212804407577,-17.291945139881914L-9.564444473304587,-18.77419847465048 -10.151518890342874,-19.880415020222568 -12.79454651871254,-18.33424504566496Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-9.562471628863626,-18.770481070009616L-6.895632516923792,-20.0472204943736 -7.409602392133825,-21.197759364024837 -10.153491734783834,-19.88413242486343Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-6.886422866443435,-20.026604381708975L-4.14279990542728,-21.166419964447524 -4.621827551237757,-22.380359668120835 -7.418812042614182,-21.218375476689463Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-4.125242312131222,-21.121925957077714L-1.3517587174643713,-22.159381136242207 -1.7937841425667562,-23.48928524559373 -4.639385144533817,-22.424853675490645Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-1.3291147970899824,-22.091253284205745L1.4728998959328796,-22.90860292226299 1.1391339480612614,-24.419552595315135 -1.8164280629411456,-23.557413097630192Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M1.4908229875559385,-22.827465557589825L4.301883323246045,-23.255157364588456 4.234579460567431,-24.974376784581466 1.1212108564382022,-24.5006899599883Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M4.304621654529701,-23.185209041656165L7.072050123830602,-22.983572033729548 7.429747552255824,-24.811323138389593 4.231841129283776,-25.044325107513757Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M7.065401461323333,-22.949598906509507L9.728107304432442,-22.085521073446746 10.471534876964043,-23.860359816445833 7.436396214763093,-24.845296265609633Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M9.72576140125031,-22.079920528069078L12.258905521741088,-20.762602194507636 13.259540446886842,-22.4173256314201 10.473880780146175,-23.8659603618235Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M12.260714248500001,-20.765593237977868L14.623135605600563,-19.12073132716762 15.816391905996117,-20.632839229473007 13.257731720127929,-22.414334587949867Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M14.626252258586211,-19.12468078513971L16.7744923373917,-17.21010514843392 18.141431734873926,-18.55396726977897 15.813275253010469,-20.628889771500916Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M16.779513904959504,-17.215041939674688L18.656017304292426,-15.035935723907203 20.172210692533746,-16.184939062469752 18.13641016730612,-18.549030478538203Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M18.66382693489552,-15.041854026747384L20.25727297071193,-12.641558586451147 21.887418496573225,-13.583544791844751 20.164401061930654,-16.17902075962957Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M20.266844585231016,-12.647089582731715L21.546548977966967,-10.076460320321662 23.27012048614436,-10.781259101065057 21.87784688205414,-13.578013795564184Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M21.56128004023815,-10.0824841114313L22.438436140095686,-7.385455529136813 24.231752763712908,-7.773170073585355 23.25538942387318,-10.775235309955418Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M22.471055338840227,-7.392507790636517L22.78356511187506,-4.598948075195749 24.552082471132753,-4.611068175414602 24.199133564968367,-7.766117812085651Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M22.842376204208417,-4.599351122601153L22.56398205769221,-1.7588988277225983 24.187108945725758,-1.4868933227748387 24.493271378799395,-4.610665128009199Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M22.6333740007231,-1.7472700446357186L21.95655592041383,1.0873758324096978 23.401785296627185,1.4999392501403506 24.117717002694867,-1.498522105861718Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M22.016385541635987,1.1044551372032505L21.08352471139993,3.9029360974621126 22.37776755544577,4.375319365184371 23.34195567540503,1.4828599453467983Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M21.12423668868409,3.917795485677701L20.031186018306467,6.669067418774908 21.21504124609783,7.1846351263911075 22.337055578161614,4.360459976968783Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M20.051849132214485,6.678066183167446L18.7859696860264,9.344151190892365 19.88739304590719,9.928294487818572 21.19437813218981,7.17563636199857Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M18.791711123393913,9.347196180017448L17.303357477648873,11.875936773015974 18.327906255261283,12.565091821954729 19.88165160853968,9.92524949869349Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M17.301423327348232,11.87463578132654L15.53337898336658,14.189409945665446 16.458892439973265,15.015891339124593 18.329840405561924,12.566392813644162Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M15.531272705358107,14.187529044236053L13.433116379090237,16.202637450881884 14.235628661803318,17.15505908232124 16.460998717981735,15.017772240553985Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M13.431827853935285,16.201108229140775L11.08121307225261,17.93360948093639 11.760593339490555,18.98174238673939 14.23691718695827,17.15658830406235Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M11.07825606059305,17.92904746850729L8.537829148866335,19.366899140426632 9.085564863584837,20.50201260273743 11.763550351150114,18.986304399168493Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M8.534044290462653,19.359055496838103L5.837352289812868,20.449073179185355 6.228012547833616,21.666424409925973 9.089349721988519,20.50985624632596Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M5.834812979326187,20.441160337572402L3.0079903028128596,21.123739827125032 3.2296534159066224,22.398949992210905 6.230551858320298,21.674337251538926Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M3.0066367000836083,21.11595265885992L0.11004629635914531,21.42789733482897 0.16598105525866735,22.736821293100718 3.231007018635874,22.406737160476016Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M0.10962924448385347,21.418137943671272L-2.7935083009018746,21.354649371232902 -2.9243791006789355,22.67898862925538 0.16639810713395964,22.746580684258415Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-2.792693003654762,21.34639901933509L-5.629876489616523,20.844367497015433 -5.988695745490898,22.145161158990426 -2.9251943979260484,22.68723898115319Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-5.630252725730891,20.845731430374535L-8.323097996627851,19.822374611651323 -8.89656180867,21.03858348771391 -5.988319509376531,22.143797225631324Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-8.327905508225546,19.832570439450937L-10.852695260796192,18.39355342264506 -11.575807775702831,19.49859745626119 -8.891754297072305,21.028387659914298Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-10.85925670561658,18.40358047279452L-13.201479766166008,16.656582666021944 -14.033929016792976,17.650233435052275 -11.569246330882443,19.48857040611173Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-13.205942020186379,16.661909023317133L-15.337648214772473,14.6606489485679 -16.26971453241991,15.541747444254366 -14.029466762772605,17.644907077757086Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-15.338674516417454,14.661619129356962L-17.216481940239184,12.421505557326812 -18.243112786323316,13.185405148239594 -16.26868823077493,15.540777263465303Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-17.21347178127402,12.419265746190373L-18.818762122461976,9.978489542416977 -19.935979546239196,10.61828932721193 -18.24612294528848,13.187644959376033Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-18.81151079249624,9.974336904575123L-20.102772220862217,7.35757385423793 -21.305095210778408,7.862600935190781 -19.943230876204932,10.622441965053783Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path><path class="backcountryCampers" transform="translate(130, 130)" d="M-20.095610278025415,7.3545655319192536L-20.742837523137215,5.506849734908897 -21.985964204157707,5.942298443191689 -21.31225715361521,7.865609257509457Z" style="fill: var(--backcountry-color); stroke: var(--backcountry-color); stroke-width: 0.5;"></path></g></g><defs><mask id="coldMask-kefj"><circle cx="130" cy="130" r="130" fill="white"></circle><path d="M-52.059377346037905,13.949268118337933C-59.3539783179825,5.474204080683199,-63.65405096088922,-6.749819512338893,-66.18604255551554,-17.734496652962275C-69.60428167104335,-32.56402971824256,-69.0827896823389,-50.36490335569617,-64.53822517454721,-64.53822517454718C-58.94266980816907,-81.98931577451611,-44.54125252959723,-100.18751866373516,-29.580860029842363,-110.39727256295474C-12.711215896868499,-121.90999958317822,13.703624615292663,-128.32367160635894,33.64647586332774,-125.57035741757886C54.285707467510086,-122.72090081207404,76.60323462854261,-107.24452847995967,91.92388155425115,-91.9238815542512C107.24452847995968,-76.60323462854264,121.82052346806522,-54.45727302467453,125.57035741757888,-33.646475863327694C129.21250101650188,-13.433337711032916,126.59201384356156,14.61797337752312,115.36776587740063,30.91269969943226C104.82115735784267,46.22366752272168,81.9722257927461,60.186975953116985,63.00616048197629,63.00616048197636C47.852835576465466,65.25860549017409,30.59126955095031,58.27987971526734,14.650236365490601,54.67542645890413C5.45519029538804,52.59631945472188,-4.963419992673742,52.298049772288046,-12.75762209817839,47.61209385416534C-19.544762348501653,43.53159406821939,-23.890286529754448,35.444169709119805,-30.06676959170297,30.066769591703004C-36.8997986219302,24.117764188316595,-46.32590446066017,20.61057146428092,-52.059377346037905,13.949268118337933" transform="translate(130, 130)" style="fill: black;"></path></mask><mask id="hotMask-kefj"><circle cx="130" cy="130" r="130" fill="white"></circle><path d="M-125.57035741757888,33.64647586332768C-131.1781033948001,12.718082960397886,-131.17810339480016,-12.71808296039785,-125.57035741757889,-33.64647586332764C-119.96261144035762,-54.57486876625746,-107.24452847995971,-76.60323462854262,-91.9238815542512,-91.92388155425115C-76.60323462854268,-107.24452847995967,-54.574868766257595,-119.96261144035756,-33.6464758633278,-125.57035741757885C-12.71808296039795,-131.17810339480016,12.718082960397885,-131.17810339480013,33.64647586332774,-125.57035741757886C54.57486876625753,-119.96261144035758,76.60323462854261,-107.24452847995967,91.92388155425115,-91.9238815542512C107.24452847995968,-76.60323462854264,119.96261144035759,-54.574868766257524,125.57035741757888,-33.646475863327694C131.17810339480016,-12.718082960397906,131.1781033948002,12.718082960397831,125.57035741757889,33.64647586332762C119.9626114403576,54.57486876625749,107.24452847995967,76.60323462854267,91.92388155425112,91.92388155425122C76.60323462854261,107.24452847995974,54.57486876625749,119.96261144035758,33.6464758633277,125.57035741757888C12.71808296039791,131.17810339480013,-12.718082960397828,131.1781033948002,-33.646475863327616,125.57035741757889C-54.57486876625744,119.96261144035762,-76.60323462854258,107.24452847995974,-91.92388155425112,91.92388155425122C-107.2445284799597,76.6032346285427,-119.96261144035758,54.57486876625752,-125.57035741757888,33.64647586332768" transform="translate(130, 130)" style="fill: black;"></path></mask><marker id="arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto" markerUnits="strokeWidth"><path fill="#cac5c2" d="M0,0 L0,6 L9,3 z"></path></marker></defs></svg>
`
export default chart;

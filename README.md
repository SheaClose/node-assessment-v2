<!-- 2.  Get all accounts by `card_type`. You will receive the `card_type` as a query (visa, mastercard, etc).  Return an array of all accounts that have the same type specified in the query. Query params are case sensitive, so '?cardtype=VISA' will not match a 'visa' in accounts.
   `GET: /api/accounts?cardtype=visa` -->

3. Find one account by id. Use the url params to get the id. Make sure that a get request for an account that does not exists returns a 404 status and a message that says 'account could not be found'.
    `GET: /api/accounts/` + accountId

4. Create an new account.  `POST: /api/accounts`

* You will receive the data on the body.  
* All accounts will need an id property, but it will not be provided to you.  Manage a value so that it increments each time.  
* The 'approved_states' property should be initialized as a collection (array) containing the approved state sent in the body.
* Return a valid status code and the new account object you created (with the id on it).  

6.  Change an account's card type. The card type will be sent in the body `{card_type: "New card type"}`. Update the account in your array and then return a valid status code and the updated account object.
   `POST: /api/accounts/cardtype/` + accountId

7.  Add to an accounts approved states. Use params to get an account by id. You will receive the data on the body `{add: 'New state'}`. Return a valid status code.
   `POST: /api/accounts/approvedstates/:accountId/`

8. Remove from an accounts approved states. Use delete REST method. You will receive the account id in the url params. You will receive the state to delete in the query. You will need to search your array and splice it out. Note, this will not work unless #5 is working correctly.
   `DELETE: /api/accounts/approvedstates/:accountId/` + `?state=` + statename.

9.  Ban (delete) an account. Use REST method delete and the query params to delete an account by their id number.
   `DELETE: /api/accounts/` + accountId

<!-- 10. Change your get all accounts (#1) endpoint so that it uses queries. Allow queries for firstname, lastname, balance, cardtype. -->

11. Update one account by id.  (You'll need to find your account then use a for in loop to update properties).
   `PUT: /api/accounts/` + accountId



<!-- [{"id":1,"card_number":"3551538724170358","card_type":"jcb","balance":"398.63","first_name":"Lori","last_name":"Lynch","approved_states":["Colorado"]},
{"id":2,"card_number":"3544299882024891","card_type":"jcb","balance":"515.94","first_name":"Maria","last_name":"Perry","approved_states":["Utah"]},
{"id":3,"card_number":"5181329760945462","card_type":"mastercard","balance":"696.89","first_name":"Betty","last_name":"Hughes","approved_states":["California"]},
{"id":4,"card_number":"3545122127352159","card_type":"jcb","balance":"608.25","first_name":"Annie","last_name":"Pierce","approved_states":["Arizona"]},
{"id":5,"card_number":"3560500642641273","card_type":"jcb","balance":"670.09","first_name":"Ann","last_name":"Morgan","approved_states":["New Mexico"]},
{"id":6,"card_number":"201458274218020","card_type":"diners-club-enroute","balance":"852.70","first_name":"Arthur","last_name":"Hart","approved_states":["Washington"]},
{"id":7,"card_number":"3534718944922224","card_type":"jcb","balance":"568.95","first_name":"Kathryn","last_name":"Kennedy","approved_states":["Idaho"]},
{"id":8,"card_number":"5100179588236604","card_type":"mastercard","balance":"131.93","first_name":"Maria","last_name":"Elliott","approved_states":["Washington"]},
{"id":9,"card_number":"676354736507816336","card_type":"maestro","balance":"124.00","first_name":"Jack","last_name":"Jacobs","approved_states":["New Mexico"]},
{"id":10,"card_number":"201528106054023","card_type":"diners-club-enroute","balance":"824.19","first_name":"Peter","last_name":"Ford","approved_states":["Washington"]},
{"id":11,"card_number":"3563566554200249","card_type":"jcb","balance":"297.65","first_name":"Thomas","last_name":"Hicks","approved_states":["Oregon"]},
{"id":12,"card_number":"5100176292030281","card_type":"mastercard","balance":"630.75","first_name":"Raymond","last_name":"Richardson","approved_states":["Arizona"]},
{"id":13,"card_number":"5602218247618042736","card_type":"china-unionpay","balance":"465.50","first_name":"Paula","last_name":"Matthews","approved_states":["Nevada"]},
{"id":14,"card_number":"560224308576064083","card_type":"china-unionpay","balance":"630.01","first_name":"Frank","last_name":"Jordan","approved_states":["Arizona"]},
{"id":15,"card_number":"5641827503739658045","card_type":"switch","balance":"701.04","first_name":"Beverly","last_name":"Welch","approved_states":["New Mexico"]},
{"id":16,"card_number":"633328876840627216","card_type":"switch","balance":"869.43","first_name":"Ralph","last_name":"Ford","approved_states":["New Mexico"]},
{"id":17,"card_number":"4041375495041","card_type":"visa","balance":"978.52","first_name":"Phyllis","last_name":"Gomez","approved_states":["Oregon"]},
{"id":18,"card_number":"3565078354961309","card_type":"jcb","balance":"711.39","first_name":"Tina","last_name":"Cole","approved_states":["Arizona"]},
{"id":19,"card_number":"3529346882717633","card_type":"jcb","balance":"187.98","first_name":"Kathryn","last_name":"Thomas","approved_states":["Oregon"]},
{"id":20,"card_number":"3558243716529694","card_type":"jcb","balance":"103.76","first_name":"Philip","last_name":"Vasquez","approved_states":["Utah"]},
{"id":21,"card_number":"5100175142819786","card_type":"mastercard","balance":"571.03","first_name":"Christina","last_name":"Walker","approved_states":["Utah"]},
{"id":22,"card_number":"3569406247287960","card_type":"jcb","balance":"640.25","first_name":"Carl","last_name":"Ellis","approved_states":["Oregon"]},
{"id":23,"card_number":"3537651524796378","card_type":"jcb","balance":"951.21","first_name":"Denise","last_name":"Stevens","approved_states":["Wyoming"]},
{"id":24,"card_number":"3541006393303703","card_type":"jcb","balance":"526.33","first_name":"Laura","last_name":"Simmons","approved_states":["Arizona"]},
{"id":25,"card_number":"6396883927307007","card_type":"instapayment","balance":"46.49","first_name":"Aaron","last_name":"Morgan","approved_states":["Montana"]},
{"id":26,"card_number":"4748138328797326","card_type":"visa","balance":"191.16","first_name":"Aaron","last_name":"George","approved_states":["Nevada"]},
{"id":27,"card_number":"5020839035959481","card_type":"maestro","balance":"369.57","first_name":"Paula","last_name":"Austin","approved_states":["Utah"]},
{"id":28,"card_number":"3560046766515109","card_type":"jcb","balance":"664.72","first_name":"Jerry","last_name":"Ryan","approved_states":["Montana"]},
{"id":29,"card_number":"6385521100774303","card_type":"instapayment","balance":"233.25","first_name":"Sharon","last_name":"Harrison","approved_states":["Idaho"]},
{"id":30,"card_number":"337941168231842","card_type":"americanexpress","balance":"949.38","first_name":"Paula","last_name":"Knight","approved_states":["New Mexico"]},
{"id":31,"card_number":"201922914000544","card_type":"diners-club-enroute","balance":"444.97","first_name":"Janice","last_name":"Rodriguez","approved_states":["Texas"]},
{"id":32,"card_number":"4905059049983671606","card_type":"switch","balance":"716.36","first_name":"Robin","last_name":"Long","approved_states":["Arizona"]},
{"id":33,"card_number":"5108755743612128","card_type":"mastercard","balance":"347.23","first_name":"Paula","last_name":"Hudson","approved_states":["Texas"]},
{"id":34,"card_number":"5108750297272684","card_type":"mastercard","balance":"265.66","first_name":"Marilyn","last_name":"Brown","approved_states":["New Mexico"]},
{"id":35,"card_number":"3582561257176967","card_type":"jcb","balance":"96.06","first_name":"Kathryn","last_name":"Kennedy","approved_states":["Texas"]},
{"id":36,"card_number":"3536237913477035","card_type":"jcb","balance":"389.04","first_name":"Heather","last_name":"Palmer","approved_states":["Nevada"]},
{"id":37,"card_number":"5100141947612180","card_type":"mastercard","balance":"232.38","first_name":"Wayne","last_name":"Dixon","approved_states":["California"]},
{"id":38,"card_number":"50208290466981125","card_type":"maestro","balance":"307.43","first_name":"Julia","last_name":"Cooper","approved_states":["Idaho"]},
{"id":39,"card_number":"3561758904397559","card_type":"jcb","balance":"944.56","first_name":"Joan","last_name":"Ryan","approved_states":["Wyoming"]},
{"id":40,"card_number":"3579130339062903","card_type":"jcb","balance":"294.18","first_name":"Dennis","last_name":"Duncan","approved_states":["Utah"]},
{"id":41,"card_number":"3565748201784050","card_type":"jcb","balance":"995.16","first_name":"Ashley","last_name":"Dean","approved_states":["Idaho"]},
{"id":42,"card_number":"3571703539214942","card_type":"jcb","balance":"174.56","first_name":"Pamela","last_name":"Little","approved_states":["Montana"]},
{"id":43,"card_number":"3540435372006204","card_type":"jcb","balance":"974.50","first_name":"Mildred","last_name":"Garza","approved_states":["California"]},
{"id":44,"card_number":"3540057725166343","card_type":"jcb","balance":"453.57","first_name":"Teresa","last_name":"Freeman","approved_states":["California"]},
{"id":45,"card_number":"3569371511021380","card_type":"jcb","balance":"510.52","first_name":"Russell","last_name":"Little","approved_states":["Arizona"]},
{"id":46,"card_number":"3583943269113460","card_type":"jcb","balance":"383.15","first_name":"Robin","last_name":"Carter","approved_states":["California"]},
{"id":47,"card_number":"337941092989333","card_type":"americanexpress","balance":"271.62","first_name":"George","last_name":"Gonzales","approved_states":["Wyoming"]},
{"id":48,"card_number":"633454784233118783","card_type":"solo","balance":"117.39","first_name":"Richard","last_name":"Sanchez","approved_states":["Utah"]},
{"id":49,"card_number":"589310032632625935","card_type":"maestro","balance":"117.36","first_name":"Eric","last_name":"Lawrence","approved_states":["Wyoming"]},
{"id":50,"card_number":"63049157489135193","card_type":"laser","balance":"325.06","first_name":"Henry","last_name":"Gomez","approved_states":["Idaho"]},
{"id":51,"card_number":"56022110097101193","card_type":"china-unionpay","balance":"458.89","first_name":"Mark","last_name":"Gray","approved_states":["Colorado"]},
{"id":52,"card_number":"3530027456179148","card_type":"jcb","balance":"658.59","first_name":"Howard","last_name":"Arnold","approved_states":["Washington"]},
{"id":53,"card_number":"337941548224632","card_type":"americanexpress","balance":"124.88","first_name":"Philip","last_name":"Riley","approved_states":["New Mexico"]},
{"id":54,"card_number":"3549714846790598","card_type":"jcb","balance":"351.22","first_name":"Rose","last_name":"Patterson","approved_states":["Montana"]},
{"id":55,"card_number":"3563972512775886","card_type":"jcb","balance":"382.14","first_name":"Steve","last_name":"Bishop","approved_states":["Nevada"]},
{"id":56,"card_number":"3532436010016258","card_type":"jcb","balance":"303.26","first_name":"Brandon","last_name":"Bailey","approved_states":["Arizona"]},
{"id":57,"card_number":"3575603912717857","card_type":"jcb","balance":"931.08","first_name":"Nancy","last_name":"Warren","approved_states":["California"]},
{"id":58,"card_number":"5602233679719490","card_type":"bankcard","balance":"575.35","first_name":"Patrick","last_name":"Ruiz","approved_states":["Idaho"]},
{"id":59,"card_number":"201839774648925","card_type":"diners-club-enroute","balance":"731.56","first_name":"Samuel","last_name":"Richardson","approved_states":["California"]},
{"id":60,"card_number":"5464520388183233","card_type":"mastercard","balance":"657.73","first_name":"Kathy","last_name":"Hunter","approved_states":["California"]},
{"id":61,"card_number":"3578773221481375","card_type":"jcb","balance":"164.65","first_name":"Terry","last_name":"Hawkins","approved_states":["Colorado"]},
{"id":62,"card_number":"6386439715333804","card_type":"instapayment","balance":"239.88","first_name":"Jonathan","last_name":"Baker","approved_states":["Nevada"]},
{"id":63,"card_number":"3545472823692212","card_type":"jcb","balance":"817.38","first_name":"Kevin","last_name":"Jacobs","approved_states":["Idaho"]},
{"id":64,"card_number":"30081605245640","card_type":"diners-club-carte-blanche","balance":"734.48","first_name":"Sharon","last_name":"Fernandez","approved_states":["New Mexico"]},
{"id":65,"card_number":"56022220382330546","card_type":"china-unionpay","balance":"593.62","first_name":"Rachel","last_name":"Banks","approved_states":["Washington"]},
{"id":66,"card_number":"5002351422045074","card_type":"mastercard","balance":"484.63","first_name":"Janet","last_name":"Hanson","approved_states":["Arizona"]},
{"id":67,"card_number":"3576630189901848","card_type":"jcb","balance":"210.72","first_name":"Wanda","last_name":"Romero","approved_states":["Texas"]},
{"id":68,"card_number":"3542466960202572","card_type":"jcb","balance":"827.67","first_name":"Pamela","last_name":"Allen","approved_states":["Utah"]},
{"id":69,"card_number":"3587229466958782","card_type":"jcb","balance":"61.89","first_name":"Phyllis","last_name":"Johnston","approved_states":["Oregon"]},
{"id":70,"card_number":"3576519347856525","card_type":"jcb","balance":"826.34","first_name":"Margaret","last_name":"Sullivan","approved_states":["Utah"]},
{"id":71,"card_number":"3561945062518205","card_type":"jcb","balance":"763.90","first_name":"Beverly","last_name":"Davis","approved_states":["New Mexico"]},
{"id":72,"card_number":"3554715701417591","card_type":"jcb","balance":"773.81","first_name":"Michelle","last_name":"Lee","approved_states":["Arizona"]},
{"id":73,"card_number":"4508964448164331","card_type":"visa-electron","balance":"213.16","first_name":"Paula","last_name":"Palmer","approved_states":["Nevada"]},
{"id":74,"card_number":"676776698619692379","card_type":"solo","balance":"54.08","first_name":"Theresa","last_name":"Ruiz","approved_states":["Wyoming"]},
{"id":75,"card_number":"3569919344559628","card_type":"jcb","balance":"600.07","first_name":"Mary","last_name":"Howard","approved_states":["Montana"]},
{"id":76,"card_number":"5557396337513921","card_type":"mastercard","balance":"149.63","first_name":"Michelle","last_name":"Green","approved_states":["Texas"]},
{"id":77,"card_number":"5100148509386756","card_type":"mastercard","balance":"722.38","first_name":"Louise","last_name":"Montgomery","approved_states":["Oregon"]},
{"id":78,"card_number":"6388019376533542","card_type":"instapayment","balance":"173.28","first_name":"Theresa","last_name":"Gomez","approved_states":["Oregon"]},
{"id":79,"card_number":"3535173474906677","card_type":"jcb","balance":"532.34","first_name":"Fred","last_name":"Graham","approved_states":["Idaho"]},
{"id":80,"card_number":"56022401751724184","card_type":"china-unionpay","balance":"851.39","first_name":"Mary","last_name":"Olson","approved_states":["Texas"]},
{"id":81,"card_number":"3576154207366074","card_type":"jcb","balance":"379.47","first_name":"Jeffrey","last_name":"Fields","approved_states":["Washington"]},
{"id":82,"card_number":"3579321363491437","card_type":"jcb","balance":"88.13","first_name":"Wayne","last_name":"Hicks","approved_states":["Texas"]},
{"id":83,"card_number":"3572885478277185","card_type":"jcb","balance":"871.63","first_name":"Joyce","last_name":"Lane","approved_states":["California"]},
{"id":84,"card_number":"5100172070620815","card_type":"mastercard","balance":"344.16","first_name":"Margaret","last_name":"Williams","approved_states":["California"]},
{"id":85,"card_number":"3578044902807027","card_type":"jcb","balance":"950.63","first_name":"Patricia","last_name":"Williamson","approved_states":["Nevada"]},
{"id":86,"card_number":"63047266477650097","card_type":"maestro","balance":"622.26","first_name":"Ralph","last_name":"Mcdonald","approved_states":["Wyoming"]},
{"id":87,"card_number":"3589062468592806","card_type":"jcb","balance":"712.00","first_name":"Edward","last_name":"Hart","approved_states":["Idaho"]},
{"id":88,"card_number":"3536404762208065","card_type":"jcb","balance":"780.13","first_name":"Philip","last_name":"Smith","approved_states":["Oregon"]},
{"id":89,"card_number":"3573121688492482","card_type":"jcb","balance":"321.82","first_name":"Carl","last_name":"Ryan","approved_states":["Texas"]},
{"id":90,"card_number":"3578200840233136","card_type":"jcb","balance":"719.24","first_name":"Gerald","last_name":"Knight","approved_states":["Colorado"]},
{"id":91,"card_number":"3572533506006479","card_type":"jcb","balance":"17.42","first_name":"Andrea","last_name":"Crawford","approved_states":["Utah"]},
{"id":92,"card_number":"5610402234662582","card_type":"bankcard","balance":"766.49","first_name":"Jerry","last_name":"Hernandez","approved_states":["Wyoming"]},
{"id":93,"card_number":"6767791364174753435","card_type":"solo","balance":"145.92","first_name":"Henry","last_name":"Ortiz","approved_states":["Utah"]},
{"id":94,"card_number":"374622861072188","card_type":"americanexpress","balance":"528.74","first_name":"Albert","last_name":"Evans","approved_states":["Montana"]},
{"id":95,"card_number":"201974793629778","card_type":"diners-club-enroute","balance":"426.68","first_name":"Joan","last_name":"Vasquez","approved_states":["Wyoming"]},
{"id":96,"card_number":"3564501667931413","card_type":"jcb","balance":"636.85","first_name":"Albert","last_name":"Berry","approved_states":["Colorado"]},
{"id":97,"card_number":"5641823755015644081","card_type":"switch","balance":"821.01","first_name":"Judy","last_name":"Greene","approved_states":["Texas"]},
{"id":98,"card_number":"5602215080673416","card_type":"china-unionpay","balance":"177.13","first_name":"Jonathan","last_name":"Rice","approved_states":["Idaho"]},
{"id":99,"card_number":"30450190002841","card_type":"diners-club-carte-blanche","balance":"944.15","first_name":"Ruth","last_name":"Moore","approved_states":["Montana"]},
{"id":100,"card_number":"3528582346656832","card_type":"jcb","balance":"630.71","first_name":"Kevin","last_name":"Simmons","approved_states":["California"]}]
 -->

let ul = document.querySelector("#list")



  // for(let i=1;i<=100;i++){
  //   ul.innerHTML += `<li>  ${i}  </li>`;
  // }


let obj = [{"id":1,"first_name":"Loleta","last_name":"Ginglell","email":"lginglell0@dailymotion.com","gender":"Female"},
{"id":2,"first_name":"Myca","last_name":"Nanuccioi","email":"mnanuccioi1@economist.com","gender":"Male"},
{"id":3,"first_name":"Shelia","last_name":"Goodlett","email":"sgoodlett2@baidu.com","gender":"Female"},
{"id":4,"first_name":"Abelard","last_name":"Test","email":"atest3@economist.com","gender":"Male"},
{"id":5,"first_name":"Jacquelynn","last_name":"Shotboulte","email":"jshotboulte4@businessinsider.com","gender":"Female"},
{"id":6,"first_name":"Zorina","last_name":"Alen","email":"zalen5@shareasale.com","gender":"Female"},
{"id":7,"first_name":"Herculie","last_name":"Emanson","email":"hemanson6@amazon.co.uk","gender":"Male"},
{"id":8,"first_name":"Aili","last_name":"Pevreal","email":"apevreal7@symantec.com","gender":"Female"},
{"id":9,"first_name":"Dilan","last_name":"Neate","email":"dneate8@reddit.com","gender":"Male"},
{"id":10,"first_name":"Lorette","last_name":"Craker","email":"lcraker9@alexa.com","gender":"Female"},
{"id":11,"first_name":"Kip","last_name":"Oboy","email":"koboya@foxnews.com","gender":"Male"},
{"id":12,"first_name":"Loralee","last_name":"Schimonek","email":"lschimonekb@yahoo.co.jp","gender":"Female"},
{"id":13,"first_name":"Skell","last_name":"Hover","email":"shoverc@cam.ac.uk","gender":"Male"},
{"id":14,"first_name":"Valerie","last_name":"Androli","email":"vandrolid@amazon.co.jp","gender":"Female"},
{"id":15,"first_name":"Tasha","last_name":"Abrahim","email":"tabrahime@freewebs.com","gender":"Female"},
{"id":16,"first_name":"Marigold","last_name":"Piser","email":"mpiserf@geocities.com","gender":"Female"},
{"id":17,"first_name":"Oberon","last_name":"Honsch","email":"ohonschg@studiopress.com","gender":"Male"},
{"id":18,"first_name":"Angela","last_name":"Rait","email":"araith@themeforest.net","gender":"Female"},
{"id":19,"first_name":"Kearney","last_name":"Empringham","email":"kempringhami@tamu.edu","gender":"Male"},
{"id":20,"first_name":"Heath","last_name":"Cloy","email":"hcloyj@discovery.com","gender":"Female"},
{"id":21,"first_name":"Ambros","last_name":"Kirlin","email":"akirlink@hubpages.com","gender":"Male"},
{"id":22,"first_name":"Briano","last_name":"Lamberts","email":"blambertsl@shareasale.com","gender":"Male"},
{"id":23,"first_name":"Vyky","last_name":"Pallister","email":"vpallisterm@bloglovin.com","gender":"Female"},
{"id":24,"first_name":"Leighton","last_name":"Connock","email":"lconnockn@about.me","gender":"Male"},
{"id":25,"first_name":"Juan","last_name":"Starrs","email":"jstarrso@jugem.jp","gender":"Male"},
{"id":26,"first_name":"Kaleb","last_name":"Middleditch","email":"kmiddleditchp@discovery.com","gender":"Male"},
{"id":27,"first_name":"Westleigh","last_name":"Cobain","email":"wcobainq@dropbox.com","gender":"Male"},
{"id":28,"first_name":"Alma","last_name":"Parriss","email":"aparrissr@ameblo.jp","gender":"Female"},
{"id":29,"first_name":"Clementine","last_name":"Phelip","email":"cphelips@amazon.co.jp","gender":"Female"},
{"id":30,"first_name":"Danya","last_name":"MacNab","email":"dmacnabt@theglobeandmail.com","gender":"Male"},
{"id":31,"first_name":"Teddie","last_name":"Phethean","email":"tphetheanu@discuz.net","gender":"Female"},
{"id":32,"first_name":"Maura","last_name":"Philipart","email":"mphilipartv@ebay.com","gender":"Female"},
{"id":33,"first_name":"Granthem","last_name":"Crumby","email":"gcrumbyw@house.gov","gender":"Male"},
{"id":34,"first_name":"Norma","last_name":"Tapin","email":"ntapinx@ox.ac.uk","gender":"Genderfluid"},
{"id":35,"first_name":"Kori","last_name":"Underwood","email":"kunderwoody@symantec.com","gender":"Female"},
{"id":36,"first_name":"Batsheva","last_name":"Gorusso","email":"bgorussoz@angelfire.com","gender":"Female"},
{"id":37,"first_name":"Oates","last_name":"Lamb","email":"olamb10@loc.gov","gender":"Male"},
{"id":38,"first_name":"Ian","last_name":"Eslie","email":"ieslie11@tamu.edu","gender":"Male"},
{"id":39,"first_name":"Darbie","last_name":"Finnimore","email":"dfinnimore12@w3.org","gender":"Female"},
{"id":40,"first_name":"Jerald","last_name":"Kennler","email":"jkennler13@blogger.com","gender":"Male"},
{"id":41,"first_name":"Chrissy","last_name":"Mankor","email":"cmankor14@intel.com","gender":"Male"},
{"id":42,"first_name":"Cchaddie","last_name":"Tebbitt","email":"ctebbitt15@bbc.co.uk","gender":"Male"},
{"id":43,"first_name":"Neila","last_name":"Vila","email":"nvila16@wikipedia.org","gender":"Female"},
{"id":44,"first_name":"Averil","last_name":"Chastaing","email":"achastaing17@vkontakte.ru","gender":"Male"},
{"id":45,"first_name":"Emmy","last_name":"Beavington","email":"ebeavington18@imgur.com","gender":"Male"},
{"id":46,"first_name":"Konrad","last_name":"Buckleigh","email":"kbuckleigh19@europa.eu","gender":"Male"},
{"id":47,"first_name":"Ignatius","last_name":"MacTrustey","email":"imactrustey1a@paginegialle.it","gender":"Male"},
{"id":48,"first_name":"Sarena","last_name":"Flawn","email":"sflawn1b@auda.org.au","gender":"Female"},
{"id":49,"first_name":"Dur","last_name":"MacDowall","email":"dmacdowall1c@aol.com","gender":"Male"},
{"id":50,"first_name":"Samuel","last_name":"Scudders","email":"sscudders1d@lycos.com","gender":"Male"},
{"id":51,"first_name":"Clary","last_name":"Maskall","email":"cmaskall1e@nih.gov","gender":"Female"},
{"id":52,"first_name":"Shepperd","last_name":"Abernethy","email":"sabernethy1f@lulu.com","gender":"Male"},
{"id":53,"first_name":"Lamond","last_name":"Camerati","email":"lcamerati1g@paginegialle.it","gender":"Male"},
{"id":54,"first_name":"Bradan","last_name":"Karpychev","email":"bkarpychev1h@desdev.cn","gender":"Male"},
{"id":55,"first_name":"Rozelle","last_name":"De Mars","email":"rdemars1i@booking.com","gender":"Female"},
{"id":56,"first_name":"Louie","last_name":"Haberfield","email":"lhaberfield1j@technorati.com","gender":"Male"},
{"id":57,"first_name":"Piggy","last_name":"Bahde","email":"pbahde1k@apache.org","gender":"Male"},
{"id":58,"first_name":"Logan","last_name":"Fass","email":"lfass1l@sohu.com","gender":"Male"},
{"id":59,"first_name":"Urbano","last_name":"McCalum","email":"umccalum1m@google.com.hk","gender":"Male"},
{"id":60,"first_name":"Salem","last_name":"Mingey","email":"smingey1n@rediff.com","gender":"Male"},
{"id":61,"first_name":"Darcee","last_name":"Dalli","email":"ddalli1o@mapquest.com","gender":"Female"},
{"id":62,"first_name":"Karlens","last_name":"Sutherley","email":"ksutherley1p@issuu.com","gender":"Male"},
{"id":63,"first_name":"Kate","last_name":"Belbin","email":"kbelbin1q@walmart.com","gender":"Female"},
{"id":64,"first_name":"Johannes","last_name":"Beaufoy","email":"jbeaufoy1r@gizmodo.com","gender":"Male"},
{"id":65,"first_name":"Asher","last_name":"Cressy","email":"acressy1s@nih.gov","gender":"Male"},
{"id":66,"first_name":"Jinny","last_name":"Burghill","email":"jburghill1t@booking.com","gender":"Female"},
{"id":67,"first_name":"Andriana","last_name":"Ponsford","email":"aponsford1u@spotify.com","gender":"Female"},
{"id":68,"first_name":"Phedra","last_name":"Choules","email":"pchoules1v@pinterest.com","gender":"Female"},
{"id":69,"first_name":"Andres","last_name":"Elston","email":"aelston1w@unblog.fr","gender":"Polygender"},
{"id":70,"first_name":"Risa","last_name":"Voaden","email":"rvoaden1x@histats.com","gender":"Female"},
{"id":71,"first_name":"Arie","last_name":"Behrendsen","email":"abehrendsen1y@artisteer.com","gender":"Male"},
{"id":72,"first_name":"Jonathan","last_name":"De Simone","email":"jdesimone1z@yolasite.com","gender":"Male"},
{"id":73,"first_name":"Anita","last_name":"Scrivens","email":"ascrivens20@samsung.com","gender":"Female"},
{"id":74,"first_name":"Lula","last_name":"Haggas","email":"lhaggas21@ebay.co.uk","gender":"Female"},
{"id":75,"first_name":"Mathias","last_name":"Lisett","email":"mlisett22@examiner.com","gender":"Male"},
{"id":76,"first_name":"Farrell","last_name":"Doubrava","email":"fdoubrava23@unicef.org","gender":"Male"},
{"id":77,"first_name":"Barbey","last_name":"Piddocke","email":"bpiddocke24@elpais.com","gender":"Female"},
{"id":78,"first_name":"Wini","last_name":"Rosthorn","email":"wrosthorn25@home.pl","gender":"Female"},
{"id":79,"first_name":"Pebrook","last_name":"Strange","email":"pstrange26@sitemeter.com","gender":"Agender"},
{"id":80,"first_name":"Malinde","last_name":"Klaff","email":"mklaff27@tinypic.com","gender":"Female"},
{"id":81,"first_name":"Vincents","last_name":"Gobat","email":"vgobat28@sfgate.com","gender":"Male"},
{"id":82,"first_name":"Hasty","last_name":"Slay","email":"hslay29@desdev.cn","gender":"Genderfluid"},
{"id":83,"first_name":"Orren","last_name":"Aron","email":"oaron2a@ebay.co.uk","gender":"Male"},
{"id":84,"first_name":"Alys","last_name":"Minchi","email":"aminchi2b@tripadvisor.com","gender":"Female"},
{"id":85,"first_name":"Ambrosius","last_name":"Renon","email":"arenon2c@blogtalkradio.com","gender":"Male"},
{"id":86,"first_name":"Nefen","last_name":"Aiers","email":"naiers2d@yale.edu","gender":"Male"},
{"id":87,"first_name":"Nate","last_name":"Clementson","email":"nclementson2e@hatena.ne.jp","gender":"Male"},
{"id":88,"first_name":"Martainn","last_name":"Braybrookes","email":"mbraybrookes2f@liveinternet.ru","gender":"Male"},
{"id":89,"first_name":"Drucy","last_name":"McEntegart","email":"dmcentegart2g@usda.gov","gender":"Non-binary"},
{"id":90,"first_name":"Rex","last_name":"Mussared","email":"rmussared2h@facebook.com","gender":"Male"},
{"id":91,"first_name":"Dov","last_name":"MacKilroe","email":"dmackilroe2i@wiley.com","gender":"Male"},
{"id":92,"first_name":"Shaina","last_name":"Lutton","email":"slutton2j@acquirethisname.com","gender":"Female"},
{"id":93,"first_name":"Giff","last_name":"Amerighi","email":"gamerighi2k@dmoz.org","gender":"Male"},
{"id":94,"first_name":"Yorker","last_name":"Carnier","email":"ycarnier2l@webeden.co.uk","gender":"Male"},
{"id":95,"first_name":"Erin","last_name":"Okker","email":"eokker2m@house.gov","gender":"Genderfluid"},
{"id":96,"first_name":"Husein","last_name":"Faivre","email":"hfaivre2n@howstuffworks.com","gender":"Male"},
{"id":97,"first_name":"Miriam","last_name":"Vlasyev","email":"mvlasyev2o@mapy.cz","gender":"Agender"},
{"id":98,"first_name":"Lilllie","last_name":"MacGauhy","email":"lmacgauhy2p@unicef.org","gender":"Female"},
{"id":99,"first_name":"Dari","last_name":"Eckery","email":"deckery2q@dedecms.com","gender":"Female"},
{"id":100,"first_name":"Angelo","last_name":"McLaggan","email":"amclaggan2r@cpanel.net","gender":"Male"}]



obj.map(  (value)=>{
      ul.innerHTML += `<li>NAme:  ${value.id} <br> Age:    ${value.first_name} <br> Country :  ${value.gender} <br> Email :  ${value.email}</li>`
} )






// let array = ["Shahbaz", "Ali", "Khan"];

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];




// obj.forEach((user)=>{
//     console.log(`
//         my name is ${user.name}
//         my age is ${user.age}
//         my Country is ${user.country}
        
//         `)
// })




// let newNumbers = numbers.forEach((number)=>{
//     let MulyipledNumber = number * 2
//     console.log(MulyipledNumber)
// })

// let abc =  array.forEach((element , index)=>{
//     console.log(  ` ${index+1} . ${element}  ` )
// })

// Template String




// let name = "Adnan"
// let country = "Pakistan"

// let abc =  `it's a good "Phone"`

// let aboutMe = ` My name is ${name} and I am from ${country}`

// console.log(abc)

// function Rao(a,b) {
//  let    sum =  a+b
//  console.log(sum)
// }

// let a = Number(prompt("Enter a number"))
// let b = Number(prompt("Enter another number"))

// Rao(a,b);

// Anonymous Function

// let Anonymous  = function(){console.log("ADnan Anonymous")}

// Anonymous()

// let ArrowFunction = ()=>{console.log("Adnan Arrow Function")}

// ArrowFunction()

// let sum = (a,b)=>{ return a+b}

// console.log(sum(5,5))



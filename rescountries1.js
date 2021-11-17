var xhr = new XMLHttpRequest();

xhr.open(
  "GET",
  "https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json"
);

xhr.onload = function () {
  
  if (xhr.status >= 200 && xhr.status < 300) {
  
    var t = JSON.parse(this.response);
    console.log(t);

    //for (let i of t) {
    
        //console.log(`Flag:${t[i].flag}`);
    //}

    for(let i of t){
      console.log(`Flag:${i.flag}
      Name:${i.name}
      Region:${i.region}
      Subregion:${i.subregion}
      Population:${i.population}
      `);
    }
    //}
  } 
  
  
  else {
    //it should not give you data
    console.log("Data is not available");
  }
};

xhr.send();

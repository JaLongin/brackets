module.exports = function check(str, bracketsConfig) {
  // your solution
  let starters = [];
  let openers = [];
  let finishers = {};
  let continuer;
  console.log(str);
  bracketsConfig.forEach(element => {
    finishers[element[1]] = element[0]
    openers.push(element[0]);
 //   console.log('elements : ',element, ' finishers: ', finishers,' openers : ', openers);
  });
  for(let i = 0; i < str.length; i++){
    continuer = false;
    openers.forEach(el => {
      if (str[i] == el){
        if (finishers[el] != undefined && starters.at(-1) == el){
          starters.pop;
        }
        else{
          starters.push(str[i]);
          continuer = true;
         // console.log('check');
        }
      }
    });
    if (continuer)
    continue;
    if (starters.length == 0){
    //  console.log("stage 1");
      return false;
    }
    if ( finishers[str[i]] != starters.pop()){
 //     console.log("stage 2");
      return false;
    }
  }
 // console.log("stage 3");
  return (starters.length == 0);
}

const apiOutput = require("./ApiOutput");

// console.log('apiOutput.length: ', apiOutput.length);
for (let i = 0; i < apiOutput.length; i++) {
  for (let key in apiOutput[i]) {
    // if (Array.isArray(apiOutput[i][key])) {
    if (key === "results") {
      // console.log("arrayed key: ", apiOutput[key]);
      //   for (let arrayedKey in apiOutput[i][key]) {
      for (let j = 0; j < apiOutput[i][key].length; j++) {
        //   console.log("keys within arrayed key: ", apiOutput[key][arrayedKey]);
        // for (let keysInArrayedKey in apiOutput[i][key][arrayedKey]) {
        // for (let keysInArrayedKey in apiOutput[i][key][j]) {
        // if (keysInArrayedKey === "listing_id") {
        //   console.log(
        //     "\nlisting_id: ",
        //     //   apiOutput[i][key][arrayedKey][keysInArrayedKey]
        //     apiOutput[i][key][j][keysInArrayedKey]
        //   );
        // }
        // if (keysInArrayedKey === "url_75x75") {
        //   console.log(
        //     "url_75x75: ",
        //     //   apiOutput[i][key][arrayedKey][keysInArrayedKey]
        //     apiOutput[i][key][j][keysInArrayedKey]
        //   );
        // }
        // if (keysInArrayedKey === "url_170x135") {
        //   console.log(
        //     "url_170x135: ",
        //     //   apiOutput[i][key][arrayedKey][keysInArrayedKey]
        //     apiOutput[i][key][j][keysInArrayedKey]
        //   );
        // }
        // if (keysInArrayedKey === "url_570xN") {
        //   console.log(
        //     "url_570xN: ",
        //     //   apiOutput[i][key][arrayedKey][keysInArrayedKey]
        //     apiOutput[i][key][j][keysInArrayedKey]
        //   );
        // }
        // if (keysInArrayedKey === "url_fullxfull") {
        //   console.log(
        //     "url_fullxfull: ",
        //     //   apiOutput[i][key][arrayedKey][keysInArrayedKey]
        //     apiOutput[i][key][j][keysInArrayedKey]
        //   );
        // }
        //   console.log("key one by one from arrayed key: ", apiOutput[key][arrayedKey][keysInArrayedKey])
        // }
        console.log(
          "INSERT INTO images (listing_id, 75x, 170x, 570x, fullx) VALUES ("+
          apiOutput[i][key][j]["listing_id"]+
          ", \""+
          apiOutput[i][key][j]["url_75x75"]+
          "\", \""+
          apiOutput[i][key][j]["url_170x135"]+
          "\", \""+
          apiOutput[i][key][j]["url_570xN"]+
          "\", \""+
          apiOutput[i][key][j]["url_fullxfull"]+
          "\");\n"
        );
      }
    }
  }
  // if(key === 'url_75x75'){
  //     console.log('url_75x75: ', apiOutput[key]);
  // }
  // console.log('key: ', apiOutput[key]);
}
// console.log(apiOutput.results)

function filterOutliers(someArray) {

    // Copy the values, rather than operating on references to existing values
    var values = someArray.concat();
    // Then sort
    values.sort( function(a, b) {
            return a - b;
         });

    /* Then find a generous IQR. This is generous because if (values.length / 4)
     * is not an int, then really you should average the two elements on either
     * side to find q1.
     */
    // var q1 = values[Math.floor((values.length / 4))];
    // Likewise for q3.
    // var q3 = values[Math.ceil((values.length * (3 / 4)))];
    // var iqr = q3 - q1;

    // if(variableName == "TSK"){
    //   p5Index = values.length * .05;
    //   p95Index = values.length * .95;
    // }
    // else if(variableName == "PSFC"){
    //   p5Index = values.length * .05;
    //   p95Index = values.length * .95;
    // }
    // else if(variableName == "SMOIS"){
    //   p5Index = values.length * .05;
    //   p95Index = values.length * .95;
    // }
    // else if(variableName == "ALBEDO"){
    //
    // }

    p5Index = values.length * .25;
    p95Index = values.length * .75;

    if (p5Index - Math.floor(p5Index) == 0){
       var p5 = values[Math.floor(p5Index)-1];
    }
    else{
      k = Math.floor(p5Index)-1;
      f = p5Index - Math.floor(p5Index);
      var p5 = ((1-f)*values[k]) + (f* values[k+1]);
    }

    if (p95Index - Math.floor(p95Index) == 0){
      var p95 = values[Math.floor(p95Index)-1];
    }
    else{
      k = Math.floor(p95Index)-1;
      f = p95Index - Math.floor(p95Index);
      var p95 = ((1-f)*values[k]) + (f* values[k+1]);
    }

    // Then find min and max values
    // var maxValue = q3 + iqr*1.5;
    // var minValue = q1 - iqr*1.5;

    console.log('max: ', d3.max(someArray));
    console.log('5% percentile: ', p5);
    console.log('95% percentile: ', p95);
    console.log('min: ',d3.min(someArray));

    // Then filter anything beyond or beneath these values.
    filteredValues =  someArray.concat();
    console.log('Length before filtering: ', filteredValues.length);
    change = 0;
    for (i=0;i<filteredValues.length;i++){
      if (filteredValues[i] > p95){
        filteredValues[i] = p95;
        change++;
      }
      if(filteredValues[i] < p5){
        filteredValues[i] = p5;
        change++;
      }
    }

    console.log('Number of changes: ', change);
    console.log('Length after filtering: ', filteredValues.length);
    // Then return
    return filteredValues;
}

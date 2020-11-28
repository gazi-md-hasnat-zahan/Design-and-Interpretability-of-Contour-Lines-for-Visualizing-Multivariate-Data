window.getSimplifiedContours = function() {
  if (interval == 4) {
    simplifyFactor = 0;
    simplifiedContourA = [{
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.19
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.38
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.57
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.76
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.95
      }
    ];
    simplifiedContourB = [{
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.19
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.38
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.57
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.76
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.95
      }
    ];
    simplifiedContourC = [{
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.19
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.38
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.57
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.76
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.95
      }
    ];
    simplifiedContourD = [{
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.19
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.38
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.57
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.76
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.95
      }
    ];

    for (len = 0; len < contourOutput_A.length; len++) {
      coorIndex = -1;
      for (cor = 0; cor < contourOutput_A[len]["coordinates"].length; cor++) {
        for (cornum = 0; cornum < contourOutput_A[len]["coordinates"][cor].length; cornum++) {
          if (contourOutput_A[len]["value"] == 0.25) {
            if (jsonfilename.slice(44, 46) == "00") {
              simplifyFactor = 11;
            } else if (jsonfilename.slice(44, 46) == "12") {
              simplifyFactor = 12;
            } else if (jsonfilename.slice(44, 46) == "20") {
              simplifyFactor = 10;
            }
            simplified = simplify(contourOutput_A[len]["coordinates"][cor][cornum], simplifyFactor);
          } else {
            simplified = simplify(contourOutput_A[len]["coordinates"][cor][cornum], 2);
          }
          if (polygonArea(Object.values(simplified)) > 50) {
            if (cornum == 0) {
              // newcontouradded = 1;
              coorIndex++;
              simplifiedContourA[len]["coordinates"].push(new Array());
              simplifiedContourA[len]["coordinates"][coorIndex].push(simplified);
            } else {
              // simplifiedContourA[len]["coordinates"][coorIndex] = [];
              // simplifiedContourA[len]["coordinates"][coorIndex].push(new Array());
              simplifiedContourA[len]["coordinates"][coorIndex].push(simplified);
            }
          }
        }
      }
    }
    // check if B is positive or negative
    if (jsonfilename[23] == "p") {
      console.log('B positive');
      for (len = 0; len < contourOutput_B.length; len++) {
        coorIndex = -1;
        for (cor = 0; cor < contourOutput_B[len]["coordinates"].length; cor++) {
          for (cornum = 0; cornum < contourOutput_B[len]["coordinates"][cor].length; cornum++) {
            if (contourOutput_B[len]["value"] == 0.19) {
              simplified = simplify(contourOutput_B[len]["coordinates"][cor][cornum], 9.3);
            } else {
              simplified = simplify(contourOutput_B[len]["coordinates"][cor][cornum], 2);
            }
            if (simplified.length > 4) {
              if (cornum == 0) {
                coorIndex++;
                simplifiedContourB[len]["coordinates"].push(new Array());
                simplifiedContourB[len]["coordinates"][coorIndex].push(simplified);
              } else {
                simplifiedContourB[len]["coordinates"][coorIndex].push(simplified);
              }
            }
          }
          // if(newcontouradded == 1){
          // 	coorIndex++;
          // 	newcontouradded = 0;
          // }
        }
      }
    } else if (jsonfilename[23] == "n") {
      console.log('B negative');
      for (len = 0; len < contourOutput_B.length; len++) {
        coorIndex = -1;
        simplifiedContourB[len]["value"] = contourOutput_C[len]["value"];
        for (cor = 0; cor < contourOutput_B[len]["coordinates"].length; cor++) {
          for (cornum = 0; cornum < contourOutput_B[len]["coordinates"][cor].length; cornum++) {
            if (contourOutput_B[len]["value"] == 0.95) {
              simplified = simplify(contourOutput_B[len]["coordinates"][cor][cornum], 11);
            } else {
              simplified = simplify(contourOutput_B[len]["coordinates"][cor][cornum], 2);
            }
            // simplified = simplify(contourOutput_C[len]["coordinates"][cor][cornum],2);
            if (simplified.length > 4) {
              if (cornum == 0) {
                coorIndex++;
                simplifiedContourB[len]["coordinates"].push(new Array());
                simplifiedContourB[len]["coordinates"][coorIndex].push(simplified);
              } else {
                simplifiedContourB[len]["coordinates"][coorIndex].push(simplified);
              }
            }
          }
          // if(newcontouradded == 1){
          // 	coorIndex++;
          // 	newcontouradded = 0;
          // }
        }
      }
      simplifiedContourB[3]["coordinates"][0][0] = simplifiedContourB[2]["coordinates"][0][0];
    } else if (jsonfilename[23] == "m") {
      console.log('B mixed');
      for (len = 0; len < contourOutput_B.length; len++) {
        coorIndex = -1;
        simplifiedContourB[len]["value"] = contourOutput_B[len]["value"];
        for (cor = 0; cor < contourOutput_B[len]["coordinates"].length; cor++) {
          for (cornum = 0; cornum < contourOutput_B[len]["coordinates"][cor].length; cornum++) {
            simplified = simplify(contourOutput_B[len]["coordinates"][cor][cornum], 3);
            if (Math.abs(polygonArea(Object.values(simplified))) > 50) { //area is big enough, let's try to add it in simplifiedContour
              if (cornum == 0) {
                coorIndex++;
                simplifiedContourB[len]["coordinates"].push(new Array());
                simplifiedContourB[len]["coordinates"][coorIndex].push(simplified);
              } else {
                simplifiedContourB[len]["coordinates"][coorIndex].push(simplified);
              }
            }
          }
        }
        if (jsonfilename[53] != 2) {
          if (len >= 2) {
            simplifiedContourB[len - 1]["coordinates"][0][0] = simplifiedContourB[len]["coordinates"][0][1];
            simplifiedContourB[len - 1]["coordinates"][1][0] = simplifiedContourB[len]["coordinates"][1][1];
          }
        } else {
          if (len >= 2) {
            simplifiedContourB[len - 1]["coordinates"][2][0] = simplifiedContourB[len]["coordinates"][2][1];
            simplifiedContourB[len - 1]["coordinates"][3][0] = simplifiedContourB[len]["coordinates"][3][1];
          }
        }
      }
    }
    // check if C is positive or negative
    if (jsonfilename[25] == "p") {
      console.log('C positive');
      for (len = 0; len < contourOutput_C.length; len++) {
        coorIndex = -1;
        simplifiedContourC[len]["value"] = contourOutput_C[len]["value"];
        for (cor = 0; cor < contourOutput_C[len]["coordinates"].length; cor++) {
          for (cornum = 0; cornum < contourOutput_C[len]["coordinates"][cor].length; cornum++) {
            if (contourOutput_C[len]["value"] == 0.19) {
              simplified = simplify(contourOutput_C[len]["coordinates"][cor][cornum], 11);
            } else {
              simplified = simplify(contourOutput_C[len]["coordinates"][cor][cornum], 2);
            }
            // simplified = simplify(contourOutput_C[len]["coordinates"][cor][cornum],2);
            if (simplified.length > 4) {
              if (cornum == 0) {
                coorIndex++;
                simplifiedContourC[len]["coordinates"].push(new Array());
                simplifiedContourC[len]["coordinates"][coorIndex].push(simplified);
              } else {
                simplifiedContourC[len]["coordinates"][coorIndex].push(simplified);
              }
            }
          }
          // if(newcontouradded == 1){
          // 	coorIndex++;
          // 	newcontouradded = 0;
          // }
        }
      }
    } else if (jsonfilename[25] == "n") {
      console.log('c negative');
      for (len = 0; len < contourOutput_C.length; len++) {
        coorIndex = -1;
        simplifiedContourC[len]["value"] = contourOutput_C[len]["value"];
        for (cor = 0; cor < contourOutput_C[len]["coordinates"].length; cor++) {
          for (cornum = 0; cornum < contourOutput_C[len]["coordinates"][cor].length; cornum++) {
            if (contourOutput_C[len]["value"] == 0.95) {
              simplified = simplify(contourOutput_C[len]["coordinates"][cor][cornum], 11);
            } else {
              simplified = simplify(contourOutput_C[len]["coordinates"][cor][cornum], 2);
            }
            // simplified = simplify(contourOutput_C[len]["coordinates"][cor][cornum],2);
            if (simplified.length > 4) {
              if (cornum == 0) {
                coorIndex++;
                simplifiedContourC[len]["coordinates"].push(new Array());
                simplifiedContourC[len]["coordinates"][coorIndex].push(simplified);
              } else {
                simplifiedContourC[len]["coordinates"][coorIndex].push(simplified);
              }
            }
          }
          // if(newcontouradded == 1){
          // 	coorIndex++;
          // 	newcontouradded = 0;
          // }
        }
      }
      simplifiedContourC[3]["coordinates"][0][0] = simplifiedContourC[2]["coordinates"][0][0];
    } else if (jsonfilename[25] == "m") {
      console.log('C mixed');
      for (len = 0; len < contourOutput_C.length; len++) {
        coorIndex = -1;
        simplifiedContourC[len]["value"] = contourOutput_C[len]["value"];
        for (cor = 0; cor < contourOutput_C[len]["coordinates"].length; cor++) {
          for (cornum = 0; cornum < contourOutput_C[len]["coordinates"][cor].length; cornum++) {
            simplified = simplify(contourOutput_C[len]["coordinates"][cor][cornum], 2);
            if (Math.abs(polygonArea(Object.values(simplified))) > 50) {
              if (cornum == 0) {
                coorIndex++;
                simplifiedContourC[len]["coordinates"].push(new Array());
                simplifiedContourC[len]["coordinates"][coorIndex].push(simplified);
              } else {
                simplifiedContourC[len]["coordinates"][coorIndex].push(simplified);
              }
            }
          }
        }
        if (jsonfilename[53] != "2") {
          if (len >= 2) {
            simplifiedContourC[len - 1]["coordinates"][1][0] = simplifiedContourC[len]["coordinates"][1][1];
            simplifiedContourC[len - 1]["coordinates"][3][0] = simplifiedContourC[len]["coordinates"][3][1];
          }
        } else {
          if (len >= 2) {
            simplifiedContourC[len - 1]["coordinates"][1][0] = simplifiedContourC[len]["coordinates"][1][1];
            simplifiedContourC[len - 1]["coordinates"][3][0] = simplifiedContourC[len]["coordinates"][3][1];
          }
        }

      }
    }
    // check if D is positive or negative
    if (jsonfilename[27] == "p") {
      console.log('D positive');
      for (len = 0; len < contourOutput_D.length; len++) {
        coorIndex = -1;
        simplifiedContourD[len]["value"] = contourOutput_D[len]["value"];
        for (cor = 0; cor < contourOutput_D[len]["coordinates"].length; cor++) {
          for (cornum = 0; cornum < contourOutput_D[len]["coordinates"][cor].length; cornum++) {
            if (contourOutput_D[len]["value"] == 0.19) {
              simplified = simplify(contourOutput_D[len]["coordinates"][cor][cornum], 11);
            } else {
              simplified = simplify(contourOutput_D[len]["coordinates"][cor][cornum], 2);
            }
            // simplified = simplify(contourOutput_C[len]["coordinates"][cor][cornum],2);
            if (simplified.length > 4) {
              if (cornum == 0) {
                coorIndex++;
                simplifiedContourD[len]["coordinates"].push(new Array());
                simplifiedContourD[len]["coordinates"][coorIndex].push(simplified);
              } else {
                simplifiedContourD[len]["coordinates"][coorIndex].push(simplified);
              }
            }
          }
          // if(newcontouradded == 1){
          // 	coorIndex++;
          // 	newcontouradded = 0;
          // }
        }
      }
    } else if (jsonfilename[27] == "n") {
      console.log('D negative');
      for (len = 0; len < contourOutput_D.length; len++) {
        coorIndex = -1;
        simplifiedContourD[len]["value"] = contourOutput_D[len]["value"];
        for (cor = 0; cor < contourOutput_D[len]["coordinates"].length; cor++) {
          for (cornum = 0; cornum < contourOutput_D[len]["coordinates"][cor].length; cornum++) {
            if (contourOutput_D[len]["value"] == 0.95) {
              simplified = simplify(contourOutput_D[len]["coordinates"][cor][cornum], 11);
            } else {
              simplified = simplify(contourOutput_D[len]["coordinates"][cor][cornum], 2);
            }
            // simplified = simplify(contourOutput_C[len]["coordinates"][cor][cornum],2);
            if (simplified.length > 4) {
              if (cornum == 0) {
                coorIndex++;
                simplifiedContourD[len]["coordinates"].push(new Array());
                simplifiedContourD[len]["coordinates"][coorIndex].push(simplified);
              } else {
                simplifiedContourD[len]["coordinates"][coorIndex].push(simplified);
              }
            }
          }
          // if(newcontouradded == 1){
          // 	coorIndex++;
          // 	newcontouradded = 0;
          // }
        }
      }
      // simplifiedContourD[3]["coordinates"][0][0] = simplifiedContourD[2]["coordinates"][0][0];
    } else if (jsonfilename[27] == "m") {
      console.log('D mixed');
      for (len = 0; len < contourOutput_D.length; len++) {
        coorIndex = -1;
        simplifiedContourD[len]["value"] = contourOutput_D[len]["value"];
        for (cor = 0; cor < contourOutput_D[len]["coordinates"].length; cor++) {
          for (cornum = 0; cornum < contourOutput_D[len]["coordinates"][cor].length; cornum++) {
            simplified = simplify(contourOutput_D[len]["coordinates"][cor][cornum], 2);
            if (Math.abs(polygonArea(Object.values(simplified))) > 50) {
              if (cornum == 0) {
                coorIndex++;
                simplifiedContourD[len]["coordinates"].push(new Array());
                simplifiedContourD[len]["coordinates"][coorIndex].push(simplified);
              } else {
                simplifiedContourD[len]["coordinates"][coorIndex].push(simplified);
              }
            }
          }
        }
        if (jsonfilename[53] != 2) {
          if (len == 2) {
            simplifiedContourD[len - 1]["coordinates"][0][0] = simplifiedContourD[len]["coordinates"][0][1];
            simplifiedContourD[len - 1]["coordinates"][3][0] = simplifiedContourD[len]["coordinates"][3][1];
          }
          if (len == 3) {
            simplifiedContourD[len - 1]["coordinates"][0][0] = simplifiedContourD[len]["coordinates"][1][1];
            simplifiedContourD[len - 1]["coordinates"][3][0] = simplifiedContourD[len]["coordinates"][3][1];
          }
          if (len > 3) {
            simplifiedContourD[len - 1]["coordinates"][1][0] = simplifiedContourD[len]["coordinates"][1][1];
            simplifiedContourD[len - 1]["coordinates"][3][0] = simplifiedContourD[len]["coordinates"][3][1];
          }
        } else {
          if (len == 2) {
            simplifiedContourD[len - 1]["coordinates"][0][0] = simplifiedContourD[len]["coordinates"][1][1];
            simplifiedContourD[len - 1]["coordinates"][3][0] = simplifiedContourD[len]["coordinates"][3][1];
          }
          if (len > 2) {
            simplifiedContourD[len - 1]["coordinates"][1][0] = simplifiedContourD[len]["coordinates"][1][1];
            simplifiedContourD[len - 1]["coordinates"][3][0] = simplifiedContourD[len]["coordinates"][3][1];
          }
        }
      }
    }
    console.log('changed contour A: ', simplifiedContourA);
    console.log('changed contour B: ', simplifiedContourB);
    console.log('changed contour C: ', simplifiedContourC);
    console.log('changed contour D: ', simplifiedContourD);
  } else if (interval == 6) {
    simplifiedContourA = [{
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.19
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.38
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.57
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.76
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.95
      }
    ];
    simplifiedContourB = [{
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.19
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.38
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.57
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.76
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.95
      }
    ];
    simplifiedContourC = [{
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.19
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.38
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.57
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.76
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.95
      }
    ];
    simplifiedContourD = [{
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.19
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.38
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.57
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.76
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.95
      }
    ];

    for (len = 0; len < contourOutput_A.length; len++) {
      coorIndex = -1;
      for (cor = 0; cor < contourOutput_A[len]["coordinates"].length; cor++) {
        for (cornum = 0; cornum < contourOutput_A[len]["coordinates"][cor].length; cornum++) {
          if (contourOutput_A[len]["value"] == 0.19) {
            if (jsonfilename.slice(44, 46) == "00") {
              simplifyFactor = 11;
            } else if (jsonfilename.slice(44, 46) == "12") {
              simplifyFactor = 11;
            } else if (jsonfilename.slice(44, 46) == "20") {
              simplifyFactor = 10;
            }
            simplified = simplify(contourOutput_A[len]["coordinates"][cor][cornum], simplifyFactor);
          } else {
            simplified = simplify(contourOutput_A[len]["coordinates"][cor][cornum], 2);
          }
          if (polygonArea(Object.values(simplified)) > 50) {
            if (cornum == 0) {
              // newcontouradded = 1;
              coorIndex++;
              simplifiedContourA[len]["coordinates"].push(new Array());
              simplifiedContourA[len]["coordinates"][coorIndex].push(simplified);
            } else {
              // simplifiedContourA[len]["coordinates"][coorIndex] = [];
              // simplifiedContourA[len]["coordinates"][coorIndex].push(new Array());
              simplifiedContourA[len]["coordinates"][coorIndex].push(simplified);
            }
          }
        }
      }
    }
    // check if B is positive or negative
    if (jsonfilename[23] == "p") {
      console.log('B positive');
      for (len = 0; len < contourOutput_B.length; len++) {
        coorIndex = -1;
        for (cor = 0; cor < contourOutput_B[len]["coordinates"].length; cor++) {
          for (cornum = 0; cornum < contourOutput_B[len]["coordinates"][cor].length; cornum++) {
            if (contourOutput_B[len]["value"] == 0.19) {
              simplified = simplify(contourOutput_B[len]["coordinates"][cor][cornum], 9.3);
            } else {
              simplified = simplify(contourOutput_B[len]["coordinates"][cor][cornum], 2);
            }
            if (simplified.length > 4) {
              if (cornum == 0) {
                coorIndex++;
                simplifiedContourB[len]["coordinates"].push(new Array());
                simplifiedContourB[len]["coordinates"][coorIndex].push(simplified);
              } else {
                simplifiedContourB[len]["coordinates"][coorIndex].push(simplified);
              }
            }
          }
          // if(newcontouradded == 1){
          // 	coorIndex++;
          // 	newcontouradded = 0;
          // }
        }
      }
    } else if (jsonfilename[23] == "n") {
      console.log('B negative');
      for (len = 0; len < contourOutput_B.length; len++) {
        coorIndex = -1;
        simplifiedContourB[len]["value"] = contourOutput_C[len]["value"];
        for (cor = 0; cor < contourOutput_B[len]["coordinates"].length; cor++) {
          for (cornum = 0; cornum < contourOutput_B[len]["coordinates"][cor].length; cornum++) {
            if (contourOutput_B[len]["value"] == 0.95) {
              simplified = simplify(contourOutput_B[len]["coordinates"][cor][cornum], 11);
            } else {
              simplified = simplify(contourOutput_B[len]["coordinates"][cor][cornum], 2);
            }
            // simplified = simplify(contourOutput_C[len]["coordinates"][cor][cornum],2);
            if (simplified.length > 4) {
              if (cornum == 0) {
                coorIndex++;
                simplifiedContourB[len]["coordinates"].push(new Array());
                simplifiedContourB[len]["coordinates"][coorIndex].push(simplified);
              } else {
                simplifiedContourB[len]["coordinates"][coorIndex].push(simplified);
              }
            }
          }
          // if(newcontouradded == 1){
          // 	coorIndex++;
          // 	newcontouradded = 0;
          // }
        }
      }
      simplifiedContourB[3]["coordinates"][0][0] = simplifiedContourB[2]["coordinates"][0][0];
    } else if (jsonfilename[23] == "m") {
      console.log('B mixed');
      for (len = 0; len < contourOutput_B.length; len++) {
        coorIndex = -1;
        simplifiedContourB[len]["value"] = contourOutput_B[len]["value"];
        for (cor = 0; cor < contourOutput_B[len]["coordinates"].length; cor++) {
          for (cornum = 0; cornum < contourOutput_B[len]["coordinates"][cor].length; cornum++) {
            simplified = simplify(contourOutput_B[len]["coordinates"][cor][cornum], 3);
            if (Math.abs(polygonArea(Object.values(simplified))) > 50) { //area is big enough, let's try to add it in simplifiedContour
              if (cornum == 0) {
                coorIndex++;
                simplifiedContourB[len]["coordinates"].push(new Array());
                simplifiedContourB[len]["coordinates"][coorIndex].push(simplified);
              } else {
                simplifiedContourB[len]["coordinates"][coorIndex].push(simplified);
              }
            }
          }
        }
        if (jsonfilename[53] != 2) {
          if (len >= 2) {
            simplifiedContourB[len - 1]["coordinates"][0][0] = simplifiedContourB[len]["coordinates"][0][1];
            simplifiedContourB[len - 1]["coordinates"][1][0] = simplifiedContourB[len]["coordinates"][1][1];
          }
        } else {
          if (len >= 2) {
            simplifiedContourB[len - 1]["coordinates"][2][0] = simplifiedContourB[len]["coordinates"][2][1];
            simplifiedContourB[len - 1]["coordinates"][3][0] = simplifiedContourB[len]["coordinates"][3][1];
          }
        }
      }
    }
    // check if C is positive or negative
    if (jsonfilename[25] == "p") {
      console.log('C positive');
      for (len = 0; len < contourOutput_C.length; len++) {
        coorIndex = -1;
        simplifiedContourC[len]["value"] = contourOutput_C[len]["value"];
        for (cor = 0; cor < contourOutput_C[len]["coordinates"].length; cor++) {
          for (cornum = 0; cornum < contourOutput_C[len]["coordinates"][cor].length; cornum++) {
            if (contourOutput_C[len]["value"] == 0.19) {
              simplified = simplify(contourOutput_C[len]["coordinates"][cor][cornum], 11);
            } else {
              simplified = simplify(contourOutput_C[len]["coordinates"][cor][cornum], 2);
            }
            // simplified = simplify(contourOutput_C[len]["coordinates"][cor][cornum],2);
            if (simplified.length > 4) {
              if (cornum == 0) {
                coorIndex++;
                simplifiedContourC[len]["coordinates"].push(new Array());
                simplifiedContourC[len]["coordinates"][coorIndex].push(simplified);
              } else {
                simplifiedContourC[len]["coordinates"][coorIndex].push(simplified);
              }
            }
          }
          // if(newcontouradded == 1){
          // 	coorIndex++;
          // 	newcontouradded = 0;
          // }
        }
      }
    } else if (jsonfilename[25] == "n") {
      console.log('c negative');
      for (len = 0; len < contourOutput_C.length; len++) {
        coorIndex = -1;
        simplifiedContourC[len]["value"] = contourOutput_C[len]["value"];
        for (cor = 0; cor < contourOutput_C[len]["coordinates"].length; cor++) {
          for (cornum = 0; cornum < contourOutput_C[len]["coordinates"][cor].length; cornum++) {
            if (contourOutput_C[len]["value"] == 0.95) {
              simplified = simplify(contourOutput_C[len]["coordinates"][cor][cornum], 11);
            } else {
              simplified = simplify(contourOutput_C[len]["coordinates"][cor][cornum], 2);
            }
            // simplified = simplify(contourOutput_C[len]["coordinates"][cor][cornum],2);
            if (simplified.length > 4) {
              if (cornum == 0) {
                coorIndex++;
                simplifiedContourC[len]["coordinates"].push(new Array());
                simplifiedContourC[len]["coordinates"][coorIndex].push(simplified);
              } else {
                simplifiedContourC[len]["coordinates"][coorIndex].push(simplified);
              }
            }
          }
          // if(newcontouradded == 1){
          // 	coorIndex++;
          // 	newcontouradded = 0;
          // }
        }
      }
      simplifiedContourC[3]["coordinates"][0][0] = simplifiedContourC[2]["coordinates"][0][0];
    } else if (jsonfilename[25] == "m") {
      console.log('C mixed');
      for (len = 0; len < contourOutput_C.length; len++) {
        coorIndex = -1;
        simplifiedContourC[len]["value"] = contourOutput_C[len]["value"];
        for (cor = 0; cor < contourOutput_C[len]["coordinates"].length; cor++) {
          for (cornum = 0; cornum < contourOutput_C[len]["coordinates"][cor].length; cornum++) {
            simplified = simplify(contourOutput_C[len]["coordinates"][cor][cornum], 2);
            if (Math.abs(polygonArea(Object.values(simplified))) > 50) {
              if (cornum == 0) {
                coorIndex++;
                simplifiedContourC[len]["coordinates"].push(new Array());
                simplifiedContourC[len]["coordinates"][coorIndex].push(simplified);
              } else {
                simplifiedContourC[len]["coordinates"][coorIndex].push(simplified);
              }
            }
          }
        }
        if (jsonfilename[53] != "2") {
          if (len >= 2) {
            simplifiedContourC[len - 1]["coordinates"][1][0] = simplifiedContourC[len]["coordinates"][1][1];
            simplifiedContourC[len - 1]["coordinates"][3][0] = simplifiedContourC[len]["coordinates"][3][1];
          }
        } else {
          if (len >= 2) {
            simplifiedContourC[len - 1]["coordinates"][1][0] = simplifiedContourC[len]["coordinates"][1][1];
            simplifiedContourC[len - 1]["coordinates"][3][0] = simplifiedContourC[len]["coordinates"][3][1];
          }
        }

      }
    }
    // check if D is positive or negative
    if (jsonfilename[27] == "p") {
      console.log('D positive');
      for (len = 0; len < contourOutput_D.length; len++) {
        coorIndex = -1;
        simplifiedContourD[len]["value"] = contourOutput_D[len]["value"];
        for (cor = 0; cor < contourOutput_D[len]["coordinates"].length; cor++) {
          for (cornum = 0; cornum < contourOutput_D[len]["coordinates"][cor].length; cornum++) {
            if (contourOutput_D[len]["value"] == 0.19) {
              simplified = simplify(contourOutput_D[len]["coordinates"][cor][cornum], 11);
            } else {
              simplified = simplify(contourOutput_D[len]["coordinates"][cor][cornum], 2);
            }
            // simplified = simplify(contourOutput_C[len]["coordinates"][cor][cornum],2);
            if (simplified.length > 4) {
              if (cornum == 0) {
                coorIndex++;
                simplifiedContourD[len]["coordinates"].push(new Array());
                simplifiedContourD[len]["coordinates"][coorIndex].push(simplified);
              } else {
                simplifiedContourD[len]["coordinates"][coorIndex].push(simplified);
              }
            }
          }
          // if(newcontouradded == 1){
          // 	coorIndex++;
          // 	newcontouradded = 0;
          // }
        }
      }
    } else if (jsonfilename[27] == "n") {
      console.log('D negative');
      for (len = 0; len < contourOutput_D.length; len++) {
        coorIndex = -1;
        simplifiedContourD[len]["value"] = contourOutput_D[len]["value"];
        for (cor = 0; cor < contourOutput_D[len]["coordinates"].length; cor++) {
          for (cornum = 0; cornum < contourOutput_D[len]["coordinates"][cor].length; cornum++) {
            if (contourOutput_D[len]["value"] == 0.95) {
              simplified = simplify(contourOutput_D[len]["coordinates"][cor][cornum], 11);
            } else {
              simplified = simplify(contourOutput_D[len]["coordinates"][cor][cornum], 2);
            }
            // simplified = simplify(contourOutput_C[len]["coordinates"][cor][cornum],2);
            if (simplified.length > 4) {
              if (cornum == 0) {
                coorIndex++;
                simplifiedContourD[len]["coordinates"].push(new Array());
                simplifiedContourD[len]["coordinates"][coorIndex].push(simplified);
              } else {
                simplifiedContourD[len]["coordinates"][coorIndex].push(simplified);
              }
            }
          }
          // if(newcontouradded == 1){
          // 	coorIndex++;
          // 	newcontouradded = 0;
          // }
        }
      }
      // simplifiedContourD[3]["coordinates"][0][0] = simplifiedContourD[2]["coordinates"][0][0];
    } else if (jsonfilename[27] == "m") {
      console.log('D mixed');
      for (len = 0; len < contourOutput_D.length; len++) {
        coorIndex = -1;
        simplifiedContourD[len]["value"] = contourOutput_D[len]["value"];
        for (cor = 0; cor < contourOutput_D[len]["coordinates"].length; cor++) {
          for (cornum = 0; cornum < contourOutput_D[len]["coordinates"][cor].length; cornum++) {
            simplified = simplify(contourOutput_D[len]["coordinates"][cor][cornum], 2);
            if (Math.abs(polygonArea(Object.values(simplified))) > 50) {
              if (cornum == 0) {
                coorIndex++;
                simplifiedContourD[len]["coordinates"].push(new Array());
                simplifiedContourD[len]["coordinates"][coorIndex].push(simplified);
              } else {
                simplifiedContourD[len]["coordinates"][coorIndex].push(simplified);
              }
            }
          }
        }
        if (jsonfilename[53] != 2) {
          if (len == 2) {
            simplifiedContourD[len - 1]["coordinates"][0][0] = simplifiedContourD[len]["coordinates"][0][1];
            simplifiedContourD[len - 1]["coordinates"][3][0] = simplifiedContourD[len]["coordinates"][3][1];
          }
          if (len == 3) {
            simplifiedContourD[len - 1]["coordinates"][0][0] = simplifiedContourD[len]["coordinates"][1][1];
            simplifiedContourD[len - 1]["coordinates"][3][0] = simplifiedContourD[len]["coordinates"][3][1];
          }
          if (len > 3) {
            simplifiedContourD[len - 1]["coordinates"][1][0] = simplifiedContourD[len]["coordinates"][1][1];
            simplifiedContourD[len - 1]["coordinates"][3][0] = simplifiedContourD[len]["coordinates"][3][1];
          }
        } else {
          if (len == 2) {
            simplifiedContourD[len - 1]["coordinates"][0][0] = simplifiedContourD[len]["coordinates"][1][1];
            simplifiedContourD[len - 1]["coordinates"][3][0] = simplifiedContourD[len]["coordinates"][3][1];
          }
          if (len > 2) {
            simplifiedContourD[len - 1]["coordinates"][1][0] = simplifiedContourD[len]["coordinates"][1][1];
            simplifiedContourD[len - 1]["coordinates"][3][0] = simplifiedContourD[len]["coordinates"][3][1];
          }
        }
      }
    }
  }
  else if(interval == 8){
    simplifiedContourA = [{
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.125
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.25
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.375
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.5
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.675
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.75
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.875
      }
    ];
    simplifiedContourB = [{
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.125
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.25
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.375
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.5
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.675
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.75
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.875
      }
    ];
    simplifiedContourC = [{
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.125
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.25
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.375
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.5
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.675
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.75
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.875
      }
    ];
    simplifiedContourD = [{
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.125
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.25
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.375
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.5
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.675
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.75
      },
      {
        coordinates: new Array(),
        type: "MultiPolygon",
        value: 0.875
      }
    ];

    simplifyFactor = 0;
    simplifyFactor2 = 0;

    for (len = 0; len < contourOutput_A.length; len++) {
      coorIndex = -1;
      for (cor = 0; cor < contourOutput_A[len]["coordinates"].length; cor++) {
        for (cornum = 0; cornum < contourOutput_A[len]["coordinates"][cor].length; cornum++) {
          if (contourOutput_A[len]["value"] == 0.125) {
            if (jsonfilename.slice(44, 46) == "00") {
              simplifyFactor = 10;
            } else if (jsonfilename.slice(44, 46) == "12") {
              simplifyFactor = 8.5;
            } else if (jsonfilename.slice(44, 46) == "20") {
              simplifyFactor = 9.5;
            }
            simplified = simplify(contourOutput_A[len]["coordinates"][cor][cornum], simplifyFactor);
          } else if (contourOutput_A[len]["value"] == 0.25) {
            if (jsonfilename.slice(44, 46) == "00") {
              simplifyFactor2 = 2;
            } else if (jsonfilename.slice(44, 46) == "12") {
              simplifyFactor2 = 3;
            } else if (jsonfilename.slice(44, 46) == "20") {
              simplifyFactor2 = 4;
            }
            simplified = simplify(contourOutput_A[len]["coordinates"][cor][cornum], simplifyFactor2);
          } else {
            simplified = simplify(contourOutput_A[len]["coordinates"][cor][cornum], 2);
          }
          if (polygonArea(Object.values(simplified)) > 50) {
            if (cornum == 0) {
              coorIndex++;
              simplifiedContourA[len]["coordinates"].push(new Array());
              simplifiedContourA[len]["coordinates"][coorIndex].push(simplified);
            } else {
              simplifiedContourA[len]["coordinates"][coorIndex].push(simplified);
            }
          }
        }
      }
    }
    // check if B is positive or negative
    if (jsonfilename[23] == "p") {
      console.log("B is positive");
      for (len = 0; len < contourOutput_B.length; len++) {
        coorIndex = -1;
        for (cor = 0; cor < contourOutput_B[len]["coordinates"].length; cor++) {
          for (cornum = 0; cornum < contourOutput_B[len]["coordinates"][cor].length; cornum++) {
            if (contourOutput_B[len]["value"] == 0.125) {
              simplified = simplify(contourOutput_B[len]["coordinates"][cor][cornum], 9.3);
            } else {
              simplified = simplify(contourOutput_B[len]["coordinates"][cor][cornum], 2);
            }
            if (simplified.length > 4) {
              if (cornum == 0) {
                coorIndex++;
                simplifiedContourB[len]["coordinates"].push(new Array());
                simplifiedContourB[len]["coordinates"][coorIndex].push(simplified);
              } else {
                simplifiedContourB[len]["coordinates"][coorIndex].push(simplified);
              }
            }
          }
          // if(newcontouradded == 1){
          // 	coorIndex++;
          // 	newcontouradded = 0;
          // }
        }
      }
    } else if (jsonfilename[23] == "n") {
      console.log("B is negative");
      for (len = 0; len < contourOutput_B.length; len++) {
        coorIndex = -1;
        simplifiedContourB[len]["value"] = contourOutput_C[len]["value"];
        for (cor = 0; cor < contourOutput_B[len]["coordinates"].length; cor++) {
          for (cornum = 0; cornum < contourOutput_B[len]["coordinates"][cor].length; cornum++) {
            if (contourOutput_B[len]["value"] == 0.875) {
              simplified = simplify(contourOutput_B[len]["coordinates"][cor][cornum], 11);
            } else {
              simplified = simplify(contourOutput_B[len]["coordinates"][cor][cornum], 2);
            }
            // simplified = simplify(contourOutput_C[len]["coordinates"][cor][cornum],2);
            if (simplified.length > 4) {
              if (cornum == 0) {
                coorIndex++;
                simplifiedContourB[len]["coordinates"].push(new Array());
                simplifiedContourB[len]["coordinates"][coorIndex].push(simplified);
              } else {
                simplifiedContourB[len]["coordinates"][coorIndex].push(simplified);
              }
            }
          }
          // if(newcontouradded == 1){
          // 	coorIndex++;
          // 	newcontouradded = 0;
          // }
        }
      }
      simplifiedContourB[3]["coordinates"][0][0] = simplifiedContourB[2]["coordinates"][0][0];
    } else if (jsonfilename[23] == "m") {
      console.log('B mixed');
      for (len = 0; len < contourOutput_B.length; len++) {
        coorIndex = -1;
        simplifiedContourB[len]["value"] = contourOutput_B[len]["value"];
        for (cor = 0; cor < contourOutput_B[len]["coordinates"].length; cor++) {
          for (cornum = 0; cornum < contourOutput_B[len]["coordinates"][cor].length; cornum++) {
            simplified = simplify(contourOutput_B[len]["coordinates"][cor][cornum], 3);
            if (Math.abs(polygonArea(Object.values(simplified))) > 50) { //area is big enough, let's try to add it in simplifiedContour
              if (cornum == 0) {
                coorIndex++;
                simplifiedContourB[len]["coordinates"].push(new Array());
                simplifiedContourB[len]["coordinates"][coorIndex].push(simplified);
              } else {
                simplifiedContourB[len]["coordinates"][coorIndex].push(simplified);
              }
            }
          }
        }
        if (jsonfilename[53] != 2) {
          if (len >= 2) {
            simplifiedContourB[len - 1]["coordinates"][0][0] = simplifiedContourB[len]["coordinates"][0][1];
            simplifiedContourB[len - 1]["coordinates"][1][0] = simplifiedContourB[len]["coordinates"][1][1];
          }
        } else {
          if (len >= 2) {
            simplifiedContourB[len - 1]["coordinates"][2][0] = simplifiedContourB[len]["coordinates"][2][1];
            simplifiedContourB[len - 1]["coordinates"][3][0] = simplifiedContourB[len]["coordinates"][3][1];
          }
        }
      }
    }
    // check if C is positive or negative
    if (jsonfilename[25] == "p") {
      console.log("C is positive");
      for (len = 0; len < contourOutput_C.length; len++) {
        coorIndex = -1;
        simplifiedContourC[len]["value"] = contourOutput_C[len]["value"];
        for (cor = 0; cor < contourOutput_C[len]["coordinates"].length; cor++) {
          for (cornum = 0; cornum < contourOutput_C[len]["coordinates"][cor].length; cornum++) {
            if (contourOutput_C[len]["value"] == 0.125) {
              simplified = simplify(contourOutput_C[len]["coordinates"][cor][cornum], 11);
            } else {
              simplified = simplify(contourOutput_C[len]["coordinates"][cor][cornum], 2);
            }
            // simplified = simplify(contourOutput_C[len]["coordinates"][cor][cornum],2);
            if (simplified.length > 4) {
              if (cornum == 0) {
                coorIndex++;
                simplifiedContourC[len]["coordinates"].push(new Array());
                simplifiedContourC[len]["coordinates"][coorIndex].push(simplified);
              } else {
                simplifiedContourC[len]["coordinates"][coorIndex].push(simplified);
              }
            }
          }
          // if(newcontouradded == 1){
          // 	coorIndex++;
          // 	newcontouradded = 0;
          // }
        }
      }
    } else if (jsonfilename[25] == "n") {
      console.log("C is negative");
      for (len = 0; len < contourOutput_C.length; len++) {
        coorIndex = -1;
        simplifiedContourC[len]["value"] = contourOutput_C[len]["value"];
        for (cor = 0; cor < contourOutput_C[len]["coordinates"].length; cor++) {
          for (cornum = 0; cornum < contourOutput_C[len]["coordinates"][cor].length; cornum++) {
            if (contourOutput_C[len]["value"] == 0.875) {
              simplified = simplify(contourOutput_C[len]["coordinates"][cor][cornum], 11);
            } else {
              simplified = simplify(contourOutput_C[len]["coordinates"][cor][cornum], 2);
            }
            // simplified = simplify(contourOutput_C[len]["coordinates"][cor][cornum],2);
            if (simplified.length > 4) {
              if (cornum == 0) {
                coorIndex++;
                simplifiedContourC[len]["coordinates"].push(new Array());
                simplifiedContourC[len]["coordinates"][coorIndex].push(simplified);
              } else {
                simplifiedContourC[len]["coordinates"][coorIndex].push(simplified);
              }
            }
          }
          // if(newcontouradded == 1){
          // 	coorIndex++;
          // 	newcontouradded = 0;
          // }
        }
      }
      simplifiedContourC[3]["coordinates"][0][0] = simplifiedContourC[2]["coordinates"][0][0];
    } else if (jsonfilename[25] == "m") {
      console.log('C mixed');
      for (len = 0; len < contourOutput_C.length; len++) {
        coorIndex = -1;
        simplifiedContourC[len]["value"] = contourOutput_C[len]["value"];
        for (cor = 0; cor < contourOutput_C[len]["coordinates"].length; cor++) {
          for (cornum = 0; cornum < contourOutput_C[len]["coordinates"][cor].length; cornum++) {
            simplified = simplify(contourOutput_C[len]["coordinates"][cor][cornum], 2);
            if (Math.abs(polygonArea(Object.values(simplified))) > 50) {
              if (cornum == 0) {
                coorIndex++;
                simplifiedContourC[len]["coordinates"].push(new Array());
                simplifiedContourC[len]["coordinates"][coorIndex].push(simplified);
              } else {
                simplifiedContourC[len]["coordinates"][coorIndex].push(simplified);
              }
            }
          }
        }
        if (jsonfilename[53] != "2") {
          if (len == 2) {
            simplifiedContourC[len - 1]["coordinates"][1][0] = simplifiedContourC[len]["coordinates"][1][1];
            simplifiedContourC[len - 1]["coordinates"][2][0] = simplifiedContourC[len]["coordinates"][3][1];
          }
          if (len > 2) {
            simplifiedContourC[len - 1]["coordinates"][1][0] = simplifiedContourC[len]["coordinates"][1][1];
            simplifiedContourC[len - 1]["coordinates"][3][0] = simplifiedContourC[len]["coordinates"][3][1];
          }
        } else {
          if (len == 2) {
            simplifiedContourC[len - 1]["coordinates"][0][0] = simplifiedContourC[len]["coordinates"][1][1];
            simplifiedContourC[len - 1]["coordinates"][2][0] = simplifiedContourC[len]["coordinates"][3][1];
          }
          if (len > 2) {
            simplifiedContourC[len - 1]["coordinates"][1][0] = simplifiedContourC[len]["coordinates"][1][1];
            simplifiedContourC[len - 1]["coordinates"][3][0] = simplifiedContourC[len]["coordinates"][3][1];
          }
        }

      }
    }
    // check if D is positive or negative
    if (jsonfilename[27] == "p") {
      console.log('D is positive');
      for (len = 0; len < contourOutput_D.length; len++) {
        coorIndex = -1;
        simplifiedContourD[len]["value"] = contourOutput_D[len]["value"];
        for (cor = 0; cor < contourOutput_D[len]["coordinates"].length; cor++) {
          for (cornum = 0; cornum < contourOutput_D[len]["coordinates"][cor].length; cornum++) {
            if (contourOutput_D[len]["value"] == 0.125) {
              simplified = simplify(contourOutput_D[len]["coordinates"][cor][cornum], 11);
            }
            // else if(contourOutput_D[len]["value"] == 0.25){
            // 	simplified = simplify(contourOutput_D[len]["coordinates"][cor][cornum],11);
            // }
            // else if(contourOutput_D[len]["value"] == 0.375){
            // 	simplified = simplify(contourOutput_D[len]["coordinates"][cor][cornum],11);
            // }
            else {
              simplified = simplify(contourOutput_D[len]["coordinates"][cor][cornum], 2);
            }
            // simplified = simplify(contourOutput_C[len]["coordinates"][cor][cornum],2);
            if (simplified.length > 4) {
              if (cornum == 0) {
                coorIndex++;
                simplifiedContourD[len]["coordinates"].push(new Array());
                simplifiedContourD[len]["coordinates"][coorIndex].push(simplified);
              } else {
                simplifiedContourD[len]["coordinates"][coorIndex].push(simplified);
              }
            }
          }
          // if(newcontouradded == 1){
          // 	coorIndex++;
          // 	newcontouradded = 0;
          // }
        }
      }
    } else if (jsonfilename[27] == "n") {
      console.log('D is negative');
      for (len = 0; len < contourOutput_D.length; len++) {
        coorIndex = -1;
        simplifiedContourD[len]["value"] = contourOutput_D[len]["value"];
        for (cor = 0; cor < contourOutput_D[len]["coordinates"].length; cor++) {
          for (cornum = 0; cornum < contourOutput_D[len]["coordinates"][cor].length; cornum++) {
            if (contourOutput_D[len]["value"] == 0.875) {
              simplified = simplify(contourOutput_D[len]["coordinates"][cor][cornum], 11);
            } else {
              simplified = simplify(contourOutput_D[len]["coordinates"][cor][cornum], 2);
            }
            // simplified = simplify(contourOutput_C[len]["coordinates"][cor][cornum],2);
            if (simplified.length > 4) {
              if (cornum == 0) {
                coorIndex++;
                simplifiedContourD[len]["coordinates"].push(new Array());
                simplifiedContourD[len]["coordinates"][coorIndex].push(simplified);
              } else {
                simplifiedContourD[len]["coordinates"][coorIndex].push(simplified);
              }
            }
          }
          // if(newcontouradded == 1){
          // 	coorIndex++;
          // 	newcontouradded = 0;
          // }
        }
      }
      // simplifiedContourD[3]["coordinates"][0][0] = simplifiedContourD[2]["coordinates"][0][0];
    } else if (jsonfilename[27] == "m") {
      console.log('D mixed');
      for (len = 0; len < contourOutput_D.length; len++) {
        coorIndex = -1;
        simplifiedContourD[len]["value"] = contourOutput_D[len]["value"];
        for (cor = 0; cor < contourOutput_D[len]["coordinates"].length; cor++) {
          for (cornum = 0; cornum < contourOutput_D[len]["coordinates"][cor].length; cornum++) {
            simplified = simplify(contourOutput_D[len]["coordinates"][cor][cornum], 2);
            if (Math.abs(polygonArea(Object.values(simplified))) > 50) {
              if (cornum == 0) {
                coorIndex++;
                simplifiedContourD[len]["coordinates"].push(new Array());
                simplifiedContourD[len]["coordinates"][coorIndex].push(simplified);
              } else {
                simplifiedContourD[len]["coordinates"][coorIndex].push(simplified);
              }
            }
          }
        }
        if (jsonfilename[53] != 2) {
          if (len >= 2 && len <= 3) {
            simplifiedContourD[len - 1]["coordinates"][0][0] = simplifiedContourD[len]["coordinates"][0][1];
            simplifiedContourD[len - 1]["coordinates"][3][0] = simplifiedContourD[len]["coordinates"][3][1];
          }
          if (len == 4) {
            simplifiedContourD[len - 1]["coordinates"][0][0] = simplifiedContourD[len]["coordinates"][1][1];
            simplifiedContourD[len - 1]["coordinates"][3][0] = simplifiedContourD[len]["coordinates"][3][1];
          }
          if (len > 4) {
            simplifiedContourD[len - 1]["coordinates"][1][0] = simplifiedContourD[len]["coordinates"][1][1];
            simplifiedContourD[len - 1]["coordinates"][3][0] = simplifiedContourD[len]["coordinates"][3][1];
          }
        } else {
          if (len >= 2 && len <= 3) {
            simplifiedContourD[len - 1]["coordinates"][1][0] = simplifiedContourD[len]["coordinates"][1][1];
            simplifiedContourD[len - 1]["coordinates"][2][0] = simplifiedContourD[len]["coordinates"][2][1];
          }
          if (len == 4) {
            simplifiedContourD[len - 1]["coordinates"][1][0] = simplifiedContourD[len]["coordinates"][1][1];
            simplifiedContourD[len - 1]["coordinates"][2][0] = simplifiedContourD[len]["coordinates"][3][1];
          }
          if (len > 4) {
            simplifiedContourD[len - 1]["coordinates"][1][0] = simplifiedContourD[len]["coordinates"][1][1];
            simplifiedContourD[len - 1]["coordinates"][3][0] = simplifiedContourD[len]["coordinates"][3][1];
          }
        }
      }
    }
  }

}

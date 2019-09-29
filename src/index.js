/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
     let x = config[focus];
     let y;
     if(knowsProgramming) {y = 800/x}
     else {y = 1300/x};
     return Math.ceil(y);
  };
  
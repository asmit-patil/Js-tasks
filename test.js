// // for (var i = 1; i <= 3; i++) {
// //     setTimeout(function() {
// //       console.log(i + " second(s) elapsed");
// //     }, i * 1000);
// //   }

// for (var i = 1; i <= 3; i++) {
//     (function(i) {
//       setTimeout(function() {
//         console.log(i + " second(s) elapsed");
//       }, i * 1000);
//     })(i);
//   }
for (let i = 1; i <= 3; i++) {
    setTimeout(function() {
      console.log(i + " second(s) elapsed");
    }, i * 1000);
  }
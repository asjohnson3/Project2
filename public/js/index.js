// // Get references to page elements
// var $exampleText = $("#example-text");
// var $exampleDescription = $("#example-description");
// var $exampleScore = $("#example-score");
// var $submitBtn = $("#submit");
// var $exampleList = $("#example-list");
// var loginButton = $(".login-button");
// var newUserButton = $(".new-user");
// var usernameInput = $(".username");
// var usernameCreate = $(".username1");
// var passwordInput = $(".password");
// var passwordInput1 = $(".password1");
// var passwordInput2 = $(".password2");

// // The API object contains methods for each kind of request we'll make
// var API = {
//   saveExample: function(example) {
//     return $.ajax({
//       headers: {
//         "Content-Type": "application/json"
//       },
//       type: "POST",
//       url: "api/examples",
//       data: JSON.stringify(example)
//     });
//   },
//   getExamples: function() {
//     return $.ajax({
//       url: "api/examples",
//       type: "GET"
//     });
//   }
//   // ,
//   // deleteExample: function(id) {
//   //   return $.ajax({
//   //     url: "api/examples/" + id,
//   //     type: "DELETE"
//   //   });
//   // }
// };

// // refreshExamples gets new examples from the db and repopulates the list
// var refreshExamples = function() {
//   API.getExamples().then(function(data) {
//     var $examples = data.map(function(example) {
//       console.log(data);
//       var $a = $("<a>")
//         .text(example.text)
//         .attr("href", "/example/" + example.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": example.id
//         })
//         .append($a);

//       // var $button = $("<button>")
//       //   .addClass("btn btn-danger float-right delete")
//       //   .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $exampleList.empty();
//     $exampleList.append($examples);
//   });
// };

// // var orderExamples = function() {
// //   API.getExamples().then(function(data) {
// //     console.log(data);
// //     var $examples = data.map(function(example) {
// //       var $a 
// //     })
// //   })
// // }

// // orderExamples();
// // handleFormSubmit is called whenever we submit a new example
// // Save the new example to the db and refresh the list
// var handleFormSubmit = function(event) {
//   event.preventDefault();

//   var example = {
//     text: $exampleText.val().trim(),
//     username: $exampleText.val().trim(),
//     password: $exampleDescription.val().trim(),
//     description: $exampleDescription.val().trim(),
//     score: $exampleScore.val().trim()
//   };

//   if (!(example.text && example.description)) {
//     alert("You must enter an example text and description!");
//     return;
//   }

//   // API.saveExample(example).then(function() {
//   //   refreshExamples();
//   // });

//   // $exampleText.val("");
//   // $exampleDescription.val("");

//   API.saveExample(example)
//   .then(function(data) {
//     location.reload();
//   });
// };

// // handleDeleteBtnClick is called when an example's delete button is clicked
// // Remove the example from the db and refresh the list
// // var handleDeleteBtnClick = function() {
// //   var idToDelete = $(this)
// //     .parent()
// //     .attr("data-id");

// //   API.deleteExample(idToDelete).then(function() {
// //     refreshExamples();
// //   });
// // };

// // Add event listeners to the submit and delete buttons
// $submitBtn.on("click", handleFormSubmit);
// // $exampleList.on("click", ".delete", handleDeleteBtnClick);
// newUserButton.on("click", function () {

//   var example = {
//     username: usernameCreate.val().trim(),
//     password: passwordInput1.val().trim()
//   };


//   if (!usernameCreate.val().trim() || !passwordInput1.val().trim() || !passwordInput2.val().trim()) {
//     return;
//   }

//   if (passwordInput1.val().trim() !== passwordInput2.val().trim()) {
//     alert("Please enter the same password on both fields");
//   } else {
//     API.saveExample(example)
//     // .then(function (data) {
//     //   location.reload();
//     // });
//   }

// });

// loginButton.on("click", function () {
  
//   $.get("/api/examples", function (data) {

//     var valid = true;
//     console.log(usernameInput.val()); 
//     for (var i = 0; i < data.length; i++) {
      
//       if (data[i].username === usernameInput.val().trim() && data[i].password === passwordInput.val().trim()) {
//         return alert("Welcome");
//       }

//       if (data[i].username === usernameInput.val().trim() && data[i].password !== passwordInput.val().trim()) {
//         return alert("check your password, watch out for case senstivity.")
//       }

//       if (data[i].username !== usernameInput.val().trim()) {
//         valid = false;
//       }
//     }

//     if (valid === false) {
//       alert("Invalid Username or Password");
//     }

//   });
// });






















// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $exampleScore = $("#example-score");
var $submitBtn = $("#submit");
var $exampleList = $("#example-list");
var loginButton = $(".login-button");
var newUserButton = $(".new-user");
var usernameInput = $(".username");
var usernameCreate = $(".username1");
var passwordInput = $(".password");
var passwordInput1 = $(".password1");
var passwordInput2 = $(".password2");
var welcomePageUsername = $("#nameFromDatabase");

// The API object contains methods for each kind of request we'll make
var API = {
  saveExample: function(example) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/examples",
      data: JSON.stringify(example)
    });
  },
  getExamples: function() {
    return $.ajax({
      url: "api/examples",
      type: "GET"
    });
  }
  // ,
  // deleteExample: function(id) {
  //   return $.ajax({
  //     url: "api/examples/" + id,
  //     type: "DELETE"
  //   });
  // }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshExamples = function() {
  API.getExamples().then(function(data) {
    var $examples = data.map(function(example) {
      console.log(data);
      var $a = $("<a>")
        .text(example.text)
        .attr("href", "/example/" + example.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": example.id
        })
        .append($a);

      // var $button = $("<button>")
      //   .addClass("btn btn-danger float-right delete")
      //   .text("ｘ");

      $li.append($button);

      return $li;
    });

    $exampleList.empty();
    $exampleList.append($examples);
  });
};

// orderExamples();
// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var example = {
    text: $exampleText.val().trim(),
    username: $exampleText.val().trim(),
    password: $exampleDescription.val().trim(),
    description: $exampleDescription.val().trim(),
    score: $exampleScore.val().trim()
  };

  if (!(example.text && example.description)) {
    alert("You must enter an example text and description!");
    return;
  }

  // API.saveExample(example).then(function() {
  //   refreshExamples();
  // });

  // $exampleText.val("");
  // $exampleDescription.val("");

  API.saveExample(example)
  .then(function(data) {
    location.reload();
  });
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function() {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExample(idToDelete).then(function() {
//     refreshExamples();
//   });
// };

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
// $exampleList.on("click", ".delete", handleDeleteBtnClick);
newUserButton.on("click", function () {

  var example = {
    username: usernameCreate.val().trim(),
    password: passwordInput1.val().trim(),
    score: 0
  };

  if (!usernameCreate.val().trim() || !passwordInput1.val().trim() || !passwordInput2.val().trim()) {
    return;
  }

  if (passwordInput1.val().trim() !== passwordInput2.val().trim()) {
    alert("Please enter the same password on both fields");
  } else {
    
    API.saveExample(example).then(function() {
      window.location.href = "/";
    });
  }
});

loginButton.on("click", function () {

  $.get("/api/examples", function (data) {

    var valid = true;
    console.log(usernameInput.val()); 
    for (var i = 0; i < data.length; i++) {
      console.log(data[i].username);
      if (data[i].username === usernameInput.val().trim() && data[i].password === passwordInput.val().trim()) {
        // var valid = true;
        sessionStorage.setItem('user', data[i].username);
        sessionStorage.setItem('score', data[i].score);
        $("#sessionUser").text(sessionStorage.getItem("user"));
        $("#sessionUser").html(sessionStorage.getItem("user"));
        window.location.href = "/play";
        // return alert("Welcome");
        return;
      }

      if (data[i].username === usernameInput.val().trim() && data[i].password !== passwordInput.val().trim()) {
        return alert("check your password, watch out for case senstivity.")
      }

      if (data[i].username !== usernameInput.val().trim()) {
        valid = false;
      }
    }

    if (valid === false) {
      alert("Invalid Username or Password");
    }

  });

});

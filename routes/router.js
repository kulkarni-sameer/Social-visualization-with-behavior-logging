var express = require('express');
// var app = express();
var router = express.Router();
var User = require('../models/user');
var path    = require("path");

var app = express();

router.use(express.static('./views'));

router.get('/openview', function (req, res, next) {
  var dum;
  var currup, currdown, currcomm, currstar;
  // User.findById({username: 'dyuthi'})
  //   .exec(function (error, user1) {
  //     console.log(user1.username);
  //   });
 // var myCursor = User.users.find( { username: 'aaa' } );
//  console.log(myCursor);

var aaup, aadown, aacomm, aastar;
var bbup, bbdown, bbcomm, bbstar;
var ccup, ccdown, cccomm, ccstar;



User.findById("5ba3465c78558433eaa6e1ed")
    .exec(function (error, user) {
      bbup = user.upvote;
      bbdown = user.downvote;
      bbcomm = user.comment;
      bbstar = user.star;
    });
    

User.findById("5ba3462b78558433eaa6e1ec")
    .exec(function (error, user) {
      aaup = user.upvote;
      aadown = user.downvote;
      aacomm = user.comment;
      aastar = user.star;
    });
    
    User.findById("5ba3467b78558433eaa6e1ee")
    .exec(function (error, user) {
      ccup = user.upvote;
      ccdown = user.downvote;
      cccomm = user.comment;
      ccstar = user.star;
    });
    
    
User.findById(req.session.userId)
    .exec(function (error, user) {
      
     // for (var i=0; i< 10; i++){
      if (error || !user) {
        var err = new Error('Wrong email or password.');
        err.status = 401;
        return next(err);
      } else {
        
      
          currup = user.upvote;
      // dum = Number(currup);
    //  console.log("idar value: " +currup);
      currdown = user.downvote;
    //  console.log("idar value: " +currdown);
      currcomm = user.comment;
      currstar = user.star;
    //  console.log("this ends!!");
      }
      
     
      
   
    
   // if (currup == 103){
   // console.log("hereeee!!");
    
        res.render("view.ejs", {upv3 : currup, dwn3: currdown, com3: currcomm, str3 : currstar, aaup : aaup, aadown: aadown, aacomm : aacomm, aastar: aastar, bbup : bbup, bbdown: bbdown, bbcomm : bbcomm, bbstar: bbstar, ccup : ccup, ccdown: ccdown, cccomm : cccomm, ccstar: ccstar });
   // }
      
   // }
      } );}
    );



// GET route for reading data
router.get('/', function (req, res, next) {
  return res.sendFile(path.join(__dirname + '/templateLogReg/index.html'));
});


//POST route for updating data
router.post('/', function (req, res, next) {
  // confirm that user typed same password twice
  if (req.body.password !== req.body.passwordConf) {
    var err = new Error('Passwords do not match.');
    err.status = 400;
    res.send("passwords dont match");
    return next(err);
  }

var ts;
  if (req.body.email &&
    req.body.username &&
    req.body.password &&
    req.body.passwordConf) {

    var userData = {
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      passwordConf: req.body.passwordConf,
      timeStamp: new Date(),
      upvote: 0,
      downvote: 0,
      comment: 0,
      star: 0,
    }

    User.create(userData, function (error, user) {
      if (error) {
        return next(error);
      } else {
        // console.log(new Date());
        req.session.userId = user._id;
        return res.redirect('/profile');
      }
    });

  } else if (req.body.logemail && req.body.logpassword) {
    User.authenticate(req.body.logemail, req.body.logpassword, function (error, user) {
      if (error || !user) {
         var err = new Error('Wrong email or password.');
         err.status = 401;
         return next(err);
      } else {
        req.session.userId = user._id;
        return res.redirect('/profile');
      }
    });
  } else {
    var err = new Error('All fields required.');
    err.status = 400;
    return next(err);
  }
})

// GET route after registering
router.get('/profile', function (req, res, next) {
  User.findById(req.session.userId)
    .exec(function (error, user) {
      var usr = user.username;
      var mail = user.email;
      var ts = user.timeStamp;
  
      if (error) {
        return next(error);
      } else {
        if (user === null) {
          var err = new Error('Not authorized! Go back!');
          err.status = 400;
          return next(err);
        } else {
          return res.render("profile.ejs", {usr : usr, mail : mail, ts : ts})
        }
      }
    });
});


router.post('/updateDB', function (req, res, next) {
 var MongoClient = require('mongodb').MongoClient
  , format = require('util').format;
  var upvrouter = req.body.upvPass;
  
  var dwnrouter = req.body.dwnvPass;
  var commrouter = req.body.commPass;
  var strrouter = req.body.strsPass;
  var usr, currup, currdown, currcomm, currstar;
 User.findById(req.session.userId)
    .exec(function (error, user) {
      usr = user.username});
//       currup = user.toObject().upvote;
//     //  if (typeof currup == 'undefined'){
//         // console.log("tyessssssss!!");
//         currup = 0;
//       // }
//       // console.log("yavdapp : " +currup);
//       currdown = user.toObject().downvote;
//       if (typeof currdown == 'undefined'){
//         currdown = 0;
//       }
//       currstar = user.toObject().star;
//       currcomm = user.toObject().comment;
//       if (typeof currcomm == 'undefined'){
//         currcomm = 0;
//       }
//       if (typeof currstar == 'undefined'){
//         currstar = 0;
//       }
       
      
//     });
    
    // console.log("upvrouter is :" +upvrouter);
    // console.log("currup is :" +currup);
   
    
    // upvrouter = upvrouter + currup;
    
    // dwnrouter = dwnrouter + currdown;
    // commrouter = commrouter + currcomm;
    // strrouter = strrouter + currstar;
    

MongoClient.connect('mongodb://127.0.0.1:27017/testForAuth', function(err, db) {
if(err) throw err;
// var nam = db.users;
 
// console.log("======upvrouter=========");
// console.log(upvrouter);
// console.log("===============");
//   console.log("======dwnrouter=========");
// console.log(dwnrouter);
// console.log("===============");
//   console.log("======commrouter=========");
// console.log(commrouter);
// console.log("===============");
db.collection('users').findAndModify(
  {username: usr}, // query
  [['_id','asc']],  // sort order
  {$set: {upvote: upvrouter, downvote: dwnrouter, comment: commrouter,star: strrouter  }}, // replacement, replaces only the field "hi"
  {}, // options
  function(err, object) {
      if (err){
         res.send("unable to update db!!") ;// returns error if no matching object found
      }else{
          res.redirect('/openview');
      }
  });
});
});


// router.get('/openview', function (req, res, next) {
  
//       var filePath = "./d3views/view.html"
// var resolvedPath = path.resolve(filePath);
// console.log("sdsdsfdsd " +resolvedPath);
// return res.sendFile(resolvedPath);
//       }
//     );
// GET for logout logout
router.get('/logout', function (req, res, next) {
  if (req.session) {
    // delete session object
    req.session.destroy(function (err) {
      if (err) {
        return next(err);
      } else {
        return res.redirect('/');
      }
    });
  }
});


// router.get('/stackoverflow', async(req, res) => {
//     var currup;
//     User.findById(req.session.userId)
//     .exec(function (error, user) {
//   currup = await user.upvote}  );
   
//     res.render("stackoverflow.ejs", {upvo : currup});
  
// });

router.get('/analysis', function (req, res, next) {
 
    var loggeduser = req.session.userId;
        res.render("ananfind.ejs", {loggeduser: loggeduser});
   // }
      
   // }
      } );
    
    
    
router.get('/stackoverflow', function (req, res, next) {
  var dum;
  var currup, currdown, currcomm, currstar;
  console.log(req.session.userId);
User.findById(req.session.userId)
    .exec(function (error, user) {
      
     // for (var i=0; i< 10; i++){
      if (error || !user) {
        var err = new Error('Wrong email or password.');
        err.status = 401;
        return next(err);
      } else {
        
      //  console.log("here now!!");
          currup = user.upvote;
      // dum = Number(currup);
     // console.log("idar value: " +currup);
      currdown = user.downvote;
     // console.log("idar value: " +currdown);
      currcomm = user.comment;
      currstar = user.star;
     // console.log("this ends!!");
      }
      
     
      
   
    
   // if (currup == 103){
  //  console.log("hereeee!!");
    
        res.render("stackoverflow.ejs", {upv3 : currup, dwn3: currdown, com3: currcomm, str3 : currstar });
   // }
      
   // }
      } );}
    );


module.exports = router;
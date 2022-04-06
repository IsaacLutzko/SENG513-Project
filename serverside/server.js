const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const fs = require("fs");

let users = [
  {
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    aboutyou: "",
    job_types: [],
    skills: [],
    work_experience: [
      {
        job_seeker_email: "",
        company: "",
        job_title: "",
        job_type: "",
        years: "",
        description: "",
      },
    ],
    socials: [
      {
        platform: "",
        link: "",
      },
    ],
    education: [
      {
        institute: "",
        start_date: "",
        end_date: "",
        degree_type: "",
      },
    ],
  },
];

// Server setup
http.listen(process.env.PORT || 3000, () => {
  console.log("Listening on port %s", process.env.PORT || 3000);
});

//
io.on("connection", (socket) => {
  let JS_email;
  // Registering a new user
  socket.on("proposedlogin", (user) => {
    console.log("A new user has arrived");
    console.log("email:" + user.email);

    // Check if email is already registered
    const found = users.some((el) => el.email === user.email);

    // If not add it to the users array
    if (!found) {
      users.push({ email: user.email, password: user.password });
      console.log("New user with email " + user.email + " has been added");
      io.to(socket.id).emit("loginaccepted");
      JS_email = user.email;
    } else {
      console.log("denied user " + user.email);
      io.to(socket.id).emit("logindenied");
    }
  });

  socket.on("userData", (user) => {
    // const found = users.some((el) => el.email === user.email);

    console.log("New user data recvd:");

    for (let i = 0; i < users.length; i++) {
      // find the current user
      if (users[i].email === JS_email) {
        // set first name
        users[i].firstname = user.firstname;
        console.log(users[i].firstname);
        // set last name
        users[i].lastname = user.lastname;
        console.log(users[i].lastname);
        // set about you
        users[i].aboutyou = user.aboutyou;
        console.log(users[i].aboutyou);
        // create image file
        require("fs").writeFile(
          "JS-profile-pics/" + JS_email + "-pic.png",
          user.image,
          "base64",
          function (err) {
            console.log(err);
          }
        );
        // Job type
        users[i].job_types = user.job_types;
        console.log(users[i].job_types);
        //skills
        users[i].skills = user.skills;
        console.log(users[i].skills);
        // Relevant experience
        users[i].work_experience = user.work_experience;
        for (let j = 0; j < users[i].work_experience.length; j++) {
          users[i].work_experience[j].job_seeker_email = JS_email;
        }
        console.log(users[i].work_experience);
        // Socials
        users[i].socials = user.socials;
        console.log(users[i].socials);
        // education
        users[i].education = user.education;
        console.log(users[i].education);
      }
    }
  });

  socket.on("base64 file", function (msg) {
    console.log("received base64 file from");
    // socket.broadcast.emit('base64 image', //exclude sender
    console.log(msg);
    require("fs").writeFile("out.png", msg, "base64", function (err) {
      console.log(err);
    });
    // fs.writeFile("test.png", , "binary", function (err) {
    //   if (err) throw err;
    //   console.log("File saved.");
    // });
  });

  // Disconnect
  socket.on("disconnect", () => {
    console.log("A user has disconnected");
  });
});

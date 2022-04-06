const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

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
      if (i.email === JS_email) {
        i.firstname = user.firstname;
        console.log(user.firstname);
        i.lastname = user.lastname;
        console.log(user.lastname);
        i.aboutyou = user.aboutyou;
        console.log(user.aboutyou);
        for (let j = 0; j < user.education.length; j++) {
          i.education[j].push(user.education[j]);
          console.log(i.education[j]);
        }
      }
    }
  });

  // Disconnect
  socket.on("disconnect", () => {
    console.log("A user has disconnected");
  });
});

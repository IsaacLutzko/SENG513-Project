const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const fs = require("fs");

let jobseekers = [
  {
    pic: null,
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

let hiringmanagers = [
  {
    logo: null,
    email: "",
    password: "",
    company_name: "",
    company_logo: "",
    posted_jobs: [],
  },
];

// Server setup
http.listen(process.env.PORT || 3000, () => {
  console.log("Listening on port %s", process.env.PORT || 3000);
});

//
io.on("connection", (socket) => {
  let Curr_email;
  let Curr_status;
  // Registering a new user
  socket.on("proposedlogin", (user) => {
    console.log("A new user has arrived");
    console.log("email:" + user.email);

    const found =
      jobseekers.some((el) => el.email === user.email) ||
      hiringmanagers.some((el) => el.email === user.email);

    // Job seeker
    if (user.user_type === "Jobseeker") {
      if (!found) {
        Curr_email = user.email;
        Curr_status = user.user_type;
        jobseekers.push({ email: user.email, password: user.password });
        console.log(
          "New Job seeker user with email " + user.email + " has been added"
        );
        io.to(socket.id).emit("loginaccepted");
      } else {
        console.log("denied user " + user.email);
        io.to(socket.id).emit("logindenied");
      }
    }
    // Hiring manager
    else if (user.user_type === "HiringManager") {
      if (!found) {
        Curr_email = user.email;
        Curr_status = user.user_type;
        hiringmanagers.push({ email: user.email, password: user.password });
        console.log(
          "New hiring manaer user with email " + user.email + " has been added"
        );
        io.to(socket.id).emit("loginaccepted");
      } else {
        console.log("denied user " + user.email);
        io.to(socket.id).emit("logindenied");
      }
    }
  });

  socket.on("userData", (user) => {
    console.log("New user data recvd:");

    if (Curr_status === "Jobseeker") {
      for (let i = 0; i < jobseekers.length; i++) {
        // find the current user
        if (jobseekers[i].email === Curr_email) {
          // set first name
          jobseekers[i].firstname = user.firstname;
          console.log(jobseekers[i].firstname);
          // set last name
          jobseekers[i].lastname = user.lastname;
          console.log(jobseekers[i].lastname);
          // set about you
          jobseekers[i].aboutyou = user.aboutyou;
          console.log(jobseekers[i].aboutyou);
          // store image buffer
          jobseekers[i].pic = user.image;
          // create image file
          require("fs").writeFile(
            "JS-profile-pics/" + Curr_email + "-pic.png",
            user.image,
            "base64",
            function (err) {
              console.log(err);
            }
          );

          // Job type
          jobseekers[i].job_types = user.job_types;
          console.log(jobseekers[i].job_types);
          //skills
          jobseekers[i].skills = user.skills;
          console.log(jobseekers[i].skills);
          // Relevant experience
          jobseekers[i].work_experience = user.work_experience;
          for (let j = 0; j < jobseekers[i].work_experience.length; j++) {
            jobseekers[i].work_experience[j].job_seeker_email = Curr_email;
          }
          console.log(jobseekers[i].work_experience);
          // Socials
          jobseekers[i].socials = user.socials;
          console.log(jobseekers[i].socials);
          // education
          jobseekers[i].education = user.education;
          console.log(jobseekers[i].education);
        }
      }
    } else if (Curr_status === "HiringManager") {
      for (let i = 0; i < hiringmanagers.length; i++) {
        //
        if (hiringmanagers[i].email == Curr_email) {
          // Company Name
          hiringmanagers[i].company_name = user.company_name;

          // Store company image
          hiringmanagers[i].logo = user.image;
          // Company Image
          require("fs").writeFile(
            "HM-company-pics/" + Curr_email + "-pic.png",
            user.image,
            "base64",
            function (err) {
              console.log(err);
            }
          );
        }
      }
      console.log("Hiring manager's user info updated");
    }
  });

  socket.on("loginRequest", (user) => {
    console.log("trying login credentials");
    for (let i = 0; i < jobseekers.length; i++) {
      if (jobseekers[i].email === user.email) {
        if (jobseekers[i].password === user.password) {
          io.to(socket.id).emit("Jobseeker-loggedin");
          break;
        }
      }
    }

    for (let i = 0; i < hiringmanagers.length; i++) {
      if (hiringmanagers[i].email === user.email) {
        console.log("found HM email");
        if (hiringmanagers[i].password === user.password) {
          console.log("found HM password");
          io.to(socket.id).emit("HiringManager-loggedin");
          break;
        }
        console.log("NEEDED: " + hiringmanagers[i].password);
        console.log("Given: " + user.password);
      }
    }

    // io.to(socket.id).emit("invalidCredentials");
  });

  // Disconnect
  socket.on("disconnect", () => {
    console.log("A user has disconnected");
  });
});

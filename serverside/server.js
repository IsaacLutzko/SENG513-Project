const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http, { cors: { origin: "*" } });
const fs = require("fs");

let jobseekers = [
  {
    socket_id: null,
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
    liked_jobs: [],
    unliked_jobs: [],
  },
];

let matches = [
  {
    match_id: null,
    job_id: "",
    job_seeker_email: "",
    hiring_manager_email: "",
    job_type: "",
    seeker_name: "",
    messages: [
      {
        content: "",
        sender: "",
        reciever: "",
      },
    ],
  },
];

let hiringmanagers = [
  {
    socket_id: null,
    logo: null,
    email: "",
    password: "",
    company_name: "",
    company_logo: null,
    posted_jobs: [],
  },
];

let jobs = [
  {
    company_logo: null,
    job_id: 1,
    hiring_manager_email: "",
    company: "",
    description: "",
    req_expeirence: null,
    salary: "",
    job_title: "",
    job_type: "",
    start_date: "",
    location: "",
    skills: [],
    likes_job_seeker: [],
    unlikes_job_seeker: [],
  },
];

// let jobs = [
//   //Job 1 ----------------
//   {
//     job_id: 1,
//     hiring_manager_email: "123@example.com",
//     company: "Google",
//     description:
//       "A Full Stack Developer, or Full Stack Software Engineer, is a Computer Programmer who uses coding to operate on both front- and back-end systems. Their main duties include creating user interactions on various websites and platforms, writing code optimized for mobile and developing databases and services for functionality.",
//     req_expeirence: 2,
//     salary: "100000",
//     job_title: "Frontend Dev",
//     job_type: "Front-end Developer",
//     start_date: "2022-5-12",
//     location: "California",
//     skills: ["Node.js", "Javascript", "HTML", "CSS"],
//     likes_job_seeker: [],
//     unlikes_job_seeker: [],
//   },
//   //Job 2 ----------------
//   {
//     job_id: 2,
//     hiring_manager_email: "123@example.com",
//     company: "Apple",
//     description:
//       "A Full Stack Developer, or Full Stack Software Engineer, is a Computer Programmer who uses coding to operate on both front- and back-end systems. Their main duties include creating user interactions on various websites and platforms, writing code optimized for mobile and developing databases and services for functionality.",
//     req_expeirence: 1,
//     salary: "100000",
//     job_title: "Full Stack Engineer",
//     job_type: "Full-stack Developer",
//     start_date: "2022-5-12",
//     location: "Texas",
//     skills: ["Node.js", "SQL"],
//     likes_job_seeker: [],
//     unlikes_job_seeker: [],
//   },
//   //Job 3 ----------------
//   {
//     job_id: 3,
//     hiring_manager_email: "123@example.com",
//     company: "Facebook",
//     description:
//       "A Full Stack Developer, or Full Stack Software Engineer, is a Computer Programmer who uses coding to operate on both front- and back-end systems. Their main duties include creating user interactions on various websites and platforms, writing code optimized for mobile and developing databases and services for functionality.",
//     req_expeirence: 3,
//     salary: "100000",
//     job_title: "Backend Dev",
//     job_type: "Backend Developer",
//     start_date: "2022-5-12",
//     location: "Seattle",
//     skills: ["Node.js", "Javascript", "HTML", "CSS"],
//     likes_job_seeker: [],
//     unlikes_job_seeker: [],
//   },
//   //Job 4 ----------------
//   {
//     job_id: 4,
//     hiring_manager_email: "123@example.com",
//     company: "Netflix",
//     description:
//       "A Full Stack Developer, or Full Stack Software Engineer, is a Computer Programmer who uses coding to operate on both front- and back-end systems. Their main duties include creating user interactions on various websites and platforms, writing code optimized for mobile and developing databases and services for functionality.",
//     req_expeirence: 4,
//     salary: "100000",
//     job_title: "UX Designer",
//     job_type: "UX designer",
//     start_date: "2022-5-12",
//     location: "California",
//     skills: ["Node.js", "Javascript", "HTML", "CSS", "C++", "JAVA"],
//     likes_job_seeker: [],
//     unlikes_job_seeker: [],
//   },
//   //Job 5 ----------------
//   {
//     job_id: 5,
//     hiring_manager_email: "123@example.com",
//     company: "Telus",
//     description:
//       "A Full Stack Developer, or Full Stack Software Engineer, is a Computer Programmer who uses coding to operate on both front- and back-end systems. Their main duties include creating user interactions on various websites and platforms, writing code optimized for mobile and developing databases and services for functionality.",
//     req_expeirence: 4,
//     salary: "100000",
//     job_title: "Network architect",
//     job_type: "Network architect",
//     start_date: "2022-5-12",
//     location: "Calgary",
//     skills: ["Node.js", "Java", "C++", "Python"],
//     likes_job_seeker: [],
//     unlikes_job_seeker: [],
//   },
// ];

// Server setup
http.listen(process.env.PORT || 3000, () => {
  console.log("Listening on port %s", process.env.PORT || 3000);
});

// generate unique id function
// Code from: https://stackoverflow.com/questions/55216475/save-data-in-array-with-auto-id-increment
function generateNewId() {
  let newjob_id = Math.floor(Math.random() * 9999) + 1;
  if (jobs.some((el) => el.job_id === newjob_id)) {
    newjob_id = generateNewId();
  }
  return newjob_id;
}

function generatematchId() {
  let new_id = Math.floor(Math.random() * 9999) + 1;
  if (matches.some((el) => el.match_id === new_id)) {
    new_id = generateNewId();
  }
  return new_id;
}

//
io.on("connection", (socket) => {
  let Curr_email;
  let Curr_password;
  let Curr_status;
  let used = [];
  let used_seekers = new Map();
  let login = false;
  let index = 0;
  let job_matches = [
    {
      job_id: null,
      hiring_manager_email: "",
      company: "",
      description: "",
      req_expeirence: null,
      job_title: "",
      job_type: "",
      start_date: "",
      location: "",
      skills: [],
      likes_job_seeker: [],
      unlikes_job_seeker: [],
    },
  ];

  // Registering a new user
  socket.on("proposedlogin", async (user) => {
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
        Curr_password = user.password;
        // jobseekers.push({ email: user.email, password: user.password });
        console.log(
          "New Job seeker user with email " + user.email + " has been added"
        );
        login = true;
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
        Curr_password = user.password;
        hiringmanagers.push({ email: user.email, password: user.password });
        console.log(
          "New hiring manaer user with email " + user.email + " has been added"
        );
        login = true;
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
      jobseekers.push({ email: Curr_email, password: Curr_password });
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

          jobseekers[i].liked_jobs = [];
          jobseekers[i].unliked_jobs = [];
          jobseekers[i].socket_id = socket.id;
        }
      }
    } else if (Curr_status === "HiringManager") {
      // hiringmanagers.push({ email: user.email, password: user.password });
      for (let i = 0; i < hiringmanagers.length; i++) {
        //
        if (hiringmanagers[i].email == Curr_email) {
          hiringmanagers[i].socket_id = socket.id;
          // Company Name
          hiringmanagers[i].company_name = user.company_name;

          // Store company image
          hiringmanagers[i].company_logo = user.image;
          // Company Image
          // require("fs").writeFile(
          //   "HM-company-pics/" + Curr_email + "-pic.png",
          //   user.image,
          //   "base64",
          //   function (err) {
          //     console.log(err);
          //   }
          // );
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
          Curr_email = jobseekers[i].email;
          Curr_status = "Jobseeker";
          jobseekers[i].socket_id = socket.id;
          io.to(socket.id).emit("Jobseeker-loggedin");
          login = true;
          break;
        }
      }
    }

    for (let i = 0; i < hiringmanagers.length; i++) {
      if (hiringmanagers[i].email === user.email) {
        if (hiringmanagers[i].password === user.password) {
          Curr_email = hiringmanagers[i].email;
          Curr_status = "HiringManager";
          hiringmanagers[i].socket_id = socket.id;
          io.to(socket.id).emit("HiringManager-loggedin");
          login = true;
          break;
        }
        console.log("NEEDED: " + hiringmanagers[i].password);
        console.log("Given: " + user.password);
      }
    }

    io.to(socket.id).emit("invalidCredentials");
  });

  socket.on("logincheck", () => {
    if (login === true) {
      io.to(socket.id).emit("loggedin");
      console.log("loggedin");
    } else if (login === false) {
      io.to(socket.id).emit("notloggedin");
      console.log("notloggedin");
    }
  });

  //
  socket.on("jobchoice", (obj) => {
    console.log("CHOICE is: " + obj.choice);

    // get curr user index
    const js_index = jobseekers.findIndex((el) => {
      return el.email === Curr_email;
    });

    // liked
    if (obj.choice === "like") {
      console.log("pushed job" + obj.job_id);
      used.push(obj.job_id);

      jobseekers[js_index].liked_jobs.push(obj.job_id);

      // check for match
      const job_index = jobs.findIndex((el) => {
        return el.job_id === obj.job_id;
      });

      if (jobs[job_index].likes_job_seeker !== null) {
        for (let i = 0; i < jobs[job_index].likes_job_seeker.length; i++) {
          if (jobs[job_index].likes_job_seeker[i] === Curr_email) {
            console.log(
              "Matched " + Curr_email + " with " + jobs[job_index].job_type
            );
            matches.push({
              match_id: generatematchId(),
              job_id: obj.job_id,
              job_seeker_email: Curr_email,
              hiring_manager_email: jobs[job_index].hiring_manager_email,
              seeker_name: jobseekers[js_index].firstname,
              job_type: jobs[job_index].job_type,
              messages: [],
            });
          }
        }
      }

      // unliked
    } else if (obj.choice === "unlike") {
      used.push(obj.job_id);
      console.log("pushed job" + obj.job_id);

      jobseekers[js_index].unliked_jobs.push(obj.job_id);
    }

    console.log("used: " + used);
  });

  //Job seeker job request
  socket.on("jobrequest", (curr_id) => {
    console.log("job request recevd ");
    let curr_user = jobseekers.find((user) => user.email === Curr_email);

    let nothing = true;

    OUTER: for (let i = 0; i < jobs.length; i++) {
      nothing = true;
      for (let j = 0; j < curr_user.job_types.length; j++) {
        if (jobs[i].job_type === curr_user.job_types[j]) {
          if (
            used.indexOf(jobs[i].job_id) === -1 &&
            curr_user.liked_jobs.indexOf(jobs[i].job_id) === -1 &&
            curr_user.unliked_jobs.indexOf(jobs[i].job_id) === -1
          ) {
            // used.push(jobs[i].job_id);
            // console.log("used: " + used);
            io.to(socket.id).emit("givenjob", {
              company_logo: jobs[i].company_logo,
              job_id: jobs[i].job_id,
              job_title: jobs[i].job_title,
              company: jobs[i].company,
              location: jobs[i].location,
              description: jobs[i].description,
              skills: jobs[i].skills,
              start_date: jobs[i].start_date,
              req_expeirence: jobs[i].req_expeirence,
              salary: jobs[i].salary,
            });
            console.log("A job sent");
            nothing = false;
            break OUTER;
          }
        }
      }
    }

    if (nothing === true) {
      io.to(socket.id).emit("nojobmatches");
      console.log("No jobs sent");
    }
    // console.log(index);
    // index++;
  });

  // Add a new job
  socket.on("addJob", (job) => {
    console.log("NEW JOB ADDED");
    let curr_hiringmanager = hiringmanagers.find(
      (el) => el.email === Curr_email
    );

    console.log("CURR hiring manager" + curr_hiringmanager);

    jobs.push({
      company_logo: curr_hiringmanager.company_logo,
      job_id: generateNewId(jobs),
      hiring_manager_email: Curr_email,
      company: curr_hiringmanager.company_name,
      description: job.description,
      req_expeirence: job.req_expeirence,
      job_title: job.job_title,
      job_type: job.job_type,
      start_date: job.start_date,
      location: job.location,
      skills: job.skills,
      salary: job.salary,
      likes_job_seeker: [],
      unlikes_job_seeker: [],
    });
    // console.log(jobs);
  });

  //
  socket.on("jobseekerchoice", (obj) => {
    console.log("CHOICE is: " + obj.choice);
    if (obj.choice === "like") {
      //
      if (used_seekers.has(obj.type)) {
        used_seekers.get(obj.type).push(obj.email);
        console.log("Added: " + used_seekers.get(obj.type));
      } else {
        used_seekers.set(obj.type, [obj.email]);
        console.log("Created: " + used_seekers.get(obj.type));
      }

      // push liked jobseeker to jobs
      for (let i = 0; i < jobs.length; i++) {
        if (
          jobs[i].hiring_manager_email === Curr_email &&
          jobs[i].job_type === obj.type
        ) {
          jobs[i].likes_job_seeker.push(obj.email);
        }
      }
      console.log("pushed jobseeker to liked");

      //check for match
      const jj_index = jobseekers.findIndex((el) => {
        return el.email === obj.email;
      });

      for (let i = 0; i < jobseekers[jj_index].liked_jobs.length; i++) {
        if (jobseekers[jj_index].liked_jobs[i] === obj.job_id) {
          console.log(
            "Matched " + obj.type + " with " + jobseekers[jj_index].email
          );
          matches.push({
            match_id: generatematchId(),
            job_id: obj.job_id,
            job_seeker_email: jobseekers[jj_index].email,
            hiring_manager_email: Curr_email,
            seeker_name: jobseekers[jj_index].firstname,
            job_type: obj.type,
            messages: [],
          });
        }
      }

      //
    } else if (obj.choice === "unlike") {
      if (used_seekers.has(obj.type)) {
        used_seekers.get(obj.type).push(obj.email);
        console.log("Added: " + used_seekers.get(obj.type));
      } else {
        used_seekers.set(obj.type, [obj.email]);
        console.log("Created: " + used_seekers.get(obj.type));
      }

      //
      for (let i = 0; i < jobs.length; i++) {
        if (
          jobs[i].hiring_manager_email === Curr_email &&
          jobs[i].job_type === obj.type
        ) {
          jobs[i].unlikes_job_seeker.push(obj.email);
        }
      }
    }
    // console.log("Added: " + used_seekers.get(obj.type));
  });

  //
  socket.on("jobseekerrequest", (job_type) => {
    console.log("Job seekers request recvd");
    // console.log(job_type);

    let no_matches = true;

    OUTSIDE: for (let i = 0; i < jobseekers.length; i++) {
      no_matches = true;
      // console.log("i" + i);
      for (let j = 0; j < jobseekers[i].job_types.length; j++) {
        // console.log("j" + j);
        // console.log(jobseekers[i].job_types[j]);
        // console.log(job_type);
        if (jobseekers[i].job_types[j] === job_type) {
          if (used_seekers.has(job_type)) {
            let temparr = used_seekers.get(job_type);
            console.log("array exists");
            console.log("Array is" + temparr);
            if (
              temparr.indexOf(jobseekers[i].email) === -1 &&
              jobseekers[i].liked_jobs.indexOf(Curr_email) === -1 &&
              jobseekers[i].unliked_jobs.indexOf(Curr_email) === -1
            ) {
              io.to(socket.id).emit("givenjobseeker", jobseekers[i]);
              console.log(jobseekers[i]);
              console.log("Job seeker sent");
              no_matches = false;
              break OUTSIDE;
            }
          } else {
            if (
              jobseekers[i].liked_jobs.indexOf(Curr_email) === -1 &&
              jobseekers[i].unliked_jobs.indexOf(Curr_email) === -1
            ) {
              console.log("doesn't exists");
              console.log(job_type);
              console.log(used_seekers.get(job_type));
              io.to(socket.id).emit("givenjobseeker", jobseekers[i]);
              console.log(jobseekers[i]);
              console.log("Job seeker sent");
              no_matches = false;
              break OUTSIDE;
            }
          }
        }
      }

      if (no_matches === true) {
        io.to(socket.id).emit("nojobseekers");
        console.log("No jobseekers sent!");
      }
    }
  });

  socket.on("getpostedjobs", () => {
    let found = false;
    let curr_jobs = [];

    for (let i = 0; i < jobs.length; i++) {
      if (jobs[i].hiring_manager_email === Curr_email) {
        curr_jobs.push(jobs[i]);
        found = true;
      }
    }

    if (found === true) {
      io.to(socket.id).emit("givepostedjobs", curr_jobs);
    } else if (found === false) {
      io.to(socket.id).emit("nopostedjobs");
    }
  });

  socket.on("deleteJob", (id) => {
    // delete from jobs
    for (let i = 0; i < jobs.length; i++) {
      if (jobs[i].job_id === id) {
        console.log("job delete");
        jobs.splice(i, 1);
      }
    }
    // delete from matches
    for (let i = 0; i < matches.length; i++) {
      if (matches[i].job_id === id) {
        console.log("delete matches ");
        matches.splice(i, 1);
      }
    }
  });

  socket.on("getPostings", () => {
    console.log("recvd postings request from explore page");
    let your_postings = [];
    let postings_found = false;
    //
    for (let i = 0; i < jobs.length; i++) {
      if (jobs[i].hiring_manager_email === Curr_email) {
        your_postings.push(jobs[i]);
        postings_found = true;
      }
    }

    //
    if (postings_found === true) {
      io.to(socket.id).emit("Postings", your_postings);
    } else if (postings_found === false) {
      io.to(socket.id).emit("noPostings");
    }
  });

  socket.on("getMatches_HM", () => {
    let your_matches = [];
    let matches_found = false;

    console.log(matches);

    for (let i = 0; i < matches.length; i++) {
      if (matches[i].hiring_manager_email === Curr_email) {
        your_matches.push(matches[i]);
        matches_found = true;
      }
    }

    if (matches_found === true) {
      io.to(socket.id).emit("HMMatches", your_matches);
    } else if (matches_found === false) {
      io.to(socket.id).emit("HMnoMatches");
    }
  });

  socket.on("getMatchesJS", () => {
    let your_matches = [];
    let matches_found = false;

    console.log("JS matches request recvd");

    for (let i = 0; i < matches.length; i++) {
      if (matches[i].job_seeker_email === Curr_email) {
        your_matches.push(matches[i]);
        matches_found = true;
      }
    }

    if (matches_found === true) {
      io.to(socket.id).emit("JSMatches", your_matches);
    } else if (matches_found === false) {
      io.to(socket.id).emit("JSnoMatches");
    }
  });

  socket.on("js_msg", (match) => {
    // Store the message
    console.log("got message");
    STORE: for (let i = 0; i < matches.length; i++) {
      if (matches[i].match_id === match.match_id) {
        matches[i].messages.push({
          content: match.content,
          sender: match.sender,
          reciever: match.reciever,
        });
        // break STORE;
      }
    }

    // Job seeker is the sender
    JS: for (let i = 0; i < jobseekers.length; i++) {
      if (jobseekers[i].email === match.sender) {
        io.to(jobseekers[i].socket_id).emit("msg", {
          match_id: match.match_id,
          message: {
            content: match.content,
            sender: match.sender,
            reciever: match.reciever,
          },
        });
        console.log("sent message");
        break JS;
      }
    }

    // Hiring Manager receving
    HM: for (let i = 0; i < hiringmanagers.length; i++) {
      if (hiringmanagers[i].email === match.reciever) {
        io.to(hiringmanagers[i].socket_id).emit("msg", {
          match_id: match.match_id,
          message: {
            content: match.content,
            sender: match.sender,
            reciever: match.reciever,
          },
        });
        break HM;
      }
    }
  });

  socket.on("hm_msg", (match) => {
    // Store the message
    console.log("got message");
    STORE: for (let i = 0; i < matches.length; i++) {
      if (matches[i].match_id === match.match_id) {
        matches[i].messages.push({
          content: match.content,
          sender: match.sender,
          reciever: match.reciever,
        });
        // break STORE;
      }
    }

    // Job seeker is the sender
    JS: for (let i = 0; i < jobseekers.length; i++) {
      if (jobseekers[i].email === match.reciever) {
        io.to(jobseekers[i].socket_id).emit("msg", {
          match_id: match.match_id,
          message: {
            content: match.content,
            sender: match.sender,
            reciever: match.reciever,
          },
        });
        console.log("sent message");
        break JS;
      }
    }

    // Hiring Manager receving
    HM: for (let i = 0; i < hiringmanagers.length; i++) {
      if (hiringmanagers[i].email === match.sender) {
        io.to(hiringmanagers[i].socket_id).emit("msg", {
          match_id: match.match_id,
          message: {
            content: match.content,
            sender: match.sender,
            reciever: match.reciever,
          },
        });
        break HM;
      }
    }
  });

  // Get the chat history
  socket.on("getChatlog", (match_id) => {
    for (let i = 0; i < matches.length; i++) {
      if (matches[i].match_id === match_id) {
        io.to(socket.id).emit("chatlog", matches[i].messages);
      }
    }
  });

  socket.on("myinfo", () => {
    for (let i = 0; i < jobseekers.length; i++) {
      if (jobseekers[i].email === Curr_email) {
        io.to(socket.id).emit("info", jobseekers[i]);
      }
    }
  });

  socket.on("updateData", (user) => {
    for (let i = 0; i < jobseekers.length; i++) {
      if (jobseekers[i].email === Curr_email) {
        jobseekers[i].firstname = user.firstname;
        jobseekers[i].lastname = user.lastname;
        jobseekers[i].aboutyou = user.aboutyou;
        jobseekers[i].job_types = user.job_types;
        jobseekers[i].skills = user.skills;
        jobseekers[i].work_experience = user.work_experience;
        jobseekers[i].socials = user.socials;
        jobseekers[i].education = user.education;
      }
    }
  });

  // Disconnect
  socket.on("disconnect", () => {
    console.log("A user has disconnected");
    login = false;
  });
});

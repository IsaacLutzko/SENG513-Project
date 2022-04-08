<template>
    <div class="row page-container">
        <div v-if="dropItDown" class="desktop-postings-cont col-lg-3">
            <div class="row d-flex justify-content-center" id="explore-postings-header" style="overflow-y: scroll; overflow-x:hidden;">
                <div class="col-sm-auto">
                    <div class="postings-header">
                        <h4 class="postings-head">Your Postings</h4>
                    </div>

                    <div class="postings-list-cont">
                        <ul v-for="(posting,index) in postings" :key="index" class="postings-list">
                            <li @click="activePosting(index, posting.jobtitle)" :class="{ activePost : active_item == index }" style="list-style:none;">
                                <div class="col-auto d-flex justify-content-left">
                                    <button style="border: 0; background: transparent;">
                                        <h5 class="posting-list-title" style="text-align:left; font-weight: bold; font-size: 1.9vw; font-family: Montserrat, sans-serif; margin-top: 7%; margin-bottom: 7%;">
                                            {{ posting.jobtitle }} </h5>
                                    </button>
                                    <img src="@/assets/right-arrow_large.png" alt="" id="postings-arrow" style="width=30%">
                                </div>
                                <div class="col-auto d-flex justify-content-left">
                                    <p class="posting-job-type">{{posting.jobtype}}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="container col-lg-9">
            <div class="content-container">
                <div class="sticky-top explore-postings-container">
                    <div class="row" id="mobile-postings-row"> <!-- hide after desktop breakpoint -->
                        <div class="back-arrow-container col-1 d-flex justify-content-center">
                            <button @click="dropItDown = !dropItDown" class="back-arr-button">
                                <img class="logo" src="@/assets/left-arrow.png" />
                            </button>
                        </div>
                        <div class="job-title-container col-10">
                            <div v-if="dropItDown" class="job-title">{{activeJob}}</div>
                            <div v-else class="job-title">Job Postings</div>
                        </div>
                        <div class="col-1"></div>
                    </div>
                </div>

                <div v-if="dropItDown" class="card-container">
                    <div v-for="dynoCard in dynoCards" :key="dynoCard">

                        <div class="row d-flex justify-content-center" id="card-img">
                            <div class="col-sm-auto">
                                <div class="profile-image d-flex justify-content-center">
                                    <img class="logo" src="@/assets/user_profile_icon.png" /> <!-- How to make image dynamic? -->
                                </div>
                                <div class="profile-name">{{dynoCard.name}}</div>
                            </div>
                        </div>



                        <!-- <div class="row d-flex justify-content-center" id="socials">

                        </div> -->

                        <div v-for="social in socials" :key="social" class="row d-flex justify-content-center" id="socials">
                            <div v-if="social.linked != ''" class="col-sm-5 d-flex justify-content-center">
                                <img class="social-logo-link" src="@/assets/LinkedInLogo.png"/>
                                <h5 class="social-name-link">{{social.linked}}</h5> 
                            </div>
                            <div v-else class="col-sm-5 d-flex justify-content-center"> 
                            </div>
                            <div v-if="!social || !social.length" class="col-sm-5 d-flex justify-content-center">
                                <img class="social-logo-git" src="@/assets/GitHubLogo.png" />
                                <h5 class="social-name-git">{{social.git}}</h5> 
                            </div>
                            <div v-else class="col-sm-5 d-flex justify-content-center"> 
                            </div>
                        </div>




                        <div class="row d-flex justify-content-center" id="about-me">
                            <div class="col-sm-auto">
                                <div class="about-me-header">
                                    <h5 class="header-about">About Me</h5>
                                </div>
                                <div class="about-me-desc">{{dynoCard.aboutMe}}</div>
                            </div>
                        </div>

                        <div class="row d-flex justify-content-center" id="work-experiences">
                                <div class="experience-header">
                                    <h5 class="experience-head">Experience</h5>
                                </div>
                            <div v-for="workExp in workExps" :key="workExp" class="col-sm-auto">
                                <!-- first work experience example -->
                                <div class="work-example1">
                                    <div class="work-header1">
                                        <h5 class="work-head1">{{workExp.jobTitle}}</h5>
                                    </div>
                                    <div class="work-info">{{workExp.jobInfo}}</div>
                                    <div class="work-exp-desc"> {{workExp.jobDesc}} </div>
                                </div>
                            </div>
                        </div>

                        <div class="row d-flex justify-content-center" id="skills">
                                <div class="skills-header">
                                    <h5 class="skills-head">Skills</h5>
                                </div>
                            <div v-for="skill in skills" :key="skill" class="col-sm-auto">
                                <div class="skill-list">
                                    <label>{{skill.name}}</label>
                                </div>
                            </div>
                        </div>

                        <div class="row d-flex justify-content-center" id="education-top">
                            <div class="col-sm-auto">
                                <div class="edu-header">
                                    <h5 class="edu-head">Education</h5>
                                </div>
                            </div>
                        </div>

                        <div class="row d-flex justify-content-start" id="education-info">
                            <div v-for="education in educations" :key="education" class="col-12">
                                <div class="edu-ex1">
                                    <div class="edu-head1">
                                        <h5 class="edu-head-deg">{{education.degree}}</h5> 
                                    </div>
                                    <div class="edu-info">{{education.years}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div v-else class="open-postings-dropdown d-flex justify-content-center" style="padding: 10px; height: 85%; background: white; display: flex;">
                    <div class="row d-flex justify-content-center" id="explore-postings-header" style="overflow-y: scroll; overflow-x:hidden; padding: 10px; border: 2.5px solid black; border-radius: 15px; width:70%; height: 85%; background: white; display: flex; margin-top: 5%">
                        <div class="col-sm-auto">
                            <div class="postings-header">
                                <h4 class="postings-head" style=" text-align: center; font-weight: bold; font-size: 2.5vw; font-family: Montserrat, sans-serif; padding-top: 5%;padding-bottom: 7%;"></h4>
                            </div>
                            <div class="postings-list-cont">
                                <ul v-for="(posting,index) in postings" :key="index" class="postings-list">
                                    <li @click="activePosting(index,posting.jobtitle)" :class="{ activePost : active_item == index }" style="list-style:none;">
                                        <div class="col-auto d-flex justify-content-left">
                                            <button style="border: 0; background: transparent;">
                                                <h5 class="posting-list-title" style="text-align:left; font-weight: bold; font-size: 100%; font-family: Montserrat, sans-serif; margin-top: 7%; margin-bottom: 7%;">
                                                    {{posting.jobtitle}}</h5>
                                            </button>
                                            <img src="@/assets/right-arrow_large.png" alt="" id="postings-arrow">
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                
            <div class="row">
                <div class="button-bar">
                    <div class="button-container">
                        <button class="buttons-bar"><img class="check-logo" src="@/assets/x_icon.png" /></button>
                        <button class="buttons-bar"><img class="skip-logo" src="@/assets/skip_icon.png" /></button>
                        <button class="buttons-bar"><img class="cross-logo" src="@/assets/check_mark_icon.png" /></button>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            dropItDown: true,
            active_item:0,
            postings:
            [
                {jobtitle: "Backend Dev", jobtype: "Internship"},
                {jobtitle: "Full Stack Dev", jobtype: "Full Time Job"},
                {jobtitle: "DevOps Specialist", jobtype: "New Grad Job"},
                {jobtitle: "Software Engineer", jobtype: "Internship"},
            ],
            activeJob: "",
            dynoCards:
            [
                {
                    name: "Isaac Lutzko",
                    aboutMe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet sagittis orci, ac dignissim nulla tempor eget. Proin varius, diam non pharetra feugiat, libero odio fermentum lacus, eu congue risus odio id elit. Maecenas imperdiet tempor sapien, eu imperdiet dolor. Phasellus turpis sapien, dapibus vehicula ante ac, eleifend porttitor sapien. Maecenas consectetur et nunc non elementum. Donec pharetra nisl pulvinar dolor tincidunt, rhoncus ornare lorem malesuada.",
                }
            ],
            socials: 
            [
                {
                    linked: "",
                    git: "IsaacLutzko"
                }
            ],
            // linkedInValid: true,
            // gitValid: (true),
            workExps:
            [
                {
                    jobTitle: "Test Summer Student",
                    jobInfo: "SMART Technologies - Summer Student - 8 months",
                    jobDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet sagittis orci, ac dignissim nulla tempor eget. Proin varius, diam non pharetra feugiat, libero odio fermentum lacus, eu congue risus odio id elit. Maecenas imperdiet tempor sapien, eu imperdiet dolor. Phasellus turpis sapien, dapibus vehicula ante ac, eleifend porttitor sapien. Maecenas consectetur et nunc non elementum. Donec pharetra nisl pulvinar dolor tincidunt, rhoncus ornare lorem malesuada.",
                },
                {
                    jobTitle: "Test Summer Student",
                    jobInfo: "SMART Technologies - Summer Student - 8 months",
                    jobDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet sagittis orci, ac dignissim nulla tempor eget. Proin varius, diam non pharetra feugiat, libero odio fermentum lacus, eu congue risus odio id elit. Maecenas imperdiet tempor sapien, eu imperdiet dolor. Phasellus turpis sapien, dapibus vehicula ante ac, eleifend porttitor sapien. Maecenas consectetur et nunc non elementum. Donec pharetra nisl pulvinar dolor tincidunt, rhoncus ornare lorem malesuada.",
                }
            ],
            skills:
            [
                {   name: "C++", },
                {   name: "JavaScript" },
                {   name: "Git" },
                {   name: "SQL" },
                {   name: "Python" }
            ],
            educations:
            [
                {
                    degree: "BSc in Computer Science at U of C",
                    years: "2017 - 2023"
                },
                {
                    degree: "BComm in Business at U of C",
                    years: "2017 - 2023"
                }
            ]

        }
    },
    methods: {
        activePosting:function(element, jobVar){
            this.active_item = element;
            this.activeJob = jobVar;
        },

    }
};
</script>


<style scoped>

@media only screen and (min-width: 100px) {
    * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    }
    .desktop-postings-cont {
        display: none;
    }

    #postings-arrow {
        display:none;
        height: 30px;
        width: 30px;
        margin: auto;
    }
    .activePost #postings-arrow{
        display:block;
    }

    .page-container {
    margin: 0;
    padding: 2%;
    width: 100%;
    height: 100vh;
    display: flex;
    background-image: url(@/assets/page_curve.svg);
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: 100%;
    align-items: center;
    
    }
    .container {
    padding: 10px;
    border: 2.5px solid black;
    border-radius: 15px;
    height: 85%;
    background: white;
    }

    .content-container {
    overflow-y: scroll;
    overflow-x:hidden;
    height: 85%;
    padding-left: 10%;
    padding-right: 10%;
    
    }

    .explore-postings-container {
        background: white;
        padding: 2vw;
        border-bottom: black solid 2.5px;
    }
    .back-arrow-container .logo {
        width: 33px;
        height: auto;
    }

    .job-title-container{
        text-align: center;
        font-weight: 800;
    }
    .back-arr-button {
        background: none;
        border: none;
    }
    .job-title {
        font-family: "Montserrat", sans-serif;
        font-weight: bold;
        font-size: 25px;
    }


    .social-logo-link {
        width: 2rem;
        height: auto;
        margin-top: 3%;
        margin-bottom: 7%;
    }
    .social-name-link {
        margin: 0;
        display: flex;
        align-items: center;
        margin-left: 1.2vw; 
        margin-top: 3%;
        margin-bottom: 7%;
    }
    .social-logo-git {
        width: 2rem;
        height: auto;
        margin-top: 3%;
        margin-bottom: 7%;
    }
    .social-name-git {
        margin: 0;
        display: flex;
        align-items: center;
        margin-left: 1.2vw;
         margin-top: 3%;
        margin-bottom: 7%;
    }

    #socials {
        font-family: "Montserrat", sans-serif;
        font-weight: 300;
        font-size: 20px;
        align-items: center;
        margin-top: 3%;
        margin-bottom: 7%;
    }
    #card-img {
        padding-top: 5%;
        margin-bottom: 3%;
    }
    .profile-name {
        text-align: center;
        margin-top: 4%;
        font-family: "Montserrat", sans-serif;
        font-weight: bold;
        font-size: 35px;
    } 

    #about-me {
        text-align: center;
        font-family: "Montserrat", sans-serif;
        margin-bottom: 6vh;
    }
    .header-about {
        font-family: "Montserrat", sans-serif;
        font-weight: bold;
        font-size: 25px; 
    }


    .experience-head {
        text-align: center;
        font-family: "Montserrat", sans-serif;
        font-weight: bold;
        font-size: 25px; 
        margin-bottom: 0.5vh;
    }
    .work-example1{
        font-family: "Montserrat", sans-serif;
        margin-top: 3vh;
    }
    .work-head1 {
        font-weight: bold;
        font-size: 19px; 
        margin-bottom: 2vh;
    }
    .work-info {
        margin-bottom: 0.4vh;
        font-size: 17px;
        color: darkgrey;
    }

    .skills-header {
        text-align: center;
        font-family: "Montserrat", sans-serif;
        margin-top: 6.5vh;
        margin-bottom: 1.5vh;
    }
    .skills-head {
        font-size: 25px;
        font-weight: bold;
    }
     .skill-list label {
    font-family: "Montserrat", sans-serif;
    font-size: 15px;
    margin: 5px;
    padding: 5px;
    padding-left: 15px;
    padding-right: 15px;
    border-radius: 8px;
    font-weight: bold;
    border: 2px solid #fe6b00;
    }
    .skill-list {
        text-align: center;
        margin-bottom: 6vh;
    }
    
    .edu-head {
        text-align: center;
        font-weight: bold;
        font-size: 25px; 
        font-family: "Montserrat", sans-serif;
    }
    .edu-ex1 {
        margin-top: 2.2vh;
    }
    .edu-head-deg {
        font-weight: bold;
        font-family: "Montserrat", sans-serif;
        font-size: 19px; 
        margin-bottom: 1vh;
    }
    .edu-info {
        font-family: "Montserrat", sans-serif;
        font-size: 17px; 
        color: darkgrey;
    }



    .button-bar {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    }
    .button-bar img {
    padding: 10px;
    width: 95px;
    height: auto;
    }
    .buttons-bar {
        border: 0;
        background: transparent;
    }

}

@media only screen and (min-width: 992px) {
    .desktop-postings-cont {
        padding: 10px;
        border: 2.5px solid black;
        border-radius: 15px;
        height: 85%;
        background: white;
        border-top-right-radius: 0%;
        border-bottom-right-radius: 0%;
        display: flex;
    }
    .container {
    border-top-left-radius: 0%;
    border-bottom-left-radius: 0%
    }

    .postings-head {
        text-align: center;
        font-weight: bold;
        font-size: 2.5vw; 
        font-family: "Montserrat", sans-serif;
        padding-top: 5%;
        padding-bottom: 7%;
    }
    .posting-list-title {
        font-weight: bold;
        font-size: 1.9vw; 
        font-family: "Montserrat", sans-serif;
        margin:0;
    }
    .posting-job-type {
        font-family: "Montserrat", sans-serif;
        font-size: 12px;
        color: grey;
    }
    #posting-selected {
        display: flex;
        align-items: center;
    }
    button {
        border: none;
        background: transparent;
    }
    .postings-list li {
        list-style-position: inside;
        border-top: 1px solid lightgrey;
        border-bottom: 1px solid lightgrey;
    }
    
}

@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");

</style>
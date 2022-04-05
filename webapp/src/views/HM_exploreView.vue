<template>
    <div class="page-container">
        <div class="container">
            <div class="content-container">
            <!-- <div class="row job-title-container"> -->

                <div class="sticky-top explore-postings-container">
                    <div class="row" id="mobile-postings-row"> <!-- hide after desktop breakpoint -->
                        <div class="back-arrow-container col-sm-1">
                            <button class="back-arr-button"><img class="logo" src="@/assets/left-arrow.png" /></button>
                        </div>
                        <div class="job-title-container col-sm-10">
                            <div class="job-title">Full-Stack Developer</div>
                        </div>
                        <div class="col-sm-1"></div>
                    </div>


                    <div class="row d-flex justify-content-center" id="desktop-postings-row"> <!-- hide before desktop breakpoint -->
                        
                    </div>
                        

                </div>
                <!-- </div> -->

                
                <div class="card-container">

                    <div class="row d-flex justify-content-center" id="card-img">
                        <div class="col-sm-auto">
                            <div class="profile-image">
                                <img class="logo" src="@/assets/user_profile_icon.png" />
                            </div>
                            <div class="profile-name">Isaac Lutzko</div>
                        </div>
                    </div>
                    <div class="row d-flex justify-content-center" id="socials">
                        <div class="col-sm-auto">
                            <img class="social-logo" src="@/assets/LinkedInLogo.png" /> Isaac-Lutzko
                        </div>
                        <div class="col-sm-auto">
                            <img class="social-logo" src="@/assets/GitHubLogo.png" /> IsaacLutzko
                        </div>
                    </div>

                    <div class="row d-flex justify-content-center" id="about-me">
                        <div class="col-sm-auto">
                            <div class="about-me-header">
                                <h5 class="header-about">About Me</h5>
                            </div>
                            <div class="about-me-desc">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet sagittis orci, ac dignissim nulla tempor eget. Proin varius, diam non pharetra feugiat, libero odio fermentum lacus, eu congue risus odio id elit. Maecenas imperdiet tempor sapien, eu imperdiet dolor. Phasellus turpis sapien, dapibus vehicula ante ac, eleifend porttitor sapien. Maecenas consectetur et nunc non elementum. Donec pharetra nisl pulvinar dolor tincidunt, rhoncus ornare lorem malesuada.
                            </div>
                        </div>
                    </div>

                    <div class="row d-flex justify-content-center" id="work-experiences">
                        <div class="col-sm-auto">
                            <div class="experience-header">
                                <h5 class="experience-head">Experience</h5>
                            </div>
                            <!-- first work experience example -->
                            <div class="work-example1">
                                <div class="work-header1">
                                    <h5 class="work-head1">Test Summer Student</h5>
                                </div>
                                <div class="work-info">SMART Technologies - Summer Student - 8 months</div>
                                <div class="work-exp-desc">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet sagittis orci, ac dignissim nulla tempor eget. Proin varius, diam non pharetra feugiat, libero odio fermentum lacus, eu congue risus odio id elit. Maecenas imperdiet tempor sapien, eu imperdiet dolor. Phasellus turpis sapien, dapibus vehicula ante ac, eleifend porttitor sapien. Maecenas consectetur et nunc non elementum. Donec pharetra nisl pulvinar dolor tincidunt, rhoncus ornare lorem malesuada.
                                </div>
                            </div>

                            <div class="work-example1">
                                <div class="work-header1">
                                    <h5 class="work-head1">Test Summer Student</h5>
                                </div>
                                <div class="work-info">SMART Technologies - Summer Student - 8 months</div>
                                <div class="work-exp-desc">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet sagittis orci, ac dignissim nulla tempor eget. Proin varius, diam non pharetra feugiat, libero odio fermentum lacus, eu congue risus odio id elit. Maecenas imperdiet tempor sapien, eu imperdiet dolor. Phasellus turpis sapien, dapibus vehicula ante ac, eleifend porttitor sapien. Maecenas consectetur et nunc non elementum. Donec pharetra nisl pulvinar dolor tincidunt, rhoncus ornare lorem malesuada.
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div class="row d-flex justify-content-center" id="skills">
                        <div class="col-sm-auto">
                            <div class="skills-header">
                                <h5 class="skills-head">Skills</h5>
                            </div>
                            <div class="skill-list">
                                <label>C++</label>
                                <label>SQL</label>
                                <label>Git</label>
                                <label>Python</label>
                                <label>JavaScript</label>
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
                        <div class="col-sm-auto">
                            <div class="edu-ex1">
                                <div class="edu-head1">
                                    <h5 class="work-head1">Bachelor of Science in Computer Science</h5> 
                                </div>
                                <div class="work-info">2017-2023</div>
                            </div>
                        </div>
                    </div>


                    

                </div>
            
            </div>
            
                
            <div class="row">
                <div class="button-bar">
                    <div class="button-container">
                        <img class="check-logo" src="@/assets/x_icon.png" />
                        <img class="skip-logo" src="@/assets/skip_icon.png" />
                        <img class="cross-logo" src="@/assets/check_mark_icon.png" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.page-container {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  /* border: solid 5px red; */
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
  /* margin-top: 300px; * just for adding space at top to start */
  /* margin-bottom: 135px; */

}

.content-container {
  /* min-height: 100px; */
  overflow-y: scroll;
  overflow-x:hidden;
  height: 85%;
}

.explore-postings-container {
    background: white;
    padding: 2vw;
}
.back-arrow-container .logo {
    width: 3.5vw;
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
}







#socials .social-logo {
    width: 3.5vw;
    height: auto;
}
.profile-name {
    text-align: center;
} 

#about-me {
    text-align: center;
}

.experience-header {
    text-align: center;
}
.skills-header {
    text-align: center;
}
.edu-header {
    text-align: center;
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



@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");

</style>
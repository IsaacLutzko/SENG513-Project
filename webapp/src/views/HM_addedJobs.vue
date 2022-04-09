<template>
    <div class="row page-container">
        <div class="container col-lg-12">
            <div class="content-container">
                
                <div class="sticky-top explore-postings-container">
                    <div class="row" id="header-and-add">
                        <div class="posted-jobs-header col-11 d-flex justify-content-center">
                            Posted Jobs
                        </div>
                        <div class="posted-jobs-add col-1">
                            <button @click="addJob"><img class="add-job-logo" src="@/assets/add_item_icon.png" /></button>
                        </div>
                    </div>
                </div>

                <div v-for="(postedJob,index) in postedJobs" :key="index" class="job-container">
                
                    <div class="row job-top">
                        <div class="job-cont-top col-11">
                            <h3>{{postedJob.title}}</h3>
                            <h5>{{postedJob.location}}</h5>
                        </div>
                        <div class="job-cont-delete col-1 d-flex justify-content-center">
                            <button @click="deleteJob(index)"><img class="add-job-logo" src="@/assets/black_cross.png" /></button>
                        </div>
                    </div>

                    <div class="row job-info">
                        <div class="job-cont-desc col-9">
                            <h5>Job Description</h5>
                            <p>{{postedJob.description}}</p>
                        </div>
                        <div class="job-cont-exp col-3">
                            <h5>Experience Required</h5>
                            <div v-for="experience in postedJob.experiences" :key="experience" >
                                <ul>
                                    <li>{{experience.type}}</li>
                                </ul>
                            </div>
                        </div>
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
            postedJobs: [
                {
                    title: "Junior Full Stack Developer",
                    location: "Palo Ato, California",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet sagittis orci, ac dignissim nulla tempor eget. Proin varius, diam non pharetra feugiat, libero odio fermentum lacus, eu congue risus odio id elit. Maecenas imperdiet tempor sapien, eu imperdiet dolor. Phasellus turpis sapien, dapibus vehicula ante ac, eleifend porttitor sapien. Maecenas consectetur et nunc non elementum. Donec pharetra nisl pulvinar dolor tincidunt, rhoncus ornare lorem malesuada.",
                    experiences: [
                        { type: "2+ Years in relevant field" },
                        { type: "10+ Years in irrelevant field" }
                    ]
                },
                {
                    title: "Software Engineer",
                    location: "Montreal, Quebec",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet sagittis orci, ac dignissim nulla tempor eget. Proin varius, diam non pharetra feugiat, libero odio fermentum lacus, eu congue risus odio id elit. Maecenas imperdiet tempor sapien, eu imperdiet dolor. Phasellus turpis sapien, dapibus vehicula ante ac, eleifend porttitor sapien. Maecenas consectetur et nunc non elementum. Donec pharetra nisl pulvinar dolor tincidunt, rhoncus ornare lorem malesuada.",
                    experiences: [
                        { type: "5+ Years with SQL" },
                        { type: "10+ Years in irrelevant field" }
                    ]
                },
                {
                    title: "Full Stack Developer",
                    location: "Calgary, Alberta",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet sagittis orci, ac dignissim nulla tempor eget. Proin varius, diam non pharetra feugiat, libero odio fermentum lacus, eu congue risus odio id elit. Maecenas imperdiet tempor sapien, eu imperdiet dolor. Phasellus turpis sapien, dapibus vehicula ante ac, eleifend porttitor sapien. Maecenas consectetur et nunc non elementum. Donec pharetra nisl pulvinar dolor tincidunt, rhoncus ornare lorem malesuada.",
                    experiences: [
                        { type: "2+ Years JavaScript" },
                        { type: "10+ Years in irrelevant field" }
                    ]
                },
                {
                    title: "Full Stack Developer",
                    location: "Calgary, Alberta",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet sagittis orci, ac dignissim nulla tempor eget. Proin varius, diam non pharetra feugiat, libero odio fermentum lacus, eu congue risus odio id elit. Maecenas imperdiet tempor sapien, eu imperdiet dolor. Phasellus turpis sapien, dapibus vehicula ante ac, eleifend porttitor sapien. Maecenas consectetur et nunc non elementum. Donec pharetra nisl pulvinar dolor tincidunt, rhoncus ornare lorem malesuada.",
                    experiences: [
                        { type: "2+ Years JavaScript" },
                        { type: "10+ Years in irrelevant field" }
                    ]
                },
                {
                    title: "Full Stack Developer",
                    location: "Calgary, Alberta",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet sagittis orci, ac dignissim nulla tempor eget. Proin varius, diam non pharetra feugiat, libero odio fermentum lacus, eu congue risus odio id elit. Maecenas imperdiet tempor sapien, eu imperdiet dolor. Phasellus turpis sapien, dapibus vehicula ante ac, eleifend porttitor sapien. Maecenas consectetur et nunc non elementum. Donec pharetra nisl pulvinar dolor tincidunt, rhoncus ornare lorem malesuada.",
                    experiences: [
                        { type: "2+ Years JavaScript" },
                        { type: "10+ Years in irrelevant field" }
                    ]
                },
                {
                    title: "Full Stack Developer",
                    location: "Calgary, Alberta",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet sagittis orci, ac dignissim nulla tempor eget. Proin varius, diam non pharetra feugiat, libero odio fermentum lacus, eu congue risus odio id elit. Maecenas imperdiet tempor sapien, eu imperdiet dolor. Phasellus turpis sapien, dapibus vehicula ante ac, eleifend porttitor sapien. Maecenas consectetur et nunc non elementum. Donec pharetra nisl pulvinar dolor tincidunt, rhoncus ornare lorem malesuada.",
                    experiences: [
                        { type: "2+ Years JavaScript" },
                        { type: "10+ Years in irrelevant field" }
                    ]
                },
            ]
            
        }
    },
    methods: {
        deleteJob:function(index){
            this.postedJobs.splice(index,1)
        },
        addJob:function(){
            // this.$router.push({ path: "/addjob", replace: true });
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

    button {
        border: 0;
        background: transparent;
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
    .job-container {
        padding: 10px;
        border: 2.5px solid black;
        border-radius: 15px;
        margin-top: 4%;
        font-family: "Montserrat", sans-serif;
    }
    .job-top {
        padding: 1%;
        margin-bottom: 1%;
    }
    .job-top h3 {
        font-weight: bold;
        font-size: 27px;
    }

    .add-job-logo {
        height: 40px;
        width: 40px;
    }

    .job-info {
        padding: 1%;
    }

    .job-cont-desc {
        padding-right: 3%;
    }
    .job-cont-desc h5 {
        font-weight: bold;
        font-size: 18px;
    }

    .job-cont-exp h5 {
        font-weight: bold;
        font-size: 18px;
    }

    .content-container {
    overflow-y: scroll;
    overflow-x:hidden;
    height: 85%;
    padding-left: 2%;
    padding-right: 2%;
    
    }

    .explore-postings-container {
        background: white;
        padding: 2vw;
    }

    .posted-jobs-header{
        text-align: center;
        font-weight: 800;
        font-family: "Montserrat", sans-serif;
        font-size: 37px;
    }

}

@media only screen and (min-width: 992px) {
    button {
        border: none;
        background: transparent;
    }
    
}

@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap");

</style>
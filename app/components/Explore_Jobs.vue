<template>
    <!-- <Label text="Explore_Jobs" /> -->
    <StackLayout height="1000">
        <ListView for="job in this.jobData.data" height="1000">
            <v-template>
                <GridLayout rows="auto, *, *, *" class="listItem">
                    <Image row="0" :src="job.images[0].path" style="border-radius:10;"/>
                    <Label row="0" :text="job.post[0].job_post_title" textWrap="true" verticalAlignment="bottom" class="imageText"/>
                    <Label row="1" :text="parseDate(job.post[0].posted_date)" horizontalAlignment="right"/>
                    <StackLayout row="2" orientation="horizontal" horizontalAlignment="left">
                        <Image :src="job.post[0].company_image" height="30"/>
                        <Label :text="job.post[0].company_name"/>
                    </StackLayout>
                    <StackLayout row="2" orientation="horizontal" horizontalAlignment="right">
                        <Label text.decode="&#xf041;" height="30"/>
                        <Label text="West Lafayette, IN"/>
                    </StackLayout>
                </GridLayout>
            </v-template>
        </ListView>
    </StackLayout>
</template>

<script>
    import jobPosts from '../test/explore/job_posts.json';
    export default {
        computed: {

        },
        methods:{
            parseDate(dateString){
                var mydate = new Date(dateString);
                return mydate.toDateString();
            }
        },
        data(){
            return{
                jobData: jobPosts
            };
        }
    };
</script>

<style scoped lang="scss">
.listItem{
    margin: 10;
}

.imageText{
    color: white;
    font-weight: bold;
}
</style>

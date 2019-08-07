<template>
    <StackLayout height="1000">
        <ListView for="experience in this.experiences.data" height="1000">
            <v-template>
                <GridLayout rows="auto, *, *, *" class="listItem">
                    <Image row="0" :src="getMainImage(experience)" style="border-radius:10;"/>
                    <GridLayout rows="*, *" row="0" verticalAlignment="bottom" class="imageText">
                        <Label row="0" :text="getTitle(experience)" textWrap="true"/>
                        <Label row="1" :text="something"/>
                    </GridLayout>
                    <Label row="1" :text="parseDate(experience.created_at)" horizontalAlignment="right" style="font-size:15"/>
                    <StackLayout row="2" orientation="horizontal" horizontalAlignment="left">
                        <Image :src="getPosterImage(experience)" height="30"/>
                        <Label :text="getName(experience)"/>
                    </StackLayout>
                    <StackLayout row="2" orientation="horizontal" horizontalAlignment="right">
                        <Label text.decode="&#xf041;" height="30"/>
                        <Label :text="experience.number_of_likes"/>
                    </StackLayout>
                </GridLayout>
            </v-template>
        </ListView>
    </StackLayout>
</template>

<script>
    import experiences from '../test/all_feeds/experiences.json';
    export default {
        computed: {

        },
        methods:{
            getMainImage(experience){
                return experience.images[0].path;
            },
            getPosterImage(experience){
                if(experience.post_type == 0 || experience.post_type == 1){
                    return experience.post[0].user_image;
                }
                else if(experience.post_type == 3 || experience.post_type == 4){
                    return experience.post[0].company_image;
                }
            },
            parseDate(dateString){
                var mydate = new Date(dateString);
                return mydate.toDateString();
            },
            getName(experience){
                if(experience.post_type == 0 || experience.post_type == 1){
                    return (experience.post[0].first_name + ' ' + experience.post[0].last_name);
                }
                else if(experience.post_type == 3 || experience.post_type == 4){
                    return experience.post[0].company_name;
                }
            },
            getTitle(experience){
                if(experience.post_type == 0){
                    return experience.post[0].job_experience_title;
                }
                else if(experience.post_type == 1){
                    return experience.post[0].user_achievement_title;
                }
                else if(experience.post_type == 3){
                    return experience.post[0].company_achievement_title;
                }
                else if(experience.post_type == 4){
                    return experience.post[0].company_highlight_title;
                }
            }
        },
        data(){
            return{
                experiences:  experiences
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
    font-size: 25;
}
</style>

<template>
    <StackLayout height="1000">
        <ListView for="question in this.questions.data" height="1000">
            <v-template>
                <GridLayout rows="auto, *, *, *" class="listItem">
                    <Image row="0" :src="question.images" style="border-radius:10;"/>
                    <GridLayout rows="*, *" row="0" verticalAlignment="bottom" class="imageText">
                        <Label row="0" :text="question.post[0].question_title" textWrap="true"/>
                        <Label row="1" :text="topicType(question.post_type)"/>
                    </GridLayout>
                    <Label row="1" :text="parseDate(question.updated_at)" horizontalAlignment="right" style="font-size:15"/>
                    <StackLayout row="2" orientation="horizontal" horizontalAlignment="left">
                        <Image :src="question.post[0].user_image" height="30"/>
                        <Label :text="question.post[0].first_name+' '+question.post[0].last_name"/>
                    </StackLayout>
                    <StackLayout row="2" orientation="horizontal" horizontalAlignment="right">
                        <Label text.decode="&#xf041;" height="30"/>
                        <Label :text="question.number_of_answers"/>
                    </StackLayout>
                </GridLayout>
            </v-template>
        </ListView>
    </StackLayout>
</template>

<script>
    import questions from '../test/all_feeds/questions.json';
    import topics from '../test/static/topic.json';
    export default {
        computed: {

        },
        methods:{
            topicType(id){
                var arr = topics.data;
                for(var i = 0; i < arr.length; i++){
                    if(arr[i].topic_id == id){
                        return arr[i].topic_name;
                    }
                }
            },
            parseDate(dateString){
                var mydate = new Date(dateString);
                return mydate.toDateString();
            }
        },
        data(){
            return{
                questions: questions,
                topics: topics
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

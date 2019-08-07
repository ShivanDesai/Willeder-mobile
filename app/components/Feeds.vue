<template>
    <GridLayout rows="50, *" columns="*, *, *"  width="100%" height="100%" backgroundColor="white" >
        <Button text="AllFeeds" row="0" col="0" @tap="currentComponent = 'AllFeeds'" :class="topButtonClasses('AllFeeds')"/>
        <Button text="Experiences" row="0" col="1" @tap="currentComponent = 'Experiences'" :class="topButtonClasses('Experiences')"/>
        <Button text="Community" row="0" col="2" @tap="currentComponent = 'Community'" :class="topButtonClasses('Community')"/>
        <component
            v-for="component in componentsArray"
            v-show="component === currentComponent"
            :is="component"
            row="1"
            col="0"
            colSpan="3"
        />
    </GridLayout>
</template>

<script>
    import AllFeeds from './AllFeeds';
    import Experiences from './Experiences';
    import Community from './Community';
    export default {
        data() {
            return {
                currentComponent: 'AllFeeds',
                componentsArray: ['AllFeeds','Experiences', 'Community'],
            };
        },
        computed: {
            topButtonClasses(){
                return component => ({
                    actionBarButton: true,
                    selected: component === this.currentComponent
                });
            }
        },
        methods:{

        },
        components: {
            AllFeeds,
            Experiences,
            Community
        }
    };
</script>

<style scoped lang="scss">

.actionBarButton{
    color: black;
    font-weight: bold;
    background-color: white;
    font-size: 15;
}

.selected{
    font-size: 20;
}

</style>

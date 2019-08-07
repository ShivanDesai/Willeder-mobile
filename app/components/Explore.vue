<template>
    <GridLayout rows="50, *" columns="*, *"  width="100%" height="100%" backgroundColor="white" >
        <Button text="Companies" row="0" col="0" @tap="currentComponent = 'Companies'" :class="topButtonClasses('Companies')"/>
        <Button text="Jobs" row="0" col="1" @tap="currentComponent = 'Jobs'" :class="topButtonClasses('Jobs')"/>
        <component
            v-for="component in componentsArray"
            v-show="component === currentComponent"
            :is="component"
            row="1"
            col="0"
            colSpan="2"
        />
    </GridLayout>
</template>

<script>
    import Companies from "../Components/Explore_Companies";
    import Jobs from "../Components/Explore_Jobs";
    export default {
        data() {
            return {
                currentComponent: 'Companies',
                componentsArray: ['Companies','Jobs'],
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
            Companies,
            Jobs
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

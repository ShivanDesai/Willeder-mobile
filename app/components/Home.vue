<template>
    <Page class="page">
        <ActionBar class="my-action-bar">
            <!-- <Button @tap="currentComponent = 'Feeds'"
                text.decode="&#xf015;" class="fa"/> -->
             <Label class="action-bar-title" :text="currentComponent"></Label>
        </ActionBar>


        <GridLayout rows="*, auto" columns="*, *, *, *, *" @swipe="onSwipe">
            <!-- main components all on top of each other, since only 1 will be visible at any given time -->
            <component
                v-for="component in componentsArray"
                v-show="component === currentComponent"
                :is="component"
                row="0"
                col="0"
                colSpan="5"
            />

            <!-- Bottom navigation -->
            <Button @tap="currentComponent = 'Feeds'"
                text.decode="&#xf015;" :class="navigationButtonClasses('Feeds')" row="1" col="0" />
            <Button @tap="currentComponent = 'Explore'"
                text.decode="&#xf002;" :class="navigationButtonClasses('Explore')" row="1" col="1" />
            <Button  @tap="currentComponent = 'Applications'"
                text.decode="&#xf055;" :class="navigationButtonClasses('Applications')" row="1" col="2" />
            <Button @tap="currentComponent = 'Notifications'"
                text.decode="&#xf0f3;" :class="navigationButtonClasses('Notifications')" row="1" col="3" />
            <Button @tap="currentComponent = 'User'"
                text.decode="&#xf007;" :class="navigationButtonClasses('User')" row="1" col="4" />
        </GridLayout>

    </Page>
</template>

<script>
    import Feeds from "../components/Feeds";
    import Explore from "../components/Explore";
    import Applications from "../components/Applications";
    import Notifications from "../components/Notifications";
    import User from "../components/User";
    const SwipeDirection = require("tns-core-modules/ui/gestures").SwipeDirection;
    export default {
        data() {
            return {
                currentComponent: 'Feeds',
                componentsArray: ['Feeds', 'Explore', 'Applications', 'Notifications', 'User'],
            };
        },
        computed: {
            navigationButtonClasses() {
                return component => ({
                    fa: true,
                    selected: component === this.currentComponent
                });
            }
        },
        methods:{
            onSwipe(args){
                var i = this.componentsArray.indexOf(this.currentComponent);
                if(args.direction == SwipeDirection.left){
                    if(i != 4){
                        this.currentComponent = this.componentsArray[i+1];
                        console.log("left" + args);
                    }
                }
                else if (args.direction == SwipeDirection.right) {
                    if(i != 0){
                        this.currentComponent = this.componentsArray[i-1];
                        console.log("right");
                    }
                }
            }
        },
        components: {
            Feeds,
            Explore,
            Applications,
            Notifications,
            User
        }
    };
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '../app-variables';
    // End custom common variables

    // Custom styles
    .fa {
        color: black;
        font-size: 30;
        background-color: white;
    }

    .info {
        font-size: 20;
    }

    .selected{
        font-size: 50;
        border-radius: 20;
    }

</style>

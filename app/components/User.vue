<template>
    <GridLayout rows="*" height="2500">

            <RadSideDrawer ref="drawer" backgroundColor="white" shadowColor="white" drawerContentSize=325>

                <StackLayout ~drawerContent backgroundColor="white" shadowColor="white">
                    <ScrollView scrollBarIndicatorVisible="false">
                        <StackLayout>
                            <GridLayout rows="*, *" columns="*, *, *" height=150 style="text-align: center; vertical-align: center;">
                                <Image :src="this.userData.data.user_image" rowSpan="2" row="0" col="0" />
                                <Label :text="this.userData.data.first_name + ' ' + this.userData.data.last_name" row="0" col="1" colSpan="2" style="padding-top: 10"/>
                                <Label text="Here comes the user location!" row="1" col="1" colSpan="2"/>
                            </GridLayout>

                            <Label text="My Career Interests" class="drawerTitle"/>
                            <StackLayout class="hr-light m-10"></StackLayout>
                            <Label text="What is my career interest?" class="drawerQuestion"/>
                            <Label :text="this.userData.data.interest_what" class="drawerAnswer" textWrap="true"/>

                            <Label text="What inspired me?" class="drawerQuestion"/>
                            <Label :text="this.userData.data.interest_why" class="drawerAnswer" textWrap="true"/>

                            <Label text="My Vision" class="drawerTitle"/>
                            <StackLayout class="hr-light m-10"></StackLayout>
                            <Label text="What is my vision?" class="drawerQuestion"/>
                            <Label :text="this.userData.data.vision_what" class="drawerAnswer" textWrap="true"/>

                            <Label text="Why do I strongly believe in it?" class="drawerQuestion"/>
                            <Label :text="this.userData.data.vision_why" class="drawerAnswer" textWrap="true"/>

                            <Label text="My Hobbies" class="drawerTitle"/>
                            <StackLayout class="hr-light m-10"></StackLayout>
                            <Label :text="this.userData.data.hobby1_what + ' - ' + this.userData.data.hobby1_description" class="drawerAnswer" textWrap="true"/>
                            <Label :text="this.userData.data.hobby2_what + ' - ' + this.userData.data.hobby2_description" class="drawerAnswer" textWrap="true"/>
                            <Label :text="this.userData.data.hobby3_what + ' - ' + this.userData.data.hobby3_description" class="drawerAnswer" textWrap="true"/>

                            <Label text="Close" color="red" padding="10" style="horizontal-align: center"
                                @tap="onCloseDrawerTap" />
                        </StackLayout>
                    </ScrollView>
                </StackLayout>

                <StackLayout ~mainContent>
                    <Label text="mainContentTmainContentTextmainContentTextmainContentTextmainContentTextmainContentTextext" textWrap="true" fontSize="13"
                        padding="10" />
                    <Button text="Open Drawer" @tap="onOpenDrawerTap" margin="10"
                        style="horizontal-align: left" />
                </StackLayout>

            </RadSideDrawer>

        </GridLayout>
</template>

<script>
    import Vue from "nativescript-vue";
    import RadSideDrawer from "nativescript-ui-sidedrawer/vue";
    Vue.use(RadSideDrawer);
    import uData from "../test/user.json";
    export default {
        computed: {

        },
        methods:{
            onOpenDrawerTap() {
                this.$refs.drawer.nativeView.showDrawer();
                console.log("=========="+this.userData.success);
            },
            onCloseDrawerTap() {
                this.$refs.drawer.nativeView.closeDrawer();
            }
        },
        data(){
            return{
                userData:   uData
            };
        }
    };
</script>

<style scoped lang="scss">
    .home-panel {
        vertical-align: center;
        font-size: 20;
        margin: 15;
    }

    .description-label {
        margin-bottom: 15;
    }

    .drawerTitle{
        font-size: 17px;
        font-weight: bold;
        margin-top: 100px;
        margin-left: 40px;
    }

    .drawerQuestion{
        font-size: 15px;
        color: #2e58f0;
        font-weight: bold;
        margin-top: 40px;
        margin-left: 40px;
    }

    .drawerAnswer{
        font-size: 14px;
        margin-top: 10px;
        margin-left: 40px;
    }
</style>

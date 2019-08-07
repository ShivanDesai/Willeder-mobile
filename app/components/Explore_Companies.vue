<template>
    <!-- <Label text="ssqqwsqwdwqdw" @tap="onTap"/> -->
    <StackLayout height="1000">
        <ListView for="company in this.cData.data" height="1000">
            <v-template>
                <GridLayout rows="auto, *, *" class="listItem">
                    <Image row="0" :src="company.company_image" style="border-radius:10;"/>
                    <GridLayout rows="*, *" row="0" verticalAlignment="bottom" class="imageText">
                        <Label row="0" :text="company.brand_what" textWrap="true"/>
                        <Label row="1" :text="employeeRange(company.company_size_id)"/>
                    </GridLayout>
                    <StackLayout row="1" orientation="horizontal" horizontalAlignment="left">
                        <Image :src="company.brand_image" height="30"/>
                        <Label :text="company.company_name"/>
                    </StackLayout>
                    <StackLayout row="1" orientation="horizontal" horizontalAlignment="right">
                        <Label text.decode="&#xf041;" height="30"/>
                        <Label text="West Lafayette, IN"/>
                    </StackLayout>
                </GridLayout>
            </v-template>
        </ListView>
    </StackLayout>

</template>

<script>
    import compData from '../test/explore/explore_companies.json';
    import compSize from '../test/static/company_size.json';

    export default {
        computed: {

        },
        methods:{
            // onTap(){
            //     this.$navigateTo(Applications);
            //     console.log("modal pressed");
            // }

            employeeRange(id){
                for(var i = 0; i < compSize.data.length; i++){
                    if(compSize.data[i].company_size_id == id){
                        return (compSize.data[i].company_size_name + ' employees');
                    }
                }
            }

        },
        data(){
            return{
                cData:  compData,
                compSize: compSize
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

<template>
    <div class="search">
        <input @input="onFilterBy" type="text" v-model="filterBy.term" placeholder="Search"/>
    </div>
</template>

<script>
export default {
    data() {
        return {
            filterBy: { term : ""}
        }
    },
    methods: {
        onFilterBy(){
            this.$emit('filter', this.filterBy)
        }
    },
    created() {
    },
    components: {
    }
}
</script>

<style lang='scss' scoped>

input {
    padding: 10px 16px;
    border-radius: 8px;
    background-color: rgb(186, 244, 255);
}

</style>
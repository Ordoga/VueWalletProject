<template>
    <section>
        <input @input="onFilterBy" type="text" v-model="filterBy.term" placeholder="Search"/>
    </section>
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

</style>
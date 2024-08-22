<template>
    <div class="header">
        <div class="logo">Mister Bitcoin</div>
        <div class="nav">
            <div>Home</div>
            <div>Contacts</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
    },
    created() {
    },
    components: {
    }
}
</script>

<style lang="scss" scoped>

.header{
    justify-self: flex-start;
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100vw;
    height: 3rem;

    padding-right: 1.2rem;
    padding-left: 1.2rem;
    
    box-sizing: border-box;

    background-color: rgb(13, 113, 160);
    color: white;

    .logo{
        justify-self: flex-start;
    }

    .nav{
        justify-self: flex-end;
        display: flex;
        gap: 1rem;


    }
}
</style>
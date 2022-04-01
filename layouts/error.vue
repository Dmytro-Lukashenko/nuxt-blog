<template>
    <div class="error-page">
        <h1>Oops, something went wrong!</h1>
        <p>{{error.statusCode}}</p>
        <p>{{error.message}}</p>
        <p>Back to <a href="/">safety</a></p>
    </div>
</template>

<script>
export default {
    props: {
        error: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.error-page{
    text-align:center;
}
.error-page a{
    text-decoration: none;
    color: red;
}
</style>
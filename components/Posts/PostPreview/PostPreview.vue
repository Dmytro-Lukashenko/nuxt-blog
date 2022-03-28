<template>
    <nuxt-link :to="'/posts/' + id" class="post-preview">
        <article>
            <div 
                class="post-thumbnail" 
                :style="{backgroundImage:'url(' + thumbnail + ')'}"></div>
            <div class="post-content">
            <h1>{{ title }}</h1>
            <p>{{ previewText }}</p>
            </div>
        </article>
    </nuxt-link>
</template>

<script>
export default {
    name:'PostPreview',
    props: {
        id: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        previewText: {
            type: String,
            required: true
        },
        thumbnail: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="sass" scoped>
    @import 'PostPreview.scss'
</style>
<template>
    <nuxt-link :to="postLink" class="post-preview">
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
        isAdmin: {
            type:Boolean,
            required:false,
            default:false
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
    },
    computed: {
        postLink() {            
            return this.isAdmin ? '/admin/' + this.id : '/posts/' + this.id
        }
    }
}
</script>

<style lang="sass" scoped>
    @import 'PostPreview.scss'
</style>
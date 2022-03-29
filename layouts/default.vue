<template>
    <div>
        <the-header @sidenavToggle="displaySidenav =!displaySidenav" />
        <the-sidenav
            :show="displaySidenav"
            @close="displaySidenav = false"
        />
        <nuxt/>
    </div>
</template>

<script>
import TheHeader from '@/components/Navigation/TheHeader/TheHeader'
import TheSidenav from '@/components/Navigation/TheSidenav/TheSidenav'
export default {
    components: {
     TheHeader,
     TheSidenav
    },
    // middleware: 'log',
    data () {
        return {
            displaySidenav: false
        }
    }
    
}
</script>
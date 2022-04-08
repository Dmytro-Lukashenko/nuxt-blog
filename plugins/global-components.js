import Vue from 'vue'
import PostList from '@/components/Posts/PostList/PostList'
import PostPreview from '@/components/Posts/PostList/PostPreview/PostPreview'
import AppButton from '@/components/UI/AppButton/AppButton'
import AppControlInput from '@/components/UI/AppControlInput/AppControlInput'
import AdminPostForm from '@/components/Admin/AdminPostForm'
import NavList from '@/components/Navigation/UI/NavList/NavList'
import TheHeader from '@/components/Navigation/TheHeader/TheHeader'
import TheSidenav from '@/components/Navigation/TheSidenav/TheSidenav'
import TheSideNavToggle from '@/components/Navigation/UI/TheSideNavToggle/TheSideNavToggle'

Vue.component('PostList', PostList)
Vue.component('PostPreview', PostPreview)
Vue.component('AppButton', AppButton)
Vue.component('AppControlInput', AppControlInput)
Vue.component('AdminPostForm', AdminPostForm)
Vue.component('NavList', NavList)
Vue.component('TheHeader', TheHeader)
Vue.component('TheSidenav', TheSidenav)
Vue.component('TheSideNavToggle', TheSideNavToggle)

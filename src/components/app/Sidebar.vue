<template>
  <ul class="sidenav app-sidenav" :class="{open: value}">
    <router-link
        v-for="link in links"
        :key="link.url"
        tag="li" active-class="active"
        :to="link.url"
        :exact="link.exact"
        >
      <a @click="hideMenuAfterClick(value)" href="#" class="waves-effect waves-orange pointer">{{link.title}}</a>
    </router-link>
  </ul>
</template>

<script>
    import localizeFilter from '../../filters/localize.filter'

    export default {
        name: 'Sidebar',
        props: ['value'],
        data: () => ({
            links: [
                {
                    title: localizeFilter('Menu_Bill'),
                    url: '/',
                    exact: true
                },
                {
                    title: localizeFilter('Menu_History'),
                    url: 'history'
                },
                {
                    title: localizeFilter('Menu_Planning'),
                    url: 'planning'
                },
                {
                    title: localizeFilter('Menu_Record'),
                    url: 'record'
                },
                {
                    title: localizeFilter('Menu_Category'),
                    url: 'categories'
                }
            ]
        }),
        methods: {
          hideMenuAfterClick(value) {
              this.$emit('toggleSidebar', {open: value})
          }
        }
    }
</script>

<style scoped lang="scss">
  .app-sidenav {
    @media all and (max-width: 768px) {
      width: 100%;
    }
  }
</style>

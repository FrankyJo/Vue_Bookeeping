<template>
  <div>
    <Loader v-if="loading"/>
    <div v-else class="app-main-layout">
      <Navbar @click="isOpen = !isOpen" @toggleSidebar="toggle"/>
      <Sidebar v-model="isOpen" @toggleSidebar="toggle" :key="locale"/>

      <main class="app-content" :class="{full: !isOpen}">
        <div class="app-page">
          <router-view/>
        </div>
      </main>

      <div class="fixed-action-btn">
        <router-link class="btn-floating btn-large blue" to="/record" v-tooltip="'Создать новую запись'">
          <i class="large material-icons">add</i>
        </router-link>
      </div>

      <div class="label-version">
        <router-link class="version" to="/version">
          {{version}}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
    import Navbar from '../components/app/Navbar'
    import Sidebar from '../components/app/Sidebar'
    import messages from '../utils/messages'
    import ver from '../../version'

    export default {
        name: 'MainLayout',
        data: () => ({
            isOpen: true,
            loading: true,
            version: ver[0].version
        }),
        components: {
            Navbar,
            Sidebar
        },
        async mounted() {
            if (!Object.keys(this.$store.getters.info).length) {
                await this.$store.dispatch('fetchInfo')
            }
            console.log()
            this.loading = false
        },
        methods: {
            toggle() {
                if (document.body.clientWidth <= 768) {
                    this.isOpen = false
                }
            }
        },
        computed: {
            error() {
                return this.$store.getters.error
            },
            locale() {
                return this.$store.getters.info.locale
            }
        },
        watch: {
            error(fbError) {
                this.$error(messages[fbError.code] || 'Что-то пошло не так')
            }
        }
    }
</script>

<style scoped>
  .label-version{
    position: fixed;
    bottom: 0;
    left: 260px;
    background: #5f5f5f;
    padding: 2px 13px;
    border-radius: 4px 4px 0 0;
  }
  .version{
    color:white;
  }
</style>

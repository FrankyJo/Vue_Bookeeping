<template>
  <div>
    <div class="list-updates" v-for="update in version" :key="update.version">
      <strong>{{update.version}}</strong>
      <p>
        <pre>{{update.changed}}</pre>
      </p>
    </div>
  </div>
</template>

<script>
    import version from '../../version'

    export default {
        name: 'Version',
        data: () => ({
            version: ''
        }),
        mounted() {
            this.version = version
        }
    }
</script>

<style scoped>
  .list-updates{
    text-align: left;
  }
  strong {
    font-weight: bold;
    width: 70px;
    display: inline-block;
    margin-bottom: 0px;
  }

  p, pre {
    text-align: left;
    margin: 0 0 30px 0;
  }
</style>

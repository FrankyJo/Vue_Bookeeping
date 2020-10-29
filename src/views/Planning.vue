<template>
  <div>
    <div class="page-title">
      <h3>Планирование</h3>
      <h4>{{info.bill | currency('UAH')}}</h4>
    </div>
    <Loader v-if="loading"/>
    <p class="center" v-else-if="!categories.length">Категорий пока нет.
      <router-link to="/categories">Добавить новую
        категорию
      </router-link>
    </p>
    <section v-else>
      <div v-for="cat of categories"
           :key="cat.id"
      >
        <p>
          <strong>{{cat.title}}</strong>
          {{cat.spend | currency}} из {{cat.limit | currency}}
        </p>
        <div class="progress" v-tooltip="cat.tooltip">
          <div
              class="determinate"
              :class=[cat.progressColor]
              :style="{width: cat.progressPercent + '%'}"
          ></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import currencyFilter from '../filters/currency.filter'

    export default {
        name: 'Planning',
        data: () => ({
            loading: true,
            categories: []
        }),
        async mounted() {
            const records = await this.$store.dispatch('fetchRecords')
            const categories = await this.$store.dispatch('fetchCategories')
            this.categories = categories.map(cat => {
                console.log(cat.id)
                const spend = records
                    .filter(r => r.categoryId === cat.id)
                    .reduce((total, record) => {
                        return total += +record.amount
                    }, 0)
                console.log(records
                    .filter(r => r.categoryId === cat.id))
                const percent = 100 * spend / cat.limit
                const progressPercent = percent > 100 ? 100 : percent
                const progressColor = percent < 60
                    ? 'green'
                    : percent < 100
                        ? 'yellow'
                        : 'red'

                 const tooltipValue = cat.limit - spend
                console.log(tooltipValue)
                const tooltip = `${tooltipValue < 0 ? 'Превышение на' : 'Осталось'} ${currencyFilter(Math.abs(tooltipValue))}`

                return {
                    ...cat,
                    progressColor,
                    progressPercent,
                    spend,
                    tooltip
                }
            })
            this.loading = false
        },
        computed: {
            ...mapGetters(['info'])
        }
    }
</script>

<style scoped>

</style>

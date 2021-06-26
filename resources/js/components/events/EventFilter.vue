<template>
  <base-card>
    <div class="row">
        <div class="col-sm-3">
            <h2 class="my-2"><i class="fas fa-filter mr-2"></i>  {{ $t('events.filter.title') }}</h2>
        </div>
        <div class="col-sm-3 ml-auto">
            <span class="filter-option">
                <input type="checkbox" id="conference" class="filter-input" checked @change="setFilter" />
                <label for="conference">{{ $t('events.filter.conference') }}</label>
            </span>
        </div>
        <div class="col-sm-3 ml-auto">
            <span class="filter-option">
                <input type="checkbox" id="formation" class="filter-input" checked @change="setFilter" />
                <label for="formation">{{ $t('events.filter.formation') }}</label>
            </span>
        </div>
        <div class="col-sm-3 ml-auto">
            <span class="filter-option">
                <input type="checkbox" id="atelier" class="filter-input" checked @change="setFilter" />
                <label for="atelier">{{ $t('events.filter.atelier') }}</label>
            </span>
        </div>
    </div>
  </base-card>
</template>

<script>
export default {
  emits: ['change-filter'],
  data() {
    return {
      filters: {
        conference: true,
        formation: true,
        atelier: true
      }
    };
  },
  methods: {
    setFilter(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive
      };
      this.filters = updatedFilters;
      this.$emit('change-filter', updatedFilters);
    }
  }
}
</script>

<style scoped>

</style>

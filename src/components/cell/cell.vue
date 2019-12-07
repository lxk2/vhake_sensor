<template>
  <div class="cell" @click="handleClickCell">
    <div class="cell-left">
      {{ name }}
    </div>
    <div class="cell-right">
      {{ value }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'cell',
  props: {
    name: {
      type: String,
      default: () => {
        return ''
      }
    },
    value: {
      default: () => {
        return ''
      }
    }
  },
  methods: {
    handleClickCell () {
      this.$emit('click', true)
    }
  }
}
</script>

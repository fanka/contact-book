<template>
<li>
    <router-link :to="/contact/+contact.id">
      {{contact.name}}
    </router-link>
  </li>
</template>

<script>

export default {
  name: 'contacts-list-item',
  props: {
    contact: Object
  },
  data () {
    return {

    }
  }

}
</script>

<style>
</style>

<template>
<div>
      <div>
        <input v-model="contact.name" placeholder="Enter name">
      </div>
      <div>
        <input v-model="contact.email" placeholder="Enter email">
      </div>
      <div>
        <input v-model="contact.tel" placeholder="Enter telephone number">
      </div>
      <div>
        <input v-model="contact.address" placeholder="Enter address">
      </div>
      <button v-on:click="addContact" class="btn btn-success">Add Contact</button>



</div>
</template>

<script>

export default {
  name: 'AddContact',
  props: {
  contacts: Array,
  },
  data () {
    return {
      contact: {}

    }
  },
  created(){

  },
  updated(){

  },
  watch: {

  },
  methods: {
    addContact() {
      this.contact.id = this.contacts[this.contacts.length-1].id + 1
      this.contacts.push(this.contact)
      this.$localStorage.set('contacts', JSON.stringify(this.contacts))
    },

  },
  components: {}

}
</script>

<style scoped>
input {
  width: 250px;
  padding: 0 5px;
  height: 40px;
  border-radius: 10px;
  margin-top:20px;
}
</style>

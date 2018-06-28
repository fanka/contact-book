<template>
<div>
  <div v-for="contact in contacts">
    <div v-if="contact.id === user.id">
    <router-link :to="{ name: 'contact/:id/', params: { id: contact.id }}">
      Save
    </router-link>
      <button v-on:click="deleteContact(contact)" >Delete</button>
      <div>
        <input v-model="contact.name" placeholder="Edit name">
      </div>
      <div>
        <input v-model="contact.email" placeholder="Edit email">
      </div>
      <div>
        <input v-model="contact.tel" placeholder="Edit telephone number">
      </div>
      <div>
        <input v-model="contact.address" placeholder="Edit address">
      </div>

    </div>
  </div>

</div>
</template>

<script>

export default {
  name: 'EditContact',
  props: {
    contacts: Array
  },
  data () {
    return {
      user: null,

    }
  },
  created(){
    this.setContact()
  },
  updated(){
    this.setContact()
    this.$localStorage.set('contacts', JSON.stringify(this.contacts))
  },
  watch: {
    "$route": "setContact"
  },
  methods: {
    setContact() {
        this.contacts.map((entry)=> {
            if (entry.id === parseInt(this.$route.params.id)) {
              this.user = entry
            }
        })
      },
    deleteContact(item) {
        var index = this.contacts.indexOf(item);
        if (index > -1) {
        this.contacts.splice(index, 1)
        this.$localStorage.set('contacts', JSON.stringify(this.contacts))
        }
    },
  },
  components: {}

}
</script>

<style>
</style>

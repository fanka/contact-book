<template>
  <div>
    <div v-for="contact in contacts">
      <div v-if="contact.id == id">
        <button v-on:click="editContact(contact)" >Edit</button>
        <button v-on:click="deleteContact(contact)" >Delete</button>
        <div>{{ contact.name }}</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ContactDetails',
  props: {
    id: String,
    contacts: Array
  },
  data () {
    return {
      contact: null
    }
  },
  methods: {
    setContact() {
        this.contacts.map((entry)=> {
            if (entry.id == this.id) {
              this.contact = entry
            }
        })
      },
      editContact(contact) {
        contact.name = "Other name"
      },
      deleteContact(item) {
        var index = this.contacts.indexOf(item);
        if (index > -1) {
        this.contacts.splice(index, 1)
        }
      },
    },
  created(){
    this.setContact()
  },
  updated(){
    this.setContact()
  },
  watch: {
    "$route": "setContact"
  }
}
</script>

<style>
</style>

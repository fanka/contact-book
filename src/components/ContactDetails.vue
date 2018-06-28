<template>
  <div>
    <div v-if="user" v-for="contact in contacts">
      <div v-if="contact.id === user.id">
        <div class="d-flex flex-row justify-content-around">
          <div>Avatar</div>
          <h2>{{ contact.name }}</h2>
          <div>
            <router-link :to="{ name: 'contact/:id/edit', params: { id: contact.id }}">
              Edit
            </router-link>
            <button v-on:click="deleteContact(contact)" >Delete</button>
          </div>
        </div>
      <div class="details-info">
        <h4>Email:</h4>
        <div>{{ contact.email }}</div>
        <h4>Mobile:</h4>
        <div>{{ contact.tel }}</div>
      </div>
      </div>
    </div>
    <router-view :contacts.sync="contacts"></router-view>

  </div>
</template>

<script>
export default {
  name: 'ContactDetails',
  props: {
    contacts: Array
  },
  data () {
    return {
      user: null
    }
  },
  methods: {
    setContact() {
        this.contacts.map((entry)=> {
            if (entry.id == parseInt(this.$route.params.id)) {
              this.user = entry
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
        this.$localStorage.set('contacts', JSON.stringify(this.contacts))
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

<style scoped>
.details-info {
margin-top:40px;
}
</style>

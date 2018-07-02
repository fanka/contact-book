<template>
  <div>

    <div v-if="user" v-for="contact in contacts">
      <div v-if="contact.id === user.id">
        <div class="d-flex flex-row justify-content-around">
          <img class="avatar" v-bind:src="'/static/avatar.png'">
          <h1 v-bind:style="fontFamily ='Poppins-Black'">{{ contact.name }}</h1>
          <div>
            <router-link :to="{ name: 'contact/:id/edit', params: { id: contact.id }}">
              <img class="button" v-bind:src="'/static/edit.png'">
            </router-link>
            <img class="button" v-bind:src="'/static/delete.png'" v-on:click="deleteContact(contact)">
          </div>
        </div>
      <div class="details-info">
        <h4 class="mt-3">Email:</h4>
        <div>{{ contact.email }}</div>
        <h4 class="mt-3">Mobile:</h4>
        <div>{{ contact.tel }}</div>
        <h4 v-if="contact.address != ''" class="mt-3">Address:</h4>
        <div>{{ contact.address }}</div>
      </div>
      </div>
    </div>

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
        this.contacts.map((entry) => {
            if (entry.id === parseInt(this.$route.params.id)) {
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
.avatar {
width:60px;
height:60px;
}
.button {
width:40px;
height:40px;
}

</style>

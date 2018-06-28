<template>
  <div class="container">
  <div class="row">
    <div class="col-4">
      <h2>Contacts</h2>
      <search :contacts.sync="contacts"></search>
      <list :contacts.sync="contacts"></list>
      <router-link :to="{ name: 'contact/new'}">New contact</router-link>
    </div>
    <div class="col-8">
    <router-view :contacts.sync="contacts"></router-view>
    </div>
  </div>
  </div>
</template>

<script>
import ContactsList from './ContactsList'
import ContactDetails from './ContactDetails'
import SearchContacts from './SearchContacts'
export default {
  name: 'AddressBook',
  data () {
    return {
    contacts: [
      {id: 1,
      name: 'Lonneke Faber',
      email: 'lonneke.faber@wonderkind.com',
      tel: '06-12345678',
      address: '',
      },
      {id: 2,
      name: 'Don Kooijman',
      email: 'don.kooijman@wonderkind.com',
      tel: '06-12345678',
      address: '',
      },
      {id: 3,
      name: 'Amar Muric',
      email: 'amar.muric@wonderkind.com',
      tel: '06-12345678',
      address: '',
      },
    ],

    }
  },
  mounted () {
    const contacts = JSON.parse(this.$localStorage.get('contacts'))
    if (contacts) {
      this.contacts = contacts
    }
  },
  components: {
    list: ContactsList,
    contactDetails: ContactDetails,
    search: SearchContacts
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
margin-top:120px;

}
</style>

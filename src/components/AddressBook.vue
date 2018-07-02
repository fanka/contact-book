<template>
  <div class="container">
  <div class="row">
    <div class="col-md-4">
      <h2>Contacts</h2>
      <search :contacts.sync="contacts"></search>
      <list :contacts.sync="contacts"></list>
      <router-link :to="{ name: 'contact/new'}"><div class="add-button"><img class="new-icon d-inline" v-bind:src="'/static/add.png'"> ADD CONTACT</div></router-link>
    </div>
    <div class="col-md-8">
    <router-view :contacts.sync="contacts"></router-view>
    </div>
  </div>
  </div>
</template>

<script>
import ContactsList from './ContactsList'
import ContactDetails from './ContactDetails'
import SearchContacts from './SearchContacts'
import WelcomeMessage from './WelcomeMessage'
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
    search: SearchContacts,
    welcomeMessage: WelcomeMessage,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  margin-top:120px;

}
.add-button {

  width:100%;
  background-color: #5dbf49;
  color: #fff;
  height:auto;
  padding:10px;
}
.new-icon {
  width:25px;
  height:25px;
}
.container {
max-height: 600px;
}
</style>

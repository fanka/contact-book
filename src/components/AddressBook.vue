<template>
  <div class="container">
  <div class="row">
    <div class="col-4">
      <search></search>
      <list :contacts.sync="contacts"></list>
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
      name: 'Lonneke Faber',},
      {id: 2,
      name: 'Don Kooijman',},
      {id: 3,
      name: 'Amar Muric',},
    ],

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
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

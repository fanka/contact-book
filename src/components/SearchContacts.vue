<template>
  <div>
    <input type="search" v-model="searchContactName" placeholder="Search" />
  <ul v-for="contact in filteredContacts">
    <li>
      <router-link :to="/contact/+contact.id">
        {{contact.name}}
      </router-link>
    </li>
  </ul>
  </div>
</template>

<script>


export default {
  name: 'SearchContacts',
  props: {
  contacts: Array
  },
  data () {
    return {
      searchContactName: "",
      filterByContactName: "",
      filteredContacts:[]
    }
  },

  watch: {
    "searchContactName": "setFilteredContacts",

  },
  methods: {
      setFilteredContacts () {
      let filteredContacts = []
          this.contacts.filter((contact) => {
          name = contact.name.toLowerCase()
          if (this.searchContactName !== "" && name.includes(this.searchContactName.toLowerCase())) {
            filteredContacts.push(contact)
          }
        })
        this.filteredContacts = filteredContacts
        console.log(filteredContacts)
        return filteredContacts
      }
  },

}
</script>

<style scoped>
  li {
  list-style-type: none;
  }
  input {
  width: 80%;
  height: 40px;
  border-radius: 10px;
  padding-left:30%;
  }
</style>

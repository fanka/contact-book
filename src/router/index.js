import Vue from 'vue'
import Router from 'vue-router'
import AddressBook from '@/components/AddressBook'
import ContactDetails from '@/components/ContactDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AddressBook',
      component: AddressBook,
      children: [
        { path: "contact/:id",
        component: ContactDetails,
        name: "contact-details",
        props:true, }
      ]
    },

  ]
})

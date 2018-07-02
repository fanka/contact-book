import Vue from 'vue'
import Router from 'vue-router'
import AddressBook from '@/components/AddressBook'
import ContactDetails from '@/components/ContactDetails'
import EditContact from '@/components/EditContact'
import AddContact from '@/components/AddContact'
import WelcomeMessage from '@/components/WelcomeMessage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AddressBook',
      component: AddressBook,
      children: [
        { path: "",
        component: WelcomeMessage,
        name: "welcome-message",
        },
        { path: "contact/:id",
        component: ContactDetails,
        name: "contact/:id/",
        props:true,
        },
        { path: "contact/:id/edit",
        component: EditContact,
        name: "contact/:id/edit",
        props:true,
        },
        { path: "contact/new",
        component: AddContact,
        name: "contact/new",
        props:true,
        },

      ]
    },

  ]
})

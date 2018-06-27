

<script>
import ContactsListItem from './ContactsListItem'
import ContactsListHeading from './ContactsListHeading'

let getSymbol = (entry) => entry.charAt(0).toUpperCase()
let reverseName = (name) => name.split(" ").reverse()

export default {
  name: 'contacts-list',
  props: {
    contacts: Array,
  },
  data () {
    return {


    }
  },
  components: {
    ContactsListItem: ContactsListItem,
    ContactsListHeading: ContactsListHeading
  },
  render (h){
    let currentSymbol = null
    let rows = []
    this.contacts.forEach((item) => {
      console.log(item.name)
      const name = reverseName(item.name)
      if (getSymbol(name[0]) !== currentSymbol)
        rows.push(h(ContactsListHeading, {props: {symbol: getSymbol(name[0])}}))
      rows.push(h(ContactsListItem, {props: {contact: item}}))
      currentSymbol = getSymbol(name[0])
    })

    return h('ol', {class: "contact-list"}, rows)
  }
}
</script>

<style>
  .contact-list {
  list-style: none;
  margin: 0;
  padding-left: 0;
  }
</style>

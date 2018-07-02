import Vue from 'vue'
import AddressBook from '@/components/AddressBook'

describe('AddressBook.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(AddressBook)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.col-md-4 h2').textContent)
      .toEqual('Contacts')
  })
})

import Vue from 'vue'
import { mount } from 'avoriaz'
import { expect } from 'chai'
import ContactDetails from '@/components/ContactDetails'


describe('ContactDetails.vue', () => {
  it('gets the required props', () => {
    const contacts = [
      {id: 1,
      name: 'Lonneke Faber',
      email: 'lonneke.faber@wonderkind.com',
      tel: '06-12345678',
      address: '',
      },

    ]
    const wrapper = mount(ContactDetails, {
      propsData: {
      contacts
      },
    })
    expect(wrapper.propsData().contacts).to.equal(contacts);
  })
})

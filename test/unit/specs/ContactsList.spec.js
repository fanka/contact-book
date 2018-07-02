import Vue from 'vue'
import { mount } from 'avoriaz'
import { expect } from 'chai'
import ContactsList from '@/components/ContactsList'

describe('ContactsList.vue', () => {
  it('renders an ol with class .contact-list', () => {
    const wrapper = mount(ContactsList, {
        propsData: {
          contacts: [
            {id: 1,
            name: 'Lonneke Faber',
            email: 'lonneke.faber@wonderkind.com',
            tel: '06-12345678',
            address: '',
            },
            
          ],
        },
    })
    expect(wrapper.is('ol')).to.equal(true)
    expect(wrapper.hasClass('contact-list')).to.equal(true)
  })
})

import { renderSearchFormBlock } from './search-form.ts'
import { renderSearchStubBlock } from './search-results.ts'
import { renderUserBlock } from './user.ts'
import { renderToast } from './lib.ts'
import { Place } from './place.ts'

window.addEventListener('DOMContentLoaded', () => {
  renderUserBlock('0')
  renderSearchFormBlock()
  renderSearchStubBlock()
  renderToast(
      {text: 'Это пример уведомления. Используйте его при необходимости', type: 'success'},
      {name: 'Понял', handler: () => {console.log('Уведомление закрыто')}}
  )
})

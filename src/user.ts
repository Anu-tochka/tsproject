import { renderBlock } from './lib.js'

export function renderUserBlock (name: string,avatar: string,favoriteItemsAmount?: number) {
  const favoritesCaption = favoriteItemsAmount ? favoriteItemsAmount : 'ничего нет'
  const hasFavoriteItems = favoriteItemsAmount ? true : false
  const userName = name ? name : "Wade Warren"
  const userAvatar = avatar ? avatar : "/img/avatar.png"
  
  if (favoritesCaption == 'ничего нет') hasFavoriteItems = ''
  else hasFavoriteItems = ' active'

  renderBlock(
    'user-block',
    `
    <div class="header-container">
      <img class="avatar" src="${userAvatar}" alt="${userName}" />
      <div class="info">
          <p class="name">${userName}</p>
          <p class="fav">
            <i class="heart-icon${hasFavoriteItems ? ' active' : ''}"></i>${favoritesCaption}
          </p>
      </div>
    </div>
    `
  )
}

export function getUserData () {
  let key = localStorage.getItem(user): { username: unknown, avatarUrl: unknown}
  return key
  
  
}

export function getFavoritesAmount () {
  let key = localStorage.getItem(favoritesAmount): unknown
  return key
  
  
}


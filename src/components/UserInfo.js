export default class UserInfo{
  constructor(authorSelector, bioSelector, avatarSelector){
    this._author = document.querySelector(authorSelector);
    this._bio = document.querySelector(bioSelector);
    this._avatar = document.querySelector(avatarSelector);
    this._userId = undefined;
  }

  getUserInfo() {
    return {
      author: this._author.textContent,
      bio: this._bio.textContent
    };
  }

  setUserInfo({ name, option }) {
    this._author.textContent = name;
    this._bio.textContent = option;
  }

  getUserId() {
    return this._userId;
  }

  setUserId(userId) {
    this._userId = userId;
  }

  setAvatar(avatarSrc) {
    this._avatar.src = avatarSrc;
  }
}
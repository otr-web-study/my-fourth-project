export default class UserInfo{
  constructor(authorSelector, bioSelector, avatarSelector){
    this._author = document.querySelector(authorSelector);
    this._bio = document.querySelector(bioSelector);
    this._avatar = document.querySelector(avatarSelector);
    this._userId = undefined;
  }

  getUserInfo() {
    return {
      name: this._author.textContent,
      about: this._bio.textContent
    };
  }

  setUserInfo({ name, about, _id, avatar }) {
    this._author.textContent = name;
    this._bio.textContent = about;
    this._userId = _id;
    this._avatar.src = avatar;
  }

  getUserId() {
    return this._userId;
  }

  getAvatar() {
    return this._avatar.src;
  }
}
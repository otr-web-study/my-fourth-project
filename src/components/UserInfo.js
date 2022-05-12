export default class UserInfo{
  constructor(authorSelector, bioSelector){
    this._author = document.querySelector(authorSelector);
    this._bio = document.querySelector(bioSelector);
  }

  getUserInfo() {
    return {
      author: this._author.textContent,
      bio: this._bio.textContent
    };
  }

  setUserInfo(name, bio) {
    this._author.textContent = name;
    this._bio.textContent = bio;
  }
}
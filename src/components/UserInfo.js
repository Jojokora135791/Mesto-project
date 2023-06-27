export class UserInfo {
  constructor(userAuthor, userJob, userAvatar) {
    this._userAuthor = document.querySelector(userAuthor);
    this._userJob = document.querySelector(userJob);
    this._userAvatar = document.querySelector(userAvatar);
  }
  getUserInfo() {
    return {
      author: this._userAuthor.textContent,
      job: this._userJob.textContent
    }
    

  }
  setUserInfo(author, job) {
    this._userAuthor.textContent = author;
    this._userJob.textContent = job;
  }
  getUserAvatar() {
    return {
      avatar: this._userAvatar.textContent
    }
    
  }
  setUserAvatar(avatar) {
    this._userAvatar.src = avatar;
  }
}

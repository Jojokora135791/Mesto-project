export class UserInfo {
  constructor(userAuthor, userJob) {
    this._userAuthor = document.querySelector(userAuthor);
    this._userJob = document.querySelector(userJob);
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
}

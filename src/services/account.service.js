import $apiV1 from "../api";

export class AccountService {
  static async signIn(login, password) {
    return $apiV1.post('account/login', {login, password})
  }

  static async getInfo() {
    return $apiV1.get('account/info')
  }
}
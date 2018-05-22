import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { Http, Headers, Response } from "@angular/http";

@Injectable()
export class AuthenticationService {
  private IpAddress: string = "https://hpluss.herokuapp.com";

  constructor(private http: Http) {}

  login(email: string, password: string) {
    return this.http
      .post(
        this.IpAddress + "/user/login",
        JSON.stringify({
          email: email,
          password: password
        })
      )
      .map((response: Response) => {
        // login successful if there's a jwt token in the response
        let user = response.json();
        console.log(user);
        if (user.error || user.message) {
          return user;
        }
        if (user && user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem("currentUser", JSON.stringify(user.token));
          localStorage.setItem("user_name", user.user.name);
          localStorage.setItem("email", user.user.email);
          localStorage.setItem("id", user.user.id);
          localStorage.setItem("role", user.user.role);
        }
        return user.user;
      });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem("currentUser");
  }
}

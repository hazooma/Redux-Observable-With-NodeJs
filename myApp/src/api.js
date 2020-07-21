import { Observable } from "rxjs";
import request from "./utils/request";
const apiUrl = "http://localhost:8080";

class Api {
  defaultHeaders = {};

  request(path, additionalOptions, data) {
    const options = { ...additionalOptions };
    if (data) {
      options.body = JSON.stringify(data);
    }
    return Observable.from(
      request(`${apiUrl}/${path}`, {
        ...options,
        headers: {
          "Content-Type": "application/json",

          ...this.defaultHeaders,
        },
        mode: "cors",
        // credentials: "include",
      }),
    );
  }

  get(path, options) {
    return this.request(path, options);
  }

  post(path, data, options) {
    return this.request(path, { ...options, method: "POST" }, data);
  }

  patch(path, data, options) {
    return this.request(path, { ...options, method: "PATCH" }, data);
  }
}

export default new Api();

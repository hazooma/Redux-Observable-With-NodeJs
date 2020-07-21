import Api from "../../api";

export default class EventApi {
  static posteventForm(eventData) {
    console.log(eventData);

    return Api.post("EventForm", eventData).map((response) => response);
  }

  static getEventsForms() {
    return Api.get("EventForm").map((response) => {
      return response;
    });
  }
}

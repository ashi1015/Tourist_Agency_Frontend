import http from "../http-common";

class DestinationDataService {
  getAll(params) {
    return http.get("/destinations", { params });
  }

  get(id) {
    return http.get(`/destinations/${id}`);
  }

  create(data) {
    return http.post("/destinations", data);
  }

  update(id, data) {
    return http.put(`/destinations/${id}`, data);
  }

  delete(id) {
    return http.delete(`/destinations/${id}`);
  }

  deleteAll() {
    return http.delete("/destinations");
  }
}

export default new DestinationDataService();

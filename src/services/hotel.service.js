import http from "../http-common";

class HotelDataService {
  getAll(params) {
    return http.get("/hotels", { params });
  }

  get(id) {
    return http.get(`/hotels/${id}`);
  }

  create(data) {
    return http.post("/hotels", data);
  }

  update(id, data) {
    return http.put(`/hotels/${id}`, data);
  }

  delete(id) {
    return http.delete(`/hotels/${id}`);
  }

  deleteAll() {
    return http.delete("/hotels");
  }
}

export default new HotelDataService();

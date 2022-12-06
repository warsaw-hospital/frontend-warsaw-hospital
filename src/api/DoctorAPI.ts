import axios from "axios";

const DoctorAPI = {
	//User endpoints
	login: (email: string, password: string) => {
		return axios.post("/login", { email, password });
	},
};

export default DoctorAPI;

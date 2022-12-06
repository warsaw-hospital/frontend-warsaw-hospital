import SpecializationEnum from "models/specialization/SpecializationEnum";

interface DoctorFilter {
	search?: string;
	specialization?: SpecializationEnum;
}

export default DoctorFilter;

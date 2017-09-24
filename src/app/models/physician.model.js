"use strict";
var PhysicianModel = (function () {
    function PhysicianModel(id, physician, type, time, duration, available) {
        this.id = id;
        this.physician = physician;
        this.type = type;
        this.time = time;
        this.duration = duration;
        this.available = available;
    }
    return PhysicianModel;
}());
exports.PhysicianModel = PhysicianModel;
var PersonModel = (function () {
    function PersonModel(personID, title, firstName, lastName, idCard, userId, password, address, relationship, gender, dateofbirth, contactEmergency) {
        this.personID = personID;
        this.title = title;
        this.firstName = firstName;
        this.lastName = lastName;
        this.idCard = idCard;
        this.userId = userId;
        this.password = password;
        this.address = address;
        this.relationship = relationship;
        this.gender = gender;
        this.dateofbirth = dateofbirth;
        this.contactEmergency = contactEmergency;
    }
    return PersonModel;
}());
exports.PersonModel = PersonModel;
var PatientModel = (function () {
    function PatientModel(patientId, weight, region, national, personalDisease, bloodtype) {
        this.patientId = patientId;
        this.weight = weight;
        this.region = region;
        this.national = national;
        this.personalDisease = personalDisease;
        this.bloodtype = bloodtype;
    }
    return PatientModel;
}());
exports.PatientModel = PatientModel;
var AppointmentModel = (function () {
    function AppointmentModel(time, specialty, patient, doctor, disease, detail, appointmentId, date, arrived) {
        this.time = time;
        this.specialty = specialty;
        this.patient = patient;
        this.doctor = doctor;
        this.disease = disease;
        this.detail = detail;
        this.appointmentId = appointmentId;
        this.date = date;
        this.arrived = arrived;
    }
    return AppointmentModel;
}());
exports.AppointmentModel = AppointmentModel;
var ScheduleModel = (function () {
    function ScheduleModel(id, owner, ownerid, day, specialty, duration, UpdateDate) {
        this.id = id;
        this.owner = owner;
        this.ownerid = ownerid;
        this.day = day;
        this.specialty = specialty;
        this.duration = duration;
        this.UpdateDate = UpdateDate;
    }
    return ScheduleModel;
}());
exports.ScheduleModel = ScheduleModel;
var HospitalModel = (function () {
    function HospitalModel(hospitalId, hospitalName, address, registrationNo, phoneNumber) {
        this.hospitalId = hospitalId;
        this.hospitalName = hospitalName;
        this.address = address;
        this.registrationNo = registrationNo;
        this.phoneNumber = phoneNumber;
    }
    return HospitalModel;
}());
exports.HospitalModel = HospitalModel;
var ResportModel = (function () {
    function ResportModel(patientid, appointmentId, disease, treatment, doctorId, DateOfTreatment) {
        this.patientid = patientid;
        this.appointmentId = appointmentId;
        this.disease = disease;
        this.treatment = treatment;
        this.doctorId = doctorId;
        this.DateOfTreatment = DateOfTreatment;
    }
    return ResportModel;
}());
exports.ResportModel = ResportModel;
var EmployeeModel = (function () {
    function EmployeeModel(employeeId, licenseNo, DeptId, workDate, Resign, specialty) {
        this.employeeId = employeeId;
        this.licenseNo = licenseNo;
        this.DeptId = DeptId;
        this.workDate = workDate;
        this.Resign = Resign;
        this.specialty = specialty;
    }
    return EmployeeModel;
}());
exports.EmployeeModel = EmployeeModel;
var DurationModel = (function () {
    function DurationModel(doctorId, name, duration, newduration, date) {
        this.doctorId = doctorId;
        this.name = name;
        this.duration = duration;
        this.newduration = newduration;
        this.date = date;
    }
    return DurationModel;
}());
exports.DurationModel = DurationModel;
var NavList = (function () {
    function NavList(path, name) {
        this.path = path;
        this.name = name;
    }
    return NavList;
}());
exports.NavList = NavList;
//# sourceMappingURL=physician.model.js.map
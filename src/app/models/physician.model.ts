export class PhysicianModel {
    constructor(
        public id: number,
        public physician: string,
        public type: string,
        public time: Date,
        public duration: number,
        public available: string[]
    ) { }
}
export class PersonModel {
    constructor(
        public personID: string,
        public title: string,
        public firstName: string,
        public lastName: string,
        public idCard: string,
        public userId: string,
        public password: string,
        public address: string,
        public relationship: string,
        public gender: boolean,
        public dateofbirth: Date,
        public contactEmergency: string
    ) { }
}

export class PatientModel {
    constructor(
        public patientId: string,
        public weight: GLfloat,
        public region: string,
        public national: string,
        public personalDisease: string[],
        public bloodtype: string
    ) { }
}
export class AppointmentModel {
    constructor(
        public time: Date,
        public specialty: string,
        public patient: string,
        public doctor: string,
        public disease: string,
        public detail: string,
        public appointmentId: string,
        public date: Date,
        public arrived: boolean
    ) { }
}

export class ScheduleModel {
    constructor(
        public id: string,
        public owner: string,
        public ownerid: string,
        public day: string,
        public specialty: string,
        public duration: number,
        public UpdateDate: Date
    ) { }
}
export class HospitalModel {
    constructor(
        public hospitalId: string,
        public hospitalName: string,
        public address: string,
        public registrationNo: number,
        public phoneNumber: number
    ) { }
}
export class ResportModel {
    constructor(
        public patientid: string,
        public appointmentId: string,
        public disease: string,
        public treatment: string,
        public doctorId: string,
        public DateOfTreatment: string
    ) { }
}

export class EmployeeModel {
    constructor(
        public employeeId: string,
        public licenseNo: string,
        public DeptId: string,
        public workDate: Date,
        public Resign: string,
        public specialty: string
    ) { }
}
export class DurationModel {
    constructor(
        public doctorId: string,
        public name: string,
        public duration: number,
        public newduration: number,
        public date: Date
    ) { }
}

class DoctorManager {
    doctorList=doctor;
    constructor() {
        
    }
    emptyControl(){
        this.doctorList.map((doctorCH)=>{
            return doctorCH.status
        })
    }
    
}
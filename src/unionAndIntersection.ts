//union

type UserRole = 'admin'|'user';

const getDashboard = (role:UserRole)=>{

  if(role === 'admin'){
    const result = "Admin Dashboard"
    console.log(result)
    return result 
  }

  if(role === 'user'){
    const result ="User Dashboard"
     console.log(result)
    return result
  }
}

getDashboard('admin')


//intersection

type Employee={
  id:string;
  name:string;
  phoneNo:string
}

type Manager={
  designation:string;
  teamSize:number;
}

type EmployeeManager = Employee & Manager

const ChowdhuryShaheb:EmployeeManager={
   id:'101',
   name:'Mr Chowdhury',
   phoneNo:'01312....',
   designation:'Manager',
   teamSize:20
}

type EmployeeOrManager = Employee | Manager

const KhanShaheb:EmployeeOrManager={
   id:'103',
   name:'Mr Khan',
   phoneNo:'01318....',
   teamSize:10
}
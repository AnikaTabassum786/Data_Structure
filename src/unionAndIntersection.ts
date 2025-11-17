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
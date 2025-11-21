// as const

// enum UserRoles {
//     Admin = 'Admin',
//     Editor = 'Editor',
//     Viewer = 'Viewer'
// }

const UserRoles = {
    Admin  : 'Admin',
    Editor : 'Editor',
    Viewer : 'Viewer'
} as const

/*
readonly Admin  : 'Admin',
readonly Editor : 'Editor',
readonly Viewer : 'Viewer'

1. typeOf operator
2. keyOf operator

const user ={
   id: 222,
   name:"Anika"
}

typeof user;

{
   id:number
   name:string
}

{
Admin  : 'Admin',
Editor : 'Editor',
Viewer : 'Viewer'
}


*/

const canEdit = (role: keyof typeof UserRoles) => {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    }
    else return false;
}

const isEditablePermit = canEdit(UserRoles.Admin)
console.log(isEditablePermit)
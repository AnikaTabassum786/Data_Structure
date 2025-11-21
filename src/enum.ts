//set of fixed string leteral ek jaigate rakte

// type UserRoles = 'Admin' | 'Editor' | 'viewer';

enum UserRoles {
    Admin = 'Admin',
    Editor = 'Editor',
    Viewer = 'Viewer'
}

const canEdit = (role: UserRoles) => {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    }
    else return false;
}

const isEditablePermit = canEdit(UserRoles.Admin)
console.log(isEditablePermit)
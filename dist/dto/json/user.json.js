"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersObject = void 0;
const role_name_enum_1 = require("../../enum/role-name.enum");
const gender_enum_1 = require("../../enum/gender.enum");
exports.usersObject = [
    {
        firstName: 'akib',
        lastName: 'javed',
        email: 'info@test.com',
        phone: '01791538019',
        password: 'pass1234568',
        gender: gender_enum_1.Gender.Male,
        role: role_name_enum_1.RoleName.SUPER_ADMIN_ROLE,
        dateOfBirth: new Date(),
        address: 'Dhaka, Bangladesh',
    },
];
//# sourceMappingURL=user.json.js.map
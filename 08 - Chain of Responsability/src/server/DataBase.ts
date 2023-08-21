import PermissionType from "./PermissionType";

interface DataBase{
    email: string;
    password: string;
    permission: PermissionType;
}

const Database: DataBase[] =[ //formato em JSON
    {
        email: "ciatskiu@unicentro.br",
        password: "123123",
        permission: PermissionType.ADMIN
    },
    {
        email: "aluno@unicentro.br",
        password: "123123",
        permission: PermissionType.USER
    },
    {
        email: "teste@unicentro.br",
        password: "1234",
        permission: PermissionType.USER
    }
    ] 
export default Database;
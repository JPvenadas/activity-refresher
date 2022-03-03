import { Student } from "./Student";
import { StudentList } from "./StudentList";

const student1 = new Student(
    "B2020-0707",
    "BSIT",
    "CCS",
    "Jayphe Venadas",
    20,
    "MALE",
    "Binangonan, Rizal"
);

const student2 = new Student(
    "B2020-0808",
    "BSIT",
    "CCS",
    "Julius Flores",
    20,
    "MALE",
    "Binanagonan, Rizal"
);

const student3 = new Student(
    "B2020-0909",
    "BSIT",
    "CCS",
    "Roahn Vincent Vallega",
    20,
    "MALE",
    "Binangonan, Rizal"
);

const student4 = new Student(
    "B2020-0606",
    "BSIT",
    "CCS",
    "Nelia Culibrina",
    20,
    "FEMALE",
    "Cardona, Rizal"
);

const student5 = new Student(
    "B2020-0505",
    "BSIT",
    "CCS",
    "Ludwig Nikolai Aralar",
    20,
    "MALE",
    "Binangonan, Rizal"
);

const studentList = new StudentList([
    student1,
    student2,
    student3,
    student4,
    student5
]);



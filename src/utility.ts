// UTILITY types in typescript
// 1.PARTIAL utility
interface Assignment {
  name: string;
  title: string;
  grade: number;
}
// type Partial<T> = { [P in keyof T]?: T[P] | undefined };    **/How Partial work/ **
const updateAssignment = (
  assignment: Assignment,
  propsToUpdate: Partial<Assignment>
) => {
  return { ...assignment, ...propsToUpdate };
};

const assignment1: Assignment = {
  name: "Tanvir Hossain",
  title: "UY Lab WDD",
  grade: 95,
};

console.log(updateAssignment(assignment1, { name: "Tanvir Ibne Mahbub" }));

// 2.Required & Read only utility

// 2.1 Required utility example

interface AssignmentProps {
  name: string;
  title: string;
  grade: number;
  verified: boolean;
}

const assignment2: AssignmentProps = {
  name: "Tawhid Ibne Mahbub",
  title: "UY Lab WDD",
  grade: 80,
  verified: true,
};

const getAllValueProps = (
  assignment: Required<AssignmentProps>
): AssignmentProps => {
  return assignment;
};

console.log(getAllValueProps(assignment2));

// RECORD utility class
type StudentName = "Tanvir" | "Hossain" | "Munna";
type GradeOfStudent = "A" | "B" | "D" | "C" | "U";
const studentsOfResult: Record<StudentName, GradeOfStudent> = {
  Tanvir: "A",
  Hossain: "B",
  Munna: "C",
};

// We can also do that with interface
interface StudentObjects {
  assignment1: {
    title: string;
    point: number;
  };
  assignment2: {
    title: string;
    point: number;
  };
}

const uyLabStudent: Record<StudentName, StudentObjects> = {
  Tanvir: {
    assignment1: {
      point: 4,
      title: "WDD ASSIGNMENT 01",
    },
    assignment2: {
      title: "WDD ASSIGNMENT 02",
      point: 5,
    },
  },
  Hossain: {
    assignment1: {
      point: 4,
      title: "WDD ASSIGNMENT 01",
    },
    assignment2: {
      title: "WDD ASSIGNMENT 02",
      point: 5,
    },
  },
  Munna: {
    assignment1: {
      point: 4,
      title: "WDD ASSIGNMENT 01",
    },
    assignment2: {
      title: "WDD ASSIGNMENT 02",
      point: 5,
    },
  },
};

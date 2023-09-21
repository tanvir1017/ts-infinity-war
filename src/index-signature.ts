/* Typescript index signatures, keyof assertions & the record utility */

// type TransactionObject = {
//   [index: string]: number;
// };
interface TransactionObject {
  readonly [index: string]: number;
  Pizza: number;
  Books: number;
  Job: number;
}

const todaysTransactions: TransactionObject = {
  Pizza: 5,
  Books: 10,
  Job: 10,
};

console.log(todaysTransactions.Books);

const todaysNet = (transactions: TransactionObject): number => {
  let transactionNumber = 0;
  for (const transaction in transactions) {
    transactionNumber += transactions[transaction];
  }
  return transactionNumber;
};

console.log("Today's net", todaysNet(todaysTransactions));

// Key of signature

interface StudentObject {
  // [key: string]: string | number | number[] | undefined;
  name: string;
  gpa: number;
  classes?: number[];
}

const students: StudentObject = {
  name: "Mariam",
  gpa: 3.57,
  classes: [200, 100],
};
// console.log(students["test"]);
for (const key in students) {
  console.log(`${key}: ${students[key as keyof StudentObject]}`);
}

Object.keys(students).map((student) => {
  console.log(students[student as keyof typeof students]);
});

const logStudentKey = (student: StudentObject, key: keyof StudentObject) => {
  console.log(student[key]);
};

logStudentKey(students, "name");

/****************** Different way for declare key of type  *****************************/
type Post = {
  title: string;
  slug: string;
  description: string;
  thumb: string;
  banner: string;
  tag: string[];
}[];

interface AuthUser {
  [key: string]: string | number | Post;
  name: string;
  age: number;
  email: string;
  password: string;
  phone: number;
  address: string;
  country: "BD" | "IN" | "UK" | "USA";
  post: Post;
}

const authUser: AuthUser = {
  name: "Tanvir Hossain",
  age: 21,
  email: "developer.tanvirhossain@gmail.com",
  password: "tanvirhossain",
  phone: 1784070569,
  country: "BD",
  address: "Dhaka, Bangladesh",
  post: [],
};

type Streams = "salary" | "bonus" | "sidehustle";

type Incomes = Record<Streams, number | string | boolean>;

const monthlyIncomes: Incomes = {
  salary: "30k",
  bonus: "3k",
  sidehustle: 25000,
};

for (const income in monthlyIncomes) {
  console.log(monthlyIncomes[income as keyof Incomes]);
}

type recordUtility = {
  name: string;
  age: number;
  address: string;
};

interface Teacher {
    firstName: string;
    lastName: string;
    readonly fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    readonly location: string;
    [key: string]: any;
  }


  // Define the Directors interface that extends the Teacher interface
  interface Directors extends Teacher {
    numberOfReports: number;
  }
  

  const director1: Directors = {
    firstName: 'Mr',
    lastName: 'Who',
    location: 'Kenya',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };

  console.log(director1);
  

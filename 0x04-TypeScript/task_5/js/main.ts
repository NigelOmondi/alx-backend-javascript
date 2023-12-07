// Interfaces with brand property
interface MajorCredits {
    credits: number;
    __brand: 'MajorCredits';
  }
  
  interface MinorCredits {
    credits: number;
    __brand: 'MinorCredits';
  }
  
  // Functions to sum credits
  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      __brand: 'MajorCredits',
    };
  }
  
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      __brand: 'MinorCredits',
    };
  }
  
  // Example usage
  const majorSubject1: MajorCredits = { credits: 3, __brand: 'MajorCredits' };
  const majorSubject2: MajorCredits = { credits: 4, __brand: 'MajorCredits' };
  
  const minorSubject1: MinorCredits = { credits: 2, __brand: 'MinorCredits' };
  const minorSubject2: MinorCredits = { credits: 1, __brand: 'MinorCredits' };
  
  const resultMajor = sumMajorCredits(majorSubject1, majorSubject2);
  console.log('Sum of Major Credits:', resultMajor.credits); // Output: Sum of Major Credits: 7
  
  const resultMinor = sumMinorCredits(minorSubject1, minorSubject2);
  console.log('Sum of Minor Credits:', resultMinor.credits); // Output: Sum of Minor Credits: 3
  
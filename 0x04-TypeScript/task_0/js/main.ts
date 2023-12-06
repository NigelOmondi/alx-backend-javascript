interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  const createStudent = (firstName: string, lastName: string, age: number, location: string): Student => ({
    firstName,
    lastName,
    age,
    location,
  });
  
  const student1: Student = createStudent("Nigel", "Omondi", 46, "Kisumu");
  const student2: Student = createStudent("Reginah", "Shikanda", 22, "Nairobi");
  
  const studentsList: Student[] = [student1, student2];
  
  const bodyElement: HTMLBodyElement = document.body as HTMLBodyElement;
  const tableElement: HTMLTableElement = document.createElement("table");
  const theadElement: HTMLTableSectionElement = tableElement.createTHead();
  const tbodyElement: HTMLTableSectionElement = tableElement.createTBody();
  
  const headerRow: HTMLTableRowElement = theadElement.insertRow(0);
  const firstNameHeader: HTMLTableCellElement = headerRow.insertCell(0);
  const locationHeader: HTMLTableCellElement = headerRow.insertCell(1);
  
  firstNameHeader.textContent = "First Name";
  locationHeader.textContent = "Location";
  
  studentsList.forEach((student) => {
    const row: HTMLTableRowElement = tbodyElement.insertRow();
    const firstNameCell: HTMLTableCellElement = row.insertCell(0);
    const locationCell: HTMLTableCellElement = row.insertCell(1);
  
    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
  });
  
  tableElement.append(theadElement, tbodyElement);
  bodyElement.append(tableElement);
  
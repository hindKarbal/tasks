class School {
    constructor(name, level, numberOfStudents, averageTestScores) {
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
      this._averageTestScores = averageTestScores;
    }
  
    get name() {
      return this._name;
    }
  
    get level() {
      return this._level;
    }
  
    get numberOfStudents() {
      return this._numberOfStudents;
    }
  
    get averageTestScores() {
      return this._averageTestScores;
    }
  
    quickFacts() {
      console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
    }
  
    static pickSubstituteTeacher(substituteTeachers) {
      const randomIndex = Math.floor(Math.random() * substituteTeachers.length);
      return substituteTeachers[randomIndex];
    }
  
    set numberOfStudents(numberOfStudents) {
      if (typeof numberOfStudents === 'number') {
        this._numberOfStudents = numberOfStudents;
      } else {
        console.log('Invalid input: numberOfStudents must be set to a Number.');
      }
    }
  }
  
  class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy, schoolOverview) {
      super(name, 'primary', numberOfStudents,85);
      this._pickupPolicy = pickupPolicy;
      this._schoolOverview = schoolOverview;
    }
  
    get pickupPolicy() {
      return this._pickupPolicy;
    }
  
    get schoolOverview() {
      return this._schoolOverview;
    }
  }
  
  class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams, schoolOverview) {
      super(name, 'high', numberOfStudents,80);
      this._sportsTeams = sportsTeams;
      this._schoolOverview = schoolOverview;
    }
  
    get sportsTeams() {
      console.log(this._sportsTeams.join(', '));
    }
  
    get schoolOverview() {
      return this._schoolOverview;
    }
  }
  
  class SchoolCatalog {
    constructor() {
      this._schools = [];
    }
  
    get schools() {
      return this._schools;
    }
  
    addSchool(school) {
      this._schools.push(school);
    }
  }
  
  // Create a PrimarySchool instance
  const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.', 'Primary School Overview');
  // Call the quickFacts method
  lorraineHansbury.quickFacts();
  // Call the pickSubstituteTeacher method
  const substituteTeacher = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);
  console.log(`Substitute teacher for the day: ${substituteTeacher}`);
  // Create a HighSchool instance
  const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'], 'High School Overview');
  alSmith.sportsTeams; // Corrected to call the method
  // Create an instance of SchoolCatalog for primary, middle, and high schools
  const schoolCatalog = new SchoolCatalog();
  schoolCatalog.addSchool(lorraineHansbury);
  schoolCatalog.addSchool(alSmith);
  
  // Log the schools in the catalog
  console.log(schoolCatalog.schools);
  
function calculatepercentage(marks: number, total: number): number {
  return (marks / total) * 100;
}
const marks = 20;
const total = 30;
console.log(`${calculatepercentage(marks, total)}`);

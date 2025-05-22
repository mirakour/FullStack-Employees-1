import db from "#db/client";
import { createEmployee } from "#db/queries/employees";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  await createEmployee("Tony Stark", "1970-05-29", 1000000);
  await createEmployee("Bruce Banner", "1969-12-18", 900000);
  await createEmployee("Natasha Romanoff", "1984-11-22", 800000);
  await createEmployee("Steve Rogers", "1918-07-04", 750000);
  await createEmployee("Clint Barton", "1971-06-18", 650000);
  await createEmployee("Peter Parker", "2001-08-10", 500000);
  await createEmployee("Wanda Maximoff", "1989-02-10", 700000);
  await createEmployee("Sam Wilson", "1985-03-15", 600000);
  await createEmployee("Bucky Barnes", "1917-03-10", 720000);
  await createEmployee("Stephen Strange", "1975-11-11", 950000);
}


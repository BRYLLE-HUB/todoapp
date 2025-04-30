const { Prisma, PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

/** @type {Prisma.UserCreateInput} */
const userData = {
  username: "joey",
  password: "1234",
  todos: {
    create: [
      { task: "Water the Plant" },
      { task: "Buy Sugar" },
      { task: "Buy Salt" },
      { task: "Schedule Appointment" },
      { task: "Review for Exam" },
      { task: "Finish the Project" },
      { task: "Go to the Gym" },
      { task: "Read a Book" },
      { task: "Watch a Movie" },
      { task: "Clean the House" },
      { task: "Cook Dinner" },
      { task: "Do Laundry" },
      { task: "Grocery Shopping" },
      { task: "Call Mom" },
      { task: "Plan Vacation" },
      { task: "Organize Files" },
      { task: "Attend Meeting" },
      { task: "Write Report" },
      { task: "Update Resume" },
      { task: "Practice Coding" },
      { task: "Learn a New Language" },
    ],
  },
};

async function main() {
  await prisma.user.create({ data: userData });
}

main();

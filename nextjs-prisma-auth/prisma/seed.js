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
      { task: "A" },
      { task: "Go to the Gym" },
      { task: "Read a Book" },
      { task: "Watch a Movie" },
      { task: "Clean the House" },
      { task: "Cook Dinner" },
      { task: "Do Laundry" },
      { task: "Call Mom" },
      { task: "Plan Vacation" },
      { task: "Organize Desk" },
      { task: "Grocery Shopping" },
      { task: "Pay Bills" },
      { task: "Walk the Dog" },
      { task: "Attend Meeting" },
      { task: "Finish Homework" },
      { task: "Practice Coding" },
      { task: "Learn a New Language" },
      { task: "Update Resume" },
      { task: "Prepare Presentation" },
      { task: "Go for a Run" },
      { task: "Visit Friends" },
      { task: "Watch a Documentary" },
      { task: "Try a New Recipe" },
      { task: "Attend a Workshop" },
      { task: "Volunteer" },
      { task: "Meditate" },
      { task: "Plan a Date Night" },
      { task: "Declutter Room" },
      { task: "Practice Guitar" },
      { task: "Write in Journal" },
      { task: "Explore a New Hobby" },
      { task: "Attend a Concert" },
      { task: "Go to the Beach" },
      { task: "Visit a Museum" },
      { task: "Take a Day Trip" },
      { task: "Try Yoga" },
      { task: "Join a Book Club" },
      { task: "Learn to Cook" },
      { task: "Start a Blog" },
      { task: "Create Art" },
      { task: "Plan a Picnic" },
    ],
  },
};

async function main() {
  await prisma.user.create({ data: userData });
}

main();

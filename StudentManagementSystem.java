import java.util.ArrayList;
import java.util.Scanner;

class Student {
    int roll;
    String name;
    String course;

    Student(int roll, String name, String course) {
        this.roll = roll;
        this.name = name;
        this.course = course;
    }

    public String toString() {
        return "Roll: " + roll + ", Name: " + name + ", Course: " + course;
    }
}

public class StudentManagementSystem {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        ArrayList<Student> list = new ArrayList<>();
        int choice;

        do {
            System.out.println("\n===== STUDENT MANAGEMENT SYSTEM =====");
            System.out.println("1. Add Student");
            System.out.println("2. View All Students");
            System.out.println("3. Search Student");
            System.out.println("4. Delete Student");
            System.out.println("5. Exit");
            System.out.print("Enter choice: ");
            choice = sc.nextInt();

            switch (choice) {
                case 1:
                    System.out.print("Enter Roll No: ");
                    int roll = sc.nextInt();
                    sc.nextLine(); 

                    System.out.print("Enter Name: ");
                    String name = sc.nextLine();

                    System.out.print("Enter Course: ");
                    String course = sc.nextLine();

                    list.add(new Student(roll, name, course));
                    System.out.println("Student Added Successfully!");
                    break;

                case 2:
                    System.out.println("\n--- Student List ---");
                    for (Student s : list) {
                        System.out.println(s);
                    }
                    break;

                case 3:
                    System.out.print("Enter Roll No to Search: ");
                    int searchRoll = sc.nextInt();
                    boolean found = false;

                    for (Student s : list) {
                        if (s.roll == searchRoll) {
                            System.out.println("Student Found: " + s);
                            found = true;
                            break;
                        }
                    }
                    if (!found) System.out.println("No student found!");
                    break;

                case 4:
                    System.out.print("Enter Roll No to Delete: ");
                    int deleteRoll = sc.nextInt();
                    Student toDelete = null;

                    for (Student s : list) {
                        if (s.roll == deleteRoll) {
                            toDelete = s;
                            break;
                        }
                    }

                    if (toDelete != null) {
                        list.remove(toDelete);
                        System.out.println("Student Deleted Successfully!");
                    } else {
                        System.out.println("Roll number not found!");
                    }
                    break;

                case 5:
                    System.out.println("Exiting...");
                    break;

                default:
                    System.out.println("Invalid choice!");
            }

        } while (choice != 5);

        sc.close();
    }
}

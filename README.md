# ICSI418Y-PA1

Name: Eric Maizner
Project: Task Completion Tracker

Purpose:
This program takes user input in the form of a task name and a
set selection of priorities, and generates a formatted task list,
that a user can delete or complete.

Instructions:

1. Add a unique, non-empty name into the task field and select a task priority.
2. Click the 'Add Task' Button to save the task to Task Field
3. Click 'Complete' mark a task as complete, or click 'Delete'
   to clear a task from the list
   (Note: a task MUST be deleted from the list before adding a task of the same name)

Known Issues:

1. Since the task uses an array, no objects are actually removed from memory after task deletion.
   In a real application I would have used a linked list.
2. Application is very rough in its final presentaion, but I believe the foundations are there.
3. More user input validation to prevent extremely large strings of text are absent.

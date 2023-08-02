# CC_WEB_SI4-SI5_Exercise_06
In this task we will use the MERN stack, and practice together.

This time we will create a login system for a webshop and we will also cover some feautres related to login.
Please note that the methods we will use today for login are NOT realistic and only done to practice the MERN stack,
valid authentication and authorization isn't the scope of the task.

1. Take your time to, go through the provided starter code for a bit and please let the facilitator of the live coding know if you have any questions.

2. Let's create two entities, an item entity and a user entity.

    2.1 The item intity must have a price, a name, an image URL and a MongoDB generated ID, 
    make all of these fields required, and if the we don't pass value to the image URL then we should use the Not found image on the frontend

    2.2 The user entoty must have a name, an items array of objects which will store all of the key value pairs of the item entity (as an alternative you may store a refference and a mongoDB generated _id too), password and a role (costumer or admin) and a session id (it can be just a number) each of these values are required and the items array of object shall receive an default empty array as value.

 

# db_surf_school
There are many apps to collect the info about the teachers, students and also the inventory of items that Schools have. However, I didn't find one that really suit the instructors in surfSchools needs so I created this enhanced one. I want to create an Management System so amazing that
'll be the last one you ever need -- I think this is it.

## Surf House Model

![](https://cdn.discordapp.com/attachments/814625330698518589/850424655692824626/Captura_de_pantalla_2021-06-04_a_las_18.22.22.png)

## User Model

Field                   | Type        | Required | Validation | Default | Unique | Lowercase
---                     | ---         | ---      | ---        |---      |---     |--- 
name                    | String      | true     | -          | -       | -      | -
email                   | String      | -        | -          | -       | true   | true      
pwd                     | Srtring     | -        | -          | -       | -      | -      
turn                    | String      | -        | enum       | -       | -      | -      
students                | Ref(student)| -        | -          | -       | -      | -      
planning                | Date        | -        | -          | -       | -      | -      
admin                   | Boolean     | -        | -          | false   | -      | -       



## Student Model

Field           | Type             | Required | Validation | Default    | Unique | Lowercase
---             | ---              | ---      | ---        |---         |---     |---     
name            | String           | true     | -          | -          | -      | -      
email           | String           | -        | -          | -          | true   | true      
passport        | Srtring          | -        | -          | -          | -      | -      
surfHouse       | Ref(surfHouse)   | -        | enum       | -          | -      | -      
createdAt       | Date             | -        | -          |Date.now()  | -      | -      
activities      | Ref(activieties) | -        | -          | -          | -      | -      
wetSuit         | Ref(wetSuit)     |  -       | -          | -          | -      | -      
surfTable       | Ref(surfTable)   |  -       | -          | -          | -      | -      



## Activities Model

Field               | Type   | Required | Validation | Default | Unique | Lowercase
---                 | ---    | ---      | ---        |---      |---     |--- 
description         | String | true     | -          | -       | -      | -
date                | Date   | -        | -          | -       | -      | -        
price               | Srtring| -        | -          | -       | -      | -      



## SurfHouses Model

Field        | Type           | Required | Validation | Default | Unique | Lowercase
---          | ---            | ---      | ---        |---      |---     |--- 
name         | String         | true     | -          | -       | -      | -
address      | String         | true     | -          | -       | true   | true      
capacity     | Number         | -        | -          | -       | -      | -      
price        | String         | -        | -          | -       | -      | -      
availability | Boolean        | -        | -          | -       | -      | -      
activities   | Ref(activities)| -        | -          | -       | -      | -      



## WetSuits Model

Field   | Type         | Required | Validation | Default   | Unique | Lowercase
---     | ---          | ---      | ---        |---        |---     |--- 
nameItem| String       | true     | -          |Wet-Suits  | -      | -
category| String       | -        | -          |Unisex     | -      | -      
brand   | String       | -        | enum       |No-brand   | -      | -      
size    | String       | -        | -          |size       | -      | -      
precio  | String       | -        | -          |To consult | -      | -      
students| Ref(students)| -        | -          |-          | -      | -      



## SurfTables Model

Field   | Type | Required | Validation | Default | Unique | Lowercase
---     | ---  | ---      | ---        |---      |---     |--- 
nameItem| String | true   | -          |-        | -      | -
category| String | -      | -          |Surf-Tables| -    | -      
brand   | String | -      | -          |brand     | -     | -      
size    | String | true   | -          |LongBoard | -     | -      
precio  | String | -      | -          |To consult| -     | -      
students| Ref(students)   | -      | -          |-         | -     | -      



## Inventary Model

Field      | Type          | Required | Validation | Default | Unique | Lowercase
---        | ---           | ---      | ---        |---      |---     |--- 
date       | Date          | -        | -          |Date.now()| -     | -
description| String        | -        | -          |Inventary| true   | true      
wetsuits   | Emb(wetsuits) | -        | -          | -       | -      | -
surfTables | Emb(surfTables| -        | -          | -       | -      | -      






## AUTH ENDPOINTS

| METHOD        | ENDPOINT                      | TOKEN   | DESCRIPTION                   | POST BODY     |
| ------------- | -------------                 | --------| -------------                 | ------------- |
| POST          | /api/auth/login               |    -    | Login Users                   | email, pwd    |
| POST          | /api/auth/signup              |    -    | Sign up new User              | name, email, pwd             |
* Signup of Admin (POST BODY = name, email, pwd, admin: true)
* Signup of Users (POST BODY = admin: false)





## USERS ENDPOINTS

| METHOD        | ENDPOINT                                                     | TOKEN        | DESCRIPTION                   | POST BODY     |
| ------------- | -------------                                                | --------     | -------------                 | ------------- |
| GET           | /api/users/                                                  | Auth & Admin | Get all Users                 | -              |
| GET           | /api/users/me                                                | Auth         | See your User                 | -              |
| GET           | /api/users/me/students                                       | Auth         | See your Students             | -              |
| GET           | /api/users/me/students/:studentId                            | Auth         | See One of your Students      | -              |
| GET           | /api/users/:userId                                           | Auth & Admin | See One User                  | -              |
| PUT           | /api/users/:userId                                           | Auth & Admin | Modify User                   | name, email, pwd, turn, students, planning, admin               |
| DELETE        | /api/users/:userId                                           | Auth & Admin | Delete User                   | -              |
| GET           | /api/users/:userId/students                                  | Auth & Admin | See User´s student list       | -              |
| PUT           | /api/users/:userId/students/add                              | Auth & Admin | Add Student to User           | _id            |
| PUT           | /api/users/:userId/students/delete                           | Auth & Admin | Delete Student to User        | _id            |




## INVENTARY ENDPOINTS

| METHOD        | ENDPOINT                                                     | TOKEN        | DESCRIPTION                   | POST BODY     |
| ------------- | -------------                                                | --------     | -------------                 | ------------- |
| GET           | /api/inventary/                                              | Auth         | See inventary                 | -              |
| POST          | /api/inventary/                                              | Auth & Admin | Create inventary              | date, description, wetsuits, surftables              |
| POST          | /api/inventary/:inventaryId/wetsuits                         | Auth         | Add wetsuit                   | nameItems, category, brand, size, price, students              |
| POST          | /api/inventary/:inventaryId/surftables                       | Auth         | Add surftable                 | nameItems, category, brand, size, price, students              |
| GET           | /api/inventary/:inventaryId/wetsuits                         | Auth         | See all wetsuits              | -              |
| GET           | /api/inventary/:inventaryId/surftables                       | Auth         | See all surftables            | -              |
| DELETE        | /api/inventary/:inventaryId/wetsuits/:wetsuitId              | Auth         | Delete wetsuit                | -              |
| DELETE        | /api/inventary/:inventaryId/surftables/:surftableId          | Auth         | Delete surftables             | -              |
| PUT           | /api/inventary/:inventaryId/wetsuits/:wetsuitId              | Auth         | Add wetsuit to Students       | _id            |
| PUT           | /api/inventary/:inventaryId/surftables/:surftableId          | Auth         | Add surftable to Students     | _id            |
| GET           | /api/inventary/:inventaryId/wetsuits/:wetsuitId/students     | Auth         | See Student´s wetsuit         | -              |
| GET           | /api/inventary/:inventaryId/surftables/:surftableId/students | Auth         | See Student´s surftable       | -              |



## STUDENTS ENDPOINTS

| METHOD        | ENDPOINT                                         | TOKEN        | DESCRIPTION                                     | POST BODY     |
| ------------- | -------------                                    | --------     | -------------                                   | ------------- |
| GET           | /api/students/                                   | Auth & Admin | Filter All Students for name and/or passport    | Query Params  |
| GET           | /api/students/                                   | Auth & Admin | Get all Students                                | -             |
| POST          | /api/students/                                   | Auth & Admin | Create a Student                                | name, email, passport, surfhouse, createdAt, activities, wetSuit, surfTable              |
| GET           | /api/students/:studentId/                        | Auth & Admin | Get one Student                                 | -             |
| PUT           | /api/students/:studentId/                        | Auth & Admin | Update one Student                              | name, email, passport, surfhouse, createdAt, activities, wetSuit, surfTable              |              |
| DELETE        | /api/students/:studentId/                        | Auth & Admin | Delete one Student                              | _id           |
| GET           | /api/students/:studentId/surfhouse               | Auth & Admin | Get Student´s surfhouse                         | -             |
| PUT           | /api/students/:studentId/surfhouse/add           | Auth & Admin | Add Student´s surfhouse                         | _id           |




## SURFHOUSES ENDPOINTS

| METHOD        | ENDPOINT                      | TOKEN         | DESCRIPTION         | POST BODY     |
| ------------- | -------------                 | --------      | -------------       | ------------- |
| POST          | /api/surfHouses               | Auth & Admin  | Create Surfhouse    | name, address, capacity, price, availability, activities  |
| DELETE        | /api/surfHouses/:surfhouseId  | Auth & Admin  | Delete Surfhouse    |       -       |


## ACTIVITIES ENDPOINTS

| METHOD        | ENDPOINT                      | TOKEN   | DESCRIPTION                   | POST BODY     |
| ------------- | -------------                 | --------| -------------                 | ------------- |
| GET           | /api/activities/              |  Without Login| Get All Activities      | -             |
| GET           | /api/activities/filter        |         | Filter Activities for level   | Query Params  |
| GET           | /api/activities/:activityId   |         | Get One Actividad             | -             |
| POST          | /api/activities/:activityId   | Auth    | Create One Activity           | -             |
| DELETE        | /api/activities/:activityId   | Auth    | Delete One Actividad          | -             |



### Installation


1. Clone the repo
   ```sh
   git clone https://github.com/xhaxa/db_surf_school
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Modify the field (.env)
   ```JS
   MONGO_URL="mongodb://localhost:12345/"
   MONGO_DB="test"
   PORT=5000
   SECRET="PASword"


   mongoatlas="bhgkuhgyjf576fgf";
   ```
  
4. Init your API (scripts, package.json)
   ```JS
   npm run dev;
   ```



<!-- USAGE EXAMPLES -->
## Usage

Here there are two the results examples of how the sistem works. On the first one, we'll be able to sign up, in this case as a user (Teacher), and the second example we'll be able to see the inventory.


![example of signUp](https://cdn.discordapp.com/attachments/814625330698518589/850171012086497330/Captura_de_pantalla_2021-06-04_a_las_1.32.26.png)


![example of inventary](https://cdn.discordapp.com/attachments/814625330698518589/850171001454723112/Captura_de_pantalla_2021-06-04_a_las_1.34.48.png)



## Next version



| Description                     |
| -------------                   |
| See the list's surfHouses       | 
| See a surfHouse                 |
| See the list's wetSuit          |
| See a wetSuit                   |
| See the list's surfTable        |
| See a surfTable                 |


| Description   |
| ------------- |
| See the list's activities of user   | 
| See the list's checkIn of user|
| See the list's checkOut of user| 

| DESCRIPTION   |
| ------------- |
| SEE THE ACTIVITIES OF YOUR STUDENTS |
| SEE A STUDENT’S ACTIVITY  |
| ADD AN ACTIVITY TO A STUDENT  |
| DELETE AN ACTIVITY TO A STUDENT  |
| SEE THE SURFHOUSES OF YOUR STUDENTS |

| DESCRIPTION   |
| ------------- |
| UPDATE WETSUITS |
| UPDATE SURFHOUSES |
| SEE AVAILABLE WETSUITS |
| SEE AVAILABLE SURFHOUSES |

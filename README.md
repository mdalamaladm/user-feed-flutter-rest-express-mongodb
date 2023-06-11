# User Feed Application
This is repository for User Feed With MongoDB as DB, ExpressJS as Backend, REST as client-server communication, and Flutter as Frontend

## Get Started

## Pages (User)
1. Register
2. Login
3. Profile
4. Feed
5. Create Feed
6. Report Feed
7. Report Comment Feed
8. Reported

## Pages (Admin)
1. Login
2. Feed
3. Profile
4. Create Feed
5. Report Feed
6. Report Comment Feed
7. User Report
8. Reported

## Layouts

## Components

## Roles
1. Admin (Admin Pages)
2. User (User Pages)

## Actions
1. Registration
2. Login (Token)
3. Read Profile
4. Update Profile
5. Delete Profile
6. Create Feed
7. Read Feed
8. Read Feed By Id
9. Update Feed
10. Delete Feed
11. Create Comment Feed 
12. Read Comment Feed
13. Read Comment Feed By Id
14. Update Comment Feed
15. Delete Comment Feed
16. Create Report
17. Read Report
18. Update Report
19. Delete Report
20. Create Image
21. Read Image
22. Delete Image

## Models
1. User
- id
- name
- description
- photo
- hash
- role_id
2. Role
- id
- name
3. Feed
- id
- user_id
- title
- content
4. Comment Feed
- id
- user_id
- feed_id
- content
5. Report
- id
- user_id
- feed_id
- comment_feed_id
- reason
6. Image
- id
- user_id
- feed_id
- comment_feed_id




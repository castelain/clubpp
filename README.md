# Clubpp API

## User

### Add user(register)

POST /api/users

req:

```json
{
  "username": "rabbit",
  "name": "syf",
  "password": "123",
  "email": "example@abc.com",
  "day_of_birth": "1995-05-11",
  "gender": true,
  "academy": "软件学院",
  "major": "软件工程",
  "bio": "我很优秀。",
  "phone": "15087186168",
  "year_of_enrollment": "2015"
}
```

res:

```json
{
  "user_id": "uuid",
  "username": "rabbit",
  "name": "syf",
  "email": "example@abc.com",
  "day_of_birth": "1995-05-11",
  "gender": true,
  "academy": "软件学院",
  "major": "软件工程",
  "bio": "我很优秀。",
  "avatar": "default_avatar_path",
  "phone": "15087186168",
  "year_of_enrollment": "2015",
}
```

### Update user

PUT /api/users/:user_id

req:

```json
{
  "username": "rabbit",
  "name": "syf",
  "password": "123",
  "email": "example@abc.com",
  "day_of_birth": "1995-05-11",
  "gender": true,
  "academy": "软件学院",
  "major": "软件工程",
  "bio": "我很优秀。",
  "phone": "15087186168",
  "year_of_enrollment": "2015"
}
```

res:

```json
{
  "user_id": "uuid",
  "username": "rabbit",
  "name": "syf",
  "email": "example@abc.com",
  "day_of_birth": "1995-05-11",
  "gender": true,
  "academy": "软件学院",
  "major": "软件工程",
  "bio": "我很优秀。",
  "phone": "15087186168",
  "year_of_enrollment": "2015"
}
```

### Read user

GET /api/users?username=rabbit

res:

```json
{
  "user_id": "uuid",
  "username": "rabbit",
  "name": "syf",
  "email": "example@abc.com",
  "day_of_birth": "1995-05-11",
  "gender": true,
  "academy": "软件学院",
  "major": "软件工程",
  "bio": "我很优秀。",
  "phone": "15087186168",
  "year_of_enrollment": "2015",
  "club_ids": [
    "uuid1",
    "uuid2",
    "uuid3"
  ],
  "request_ids": [
    "uuid1",
    "uuid2",
    "uuid3"
  ]
}
```

GET /api/users

res:

```json
[
  {
    "user_id": "uuid",
    "username": "rabbit",
    "name": "syf",
    "email": "example@abc.com",
    "day_of_birth": "1995-05-11",
    "gender": true,
    "academy": "软件学院",
    "major": "软件工程",
    "bio": "我很优秀。",
    "phone": "15087186168",
    "year_of_enrollment": "2015",
    "club_ids": [
      "uuid1",
      "uuid2",
      "uuid3"
    ],
    "request_ids": [
      "uuid1",
      "uuid2",
      "uuid3"
    ]
  },
  {
    "user_id": "uuid",
    "username": "rabbit",
    "name": "syf",
    "email": "example@abc.com",
    "day_of_birth": "1995-05-11",
    "gender": true,
    "academy": "软件学院",
    "major": "软件工程",
    "bio": "我很优秀。",
    "phone": "15087186168",
    "year_of_enrollment": "2015",
    "club_ids": [
      "uuid1",
      "uuid2",
      "uuid3"
    ],
    "request_ids": [
      "uuid1",
      "uuid2",
      "uuid3"
    ]
  }
]
```

GET /api/users/:user_id

res:

```json
{
  "user_id": "uuid",
  "username": "rabbit",
  "name": "syf",
  "email": "example@abc.com",
  "day_of_birth": "1995-05-11",
  "gender": true,
  "academy": "软件学院",
  "major": "软件工程",
  "bio": "我很优秀。",
  "phone": "15087186168",
  "year_of_enrollment": "2015",
  "club_ids": [
    "uuid1",
    "uuid2",
    "uuid3"
  ],
  "request_ids": [
    "uuid1",
    "uuid2",
    "uuid3"
  ]
}
```

## Club

### Add

POST /api/clubs

req:

```json
{
  "club_name": "xxx club",
  "created_date": "2000-01-03",
  "member_number": 123,
  "club_bio": "这是一个社团。",
  "tags": "a,b,c",
  "addresses": "addr1,addr2,addr3",
  "master_id": "uuid",
}
```

res:

```json
{
  "club_id": "uuid",
  "club_name": "xxx club",
  "created_date": "2000-01-03",
  "member_number": 123,
  "club_bio": "这是一个社团。",
  "tags": "a,b,c",
  "addresses": "addr1,addr2,addr3",
  "master_id": "uuid",
  "images": []
}
```

### Delete club

DELETE /api/clubs/:id

res:

```json
{
  "club_id": "uuid",
  "club_name": "xxx club",
  "created_date": "2000-01-03",
  "member_number": 123,
  "club_bio": "这是一个社团。",
  "tags": "a,b,c",
  "addresses": "addr1,addr2,addr3",
  "master_id": "uuid",
  "images": []
}
```

### Update club

PUT /api/clubs/:club_id

req:

```json
{
  "club_name": "xxx club",
  "created_date": "2000-01-03",
  "member_number": 123,
  "club_bio": "这是一个社团。",
  "tags": "a,b,c",
  "addresses": "addr1,addr2,addr3",
  "master_id": "uuid",
}
```

res:

```json
{
  "club_name": "xxx club",
  "created_date": "2000-01-03",
  "member_number": 123,
  "club_bio": "这是一个社团。",
  "tags": "a,b,c",
  "addresses": "addr1,addr2,addr3",
  "master_id": "uuid",
}
```

### Read club

GET /api/clubs

res:

```json
[
  {
    "club_name": "xxx club",
    "created_date": "2000-01-03",
    "member_number": 123,
    "club_bio": "这是一个社团。",
    "tags": "a,b,c",
    "addresses": "addr1,addr2,addr3",
    "master_id": "uuid",
    "images": [
      {
        "url": "url1",
        "club_id": "uuid",
        "image_id": "uuid"
      },
      {
        "url": "url2",
        "club_id": "uuid",
        "image_id": "uuid"
      },
      {
        "url": "url3",
        "club_id": "uuid",
        "image_id": "uuid"
      }
    ],
    "request_ids": [
      "uuid1",
      "uuid2",
      "uuid3"
    ]
  },
  {
    "club_name": "xxx club",
    "created_date": "2000-01-03",
    "member_number": 123,
    "club_bio": "这是一个社团。",
    "tags": "a,b,c",
    "addresses": "addr1,addr2,addr3",
    "master_id": "uuid",
    "images": [
      {
        "url": "url1",
        "club_id": "uuid",
        "image_id": "uuid"
      },
      {
        "url": "url2",
        "club_id": "uuid",
        "image_id": "uuid"
      },
      {
        "url": "url3",
        "club_id": "uuid",
        "image_id": "uuid"
      }
    ],
    "request_ids": [
      "uuid1",
      "uuid2",
      "uuid3"
    ]
  }
]
```

GET /api/clubs/:club_id

res:

```json
{
  "club_id": "uuid",
  "club_name": "xxx club",
  "created_date": "2000-01-03",
  "member_number": 123,
  "club_bio": "这是一个社团。",
  "tags": "a,b,c",
  "addresses": "addr1,addr2,addr3",
  "master_id": "uuid",
  "images": [
    {
      "url": "url1",
      "club_id": "uuid",
      "image_id": "uuin"
    },
    {
      "url": "url2",
      "club_id": "uuid",
      "image_id": "uuin"
    },
    {
      "url": "url3",
      "club_id": "uuid",
      "image_id": "uuin"
    }
  ],
  "request_ids": [
    "uuid1",
    "uuid2",
    "uuid3"
  ]
}
```

## Request

### Add request

POST /api/requests

req:

```json
{
  "user_id": "uuid",
  "club_id": "uuid",
  "extra": "Some thing else..."
}
```

res:

```json
{
  "request_id": "uuid",
  "user_id": "uuid",
  "club_id": "uuid",
  "extra": "Some thing else...",
  "time": "timestamp",
  "is_read": false
}
```

### Delete request

DELETE /api/requests/:request_id

res:

```json
{
  "request_id": "uuid",
  "user_id": "uuid",
  "club_id": "uuid",
  "extra": "Some thing else...",
  "time": "timestamp",
  "is_read": false
}
```

### Update request

pass

### Read request

GET /api/requests

res:

```json
[
  {
    "request_id": "uuid",
    "user_id": "uuid",
    "club_id": "uuid",
    "extra": "Some thing else...",
    "time": "timestamp",
    "is_read": false
  },
  {
    "request_id": "uuid",
    "user_id": "uuid",
    "club_id": "uuid",
    "extra": "Some thing else...",
    "time": "timestamp",
    "is_read": false
  }
]
```

GET /api/requests/:id

res:

```json
{
  "request_id": "uuid",
  "user_id": "uuid",
  "club_id": "uuid",
  "extra": "Some thing else...",
  "time": "timestamp",
  "is_read": false
}
```

## Image

### Add image

POST /api/images

req:

```json
{
  "club_id": "uuid"
}
```

res:

```json
{
  "image_id": "uuid",
  "club_id": "uuid",
  "url": "url1"
}
```

### Delete image

DELETE /api/images/:image_id

res:

```json
{
  "image_id": "uuid",
  "club_id": "uuid",
  "url": "url1"
}
```

## Authentication and authorization

### regiser

POST /api/users

### login

POST /api/login

req:

```json
{
  "username": "rabbit",
  "password": "123"
}
```

res:

```json
{
  "success": true,
  "token": "token_str"
}
```

# Check out the schema of the data


### success example
````
{
    "schema": {
        "name": {
            "type": "string"
        },
        "edad": {
            "type": "number"
        },
        "isMale": {
            "type": "boolean"
        },
        "type": {
            "type": "SchemaTypeEnum"
        }
    },
    "data": {
        "name": "oscar",
        "edad": 40,
        "isMale": true,
        "type": "user"
    }
}
````
result
````
{
    "name": "oscar",
    "edad": 40,
    "isMale": true,
    "type": "user"
}
````
### bad request example
````aiignore
{
    "schema": {
        "name": {
            "type": "string"
        },
        "edad": {
            "type": "number"
        },
        "isMale": {
            "type": "boolean"
        },
        "type": {
            "type": "SchemaTypeEnum"
        }
    },
    "data": {
        "name": "oscar",
        "edad": 40,
        "isMale": true,
        "type": "student"
    }
}
````
result
````
{
    "message": [
        {
            "code": "invalid_value",
            "values": [
                "user",
                "admin",
                "developer",
                "guest"
            ],
            "path": [
                "type"
            ],
            "message": "Invalid option: expected one of \"user\"|\"admin\"|\"developer\"|\"guest\""
        }
    ],
    "error": "Bad Request",
    "statusCode": 400
}
````
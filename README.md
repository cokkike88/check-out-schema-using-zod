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
        },
        "address": {
            "type": "schema",
            "schema": {
                "address1": {
                    "type": "string"
                },
                "address2": {
                    "type": "string"
                },
                "zipCode": {
                    "type": "number"
                }
            }
        }
    },
    "data": {
        "name": "oscar",
        "edad": 40,
        "isMale": true,
        "type": "user",
        "address": {
            "address1": "add 1",
            "address2": "add 2",
            "zipCode": 1234
        }
    }
}
````
result
````
{
    "name": "oscar",
    "edad": 40,
    "isMale": true,
    "type": "user",
    "address": {
        "address1": "add 1",
        "address2": "add 2",
        "zipCode": 1234
    }
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
        },
        "address": {
            "type": "schema",
            "schema": {
                "address1": {
                    "type": "string"
                },
                "address2": {
                    "type": "string"
                },
                "zipCode": {
                    "type": "number"
                }
            }
        }
    },
    "data": {
        "name": "oscar",
        "edad": 40,
        "isMale": true,
        "type": "user",
        "address": {
            "address1": "add 1",
            "address2": "add 2"
        }
    }
}
````
result
````
{
    "message": [
        {
            "expected": "number",
            "code": "invalid_type",
            "path": [
                "address",
                "zipCode"
            ],
            "message": "Invalid input: expected number, received undefined"
        }
    ],
    "error": "Bad Request",
    "statusCode": 400
}
````
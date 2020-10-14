export const schema = {
  "type": "object",
  "properties": {
    "users": {
      "type": "array",
      "minItems": 3,
      "maxItems": 5,
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "integer",
            "unique": true,
            "minimum": 1
          },
          "firstName": {
            "type": "string",
            "faker": "name.firstName",
            "maxLength": 12,
            minLength: 5
          },
          "lastName": {
            "type": "string",
            "faker": "name.lastName",
            "maxLength": 12,
            minLength: 5
          },
          "email": {
            "type": "string",
            "format": "email",
            "faker": "internet.email",
            "maxLength": 12,
            minLength: 5
          }
        },
        "required": ["id", "firstName", "lastName", "email"]
      }
    }
  },
  "required": ["users"]
};

export const refs = [
  {

  }
]
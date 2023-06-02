migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("smzeb9fss8xp0ft");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "smzeb9fss8xp0ft",
    "created": "2023-05-29 13:36:58.887Z",
    "updated": "2023-05-29 14:19:56.686Z",
    "name": "todoItem",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "5miq82ih",
        "name": "title",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "dkfogwqr",
        "name": "completed",
        "type": "bool",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
